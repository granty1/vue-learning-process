import Mock from 'mockjs'
import { getUserInfo } from './response/user'
import { getTableData } from './response/data'
Mock.setup({
  timeout: 500
})
Mock.mock('/api/get', getUserInfo)
Mock.mock('/api/table/data', getTableData)
export default Mock
