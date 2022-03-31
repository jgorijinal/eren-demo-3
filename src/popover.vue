<template>
  <div class="popover" ref="popover">
    <transition name="appear">
      <div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="[`position-${position}`]">
        <slot name="content"></slot>
      </div>
    </transition>
    <span ref="triggerWrapper" class="triggerWrapper">
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
  props: {
    position: {
      type: String,
      default: 'top-left',
      validator(value) {
        return ['left-center','left-top','left-bottom' , 'right-top'
          , 'right-center','right-bottom', 'bottom-center','bottom-left' , 'bottom-right'
          , 'top-left' ,'top-center' ,'top-right' ].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['hover', 'click'].indexOf(value) >= 0
      }
    },
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover && this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover && this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover && this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    eventHandler(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) return
      if (!(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))) {
        this.close()
        document.removeEventListener('click', this.eventHandler)
      }
    },
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      const {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
      const {width:width2, height:height2, left:left2, top:top2} = this.$refs.contentWrapper.getBoundingClientRect()
      let x = {
        'top-right': {
          left: window.scrollX + left- Math.abs(width2 - width),
          top: window.scrollY + top
        },
        'top-center':{
          left: window.scrollX + left - Math.abs(width2/2 - width/2),
          top: window.scrollY + top
        },
        'top-left': {
          left: window.scrollX + left,
          top: window.scrollY + top
        },
        'bottom-left': {
          left: window.scrollX + left,
          top: window.scrollY + height + top
        },
        'bottom-center': {
          left: window.scrollX + left - Math.abs((width2 - width)/2),
          top: window.scrollY + height + top
        },
        'bottom-right': {
          left: window.scrollX + left- Math.abs(width2 -width ),
          top: window.scrollY + height + top
        },
        'left-top': {
          left: window.scrollX + left - width2,
          top: window.scrollY + top
        },
        'left-center': {
          left: window.scrollX + left - width2,
          top: window.scrollY + top- Math.abs(height2/2 - height/2 )
        },
        'left-bottom': {
          left: window.scrollX + left - width2,
          top: window.scrollY + top - (height2 - height)
        },
        'right-top': {
          left: window.scrollX + left + width,
          top: window.scrollY + top
        },
        'right-center': {
          left: window.scrollX + left + width,
          top: window.scrollY + top - Math.abs(height2/2 - height/2 )
        },
        'right-bottom': {
          left: window.scrollX + left + width,
          top: window.scrollY + top -(height2 - height)
        },

      }
      this.$refs.contentWrapper.style.top = x[this.position].top + 'px'
      this.$refs.contentWrapper.style.left = x[this.position].left + 'px'
    },
    listenToDocument() {
      document.addEventListener('click', this.eventHandler)
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        this.listenToDocument()
      })
    },
    close() {
      this.visible = false  //一旦关闭的时候就 removeListener
      document.removeEventListener('click', this.eventHandler)
    },
    onClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible === false) {
          this.open()
        } else {
          this.close()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.popover {
  display: inline-block;
  position: relative;

  .triggerWrapper {
    display: inline-block;
  }
}

.content-wrapper {
  position: absolute;
  left: 0;
  padding: 8px 16px;
  border-radius: 4px;
  background: #585e6b;
  color: #ffffff;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  max-width: 20em;
  word-break: break-all;

  &::before {
    content: '';
    display: block;
    border: 6px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top-left {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before {
      left: 10px;
      top: 100%;
      border-top-color: #585e6b;
    }
  }
  &.position-top-center {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      border-top-color: #585e6b;
    }
  }
  &.position-top-right {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      right: 10px;
      top: 100%;
      border-top-color: #585e6b;
    }
  }

  &.position-bottom-left {
    margin-top: 10px;

    &::before {
      left: 10px;
      bottom: 100%;
      border-bottom-color: #585e6b;
    }
  }
  &.position-bottom-center {
    margin-top: 10px;
    &::before {
      left: 50%;
      transform: translateX(-50%);
      bottom: 100%;
      border-bottom-color: #585e6b;
    }
  }
  &.position-bottom-right {
    margin-top: 10px;

    &::before {
      right: 10px;
      bottom: 100%;
      border-bottom-color: #585e6b;
    }
  }

  &.position-left-top {
    margin-left: -10px;

    &::before {
      left: 100%;
      top: 5px;
      border-left-color: #585e6b;
    }
  }
  &.position-left-center {
    margin-left: -10px;
    &::before {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: #585e6b;
    }
  }
  &.position-left-bottom {
    margin-left: -10px;
    &::before {
      left: 100%;
      bottom: 5px;
      border-left-color: #585e6b;
    }
  }


  &.position-right-top {
    margin-left: 10px;
    &::before {
      right: 100%;
      top: 5px;
      border-right-color: #585e6b;
    }
  }
  &.position-right-center {
    margin-left: 10px;
    &::before {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: #585e6b;
    }
  }
  &.position-right-bottom {
    margin-left: 10px;
    &::before {
      right: 100%;
      bottom: 5px;
      border-right-color: #585e6b;
    }
  }
}
.appear-enter-active,  .appear-leave-active{
  transition: opacity .3s ease;
}
.appear-enter {
  opacity: 0;
}
.appear-leave-to {
  opacity: 0;
}

</style>