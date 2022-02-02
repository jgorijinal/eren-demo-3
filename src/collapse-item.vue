<template>
<div class="collapseItem">
  <div class="title" @click="open = !open ">{{title}}</div>
  <div class="content" v-if="open"><slot></slot></div>
</div>
</template>

<script>
export default {
  name: "GuluCollapseItem",
  props:{
    title:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      open:false
    }
  }

}
</script>

<style lang="scss" scoped>
.collapseItem {
  > .title {
    border: 1px solid #999999;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    padding: 12px 16px 12px 40px;
    cursor: pointer;
  }

  > .content {
    padding: 16px;;
  }

  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius:4px;
      border-bottom-right-radius:4px;
      margin-bottom: -1px;
    }
  }
}

</style>