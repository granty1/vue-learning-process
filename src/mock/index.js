import Mock from 'mockjs'
import { getUserInfo } from './response/user'
import { getTableData, getFileList, getFolderList } from './response/data'
Mock.setup({
  timeout: 500
})
Mock.mock('/api/get', getUserInfo)
Mock.mock('/api/table/data', getTableData)
Mock.mock('/api/get/files', getFileList)
Mock.mock('/api/get/folders', getFolderList)
export default Mock
