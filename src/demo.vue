<template>
  <div class="demo">
    <h2 class="demo-title">
      <slot name="title"></slot>
    </h2>
    <p class="demo-description">
      <slot name="description"></slot>
    </p>
    <div class="demo-component">
      <slot name="component"></slot>
    </div>
    <div class="demo-actions">
            <div  class="actions" v-if="codeVisible === true" @click="toggleCode">
              <g-icon name="up" ></g-icon>{{ codeAction }}</div>
            <div  class="actions" v-if="codeVisible === false" @click="toggleCode">
              <g-icon name="down" ></g-icon>{{ codeAction }}</div>
    </div>
    <div class="demo-code" :class="codeActive"   ref="demoCode">
      <div ref="demoCodeWrapper">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from './icon.vue'

export default {
  components: {
    'g-icon': Icon
  },
  data() {
    return {
      codeVisible: false,
    }
  },
  watch:{
    codeVisible(){
      if(this.codeVisible){
        this.$refs.demoCode.style.height =this.$refs.demoCodeWrapper.getBoundingClientRect().height +'px'
      }else{
        this.$refs.demoCode.style.height = 0+ 'px'
      }
    }
  },
  methods: {
    toggleCode() {
      this.codeVisible = !this.codeVisible
    }
  },
  computed: {
    codeAction() {
      if (this.codeVisible === true) {
        return '隐藏代码'
      } else {
        return '显示代码'
      }
    },
    codeActive(){
      return {'codeActive':this.codeVisible === true}
    }
  }

}
</script>
<style lang="scss" scoped>
$border-color: #ccc8c8;
.demo {
  transition: all 0.3s;
  border: 1px solid $border-color;
  margin: 16px 0 48px;
  min-width: 330px;
  border-radius: 6px;;

  &-title {
    font-size: 20px;
    padding: 8px 16px 16px 16px;
  }

  &-description {
    padding: 4px 16px;
  }

  &-component {
    border-top: 1px solid $border-color;;
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    text-align: center;
    cursor: pointer;

    .icon {
      margin-right: 0.5em;
    }

    transition: all 0.2s;
  }

  &:hover {
    .demo-actions {
      color: #409eff;
      background: #f9fafc;

      &:hover {
        color: #409eff;
        background-color: #f0f3f6;
      }
    }
  }

  &-code {
    border-top: 1px dashed $border-color;
    height: 0;
    transition: all 250ms;
    overflow: hidden;
  }
}

@keyframes showCode {
  from {
    transform: translateY(-10px);
    opacity: 0
  }
  to {
    transform: translateY(0);
    opacity: 1
  }
}

</style>