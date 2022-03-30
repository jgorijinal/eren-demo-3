<template>
  <div>
    <g-demo>
      <template v-slot:title>
        1. 基础用法
      </template>
      <template v-slot:description>
        适用广泛的基础用法。可以通过 <code>:selected.sync</code> 属性来指定当前选中的轮播图。
      </template>
      <template v-slot:component>
        <g-carousel class="wrapper" :selected.sync="selectedCarousel1">
          <g-carousel-item name="1">
            <div class="box" >1</div>
          </g-carousel-item>
          <g-carousel-item name="2">
            <div class="box" >2</div>
          </g-carousel-item>
          <g-carousel-item name="3">
            <div class="box" >3</div>
          </g-carousel-item>
          <g-carousel-item name="4">
            <div class="box" >4</div>
          </g-carousel-item>
        </g-carousel>
      </template>
      <template v-slot:code>
          {{ content1 }}
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        2. 自定义箭头
      </template>
      <template v-slot:description>
        点击箭头展示。可用 <code>arrows</code>设置是否选用箭头展示。
      </template>
      <template v-slot:component>
        <g-carousel class="wrapper" :selected.sync="selectedCarousel2" arrows >
          <g-carousel-item name="1">
            <div class="box" >1</div>
          </g-carousel-item>
          <g-carousel-item name="2">
            <div class="box" >2</div>
          </g-carousel-item>
          <g-carousel-item name="3">
            <div class="box">3</div>
          </g-carousel-item>
          <g-carousel-item name="4">
            <div class="box">4</div>
          </g-carousel-item>
        </g-carousel>
      </template>
      <template v-slot:code>
       {{ content2 }}
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        3.自动切换
      </template>
      <template v-slot:description>
        定时切换下一张。可用 <code>auto-play</code>设置是否自动播放 , 调整时间自动切换的时间间隔<code>interval</code>，单位为秒 ，默认为3秒。
      </template>
      <template v-slot:component>
        <g-carousel class="wrapper" :selected.sync="selectedCarousel3" auto-play :interval="3">
          <g-carousel-item name="1">
            <div class="box" >1</div>
          </g-carousel-item>
          <g-carousel-item name="2">
            <div class="box" >2</div>
          </g-carousel-item>
          <g-carousel-item name="3">
            <div class="box" >3</div>
          </g-carousel-item>
          <g-carousel-item name="4">
            <div class="box" >4</div>
          </g-carousel-item>
        </g-carousel>
      </template>
      <template v-slot:code>
        {{ content3 }}
      </template>
    </g-demo>

    <g-demo>
      <template v-slot:title>
        4.渐变
      </template>
      <template v-slot:description>
        切换效果为渐显。 可用 <code>fade</code>设置是否为渐变效果。
      </template>
      <template v-slot:component>
        <g-carousel class="wrapper" :selected.sync="selectedCarousel4" fade>
          <g-carousel-item name="1">
            <div class="box" >1</div>
          </g-carousel-item>
          <g-carousel-item name="2">
            <div class="box" >2</div>
          </g-carousel-item>
          <g-carousel-item name="3">
            <div class="box">3</div>
          </g-carousel-item>
          <g-carousel-item name="4">
            <div class="box">4</div>
          </g-carousel-item>
        </g-carousel>
      </template>
      <template v-slot:code>
        {{ content4 }}
      </template>
    </g-demo>
  </div>
</template>
<script>
import Demo from '../../../src/demo.vue'
import Carousel from '../../../src/carousel.vue'
import CarouselItem from '../../../src/carousel-item.vue'
export  default {
  components:{
    'g-demo':Demo,
    'g-carousel':Carousel,
    'g-carousel-item':CarouselItem,
  },
  data(){
    return {
      selectedCarousel1:'1',
      selectedCarousel2:'2',
      selectedCarousel3:'3',
      selectedCarousel4:'4',
      content1:`
<g-carousel class="wrapper" :selected.sync="selectedCarousel1">
  <g-carousel-item name="1">
    <div class="box" >1</div>
  </g-carousel-item>
  <g-carousel-item name="2">
    <div class="box" >2</div>
  </g-carousel-item>
  <g-carousel-item name="3">
    <div class="box" >3</div>
  </g-carousel-item>
  <g-carousel-item name="4">
    <div class="box" >4</div>
  </g-carousel-item>
</g-carousel>

<style scoped>
   .box {
       width: 100%;
       height: 300px;
       display: flex;
       font-size: 50px;
       justify-content: center;
       align-items: center;
       background: #2c3e50;
    }
</style>
      `,
      content2:`
<g-carousel class="wrapper" :selected.sync="selectedCarousel2" arrows >
  <g-carousel-item name="1">
    <div class="box" >1</div>
  </g-carousel-item>
  <g-carousel-item name="2">
    <div class="box" >2</div>
  </g-carousel-item>
  <g-carousel-item name="3">
    <div class="box">3</div>
  </g-carousel-item>
  <g-carousel-item name="4">
    <div class="box">4</div>
  </g-carousel-item>
</g-carousel>
<style scoped>
   .box {
       width: 100%;
       height: 300px;
       display: flex;
       font-size: 50px;
       justify-content: center;
       align-items: center;
       background: #2c3e50;
    }
</style>
      `,
      content3:`
<g-carousel class="wrapper" :selected.sync="selectedCarousel3" auto-play :interval="3">
  <g-carousel-item name="1">
    <div class="box" >1</div>
  </g-carousel-item>
  <g-carousel-item name="2">
    <div class="box" >2</div>
  </g-carousel-item>
  <g-carousel-item name="3">
    <div class="box" >3</div>
  </g-carousel-item>
  <g-carousel-item name="4">
    <div class="box" >4</div>
  </g-carousel-item>
</g-carousel>
<style scoped>
   .box {
       width: 100%;
       height: 300px;
       display: flex;
       font-size: 50px;
       justify-content: center;
       align-items: center;
       background: #2c3e50;
    }
</style>
      `,
      content4:`
<g-carousel class="wrapper" :selected.sync="selectedSlide3" fade>
    <g-carousel-item name="1">
        <div class="box" >1</div>
    </g-carousel-item>
    <g-carousel-item name="2">
        <div class="box" >2</div>
    </g-carousel-item>
    <g-carousel-item name="3">
        <div class="box">3</div>
    </g-carousel-item>
    <g-carousel-item name="4">
        <div class="box">4</div>
    </g-carousel-item>
</g-carousel>
<style scoped>
   .box {
       width: 100%;
       height: 300px;
       display: flex;
       font-size: 50px;
       justify-content: center;
       align-items: center;
       background: #2c3e50;
    }
</style>
      `,

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
.box {
  width: 100%;
  height: 300px;
  display: flex;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  background: #2c3e50;
  color: white;
}
</style>