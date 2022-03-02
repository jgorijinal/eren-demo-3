<template>
  <transition name="slide" >
    <div class="g-slide-item" v-if="visible" :class="{'reverse':reverse , 'fade':fade}" >
      <slot></slot>
    </div>
  </transition>

</template>

<script>
export default {
  name: "GuluSlideItem",
  data(){
    return {
      selected:undefined,
      reverse:false,
      fade:false           //渐变
    }
  },
  props:{
    name:{
      type:String,
      required:true
    }
  },
  computed:{
    visible (){
      return this.selected === this.name;
    }
  }

}
</script>

<style lang="scss" scoped>
.g-slide-item {
}

.slide-enter-active {
  transition: all 0.3s ease;

}

.slide-leave-active {
  transition: all 0.35s ease;
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
}
.slide-enter{
  transform:translateX(100%) ;

}
.slide-leave-to {
  transform: translateX(-100%) ;
}
.slide-enter.reverse {
  transform:translateX(-100%)
}
.slide-leave-to.reverse{
  transform:translateX(100%);
}
.slide-enter.fade {
  transform: translateX(0);
  opacity: 0;
}
.slide-leave-to.fade {
  transform: translateX(0);
  opacity: 0;
}
</style>