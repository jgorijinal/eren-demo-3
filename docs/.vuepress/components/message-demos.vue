<template>
  <div>
    <g-demo>
      <template v-slot:title>

      </template>
      <template v-slot:description>
      </template>
      <template v-slot:component>
        <g-button @click="">上方弹出</g-button>
        <g-button @click="">中间弹出</g-button>
        <g-button @click="">下方弹出</g-button>
      </template>
      <template v-slot:code>
        <pre><code>{{ content1 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>

      </template>
      <template v-slot:description>

      </template>
      <template v-slot:component>
        <div>
          <g-button @click=""></g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content2 }}</code></pre>
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>

      </template>
      <template v-slot:description>

      </template>
      <template v-slot:component>
        <div>
          <g-button @click="onClickButtonEnableHtml"></g-button>
        </div>
      </template>
      <template v-slot:code>
        <pre><code>{{ content3 }}</code></pre>
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Message from '../../../src/message.vue'
import Button from '../../../src/button.vue'
import Vue from "vue";
import plugin from "../../../src/plugin";
Vue.use(plugin)
export  default {
  components:{
    'g-demo':Demo,
    'g-message':Message,
    'g-button':Button
  },
  data(){
    return {
      content1:`

      `.replace(/^ {8}/gm, '').trim(),
      content2:`

      `.replace(/^ {8}/gm, '').trim(),
      content3:`

      `.replace(/^ {8}/gm, '').trim(),
    }
  },
  methods: {

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