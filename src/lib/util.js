import Cookies from 'js-cookie'
// 与业务结合的工具方法

/**
 * set page title
 * @param {document's title} title
 */
export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

/**
 * set token in cookie
 * @param {str} token  
 * @param {str} tokenName 
 */
export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}
/**
 * get token from cookies 
 * @param {*} tokenName 
 */
export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
