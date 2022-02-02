<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "GuluCollapse",
  props:{
    selected:{
      type:String,
      required:true
    },
    single:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    if(this.single === false)
    return {
      eventBus:this.eventBus
    }
  },
  mounted(){

  }

}
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid #999999;
  border-radius: 4px;
}
</style>