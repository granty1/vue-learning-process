import axios from './index'

export const getUserInfo = () => {
  return axios.request({
    url: '/api/get',
    method: 'post'
  })
}

export const loginApi = (entity) => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: entity
  })
}

export const authorizationApi = () => {
  return axios.request({
    url: '/authorization',
    method: 'get'
  })
}
