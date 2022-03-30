<template>
  <div>
    <g-demo>
      <template v-slot:title>
        1. 基本结构
      </template>
      <template v-slot:description>
        典型的页面布局。
      </template>
      <template v-slot:component>
        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <g-header style="height: 50px; background:lightskyblue;">Header</g-header>
          <g-content style="height: 100px; background:deepskyblue;">Content</g-content>
          <g-footer style="height: 50px; background:lightskyblue;">Footer</g-footer>
        </g-layout>

        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <g-header style="height: 50px; background:lightskyblue;">Header</g-header>
          <g-layout>
            <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">Sider</g-sider>
            <g-content style="height: 100px; background:deepskyblue;">Content</g-content>
          </g-layout>
          <g-footer style="height: 50px; background:lightskyblue;">Footer</g-footer>
        </g-layout>

        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <g-header style="height: 50px; background:lightskyblue;">Header</g-header>
          <g-layout>
            <g-content style="height: 100px; background:deepskyblue;">Content</g-content>
            <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">Sider</g-sider>
          </g-layout>
          <g-footer style="height: 50px; background:lightskyblue;">Footer</g-footer>
        </g-layout>

        <g-layout style="color: white; overflow:hidden;">
          <g-sider style=" background:#ddd; width:200px; color: black;">Sider</g-sider>
          <g-layout>
            <g-header style="height: 50px; background:lightskyblue;">Header</g-header>
            <g-content style="height: 100px; background:deepskyblue;">Content</g-content>
            <g-footer style="height: 50px; background:lightskyblue;">Footer</g-footer>
          </g-layout>
        </g-layout>
      </template>
      <template v-slot:code>
        {{ content1 }}
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Layout from '../../../src/layout.vue'
import Header from '../../../src/header.vue'
import Content from '../../../src/content.vue'
import Sider from '../../../src/sider.vue'
import Footer from '../../../src/footer.vue'

export  default {
  components:{
    'g-demo':Demo,
    'g-layout':Layout,
    'g-header':Header,
    'g-content':Content,
    'g-sider':Sider,
    'g-footer':Footer,

  },
  data(){
    return {
      content1:`
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">Header</g-header>
    <g-content style="height: 100px; background:deepskyblue;">Content</g-content>
    <g-footer style="height: 50px; background:lightskyblue;">Footer</g-footer>
</g-layout>

<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">Header</g-header>
    <g-layout>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">Sider</g-sider>
        <g-content style="height: 100px; background:deepskyblue;">Content</g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">Footer</g-footer>
</g-layout>

<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">Header</g-header>
    <g-layout>
        <g-content style="height: 100px; background:deepskyblue;">Content</g-content>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">Sider</g-sider>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">Footer</g-footer>
</g-layout>

<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-sider style=" background:#ddd; width:200px; color: black;">Sider</g-sider>
    <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">Header</g-header>
        <g-content style="height: 100px; background:deepskyblue;">Content</g-content>
        <g-footer style="height: 50px; background:lightskyblue;">Footer</g-footer>
    </g-layout>
</g-layout>
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
.header, .footer, .content, .sider {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>