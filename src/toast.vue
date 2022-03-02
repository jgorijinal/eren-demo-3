<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast" >
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
      </div>
      <div v-if="closeButton" class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{ closeButton.text }}</span>
    </div>
  </div>


</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator (value) {
        return value === false || typeof value === 'number';
      }
    },
    closeButton: {
      type: Object,
      default() {      //默认值是对象的话,default要用函数return这个对象
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.updateStyles()
    this.executeAutoClose()
  },
  computed: {
    toastClasses() {
      return {[`position-${this.position}`]: true}
    }
  },
  methods: {
    executeAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
@keyframes slide-up {
  0% {opacity: 0;transform: translateY(40%)}
  100% {opacity: 1;transform: translateY(0)}
}
@keyframes slide-down {
  0% {opacity: 0;transform: translateY(-40%)}
  100% {opacity: 1;transform: translateY(0)}
}
.wrapper{
  z-index: 30;
  position: fixed;
  left: 50%;
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    .toast{
      animation: slide-down 500ms;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    .toast{
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}

.toast {
  animation: slide-up 500ms;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
  padding: 0 16px;
  color: white;
  border-radius: 4px;

  .close {
    padding-left: 16px;
    white-space: nowrap;
  }

  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }

  .message {
    padding: 8px 0;
    white-space: nowrap;
  }

}

</style>