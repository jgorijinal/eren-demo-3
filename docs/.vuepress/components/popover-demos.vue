<template>
  <div>
    <g-demo>
      <template v-slot:title>
        1. click触发
      </template>
      <template v-slot:description>
        <code>trigger</code>属性用于设置何时触发 Popover，支持两种触发方式: <code>click</code> , <code>hover</code> , 默认是<code>click</code>方式。
        通过 <code>position</code>属性设置 Popover 弹出方向 , 支持四种方向: <code>left</code> ,<code>right</code> ,<code>top</code>
        ,<code>bottom</code>。
      </template>
      <template v-slot:component>
        <div class="container">
          <g-popover position="top-left">
            <template v-slot:content>
              Top Left 文字提示
            </template>
            <g-button>上左</g-button>
          </g-popover>
          <g-popover position="top-center">
            <template v-slot:content>
              Top Center 文字提示
            </template>
            <g-button>上中</g-button>
          </g-popover>
          <g-popover position="top-right">
            <template v-slot:content>
              Top Right 文字提示
            </template>
            <g-button>上右</g-button>
          </g-popover>
          <g-popover position="left-top">
            <template v-slot:content>
              Left Top 文字提示
            </template>
            <g-button>左上</g-button>
          </g-popover>
          <g-popover position="right-top">
            <template v-slot:content>
              Right Top 文字提示
            </template>
            <g-button>右上</g-button>
          </g-popover>
          <g-popover position="left-center">
            <template v-slot:content>
              Left Center 文字提示
            </template>
            <g-button>左中</g-button>
          </g-popover>
          <g-popover position="right-center">
            <template v-slot:content>
              Right Center 文字提示
            </template>
            <g-button>右中</g-button>
          </g-popover>
          <g-popover position="left-bottom">
            <template v-slot:content>
              Left Bottom 文字提示
            </template>
            <g-button>左下</g-button>
          </g-popover>
          <g-popover position="right-bottom">
            <template v-slot:content>
              Right Bottom 文字提示
            </template>
            <g-button>右下</g-button>
          </g-popover>
          <g-popover position="bottom-left">
            <template v-slot:content>
              Bottom Left 文字提示
            </template>
            <g-button>下左</g-button>
          </g-popover>
          <g-popover position="bottom-center">
            <template v-slot:content>
              Bottom Center 文字提示
            </template>
            <g-button>下中</g-button>
          </g-popover>
          <g-popover position="bottom-right">
            <template v-slot:content>
              Bottom Right 文字提示
            </template>
            <g-button>下右</g-button>
          </g-popover>
        </div>
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
        <div class="container">
          <g-popover position="top-left" trigger="hover">
            <template v-slot:content>
              Top Left 文字提示
            </template>
            <g-button>上左</g-button>
          </g-popover>
          <g-popover position="top-center" trigger="hover">
            <template v-slot:content>
              Top Center 文字提示
            </template>
            <g-button>上中</g-button>
          </g-popover>
          <g-popover position="top-right" trigger="hover">
            <template v-slot:content>
              Top Right 文字提示
            </template>
            <g-button>上右</g-button>
          </g-popover>
          <g-popover position="left-top" trigger="hover">
            <template v-slot:content>
              Left Top 文字提示
            </template>
            <g-button>左上</g-button>
          </g-popover>
          <g-popover position="right-top" trigger="hover">
            <template v-slot:content>
              Right Top 文字提示
            </template>
            <g-button>右上</g-button>
          </g-popover>
          <g-popover position="left-center" trigger="hover">
            <template v-slot:content>
              Left Center 文字提示
            </template>
            <g-button>左中</g-button>
          </g-popover>
          <g-popover position="right-center" trigger="hover">
            <template v-slot:content>
              Right Center 文字提示
            </template>
            <g-button>右中</g-button>
          </g-popover>
          <g-popover position="left-bottom" trigger="hover">
            <template v-slot:content>
              Left Bottom 文字提示
            </template>
            <g-button>左下</g-button>
          </g-popover>
          <g-popover position="right-bottom" trigger="hover">
            <template v-slot:content>
              Right Bottom 文字提示
            </template>
            <g-button>右下</g-button>
          </g-popover>
          <g-popover position="bottom-left" trigger="hover">
            <template v-slot:content>
              Bottom Left 文字提示
            </template>
            <g-button>下左</g-button>
          </g-popover>
          <g-popover position="bottom-center" trigger="hover">
            <template v-slot:content>
              Bottom Center 文字提示
            </template>
            <g-button>下中</g-button>
          </g-popover>
          <g-popover position="bottom-right" trigger="hover">
            <template v-slot:content>
              Bottom Right 文字提示
            </template>
            <g-button>下右</g-button>
          </g-popover>
        </div>
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

