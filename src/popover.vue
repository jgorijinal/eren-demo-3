<template>
  <div class="popover">
    <slot name="content"></slot>
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: "GuluPopover",
  props:{

  }

}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
}
</style>