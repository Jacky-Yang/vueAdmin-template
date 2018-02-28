import request from '@/utils/request'

export function fetchList(query) {
  return request.get('/sysset/user/list', { params: query })
}

export function createUser(data) {
  return request.post('/sysset/user/create', data)
}

export function updateUser(data) {
  return request.post('/sysset/user/update', data)
}

export function deleteUser(data) {
  return request.post('/sysset/user/delete', data)
}
