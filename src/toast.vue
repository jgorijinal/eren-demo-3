<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-if="enableHtml" v-html="$slots.default[0]"></div>
    </div>
    <div v-if="closeButton" class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{ closeButton.text }}</span>
  </div>

</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: [String, Number],
      default: 3
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
    enableHtml:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    this.updateStyles()
    this.executeAutoClose()
  },
  methods: {
    executeAutoClose(){
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, parseInt(this.autoCloseDelay) * 1000)
      }
    },
    updateStyles(){
      this.$nextTick(()=>{
        this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height+'px'
      })
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if(this.closeButton &&  typeof this.closeButton.callback === 'function'){
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
.toast {
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
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
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .message{
    padding: 8px 0;
  }
}

</style>