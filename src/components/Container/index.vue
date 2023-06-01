<template>
  <div class="main-section">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .main-section{
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>
