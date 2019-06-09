import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
  /**
   * 构造器
   * @param {*} baseUrl baseURl
   */
  constructor (baseUrl) {
    baseUrl = baseUrl || baseURL
    this.baseUrl = baseUrl
    this.queue = {}
  }
  /**
   * 获取内部全局配置对象
   */
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
      }
    }
    return config
  }
  /**
   * 通用request method
   * @param {*} options options object
   */
  request (options) {
    const instance = axios.create()
    // 合并，this.config 和 options 对象 ，相同的取 后者
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
  /**
   * 拦截器
   * @param {*} instance axios 对象
   */
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 添加全局 loading 遮罩层
      return config
      // return 之后 请求继续
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      // 关闭 loading 遮罩层
      // 处理res
      return res
    }, error => {
      return Promise.reject(error)
    })
  }
}

export default HttpRequest
