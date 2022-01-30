<template>
  <div class="tabs-item"  :disabled="disabled">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsItem',
  props:{
    name:{
      type:String,
    },
    disabled:{
      type:Boolean,
      default:false
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item{

}
</style>