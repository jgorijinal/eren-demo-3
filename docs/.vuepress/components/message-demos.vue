<template>
  <div>
    <g-demo>
      <template v-slot:title>
        this.$message
      </template>
      <template v-slot:description>
        从顶部出现，默认 3 秒后自动消失。使用<code>this.$message.info</code>弹出一个全局提示。
      </template>
      <template v-slot:component>
        <g-button type="primary" @click="info">显示普通的提示</g-button>
      </template>
      <template v-slot:code>
        <pre><code>{{ content1 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        4种提示类型
      </template>
      <template v-slot:description>
        不同的提示状态：信息、成功、警告、错误。各是 <code>info</code> , <code>success</code>,<code>warning</code>,<code>error</code>。
      </template>
      <template v-slot:component>
        <div>
          <g-button @click="info">显示普通的提示</g-button>
          <g-button @click="success">显示成功的提示</g-button>
          <g-button @click="warning">显示警告的提示</g-button>
          <g-button @click="error">显示错误的提示</g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content2 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        带背景色
      </template>
      <template v-slot:description>
        将参数设置为一个对象 , 设置属性 <code>background: true</code> 后，全局提示会显示相应的背景色。
      </template>
      <template v-slot:component>
        <div>
          <g-button type="primary" @click="info2">显示普通的提示</g-button>
          <g-button type="success" @click="success2">显示成功的提示</g-button>
          <g-button type="warning" @click="warning2">显示警告的提示</g-button>
          <g-button type="danger" @click="error2">显示错误的提示</g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content3 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        自定义时长
      </template>
      <template v-slot:description>
        将参数设置为一个对象 , 自定义时长 , 设置 <code>duration</code>属性。
      </template>
      <template v-slot:component>
        <div>
          <g-button @click="info3">显示一个10秒的提示</g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content4 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        可关闭
      </template>
      <template v-slot:description>
        将参数设置为一个对象，并指定 <code>closable</code> 为 true 后可以手动关闭提示，还可以用<code>autoClose</code>设置是否为自动关闭。
      </template>
      <template v-slot:component>
        <div>
          <g-button @click="info4">显示一个可关闭的提示</g-button>
          <g-button type="primary" @click="info5">显示一个可关闭的提示</g-button>
          <g-button type="success" @click="success3">显示一个可关闭的提示</g-button>
          <g-button type="warning" @click="warning3">显示一个可关闭的提示</g-button>
          <g-button type="danger" @click="error3">显示一个可关闭的提示</g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content5 }}</code></pre>
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Message from '../../../src/message.vue'
import Icon from '../../../src/icon.vue'
import Button from '../../../src/button.vue'
import Vue from "vue";
import plugin from "../../../src/plugin";

