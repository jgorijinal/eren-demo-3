<template>
  <div class="collapseItem">
    <div class="titleWrapper" @click="toggle" :class="{'disabled':disabled}">
      <g-icon name="right" class="icon" :class="{'active':contentVisible}"></g-icon>
      <div class="title">{{ title }}</div>
    </div>
    <div class="content" v-if="contentVisible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components:{'g-icon':Icon},
  name: "GuluCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      contentVisible: false,
      single: false
    }
  },
  created() {
    this.eventBus && this.eventBus.$on('update:selected', (names) => {
      if (names.indexOf(this.name) >= 0) {
        this.contentVisible = true
      } else {
        this.contentVisible = false
      }
    })
  },
  methods: {
    toggle() {
      if (this.disabled) {
        return
      }
      if (this.contentVisible) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.collapseItem {

  .titleWrapper {
    background: #fafafa;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    border: 1px solid #d9d9d9;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;

    .icon {
      margin-right: 12px;
      animation: rotateBack 250ms ease-out forwards
    }

    .icon.active {
      animation: rotate 250ms ease-out forwards
    }

    .title {
    }

    &.disabled {
      color: rgba(0, 0, 0, .25);
      cursor: not-allowed;
    }
  }

  &:first-child {
    > .titleWrapper {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    .titleWrapper {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-bottom: -1px;
    }

    > .content {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-bottom:-1px;
    }
  }

  > .content {
    margin-left: -1px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 12px;
    border: 1px solid ;
    border: 1px solid #d9d9d9;
    border-top: none;
    animation: appear 250ms ease-out forwards;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(-5%)
    }
    100% {
      opacity: 1;
      transform: translateY(0)
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0)
    }
    to {
      transform: rotate(90deg)
    }
  }
  @keyframes rotateBack {
    from {
      transform: rotate(90deg)
    }
    to {
      transform: rotate(0)
    }
  }
}

</style>