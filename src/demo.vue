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
      <div class="actions" v-if="codeVisible === true" @click="toggleCode">
        <g-icon name="up"></g-icon>
        {{ codeAction }}
      </div>
      <div class="actions" v-if="codeVisible === false" @click="toggleCode">
        <g-icon name="down"></g-icon>
        {{ codeAction }}
      </div>
    </div>
    <div class="demo-code" :class="codeActive" ref="demoCode">
      <div ref="demoCodeWrapper">
            <pre class="language-html" v-html="Prism.highlight(this.code, Prism.languages.html, 'html')" />
      </div>
    </div>
  </div>
</template>
<script>
import Icon from './icon.vue'
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';  //prism-tomorrow.css  //prism-okaidia.css
const Prism = window.Prism ;
export default {
  components: {
    'g-icon': Icon
  },
  data() {
    return {
      codeVisible: false,
      code:undefined,
      Prism:undefined
    }
  },
  watch: {
    codeVisible() {
      if (this.codeVisible) {
        this.$refs.demoCode.style.height = this.$refs.demoCodeWrapper.getBoundingClientRect().height + 'px'
      } else {
        this.$refs.demoCode.style.height = 0 + 'px'
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
    codeActive() {
      return {'codeActive': this.codeVisible === true}
    }
  },
  created(){
    this.Prism = Prism
  },
  mounted() {
    this.code = this.$slots.code[0].text
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
  border-radius: 6px;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

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
      color: #3493f5;
      background: #ebf0f5;

      &:hover {
        color: #409eff;
        background-color: #e2e5e7;
      }
    }
  }

  &-code {
    //border-top: 1px dashed $border-color;
    height: 0;
    transition: all 250ms;
    overflow: hidden;
    .language-html {
      margin: 0;
      padding: 0 26px;
    }
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