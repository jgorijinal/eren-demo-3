<template>
  <div class="tabs-item"  :disabled="disabled" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsItem',
  data(){
    return  {
      active:false
    }
  },
  props:{
    name:{
      type:[String,Number]
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  inject:['eventBus'],
  computed:{
    classes(){
      return {'active':this.active}
    }
  },
  created(){
  this.eventBus.$on('update:selected',(name)=>{
    if(name === this.name){
      this.active = true
    }else{
      this.active = false
    }
  })
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item{
  flex-shrink:0;
  padding: 0 1em;
  height:100%;
  border:1px solid blue;
  display: flex;
  align-items: center;
  &.active{
    background: pink;
  }
}
</style>