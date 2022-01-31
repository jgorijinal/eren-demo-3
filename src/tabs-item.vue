<template>
  <div class="tabs-item"  :disabled="disabled" @click="onClick" :class="classes">
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
    onClick(){
      if(this.disabled){
        return
      }
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item{
  flex-shrink:0;
  padding: 0 1em;
  height:100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active{
    color:#1890ff;
  }
  &:hover{
    color: #40a9ff;
  }
  &[disabled]{
    color: #bbb;
    cursor:not-allowed;
  }
}
</style>