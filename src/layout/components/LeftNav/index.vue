<template>
  <div class="left-nav">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      background-color="#C0E1DD"
      text-color="#333"
      active-text-color="#2AAA8F"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <LeftNavItem v-for="(item) in leftMenu" :key="item.routerName" :item="item" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LeftNavItem from './LeftNavItem'
export default {
  name: 'LeftNav',
  components: { LeftNavItem },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'leftMenu'
    ]),
    activeMenu() {
      return this.$route.name
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      this.$router.push({ name: key })
    }
  }
}
</script>

<style lang="scss" scoped>
  .left-nav{
    width: 270px;
    height: 100%;
    background-color: #E5EFF1;
    overflow-y: auto;
  }
  .el-menu{
    border-right: 0;
  }
</style>