Vue.use(plugin)
export default {
  components: {
    'g-demo': Demo,
    'g-message': Message,
    'g-button': Button,
    'g-icon': Icon
  },
  data() {
    return {
      content1: `
       <g-button type="primary" @click="info">显示普通的提示</g-button>

        methods:{
            info(){
               this.$message.info({
                    content:'这是一条普通的全局提示'
            })
          },
}
      `.replace(/^ {8}/gm, '').trim(),
      content2: `
        <g-button @click="info">显示普通的提示</g-button>
        <g-button @click="success">显示成功的提示</g-button>
        <g-button @click="warning">显示警告的提示</g-button>
        <g-button @click="error">显示错误的提示</g-button>

        methods: {
            info() {
               this.$message.info({
                    content: '这是一条普通的全局提示'
            })
  },
            success() {
               this.$message.success({
                    content: '这是一条成功的全局提示'
            })
  },
            warning() {
               this.$message.warning({
                    content: '这是一条警告的全局提示'
            })
  },
            error() {
               this.$message.error({
                    content: '这是一条错误的全局提示'
            })
  },
  },
      `.replace(/^ {8}/gm, '').trim(),
      content3: `
        <g-button type="primary" @click="info">显示普通的提示</g-button>
        <g-button type="success" @click="success">显示成功的提示</g-button>
        <g-button type="warning" @click="warning">显示警告的提示</g-button>
        <g-button type="danger" @click="error">显示错误的提示</g-button>

        methods: {
            info() {
               this.$message.info({
                    background:true,
                    content: '这是一条普通的全局提示'
            })
  },
            success() {
               this.$message.success({
                    background:true,
                    content: '这是一条成功的全局提示'
            })
  },
            warning() {
               this.$message.warning({
                    background:true,
                    content: '这是一条警告的全局提示'
            })
  },
            error() {
               this.$message.error({
                    background:true,
                    content: '这是一条错误的全局提示'
            })
  },
  },
      `.replace(/^ {8}/gm, '').trim(),
      content4: `
       <g-button @click="info">显示普通的提示</g-button>

        methods:{
            info(){
               this.$message.info({
                    content:' 我将会在10秒后消失',
                    duration:10
            })
          },
}
      `.replace(/^ {8}/gm, '').trim(),
      content5: `
        <g-button @click="info1">显示可关闭的提示</g-button>
        <g-button type="primary" @click="info2">显示可关闭的提示</g-button>
        <g-button type="success" @click="success">显示可关闭的提示</g-button>
        <g-button type="warning" @click="warning">显示可关闭的提示</g-button>
        <g-button type="danger" @click="error">显示可关闭的提示</g-button>

        methods: {
            info1() {
               this.$message.info({
                    autoClose: false,
                    closable: true,
                    content: '这是一条可关闭的全局提示'
            })
  },
            info2() {
               this.$message.info({
                    autoClose: false,
                    closable: true,
                    background: true,
                    content: '这是一条可关闭的全局提示'
            })
  },
            success() {
               this.$message.success({
                    background:true,
                    content: '这是一条成功的全局提示'
            })
  },
            warning() {
               this.$message.warning({
                    background:true,
                    content: '这是一条警告的全局提示'
            })
  },
            error() {
               this.$message.error({
                    background:true,
                    content: '这是一条错误的全局提示'
            })
  },
}
      `.replace(/^ {8}/gm, '').trim(),
    }
  },
  methods: {
    info() {
      this.$message.info({
        content: '这是一条普通的全局提示'
      })
    },
    success() {
      this.$message.success({
        content: '这是一条成功的全局提示'
      })
    },
    warning() {
      this.$message.warning({
        content: '这是一条警告的全局提示'
      })
    },
    error() {
      this.$message.error({
        content: '对方不想说话 , 并且向你抛出了一个异常'
      })
    },
    info2() {
      this.$message.info({
        background:true,
        content: '这是一条普通的全局提示'
      })
    },
    success2() {
      this.$message.success({
        background:true,
        content: '这是一条成功的全局提示'
      })
    },
    warning2() {
      this.$message.warning({
        background:true,
        content: '这是一条警告的全局提示'
      })
    },
    error2() {
      this.$message.error({
        background:true,
        content: '对方不想说话 , 并且向你抛出了一个异常'
      })
    },
    info3() {
      this.$message.info({
        content: ' 我将会在10秒后消失',
        duration:10
      })
    },
    info4(){
      this.$message.info({
        autoClose:false,
        closable: true,
        content: '这是一条可关闭的全局提示'
      })
    },
    info5() {
      this.$message.info({
        autoClose:false,
        closable: true,
        background:true,
        content: '这是一条可关闭的全局提示'
      })
    },
    success3() {
      this.$message.success({
        autoClose: false,
        closable: true,
        background: true,
        content: '这是一条可关闭的全局提示'
      })
    },
    warning3() {
      this.$message.warning({
        autoClose: false,
        closable: true,
        background: true,
        content: '这是一条可关闭的全局提示'
      })
    },
    error3() {
      this.$message.error({
        autoClose: false,
        closable: true,
        background: true,
        content: '这是一条可关闭的全局提示'
      })
    }
  },
  created() {                   // 看这里要给全局message提示加容器
    const div = document.createElement('div')
    div.classList.add('gulu-messageList')
    div.style.position = 'fixed'
    div.style.top = 0 + 'px'
    div.style.width = '100%'
    div.style.zIndex = '30'
    document.body.appendChild(div)      //放在
  }
}
</script>
<style lang="scss" scoped>
pre {
  margin: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
button {
  margin: 2px 0;
}

</style>