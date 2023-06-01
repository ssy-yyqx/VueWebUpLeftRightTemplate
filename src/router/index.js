import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '空气', icon: 'dashboard' }
    }]
  },
  {
    path: '/WaterQuantity',
    component: Layout,
    name: 'WaterQuantity',
    children: [
      {
        path: 'WaterQuantity',
        name: 'WaterQuantity',
        component: () => import('@/views/WaterQuantity/index'),
        meta: { title: '水质量', icon: 'monitor' }
      }
    ]
  },
  {
    path: '/AcidRain',
    component: Layout,
    redirect: '/AcidRain/AcidRain',
    name: 'AcidRain',
    meta: { title: '酸雨', icon: 'dataSend' },
    children: [
      {
        path: 'AcidRain',
        name: 'AcidRain',
        component: () => import('@/views/AcidRain/AcidRain/index'),
        meta: { title: '酸雨', icon: '' }
      },
      {
        path: 'DataStatistic',
        name: 'DataStatistic',
        component: () => import('@/views/AcidRain/DataStatistic/index'),
        meta: { title: '数据统计', icon: '' }
      }
    ]
  },
  {
    path: '/DataReceive',
    component: Layout,
    redirect: '/Ecology/Ecology',
    name: 'Ecology',
    meta: { title: '生态', icon: 'dataReceive' },
    children: [
      {
        path: 'Ecology',
        name: 'Ecology',
        component: () => import('@/views/Ecology/Ecology/index'),
        meta: { title: '生态', icon: '' }
      },
      {
        path: 'StatisticPage1',
        name: 'StatisticPage1',
        component: () => import('@/views/Ecology/StatisticPage/statisticPage1'),
        meta: { title: '土地利用面积分类统计1', icon: '' }
      },
      {
        path: 'StatisticPage2',
        name: 'StatisticPage2',
        component: () => import('@/views/Ecology/StatisticPage/statisticPage2'),
        meta: { title: '土地利用面积分类统计2', icon: '' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
