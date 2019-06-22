import axios from './index'

export const getTableData = () => {
  return axios.request({
    url: '/api/table/data',
    method: 'post'
  })
}

export const getFilelist = () => {
  return axios.request({
    url: '/api/get/files',
    method: 'post'
  })
}

export const getFolderList = () => {
  return axios.request({
    url: '/api/get/folders',
    method: 'post'
  })
}
