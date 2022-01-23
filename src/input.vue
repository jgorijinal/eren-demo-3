<template>
  <div class="wrapper" :class="{'error':error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>

</template>
<script>
import Icon from './icon.vue'
export default {
  name:'guluInput',
  components:{Icon},
  props:{
    value:{
      type:String
    },
    readonly:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default: false
    },
    error:{
      type:String
    }
  }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
.wrapper {
  font-size: $font-size;
  display:inline-flex;
  align-items: center;
  >:not(:last-child){margin-right: 0.5em}
  >input {
    height:$height;
    padding:0 8px;
    border-radius: 4px;
    border: 1px solid $border-color;
    font-size: inherit;
    &:hover{
      border:1px solid $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled]{
      border-color: #bbb;color: #bbb;cursor: not-allowed;
    }
    &[readonly] {
      border-color: #bbb;color:#bbb;
    }
  }
  &.error {
    > input { border-color: $red; }
  }
  .icon-error { fill: $red; }
  .errorMessage { color: $red; }
}

</style>