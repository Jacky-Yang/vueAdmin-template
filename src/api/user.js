import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/user/list',
//     method: 'get',
//     params
//   })
// }

export function fetchList(query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

// export function fetchArticle() {
//   return request({
//     url: '/article/detail',
//     method: 'get'
//   })
// }

export function fetchUser(pv) {
  return request({
    url: '/user/detail',
    method: 'get',
    params: { pv }
  })
}

export function createUser(data) {
  return request({
    url: '/user/create',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}
