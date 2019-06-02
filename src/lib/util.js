// 与业务结合的工具方法

/**
 * set page title
 * @param {document's title} title
 */
export const setTitle = (title) => {
  window.document.title = title || 'admin'
}
