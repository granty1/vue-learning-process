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
