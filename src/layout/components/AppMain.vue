<template>
  <section class="app-main">
    <LeftNav v-if="leftMenu && leftMenu.length>0" />
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import LeftNav from './LeftNav/index'
export default {
  name: 'AppMain',
  components: { LeftNav },
  computed: {
    ...mapGetters([
      'leftMenu'
    ]),
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  position: absolute;
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
}
</style>
