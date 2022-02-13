<template>
  <div>
    <g-demo>
      <template v-slot:title>
        1. 基础用法
      </template>
      <template v-slot:description>
        可同时展开多个面板，面板之间不影响。可以通过 <code>:selected.sync</code> 属性来指定当前选中的标签页, 还支持<code>disabled</code>属性。
      </template>
      <template v-slot:component>
        <g-collapse :selected.sync="selectedName1">
          <g-collapse-item title="Title1" name="1" disabled>{{text}}</g-collapse-item>
          <g-collapse-item title="Title2" name="2">{{text}}</g-collapse-item>
          <g-collapse-item title="Title3" name="3" >{{text}}</g-collapse-item>
        </g-collapse>
      </template>
      <template v-slot:code>
        <pre><code>{{ content1 }}</code></pre>
      </template>
    </g-demo>
    <g-demo>
      <template v-slot:title>
        2. 手风琴效果
      </template>
      <template v-slot:description>
        每次只能展开一个面板。添加 <code>single</code> 属性即可实现。
      </template>
      <template v-slot:component>
        <g-collapse :selected.sync="selectedName2" single>
          <g-collapse-item title="Title1" name="1" >{{text}}</g-collapse-item>
          <g-collapse-item title="Title2" name="2">{{text}}</g-collapse-item>
          <g-collapse-item title="Title3" name="3" >{{text}}</g-collapse-item>
        </g-collapse>
      </template>
      <template v-slot:code>
        <pre><code>{{ content2 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        3. 面板嵌套
      </template>
      <template v-slot:description>
        嵌套折叠面板。
      </template>
      <template v-slot:component>
        <g-collapse :selected.sync="selectedName1">
          <g-collapse-item title="Title1" name="1" >{{text}}</g-collapse-item>
          <g-collapse-item title="Title2" name="2">{{text}}</g-collapse-item>
          <g-collapse-item title="Title3" name="3" >
            <g-collapse-item title="Title4" name="4">
              {{text}}
            </g-collapse-item>
          </g-collapse-item>
        </g-collapse>
      </template>
      <template v-slot:code>
        <pre><code>{{ content3 }}</code></pre>
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Collapse from '../../../src/collapse.vue'
import CollapseItem from '../../../src/collapse-item.vue'
// import Icon from '../../../src/icon.vue'
export  default {
  components:{
    'g-demo':Demo,
    'g-collapse':Collapse,
    'g-collapse-item':CollapseItem,
  },
  data(){
    return {
      text:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      selectedName1:['2','3'],
      selectedName2:['2'],
      content1:`
         data(){
           return {
                selectedName:['2','3'],
                text:'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
          }
        }

        <g-collapse :selected.sync="selectedName">
          <g-collapse-item title="Title1" name="1" disabled>{{text}}</g-collapse-item>
          <g-collapse-item title="Title2" name="2">{{text}}</g-collapse-item>
          <g-collapse-item title="Title3" name="3" >{{text}}</g-collapse-item>
        </g-collapse>
      `.replace(/^ {8}/gm, '').trim(),
      content2:`
        data(){
           return {
                selectedName:['2'],
                text:'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
          }
        }

        <g-collapse :selected.sync="selectedName" single>
          <g-collapse-item title="Title1" name="1" >{{text}}</g-collapse-item>
          <g-collapse-item title="Title2" name="2">{{text}}</g-collapse-item>
          <g-collapse-item title="Title3" name="3" >{{text}}</g-collapse-item>
        </g-collapse>
      `.replace(/^ {8}/gm, '').trim(),
      content3:`
        data(){
           return {
                selectedName:['2','3'],
                text:'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
          }
        }

        <g-collapse :selected.sync="selectedName">
          <g-collapse-item title="Title1" name="1" >{{text}}</g-collapse-item>
          <g-collapse-item title="Title2" name="2">{{text}}</g-collapse-item>
          <g-collapse-item title="Title3" name="3" >
            <g-collapse-item title="Title4" name="4">
              {{text}}
            </g-collapse-item>
          </g-collapse-item>
        </g-collapse>
      `.replace(/^ {8}/gm, '').trim(),


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