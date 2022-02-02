<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluCollapse",
}
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid #999999;
  border-radius: 4px;
}
</style>