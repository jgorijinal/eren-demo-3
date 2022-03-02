<template>
  <div class="g-slide" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
       @touchstart="onTouchstart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <div class="g-slide-window">
      <slot></slot>
    </div>
    <div class="dots-wrapper">
      <span v-for="n in childrenLength" class="dots" :key="n" :class="{active:selectedIndex === n-1}"
            @click="select(n-1)"></span>
    </div>
    <div class="actions" v-if="arrows">
      <span class="before" @click="select(selectedIndex-1)"><g-icon name="before"></g-icon></span>
      <span class="after" @click="select(selectedIndex+1)"><g-icon name="after"></g-icon></span>
    </div>
  </div>

</template>

<script>
import Icon from './icon'

export default {
  name: "Carousel",
  components: {'g-icon': Icon},
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined
    }
  },
  props: {
    selected: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 4
    },
    arrows: {
      type: Boolean,
      default: false
    },
    fade:{
      type:Boolean,
      default:false
    }
  },
  computed: {
    selectedIndex() {
      let names = this.items.map(vm => vm.name)
      return names.indexOf(this.selected) || 0
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === 'GuluSlideItem')
    }
  },
  mounted() {
    this.updateChildren()
    if (this.autoPlay) {
      this.playAutomatically()
    }
    this.lastSelectedIndex = this.selectedIndex
    this.childrenLength = this.$children.filter(vm => vm.$options.name === 'GuluSlideItem').length

    if(this.fade){
      this.items.forEach(vm => vm.fade = true)
    }
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    onMouseEnter() {
      this.pause()
    },
    pause() {
      window.clearTimeout(this.timerId)
      this.timerId = null
    },
    onMouseLeave() {
      if(this.autoPlay){
        this.playAutomatically()
      }


    },
    playAutomatically() {
      if (this.timerId) {
        return
      }
      let names = this.items.map(vm => vm.name)   //name的数组
      let length = names.length                       //name个数
      //初始的name的index
      let run = () => {
        //用setTimeout 模拟 setInterval
        let index = names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.lastSelectedIndex = newIndex            // *记录*
        if (newIndex === length) {
          newIndex = 0
        }
        this.select(newIndex)
        this.timerId = setTimeout(run, this.interval * 1000)
      }
      this.timerId = setTimeout(run, this.interval * 1000)
    },
    getSelected() { //一开始获取selected
      let first = this.items[0]
      return (this.selected || first.name)
    },
    updateChildren() {
      let selected = this.getSelected()
      let names = this.items.map(vm => vm.name)
      this.items.forEach(vm => {
        let newIndex = names.indexOf(selected)
        vm.reverse = newIndex < this.lastSelectedIndex
        this.$nextTick(() => {
          vm.selected = selected;
        })
      })
    },
    select(index) {
      let names = this.items.map(vm => vm.name)
      this.lastSelectedIndex = this.selected
      if (index === names.length) {
        index = 0
      }
      if (index === -1) {
        index = names.length - 1
      }
      this.$emit('update:selected', names[index])
    },
    onTouchstart(e) {
      this.pause()
      this.startTouch = e.touches[0]
    },
    onTouchMove(e) {

    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0]
      let {clientX: x2, clientY: y2} = endTouch
      let {clientX: x1, clientY: y1} = this.startTouch
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))    //斜边
      let deltaY = Math.abs(y2 - y1)
      let rate = distance / deltaY
      if (rate > 1.5) {
        if (x2 > x1) {    //左
          this.select(this.selectedIndex - 1)
        } else {
          this.select(this.selectedIndex + 1)
        }
      }
      if(document.documentElement.clientWidth <= 578 && this.autoPlay) {
        this.playAutomatically()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.g-slide {
  position: relative;

  .g-slide-window {
    position: relative;
    overflow: hidden;
  }

  .dots-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);

    .dots {
      transition: all 0.2s;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      background: #bbbbbb;
      border-radius: 50%;
      opacity: 0.77;

      &:hover {
        cursor: pointer;
        transform: scale(1.2)
      }

      &.active {
        opacity: 1;
        background: #625f5f;
      }
    }
  }

  .before, .after {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    .icon {
      transition: all 0.2s;
      font-size: 2.5em;
      opacity: 0.5;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .before {
    left: 2em;
  }

  .after {
    right: 2em;
  }

}

</style>