<template>
  <div>
    <g-demo>
      <template v-slot:title>
      1. click触发
      </template>
      <template v-slot:description>
       <code>trigger</code>属性用于设置何时触发 Popover，支持两种触发方式: <code>click</code> , <code>hover</code> , 默认是<code>click</code>方式。
        通过 <code>position</code>属性设置 Popover 弹出方向 , 支持四种方向: <code>left</code> ,<code>right</code> ,<code>top</code> ,<code>bottom</code>。
      </template>
      <template v-slot:component>
        <g-popover position="top-left">
          <g-button>上左</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="bottom-left">
          <g-button>下方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="left-top">
          <g-button>左边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="right-top">
          <g-button>右边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
      </template>
      <template v-slot:code>
        {{ content1 }}
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        2. hover触发
      </template>
      <template v-slot:description>
        把<code>trigger</code> 属性设置为 <code>hover</code>。
      </template>
      <template v-slot:component>
        <g-popover trigger="hover" position="top-left">
          <g-button>上方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="bottom-left" trigger="hover">
          <g-button>下方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="left-top" trigger="hover">
          <g-button>左边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="right-top" trigger="hover">
          <g-button>右边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
      </template>
      <template v-slot:code>
     {{ content2 }}
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Popover from '../../../src/popover.vue'
import Button from '../../../src/button.vue'
export  default {
  components:{
    'g-demo':Demo,
    'g-popover':Popover,
    'g-button':Button
  },
  data(){
    return {
      content1:`
<g-popover>
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left">
  <g-button>左边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right">
  <g-button>右边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
      `,
      content2:`
 <g-popover trigger="hover">
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left" trigger="hover">
  <g-button>左边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right" trigger="hover">
  <g-button>右边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
       `,
    }
  }

}
</script>
<style lang="scss" scoped>
pre {
  margin: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>