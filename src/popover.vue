<template>
  <div class="popover" @click="onClick" ref="popover">
      <div class="content-wrapper" v-if="visible" ref="contentWrapper">
        <slot name="content"></slot>
      </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false
    }
  },
  methods: {
      positionContent () {
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      onClickDocument (e) {
        if (this.$refs.popover &&
            (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
        if (this.$refs.contentWrapper &&
            (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) { return }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
    }
  },

}
</script>

<style lang="scss" scoped>
$border-radius:4px;
.popover {
  display: inline-block;
  position: relative;
}
.content-wrapper {
  animation: fade 500ms ;
  max-width: 20em;
  margin-top: -10px;
  border: 1px solid #999;
  border-radius: $border-radius;
  position: absolute;
  left: 0;
  padding: 0.5em 1em;
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.2));
  background: white;
  transform: translateY(-100%);
  &::before, &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
  &::before {
    border-top-color: #999;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
  @keyframes fade {
    0% {opacity: 0}
    100% {opacity: 1}
  }
}
</style>