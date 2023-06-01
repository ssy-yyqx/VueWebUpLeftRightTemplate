<template>
  <div class="app-wrapper">
    <HeaderNav />
    <app-main />
  </div>
</template>

<script>
import { HeaderNav, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    HeaderNav,
    AppMain
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #EFF3F6;
  }
</style>
