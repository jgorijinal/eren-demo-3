<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click',!loading)">
    <g-icon v-if="loading " class="loading" name="loading"></g-icon>
    <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
import Icon from './icon.vue'
export default {
  name:'guluButton',
  components:{
    'g-icon':Icon
  },
  props: {
    icon:String,
    iconPosition:{
      type:String,
      default:'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
    loading:{
      type:Boolean,
      default: false
    }
  },

}
</script>
<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.g-button {
  font-size: $font-size;height: $button-height;padding: 0 1em;border-radius: $border-radius;
  border: 1px solid $border-color;background: $button-bg;display:inline-flex;justify-content: center;
  align-items: center;vertical-align: middle;cursor: pointer;
  &:hover {border-color:$border-color;}
  &:active {background-color: $button-active-bg;}
  &:focus {outline: none;}
  > .icon {order: 1;margin-right: 0.5em;margin-left: 0;}
  > .content {order: 2}
  &.icon-right {
    > .icon {order: 2;margin-right: 0;margin-left: 0.5em;}
    > .content {order: 1;} }
  .loading{
    animation: spin 2s infinite linear;
  }
  @keyframes spin {
    0% {transform: rotate(0)}
    100% {transform: rotate(360deg)}
  }
}
</style>