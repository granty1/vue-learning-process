import Mock from 'mockjs'

export const getTableData = () => {
  const template = {
    'data|10': [
      {
        name: '@name',
        'age|18-25': 0,
        email: '@email'
      }
    ]
  }
  return Mock.mock(template)
}

export const getFileList = () => {
  const template = {
    'data|35': [
      {
        'name|5':'@cword',
        'creat_time':'@datetime',
        'folder_id|6-10':0,
        'id|+1': 10000
      }
    ]
  }
  return Mock.mock(template)
}

export const getFolderList = () => {
  const template = {
    data: [
      {
        'name|2':'@string',
        'creat_time':'@datetime',
        'folder_id':6,
        'id': 7
      },
      {
        'name|2':'@string',
        'creat_time':'@datetime',
        'folder_id':7,
        'id': 8
      },
      {
        'name|2':'@string',
        'creat_time':'@datetime',
        'folder_id':6,
        'id': 5
      },
      {
        'name|2':'@string',
        'creat_time':'@datetime',
        'folder_id':8,
        'id': 9
      },
      {
        'name|2':'@string',
        'creat_time':'@datetime',
        'folder_id':0,
        'id': 6
      }
    ]
  }
  return Mock.mock(template)
}
