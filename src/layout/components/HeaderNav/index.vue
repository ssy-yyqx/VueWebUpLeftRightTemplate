<template>
  <section class="header-section">
    <div class="header-section__logo">
      web上下 + 上左右布局模板
    </div>
    <div class="header-section__nav">
      <div
        v-for="(item, index) in menu"
        :key="item.id"
        class="nav-item"
        :class="activeMenu===item.routerName ? 'nav-item-active' : ''"
        @click="onHandleChangeMenu(item, index)"
      >
        <div class="nav-item__img">
          <svg-icon :icon-class="item.image" />
        </div>
        <div class="nav-item__text">{{ item.name }}</div>
      </div>
    </div>
    <div class="header-section__userinfo">
      <div class="userinfo-avatar">
        <svg-icon icon-class="user" />
      </div>
      <div class="userinfo-name">
        <el-popover
          placement="bottom"
          width="160"
          trigger="hover"
        >
          <el-button type="text">退出</el-button>
          <div slot="reference">系统管理员&nbsp;&nbsp;<i class="el-icon-arrow-down" /></div>
        </el-popover>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderNav',
  data() {
    return {
      activeMenu: ''
    }
  },
  computed: {
    ...mapGetters([
      'menu'
    ])
  },
  created() {
    // 设置当前选中的头部菜单
    console.log(this.$route.matched)
    this.activeMenu = this.$route.matched[0].name
    // 设置左侧菜单
    this.setLeftMenuList(this.activeMenu)
  },
  methods: {
    setLeftMenuList(routerName) {
      let currentLeftMenuList
      this.menu.every(item => {
        currentLeftMenuList = item.children
        return item.routerName !== routerName
      })
      // 设置左侧菜单
      if (currentLeftMenuList && currentLeftMenuList.length > 0) {
        this.$store.dispatch('user/setLeftMenu', currentLeftMenuList)
      } else {
        this.$store.dispatch('user/setLeftMenu', [])
      }
    },
    // 切换菜单
    onHandleChangeMenu(menu, index) {
      this.activeMenu = menu.routerName
      if (menu.children && menu.children.length > 0) {
        this.$store.dispatch('user/setLeftMenu', menu.children)
      } else {
        this.$store.dispatch('user/setLeftMenu', [])
      }
      this.$router.push({ name: menu.routerName })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 20px;
    background-color: #2AAA8F;
    &__logo{
      color: #FFFFFF;
      font-weight: bold;
      font-size: 18px;
    }
    &__nav{
      display: flex;
      .nav-item{
        cursor: pointer;
        padding: 10px 20px;
        text-align: center;
        color: #FFFFFF;
        height: 60px;
        position: relative;
        margin: 0 5px;
        &:hover, &-active{
          &::after{
            content: ' ';
            height: 2px;
            width: 100%;
            background-color: #FFFFFF;
            position: absolute;
            bottom: 1px;
            left: 0px;
          }
        }
        &__img{
          margin-bottom: 5px;
        }
        &__text{
          font-size: 14px;
        }
      }
    }
    &__userinfo{
      display: flex;
      padding-left: 20px;
      color: #FFFFFF;
      .userinfo-avatar{
        margin-right: 5px;
      }
    }
  }
</style>
