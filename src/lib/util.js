import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'
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
/**
 * put file into folder
 * @param folderList
 * @param fileList
 */
export const putFileInFolder = (folderList, fileList) => {
  const folderListCloned = clonedeep(folderList)
  const fileListCloned = clonedeep(fileList)
  return folderListCloned.map(item => {
    const folderId = item.id
    let index = fileListCloned.length
    while (--index >= 0){
      const fileItem = fileListCloned[index]
      if (fileItem.folder_id === folderId){
        const file = fileListCloned.splice(index, 1)[0]
        file.title = file.name
        if (item.children) item.children.push(file)
        else item.children = [file]
      }
    }
    item.type = 'folder'
    return item
  })
}

export const transferFolderToTree = folderList => {
  if (!folderList.length) return []
  const folderListCloned = clonedeep(folderList)
  const handle = id => {
    let arr = []
    folderListCloned.forEach(folder => {
      if (folder.folder_id === id) {
        const children = handle(folder.id)
        if (folder.children) folder.children = [].concat(folder.children, children)
        else folder.children = children
        folder.title = folder.name
        arr.push(folder)
      }
    })
    return arr
  }
  return handle(0)
}
