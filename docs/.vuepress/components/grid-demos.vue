<template>
  <div>
    <g-demo>
      <template v-slot:title>
          24格网格
      </template>
      <template v-slot:description>
        使用单一分栏创建基础的栅格布局。通过 row 和 col 组件，并通过 col 组件的<code>span</code>属性我们就可以自由地组合布局。
      </template>
      <template v-slot:component>
        <g-row class="demoRow">
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
        </g-row>
        <g-row class="demoRow">
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
        </g-row>
        <g-row class="demoRow">
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
        </g-row>
        <g-row class="demoRow">
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
        </g-row>
      </template>
      <template v-slot:code>
        <pre><code>{{ content1 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
         栅格间隔
      </template>
      <template v-slot:description>
        栅格之间存在间隔。Row 组件 提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。
      </template>
      <template v-slot:component>
        <g-row class="demoRow" gutter="10">
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
        </g-row>

        <g-row class="demoRow" gutter="10">
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
        </g-row>
      </template>
      <template v-slot:code>
        <pre><code>{{ content2 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        栅格偏移
      </template>
      <template v-slot:description>
        支持偏移指定的栏数。 通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。
      </template>
      <template v-slot:component>
        <g-row class="demoRow" gutter="10">
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8" offset="8">
            <div class="demoCol">8</div>
          </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
          <g-col span="6" offset="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6" offset="6">
            <div class="demoCol">6</div>
          </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4" offset="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4" offset="8">
            <div class="demoCol">4</div>
          </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2" offset="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2" offset="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2" offset="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2" offset="2">
            <div class="demoCol">2</div>
          </g-col>
        </g-row>
      </template>
      <template v-slot:code>
        <pre><code>{{ content3 }}</code></pre>
      </template>
    </g-demo>
    <g-demo>
      <template v-slot:title>
        响应式布局
      </template>
      <template v-slot:description>
        预设了4个响应尺寸 ：<code>ipad</code>(≥768px) 、<code>narrow-pc</code>(≥992px)、<code>pc</code>(≥1200px)和 <code>wide-pc</code>(≥1920px), 默认是<code>phone</code>(<768px)。
      </template>
      <template v-slot:component>
        <g-row class="demoRow" gutter="10">
          <g-col span="8" offset="0" :ipad="{span:6,offset:0}" :narrow-pc="{span:4,offset:0}" :pc="{span:3,offset:0}" :wide-pc="{span:1,offset:0}">
            <div class="demoCol"></div>
          </g-col>
          <g-col span="4" offset="0" :ipad="{span:6,offset:0}" :narrow-pc="{span:8,offset:0}" :pc="{span:9,offset:0}" :wide-pc="{span:11,offset:0}">
            <div class="demoCol"></div>
          </g-col>
          <g-col span="4" offset="0" :ipad="{span:6,offset:0}" :narrow-pc="{span:8,offset:0}" :pc="{span:9,offset:0}" :wide-pc="{span:11,offset:0}">
            <div class="demoCol"></div>
          </g-col>
          <g-col span="8" offset="0" :ipad="{span:6,offset:0}" :narrow-pc="{span:4,offset:0}" :pc="{span:3,offset:0}" :wide-pc="{span:1,offset:0}">
            <div class="demoCol"></div>
          </g-col>
        </g-row>
      </template>
      <template v-slot:code>
        <pre><code>{{ content4 }}</code></pre>
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Row from '../../../src/row.vue'
import Col from '../../../src/col.vue'
export  default {
  components:{
    'g-demo':Demo,
    'g-row':Row,
    'g-col':Col,
  },
  data(){
    return {
      content1:`
<g-row class="demoRow">
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
        </g-row>
        <g-row class="demoRow">
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
        </g-row>
        <g-row class="demoRow">
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
        </g-row>
        <g-row class="demoRow">
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
        </g-row>

        <style>
            * {
                box-sizing: border-box;
            }
            .demoCol{
                height: 50px;
                border: 1px solid #ccc;
                background: #eee;;
                display: flex;
                justify-content: center;
                align-items: center;
                }
            .demoRow {
                 margin: 10px 0;
            }
        </style>
      `.replace(/^ {8}/gm, '').trim(),
      content2:`
<g-row class="demoRow">
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
        </g-row>

        <g-row class="demoRow" gutter="10">
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6">
            <div class="demoCol">6</div>
          </g-col>
        </g-row>

        <style>
            * {
                box-sizing: border-box;
            }
            .demoCol{
                height: 50px;
                border: 1px solid #ccc;
                background: #eee;;
                display: flex;
                justify-content: center;
                align-items: center;
                }
            .demoRow {
                 margin: 10px 0;
            }
        </style>
      `.replace(/^ {8}/gm, '').trim(),
      content3:`
<g-row class="demoRow">
          <g-col span="8">
            <div class="demoCol">8</div>
          </g-col>
          <g-col span="8" offset="8">
            <div class="demoCol">8</div>
          </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
          <g-col span="6" offset="6">
            <div class="demoCol">6</div>
          </g-col>
          <g-col span="6" offset="6">
            <div class="demoCol">6</div>
          </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
          <g-col span="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4" offset="4">
            <div class="demoCol">4</div>
          </g-col>
          <g-col span="4" offset="8">
            <div class="demoCol">4</div>
          </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2" offset="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2" offset="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2" offset="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2">
            <div class="demoCol">2</div>
          </g-col>
          <g-col span="2" offset="2">
            <div class="demoCol">2</div>
          </g-col>
        </g-row>

        <style>
            * {
                box-sizing: border-box;
            }
            .demoCol{
                height: 50px;
                border: 1px solid #ccc;
                background: #eee;;
                display: flex;
                justify-content: center;
                align-items: center;
                }
            .demoRow {
                 margin: 10px 0;
            }
        </style>
      `.replace(/^ {8}/gm, '').trim(),
      content4:`
<g-row class="demoRow" gutter="10">
     <g-col span="8" offset="0" :ipad="{span:6,offset:0}" :narrow-pc="{span:4,offset:0}" :pc="{span:3,offset:0}" :wide-pc="{span:1,offset:0}">
            <div class="demoCol"></div>
          </g-col>
          <g-col span="4" offset="0" :ipad="{span:6,offset:0}" :narrow-pc="{span:8,offset:0}" :pc="{span:9,offset:0}" :wide-pc="{span:11,offset:0}">
            <div class="demoCol"></div>
          </g-col>
          <g-col span="4" offset="0" :ipad="{span:6,offset:0}" :narrow-pc="{span:8,offset:0}" :pc="{span:9,offset:0}" :wide-pc="{span:11,offset:0}">
            <div class="demoCol"></div>
          </g-col>
          <g-col span="8" offset="0" :ipad="{span:6,offset:0}" :narrow-pc="{span:4,offset:0}" :pc="{span:3,offset:0}" :wide-pc="{span:1,offset:0}">
            <div class="demoCol"></div>
          </g-col>
        </g-row>

        <style>
            * {
                box-sizing: border-box;
            }
            .demoCol{
                height: 50px;
                border: 1px solid #ccc;
                background: #eee;;
                display: flex;
                justify-content: center;
                align-items: center;
                }
            .demoRow {
                 margin: 10px 0;
            }
        </style>
      `.replace(/^ {8}/gm, '').trim(),
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
.demoCol{
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demoRow {
  margin: 10px 0;
}
</style>