<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
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
mounted() {  //!!!!!! 把 row的gutter 传到 col里面
  this.$children.forEach(vm=>{
    console.log(this.$children)
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