// import request from '@/utils/request'

export function login(data) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      data: {
        token: 'admin'
      }
    })
  })
}

export function getInfo(token) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      data: {
        name: 'admin',
        menu: [
          {
            id: '111',
            name: '空气',
            image: 'dashboard',
            routerName: 'Dashboard'
          },
          {
            id: '222',
            name: '水质量',
            image: 'dashboard',
            routerName: 'WaterQuantity'
          },
          {
            id: '333',
            name: '酸雨',
            image: 'dashboard',
            routerName: 'AcidRain',
            children: [
              {
                id: '333_1',
                name: '酸雨',
                image: 'dashboard',
                routerName: 'AcidRain'
              },
              {
                id: '333_2',
                name: '数据统计',
                image: 'dashboard',
                routerName: 'DataStatistic'
              }
            ]
          },
          {
            id: '555',
            name: '生态',
            image: 'dashboard',
            routerName: 'Ecology',
            children: [
              {
                id: '555_1',
                name: '生态',
                image: 'dashboard',
                routerName: 'Ecology'
              },
              {
                id: '555_2',
                name: '土地利用面积分类统计',
                image: 'dashboard',
                routerName: 'StatisticPage1',
                children: [
                  {
                    id: '555_2_1',
                    name: '土地利用面积分类统计1',
                    image: 'dashboard',
                    routerName: 'StatisticPage1'
                  },
                  {
                    id: '555_2_2',
                    name: '土地利用面积分类统计2',
                    image: 'dashboard',
                    routerName: 'StatisticPage2'
                  }
                ]
              }
            ]
          }
        ]
      }
    })
  })
}

export function logout() {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      data: {
        token: ''
      }
    })
  })
}
