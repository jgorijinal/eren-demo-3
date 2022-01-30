<template>
  <div class="tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsPane',
  data(){
    return {
      active:false
    }
  },
  props:{
    name:{
      type:[String,Number]
    }
  },
  inject:['eventBus'],
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      if(name === this.name){
        this.active = true
      }else {
        this.active = false
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs-pane{

}
</style>