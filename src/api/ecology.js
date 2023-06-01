// import request from '@/utils/request'

export function getTableList(params) {
  return new Promise(resolve => {
    const result = {
      code: 200,
      data: [{
        origion: 'YG信息队',
        dataType: '轨道信息',
        receiveTime: '2020-01-03 10:10:55',
        dataStatus: '已接收'
      }],
      msg: 'success'
    }
    resolve(result)
  })
}

// export function getList(params) {
//   return request({
//     url: '/vue-admin-template/table/list',
//     method: 'get',
//     params
//   })
// }
// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
