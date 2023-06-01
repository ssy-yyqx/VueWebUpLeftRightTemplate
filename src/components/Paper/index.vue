<template>
  <div class="paper-container">
    <div class="paper-header-section">
      <slot />
    </div>
    <div class="paper-content-section">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .paper-container{
    height: 100%;
    padding: 10px;
    background: #ffffff;
    border-radius: 5px;
    .paper-header-section{
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      font-size: 14px;
      display: flex;
      &::before{
        content: ' ';
        height: 14px;
        width: 2px;
        background: #2AAA8F;
        margin-top: 8px;
        margin-right: 5px;
      }
    }
    .paper-content-section{
      height: calc(100% - 50px);
      padding: 10px;
      font-size: 12px;
    }
  }
</style>
