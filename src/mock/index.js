import Mock from 'mockjs'
import { getUserInfo } from './response/user'
Mock.setup({
  timeout: 500
})
Mock.mock('/api/get', getUserInfo)

export default Mock
