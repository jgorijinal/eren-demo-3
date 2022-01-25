<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>

</template>
<script>
export default {
name:'guluRow',
props:{
  gutter:{
    type:[String,Number]
  }
},
  computed:{
  rowStyle(){
    let gutter = this.gutter
    return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
  }
  },
mounted() {  //!!!!!! 用钩子函数把 row的gutter 传到 col里面
  this.$children.forEach(vm=>{
    vm.gutter = this.gutter
  })
}
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
}
</style>