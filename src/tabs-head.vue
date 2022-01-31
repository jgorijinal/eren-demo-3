<template>
  <div class="tabs-head" >
    <slot></slot>
    <div class="line" ref="line"></div>
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
     this.eventBus.$on('update:selected',(name,vm)=>{

     })
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
  position: relative;
  .actions-wrapper{
    margin-left: auto;
  }
  .line{
    width: 100px;
    border-bottom:2px solid #1890ff ;
    position: absolute;
    bottom: 0;
  }
}
</style>