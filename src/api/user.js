import axios from './index'

export const getUserInfo = () => {
  return axios.request({
    url: '/api/get',
    method: 'post'
  })
}
