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
  mounted(){
     this.eventBus.$on('update:selected',(name,vm)=>{
       console.log(vm.$el.getBoundingClientRect())
      this.$refs.line.style.width = vm.$el.getBoundingClientRect().width+'px'
       this.$refs.line.style.left = vm.$el.getBoundingClientRect().left + 'px'
     })
  }
}
</script>
<style lang="scss" scoped>
$tap-height:40px;
.tabs-head {
  height:$tap-height;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom:1px solid #ebedf0 ;
  .actions-wrapper{
    margin-left: auto;
  }
  .line{
    border-bottom:2px solid #1890ff ;
    position: absolute;
    bottom: 0;
    transition: all 250ms;
  }
}
</style>