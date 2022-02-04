<template>
  <button class="g-button" :class="classes" @click="$emit('click',!loading)" :disabled="disabled" :circle="circle">
    <g-icon v-if="loading " class="loading" name="loading"></g-icon>
    <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
    <span class="content" v-if="hasContent">
      <slot/>
    </span>
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
    icon:{
      type:String,
      default:undefined
    },
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
    },
    type:{
      type:String,
      default:'default',
      validator(value){
        return ['default','primary','success','warning','danger'].indexOf(value) >=0
      }
    },
    disabled :{
      type:Boolean,
      default:false
    },
    circle:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    classes(){
      return [
        {[`icon-${this.iconPosition}`]:true},
        {[`icon-type-${this.type}`]:this.type},
        {'noIcon':!this.icon}
      ]
    },
    hasContent(){
      return !!this.$slots.default;
    }
  }

}
</script>
<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #a19d9d;
$border-color-hover: #666;
.g-button {
  transition: all .3s;
  font-size: $font-size;height: $button-height;padding: 0 1em;border-radius: $border-radius;
  border: 1px solid $border-color;background: $button-bg;display:inline-flex;justify-content: center;
  align-items: center;vertical-align: middle;cursor: pointer;
  &:hover,&:focus { color:$border-color-hover;
    border-color: $border-color;
    background-color: $button-active-bg; }
  &:active {color: $border-color-hover;
    background: #c0bcbc;
    border-color: $border-color;
    outline: none;}
  > .icon {order: 1;}
  > .content {order: 2;margin-left: 0.5em}
  &.icon-right {
    > .icon {order: 2;margin-right: 0;margin-left: 0.5em;}
    > .content {order: 1;margin-left: 0;} }
  .loading{
    animation: spin 2s infinite linear;
  }
  &[disabled]{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  &.icon-type-primary{
    color: #fff;background: #40a9ff;border:#40a9ff ;
    &:hover,&:focus{background: #66b1ff;border-color: #66b1ff}
    &:active{background: #3a8ee6;border-color: #3a8ee6}
    &[disabled]{color: #fff;background-color: #a0cfff;border-color: #a0cfff}
  }
  &.icon-type-success {
    color: #fff;background-color: #67c23a;border-color: #67c23a;
    &:hover,&:focus{background: #85ce61;border-color: #85ce61;color: #fff;}
    &:active{background: #5daf34;border-color: #5daf34;color: #fff;}
    &[disabled]{ color: #fff;background-color: #b3e19d;border-color: #b3e19d;}
  }
  &.icon-type-warning{
    color: #fff;background-color: #e6a23c;border-color: #e6a23c;
    &:hover,&:focus{background: #ebb563;border-color: #ebb563;color: #fff;}
    &:active{    background: #cf9236;border-color: #cf9236;color: #fff;}
    &[disabled]{ color: #fff;background-color: #f3d19e;border-color: #f3d19e;}
  }
  &.icon-type-danger{
    color: #fff;background-color: #f56c6c;border-color: #f56c6c;
    &:hover,&:focus{background: #f78989;border-color: #f78989;color: #fff;}
    &:active{background: #dd6161;border-color: #dd6161;color: #fff;}
    &[disabled]{ color: #fff;background-color: #fab6b6;border-color: #fab6b6;}
  }
  &[circle]{
    height: 36px;
    width:36px;
    padding:0;
    border-radius: 50%;
  }
  &.noIcon{
    > .content {margin-left: 0;}
  }
  @keyframes spin {
    0% {transform: rotate(0)}
    100% {transform: rotate(360deg)}
  }
}
</style>