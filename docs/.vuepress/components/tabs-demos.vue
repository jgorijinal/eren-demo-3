<template>
<div>
  <g-demo>
    <template v-slot:title>
      1. 基本用法
    </template>
    <template v-slot:description>
      默认选中第一个标签页，也可以通过 <code>:selected.sync</code> 属性来指定当前选中的标签页。
    </template>
    <template v-slot:component>
      <g-tabs :selected.sync="selectedTab">
        <g-tabs-head>
          <g-tabs-item name="Tab1">Tabs 1</g-tabs-item>
          <g-tabs-item name="Tab2">Tab 2</g-tabs-item>
          <g-tabs-item name=Tab3>Tab 3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="Tab1">Content of Tab Pane 1</g-tabs-pane>
          <g-tabs-pane name="Tab2">Content of Tab Pane 2</g-tabs-pane>
          <g-tabs-pane name="Tab3">Content of Tab Pane 3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </template>
    <template v-slot:code>
      <pre><code>{{ content1 }}</code></pre>
    </template>
  </g-demo>

  <g-demo>
    <template v-slot:title>
      2. 禁用状态
    </template>
    <template v-slot:description>
      禁用某一项。添加 <code>disabled</code> 属性即可让按钮处于不可用状态。
    </template>
    <template v-slot:component>
      <g-tabs :selected.sync="selectedTab">
        <g-tabs-head>
          <g-tabs-item name="Tab1">Tabs 1</g-tabs-item>
          <g-tabs-item name="Tab2"  disabled>Tab 2</g-tabs-item>
          <g-tabs-item name=Tab3>Tab 3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="Tab1">Tab1</g-tabs-pane>
          <g-tabs-pane name="Tab2">Tab2</g-tabs-pane>
          <g-tabs-pane name="Tab3">Tab3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </template>
    <template v-slot:code>
      <pre><code>{{ content2 }}</code></pre>
    </template>
  </g-demo>

  <g-demo>
    <template v-slot:title>
     3. 图标
    </template>
    <template v-slot:description>
      有图标的标签
    </template>
    <template v-slot:component>
      <g-tabs :selected.sync="selectedTab">
        <g-tabs-head>
          <g-tabs-item name="Tab1">
            <g-icon name="data"></g-icon>
            Tabs 1
          </g-tabs-item>
          <g-tabs-item name="Tab2">
            <g-icon name="rmb"></g-icon>
            Tab 2
          </g-tabs-item>
          <g-tabs-item name=Tab3>
            <g-icon name="gift"></g-icon>
            Tab 3
          </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="Tab1">Tab 1</g-tabs-pane>
          <g-tabs-pane name="Tab2">Tab 2</g-tabs-pane>
          <g-tabs-pane name="Tab3">Tab 3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </template>
    <template v-slot:code>
      <pre><code>{{ content4 }}</code></pre>
    </template>
  </g-demo>

  <g-demo>
    <template v-slot:title>
      4. 附加内容
    </template>
    <template v-slot:description>
      可以在页签右边添加附加操作。
    </template>
    <template v-slot:component>
      <g-tabs :selected.sync="selectedTab">
        <g-tabs-head>
          <g-tabs-item name="Tab1">Tab 1</g-tabs-item>
          <g-tabs-item name="Tab2">Tab 2</g-tabs-item>
          <g-tabs-item name="Tab3">Tab 3</g-tabs-item>
          <template v-slot:actions>
            <g-button>Extra actions</g-button>
          </template>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="Tab1">Tab 1</g-tabs-pane>
          <g-tabs-pane name="Tab2">Tab 2</g-tabs-pane>
          <g-tabs-pane name="Tab3">Tab 3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </template>
    <template v-slot:code>
      <pre><code>{{ content2 }}</code></pre>
    </template>
  </g-demo>
</div>
</template>
<script>
import Tabs from '../../../src/tabs.vue'
import TabsHead from '../../../src/tabs-head.vue'
import TabsBody from '../../../src/tabs-body.vue'
import TabsItem from '../../../src/tabs-item.vue'
import TabsPane from '../../../src/tabs-pane.vue'
import Icon from '../../../src/Icon.vue'
import Button from '../../../src/button.vue'
import Demo from '../../../src/demo.vue'
export  default {
  components:{
    'g-tabs':Tabs,
    'g-tabs-item':TabsItem,
    'g-tabs-body':TabsBody,
    'g-tabs-head':TabsHead,
    'g-tabs-pane':TabsPane,
    'g-icon':Icon,
    'g-button':Button,
    'g-demo':Demo
  },
  data(){
    return {
      selectedTab:'Tab1',
      content1: `
          data(){
          return {selectedTab: 'Tab1'}
          }

        <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="Tab1">Tabs 1</g-tabs-item>
                <g-tabs-item name="Tab2">Tab 2</g-tabs-item>
                <g-tabs-item name=Tab3>Tab 3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="Tab1">Content of Tab Pane 1</g-tabs-pane>
                <g-tabs-pane name="Tab2">Content of Tab Pane 2</g-tabs-pane>
                <g-tabs-pane name="Tab3">Content of Tab Pane 3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
          `.replace(/^ {8}/gm, '').trim(),
      content2:`
          data(){
          return {selectedTab: 'Tab1'}
          }

        <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="Tab1">Tabs 1</g-tabs-item>
                <g-tabs-item name="Tab2"  disabled>Tab 2</g-tabs-item>
                <g-tabs-item name=Tab3>Tab 3</g-tabs-item>
             </g-tabs-head>
             <g-tabs-body>
                <g-tabs-pane name="Tab1">Tab1</g-tabs-pane>
                <g-tabs-pane name="Tab2">Tab2</g-tabs-pane>
             <g-tabs-pane name="Tab3">Tab3</g-tabs-pane>
        </g-tabs-body>
        </g-tabs>
      `.replace(/^ {8}/gm, '').trim(),
      content3:`
      data(){
          return {selectedTab: 'Tab1'}
          }

        <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="Tab1">
                    <g-icon name="data"></g-icon>
                     Tabs 1
                </g-tabs-item>
                <g-tabs-item name="Tab2">
                    <g-icon name="rmb"></g-icon>
                     Tab 2
                </g-tabs-item>
                <g-tabs-item name=Tab3>
                     <g-icon name="gift"></g-icon>
                     Tab 3
                </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="Tab1">Tab 1</g-tabs-pane>
                 <g-tabs-pane name="Tab2">Tab 2</g-tabs-pane>
                 <g-tabs-pane name="Tab3">Tab 3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
      `.replace(/^ {8}/gm, '').trim(),
      content4:`
       data(){
          return {selectedTab: 'Tab1'}
          }
        <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="Tab1">Tab 1</g-tabs-item>
                <g-tabs-item name="Tab2">Tab 2</g-tabs-item>
                <g-tabs-item name="Tab3">Tab 3</g-tabs-item>
                <template v-slot:actions>
                    <g-button>Extra actions</g-button>
                </template>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="Tab1">Tab 1</g-tabs-pane>
                <g-tabs-pane name="Tab2">Tab 2</g-tabs-pane>
                <g-tabs-pane name="Tab3">Tab 3</g-tabs-pane>
            </g-tabs-body>
      </g-tabs>
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

</style>