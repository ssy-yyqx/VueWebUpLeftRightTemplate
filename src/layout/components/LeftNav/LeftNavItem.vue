<template>
  <div>
    <template v-if="item.children && item.children.length > 0">
      <el-submenu :index="item.routerName">
        <template slot="title">
          <i class="el-icon-location" />
          <span>{{ item.name }}</span>
        </template>
        <left-nav-item
          v-for="child in item.children"
          :key="child.id"
          :item="child"
        />
      </el-submenu>
    </template>
    <template v-else>
      <el-menu-item :index="item.routerName">
        <i class="el-icon-menu" />
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'LeftNavItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
