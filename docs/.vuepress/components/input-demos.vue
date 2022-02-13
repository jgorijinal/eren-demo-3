<template>
  <div>
    <g-demo>
      <template v-slot:title>
        1. 简单用法
      </template>
      <template v-slot:description>
        可用 <code>value</code>设置初始值。
        还提供了<code>disabled</code>, <code>readonly</code>属性。
      </template>
      <template v-slot:component>
        <div class="row-component">
          <div class="self-component">
            <g-input placeholder="请输入内容"></g-input>
          </div>
          <div class="self-component">
            <g-input :value="'Input value'"></g-input>
          </div>
          <div class="self-component">
            <g-input :value="'Disabled'" disabled></g-input>
          </div>
          <div class="self-component">
            <g-input :value="'Readonly'" readonly></g-input>
          </div>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content1 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        2. 双向绑定
      </template>
      <template v-slot:description>
        用<code>v-model</code>实现双向绑定。
      </template>
      <template v-slot:component>
        <div class="self-component">
        <g-input v-model="message"></g-input>
        </div>
        <div>value : {{ message }}</div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content2 }}</code></pre>
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Input from '../../../src/input.vue'
import Icon from '../../../src/icon.vue'

export default {
  components: {
    'g-demo': Demo,
    'g-input': Input,
    'g-icon': Icon,
  },
  data() {
    return {
      message:'Hello',
      content1: `
        <g-input placeholder="请输入内容"></g-input>
        <g-input :value="'Input value'"></g-input>
        <g-input :value="'Disabled'" disabled></g-input>
        <g-input :value="'Readonly'" readonly></g-input>
      `.replace(/^ {8}/gm, '').trim(),
      content2: `
        data(){
            return {message:'Hello'}
        }

<g-input v-model="message"></g-input>
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
p{margin:0}
.row-component {
  display: flex;
  flex-wrap: wrap;
.self-component{
  margin-right: 1em;
  margin-bottom: 1em;
  &:last-child{
    margin-bottom: 0;
  }
}
}
</style>