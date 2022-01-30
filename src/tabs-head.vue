<template>
  <div class="tabs-head" >
    <slot></slot>
    <div class="actions-wrapper"></div>
    <slot name="actions"></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsHead',
  props:{
  },
  inject:['eventBus'],
  created(){
  }
}
</script>
<style lang="scss" scoped>
$tap-height:40px;
.tabs-head {
  border: 1px solid red;
  height:$tap-height;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .actions-wrapper{
    margin-left: auto;
  }
}
</style>