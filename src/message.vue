<template>
  <transition name="slide">
    <div class="message-wrapper" v-if="visible">
      <div class="message" :class="classes">
        <g-icon name="info" v-if="theme=== 'info'" ></g-icon>
        <g-icon name="success" v-if="theme=== 'success'"></g-icon>
        <g-icon name="warning" v-if="theme=== 'warning'"></g-icon>
        <g-icon name="error" v-if="theme=== 'error'"></g-icon>
        <div class="content">
          {{ content }}
        </div>
        <span v-if="closable" class="closeButton" @click="close">{{ closeButton.text }}</span>
      </div>
    </div>
  </transition>
</template>
<script>
import Icon from './icon.vue'
export default {
  name: 'GuluMessage',
  components:{
    'g-icon':Icon
  },
  data() {
    return {
      visible: false
    }
  },
  props: {
    theme: {
      type: String,
      default: 'info',
      validator(value) {
        return ['info', 'success', 'warning', 'error'].indexOf(value) >= 0
      }
    },
    content: {
      type: String,
      required: true
    },
    closable: {
      type: Boolean,
      default: false    //默认false
    },
    duration: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: () => {
            console.log('hello')
          }
        }
      }
    },
    background: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true    // 默认 true
    }
  },
  computed: {
    classes() {
      return {
        [`theme-${this.theme}`]: this.theme,
        background: this.background
      }
    }
  },
  methods: {
    close() {
      this.closeButton.callback()
      this.visible = false
      this.$nextTick(() => {
        this.$el.remove()
        this.$destroy()
      })
    }
  },
  mounted() {
    this.visible = true

    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.duration * 1000)
    }
  },
}
</script>
<style lang="scss" scoped>
.message-wrapper {
  display: flex;
  justify-content: center;
  //animation: slide 0.4s ease;
  margin-top: 20px;
}

.message {
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
  max-width: 350px;
  text-align: center;
  align-items: center;
  background: white;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    word-break: break-all;
  }

  .closeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    white-space: nowrap;
    font-weight: bold;
  }

  svg {
    width: 1.2em;
    height: 1.2em;
    margin-left: 1em;
  }

  &.theme-info {
    svg {
      fill: #2d8cf0;
    }
    &.background {
      background: #f0faff;
      color: #2e8bf0;
    }
  }

  &.theme-success {
    svg {
      fill: #67c23a;
    }
    &.background {
      background: #f0f9eb;
      color: #67c23a;
    }
  }

  &.theme-warning {
    svg {
      fill: #ff9900;
    }
    &.background {
      background: #fff9e6;
      color: #ff9900;
    }
  }

  &.theme-error {
    svg {
      fill: #ed4014;
    }
    &.background {
      background: #ffefe6;
      color: #ed4014;
    }
  }
}

.slide-enter-active {
  transition: all .3s;
}
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */
{
  transform: translateY(-100%);
  opacity: 0;
}
</style>