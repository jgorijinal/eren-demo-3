<template>
  <div>
    <g-demo>
      <template v-slot:title>1.基础用法</template>
      <template v-slot:description>
        基础的按钮用法。使用<code>type</code>、<code>circle</code>属性来定义 Button 的样式。
      </template>
      <template v-slot:component>
        <div class="row-component">
          <g-button type="default">默认按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
        <div class="row-component">
          <g-button icon="message" type="default" circle></g-button>
          <g-button icon="write" type="primary" circle></g-button>
          <g-button icon="yes" type="success" circle></g-button>
          <g-button icon="delete" type="danger" circle></g-button>
          <g-button icon="like" type="warning" circle></g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content1 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>2.禁用状态</template>
      <template v-slot:description>添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
      </template>
      <template v-slot:component>
        <div class="row-component">
          <g-button type="default" disabled>默认按钮</g-button>
          <g-button type="primary" disabled>主要按钮</g-button>
          <g-button type="success" disabled>成功按钮</g-button>
          <g-button type="warning" disabled>警告按钮</g-button>
          <g-button type="danger" disabled>危险按钮</g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content2 }}</code></pre>
      </template>
    </g-demo>
    <g-demo>
      <template v-slot:title>3.图标按钮</template>
      <template v-slot:description>
      </template>
      <template v-slot:component>
        <div class="row-component">
          <g-button type="primary" icon="download"></g-button>
          <g-button type="primary" icon="thumbs-up"></g-button>
          <g-button type="primary" icon="download" icon-position="left">下载</g-button>
          <g-button type="primary" icon="settings" icon-position="right">设置</g-button>
          <g-button type="primary" icon="write" icon-position="right">编辑</g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content3 }}</code></pre>
      </template>
    </g-demo>
  </div>
</template>
<script>
import Button from '../../../src/button.vue'
import Demo from '../../../src/demo.vue'
import Icon from '../../../src/icon.vue'

export default {
  components: {
    'g-button': Button,
    'g-demo': Demo,
    "g-icon": Icon
  },
  data() {
    return {
      content1: `
        <g-button type="default">默认按钮</g-button>
        <g-button type="primary">主要按钮</g-button>
        <g-button type="success">成功按钮</g-button>
        <g-button type="warning">警告按钮</g-button>
        <g-button type="danger">危险按钮</g-button>

        <g-button icon="message" type="default" circle></g-button>
        <g-button icon="write" type="primary" circle></g-button>
        <g-button icon="yes" type="success" circle></g-button>
        <g-button icon="delete" type="danger" circle></g-button>
        <g-button icon="like" type="warning" circle></g-button>
      `.replace(/^ {8}/gm, '').trim(),
      content2: `
        <g-button type="default" disabled>默认按钮</g-button>
        <g-button type="primary" disabled>主要按钮</g-button>
        <g-button type="success" disabled>成功按钮</g-button>
        <g-button type="warning" disabled>警告按钮</g-button>
        <g-button type="danger" disabled>危险按钮</g-button>
      `.replace(/^ {8}/gm, '').trim(),
      content3:`
        <g-button type="primary" icon="download"></g-button>
        <g-button type="primary" icon="thumbs-up"></g-button>
        <g-button type="primary" icon="download" icon-position="left">下载</g-button>
        <g-button type="primary" icon="settings" icon-position="right">设置</g-button>
        <g-button type="primary" icon="write" icon-position="right">编辑</g-button>
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

.g-button {
  margin-right: 1em;
  margin-bottom: 1em;
  margin-top: 1em;
}

.row-component {
  display: inline-flex;
  flex-wrap: wrap;

  &:first-child {

  }
}
</style>