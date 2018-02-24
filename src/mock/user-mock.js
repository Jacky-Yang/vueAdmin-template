import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    // timestamp: +Mock.Random.date('T'),
    userName: '@name',
    'sex|1': ['MALE', 'FEMALE'],
    email: '@email',
    // price: '@float(1000, 15000, 0, 2)',
    'status|1': ['NOMAIL', 'DELETED', 'LOCKED']
  }))
}

export default {
  fetchList: (query) => {
    const { userName, sex, email, page = 1, limit = 20, sort } = param2Obj(query.url)

    let mockList = List.filter(item => {
      // if (importance && item.importance !== +importance) return false
      if (userName && item.userName.indexOf(userName) < 0) return false
      if (sex && item.sex !== sex) return false
      if (email && item.email.indexOf(email) < 0) return false
      return true
    })

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    
    return {
      code: 20000,
      data: {
        total: mockList.length,
        items: pageList
      }
    }
  }
}
