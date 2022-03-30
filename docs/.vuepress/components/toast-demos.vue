<template>
  <div>
    <g-demo>
      <template v-slot:title>
        1. this.$toast
      </template>
      <template v-slot:description>
        为 Vue.prototype 添加了全局方法 $toast。默认从顶部出现 , 默认3 秒后自动消失。
      </template>
      <template v-slot:component>
        <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom',  autoClose:5})">下方弹出</g-button>
      </template>
      <template v-slot:code>
       {{ content1 }}
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
      2. 设置文本内容
      </template>
      <template v-slot:description>
      调用方法为<code>this.$toast(Message,toastOptions)</code>。Message 可以接收一个字符串。
      </template>
      <template v-slot:component>
        <div>
          <g-button @click="onClickButton">Click me</g-button>
        </div>
      </template>
      <template v-slot:code>
       {{ content2 }}
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        3. 使用 HTML 片段
      </template>
      <template v-slot:description>
        将 <code>enableHtml</code> 属性设置为 true，message 就会被当作 HTML 片段处理。
      </template>
      <template v-slot:component>
        <div>
          <g-button @click="onClickButtonEnableHtml">使用HTML片段</g-button>
        </div>
      </template>
      <template v-slot:code>
        {{ content3 }}
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Toast from '../../../src/toast.vue'
import Button from '../../../src/button.vue'
import Vue from "vue";
import plugin from "../../../src/plugin";
Vue.use(plugin)
export  default {
  components:{
    'g-demo':Demo,
    'g-toast':Toast,
    'g-button':Button
  },
  data(){
    return {
      content1:`
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom', autoClose:5})">下方弹出</g-button>
      `,
      content2:`
<g-button @click="onClickButton">上方弹出</g-button>

methods: {
    onClickButton () {
        this.$toast('你知道我在等你吗？', {
        closeButton: {
              text: '知道了',
              callback: () => {
              console.log('他说知道了')
                }
          }
     })
  }
},
      `,
      content3:`
<g-button @click="onClickButtonEnableHtml">使用HTML片段</g-button>

onClickButtonEnableHtml(){
    this.$toast(
        '<strong style="color: red">加粗的提示</strong>',{
            closeButton: {
                 text: '知道了',
                 callback: () => {
                    console.log('他说知道了')
             }
         },
         enableHtml: true
      })
    }
}
      `,
    }
  },
  methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    },
    onClickButtonEnableHtml(){
      this.$toast('<strong style="color: red">加粗的提示</strong>', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        },
        enableHtml: true
      })
    }
  },

}
</script>
<style lang="scss" scoped>
pre {
  margin: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>