export default {
  components: {
    'g-demo': Demo,
    'g-popover': Popover,
    'g-button': Button
  },
  data() {
    return {
      content1: `
<g-popover position="top-left" >
    <template v-slot:content>
        Top Left 文字提示
    </template>
    <g-button>上左</g-button>
</g-popover>
<g-popover position="top-center" >
    <template v-slot:content>
        Top Center 文字提示
    </template>
    <g-button>上中</g-button>
</g-popover>
<g-popover position="top-right" >
    <template v-slot:content>
        Top Right 文字提示
    </template>
    <g-button>上右</g-button>
</g-popover>

<g-popover position="right-top" >
    <template v-slot:content>
        Right Top 文字提示
    </template>
    <g-button>右上</g-button>
</g-popover>
<g-popover position="right-center" >
    <template v-slot:content>
        Right Center 文字提示
    </template>
    <g-button>右中</g-button>
</g-popover>
<g-popover position="right-bottom" >
    <template v-slot:content>
        Right Bottom 文字提示
    </template>
    <g-button>右下</g-button>
</g-popover>

<g-popover position="left-top" >
    <template v-slot:content>
        Left Top 文字提示
    </template>
    <g-button>左上</g-button>
</g-popover>
<g-popover position="left-center" >
    <template v-slot:content>
        Left Center 文字提示
    </template>
    <g-button>左中</g-button>
</g-popover>
<g-popover position="left-bottom" >
    <template v-slot:content>
        Left Bottom 文字提示
    </template>
    <g-button>左下</g-button>
</g-popover>

<g-popover position="bottom-left" >
    <template v-slot:content>
        Bottom Left 文字提示
    </template>
    <g-button>下左</g-button>
</g-popover>
<g-popover position="bottom-center" >
    <template v-slot:content>
        Bottom Center 文字提示
    </template>
    <g-button>下中</g-button>
</g-popover>
<g-popover position="bottom-right" >
    <template v-slot:content>
        Bottom Right 文字提示
    </template>
    <g-button>下右</g-button>
</g-popover>
      `,
      content2: `
<g-popover position="top-left" trigger="hover">
  <template v-slot:content>
    Top Left 文字提示
  </template>
  <g-button>上左</g-button>
</g-popover>
<g-popover position="top-center" trigger="hover">
  <template v-slot:content>
    Top Center 文字提示
  </template>
  <g-button>上中</g-button>
</g-popover>
<g-popover position="top-right" trigger="hover">
  <template v-slot:content>
    Top Right 文字提示
  </template>
  <g-button>上右</g-button>
</g-popover>

<g-popover position="right-top" trigger="hover">
  <template v-slot:content>
    Right Top 文字提示
  </template>
  <g-button>右上</g-button>
</g-popover>
<g-popover position="right-center" trigger="hover">
  <template v-slot:content>
    Right Center 文字提示
  </template>
  <g-button>右中</g-button>
</g-popover>
<g-popover position="right-bottom" trigger="hover">
  <template v-slot:content>
    Right Bottom 文字提示
  </template>
  <g-button>右下</g-button>
</g-popover>

<g-popover position="left-top" trigger="hover">
  <template v-slot:content>
    Left Top 文字提示
  </template>
  <g-button>左上</g-button>
</g-popover>
<g-popover position="left-center" trigger="hover">
  <template v-slot:content>
    Left Center 文字提示
  </template>
  <g-button>左中</g-button>
</g-popover>
<g-popover position="left-bottom" trigger="hover">
  <template v-slot:content>
    Left Bottom 文字提示
  </template>
  <g-button>左下</g-button>
</g-popover>

<g-popover position="bottom-left" trigger="hover">
  <template v-slot:content>
    Bottom Left 文字提示
  </template>
  <g-button>下左</g-button>
</g-popover>
<g-popover position="bottom-center" trigger="hover">
  <template v-slot:content>
    Bottom Center 文字提示
  </template>
  <g-button>下中</g-button>
</g-popover>
<g-popover position="bottom-right" trigger="hover">
  <template v-slot:content>
    Bottom Right 文字提示
  </template>
  <g-button>下右</g-button>
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
.container {
  grid-gap: 12px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto auto;
  .popover:first-child {
    grid-area:1 / 1 / 2 / 2 ;
  }
  .popover:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  .popover:nth-child(3) {
    grid-area: 1 /3 /2 / 4;
  }
  .popover:nth-child(4) {
    grid-area: 2 / 1 / 3 / 2 ;
  }
  .popover:nth-child(5) {
    grid-area:2 / 3 / 3 / 4 ;
  }

  .popover:nth-child(6) {
    grid-area: 3 / 1  /4 / 2 ;
  }

  .popover:nth-child(7) {
    grid-area: 3 / 3 /  4 / 4;
  }

  .popover:nth-child(8){
    grid-area:4/ 1 / 5 /2 ;
  }

  .popover:nth-child(9){
    grid-area: 4 / 3 / 5 /4;
  }
  .popover:nth-child(10){
    grid-area: 5 / 1 /  6  /2 ;
  }
  .popover:nth-child(11) {
    grid-area: 5 / 2 / 6 / 3;
  }
  .popover:last-child{
    grid-area: 5 / 3 / 6  /4;
  }
}

</style>