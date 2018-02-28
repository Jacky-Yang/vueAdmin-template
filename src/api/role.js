import request from '@/utils/request'

export function fetchList(query) {
  return request.get('/sysset/role/list', { params: query })
}

export function create(data) {
  return request.post('/sysset/role/create', data)
}

export function update(data) {
  return request.post('/sysset/role/update', data)
}

export function delet(data) {
  return request.post('/sysset/role/delete', data)
}
