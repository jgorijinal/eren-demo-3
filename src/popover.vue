<template>
  <div class="popover" ref="popover">
      <div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="contentClasses">
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
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['left','right','top','bottom'].indexOf(value)  >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted(){
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed () {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  computed: {
    contentClasses(){
      return {
        [`position-${this.position}`]:this.position
      }
    },
    openEvent () {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent () {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
    }
  },
  methods: {
      positionContent () {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        const {height: height2} = contentWrapper.getBoundingClientRect()
        let positions = {
          top: {top: top + window.scrollY, left: left + window.scrollX,},
          bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
          left: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX + width
          },
        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'

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
  border: 1px solid #999;
  border-radius: $border-radius;
  position: absolute;
  left: 0;
  padding: 0.5em 1em;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
  background: white;
  &::before, &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top{
    margin-top: -10px;
    transform: translateY(-100%);
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top-color: #999;
      top: 100%;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
  &.position-bottom{
    margin-top :10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: #999;
      bottom: 100%;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }
  &.position-left {
    margin-left:-10px;
    transform: translateX(-100%);
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: #999;
      left: 100%;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: white;
    }
  }
  &.position-right {
    transform: translateX(3%);
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: #999;
      right: 100%;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }

  @keyframes fade {
    0% {opacity: 0}
    100% {opacity: 1}
  }
}
</style>