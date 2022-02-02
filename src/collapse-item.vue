<template>
<div class="collapseItem">
  <div class="titleWrapper" @click="toggle" >
    <g-icon name="right" class="icon" :class="{'active':contentVisible}"></g-icon>
    <div class="title" >{{title}}</div>
  </div>
  <div class="content" v-if="contentVisible"><slot></slot></div>
</div>
</template>

<script>
export default {
  name: "GuluCollapseItem",
  props:{
    title:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required: true
    }
  },
  inject:['eventBus'],
  data(){
    return {
      contentVisible:false,
      single:false
    }
  },
  created(){
    this.eventBus && this.eventBus.$on('update:selected',(names)=>{
      if (names.indexOf(this.name) >= 0) {
        this.contentVisible = true
      } else {
        this.contentVisible = false
      }
    })
  },
  methods:{
    toggle(){
      if(this.contentVisible){
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      }else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.collapseItem {

.titleWrapper{
  display: flex;
  align-items: center;
  padding:10px 12px;
  border: 1px solid #999999;
  margin-top: -1px;
  margin-left: -1px;
  margin-right: -1px;
  .icon{margin-right: 12px;animation: rotateBack 500ms ease-out forwards}
  .icon.active{
    animation: rotate 500ms ease-out forwards
  }
  .title{}
}
  &:first-child {
    >.titleWrapper{
        border-top-left-radius:4px;
        border-top-right-radius:4px;
    }
  }
  &:last-child{
    .titleWrapper{
      border-bottom-left-radius:4px;
      border-bottom-right-radius:4px;
      margin-bottom: -1px;
    }
    > .content{
      border-bottom-left-radius:4px;
      border-bottom-right-radius:4px;
      margin-bottom: -1px;
    }
  }
  > .content{
    margin-left:-1px;
    margin-right:-1px;
    margin-top: -1px;
    padding: 12px;
    border: 1px solid #999999;
    animation: appear 250ms ease-out forwards;
  }

  @keyframes appear {
    0%{opacity: 0;transform: translateY(-5%)}
     100%{opacity: 1;transform: translateY(0)}
    }
  @keyframes rotate {
    from {transform: rotate(0)}
    to{transform: rotate(90deg)}
  }
  @keyframes rotateBack {
    from {transform: rotate(90deg)}
    to{transform: rotate(0)}
  }
}

</style>