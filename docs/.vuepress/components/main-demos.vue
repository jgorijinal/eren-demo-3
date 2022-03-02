<template>
  <div class="home">
    <h1>Eren UI</h1>
    <p class="p1">一个基于Vue的UI组件库</p>
    <p class="p2">开发的目的主要是个人对于技术的学习、研究、总结、其次是探索使用Vue实现常用组件的方法。
    目前制作的组件有Button、Input、Grid、Tabs、Layout、Toast、popover、Collapse、Carousel。</p>
  </div>

</template>
<script>
import PopoverDemos from "./popover-demos";

export default {
  components: {PopoverDemos}
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 0;
}

h1, p {
  margin: 0;
}

.home {
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height:50vh;
  justify-content: space-around;
  h1 {
    font-size: 5em;
    font-family: sans-serif;
    animation: slide-h1 0.8s  ease;
    position: relative;
  }

  p {
    &.p1{
      font-size: 3em;
      position: relative;
      animation: slide-p1 1.2s ease;
    }
    &.p2{
      font-size: 1em;
      position: relative;
      animation: slide-p1 1.5s ease;
    }
  }
  @media(max-width: 578px){
    .home{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

}

@keyframes slide-h1 {
  from {
    left: 500px;
    opacity: 0;
  }
  to {
    left: 0px;
    opacity: 1;
  }
}

@keyframes slide-p1 {
  from {
    left: 500px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}
</style>