<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
       :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <div style="border: 1px solid green;height: 100px">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    },
  },
  data(){
    return {
      gutter:undefined
    }
  }
}
</script>
<style lang="scss" scoped>
.col {
  width:50%;
  $class-prefix1:col-;
  @for $n from 1 through 24  {
    &.#{$class-prefix1}#{$n} {
      width: ($n / 24) * 100%
    }
  }
  $class-prefix2:offset-;
  @for $n from 1 through 24  {
    &.#{$class-prefix2}#{$n} {
      margin-left: ($n / 24) * 100%
    }
  }
}
</style>