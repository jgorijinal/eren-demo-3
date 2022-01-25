<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>

</template>
<script>
export default {
name:'guluRow',
props:{
  gutter:{
    type:[String,Number]
  },
  align: {
    type: String,
    validator (value) {
      return ['left', 'right', 'center'].includes(value)
    }
  }
},
  computed:{
  rowStyle(){
    let gutter = this.gutter
    return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
  },
    rowClass () {
      let {align} = this
      return [align && `align-${align}`]
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
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>