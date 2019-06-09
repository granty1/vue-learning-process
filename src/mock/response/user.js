import Mock from 'mockjs'
const Random = Mock.Random
export const getUserInfo = (options) => {
  const template = {
    'data|10': [
      {
        'str|2-3': '@string',
        'age|+2': 19,
        'num|10-20': 0,
        'success|1': true,
        email: Random.email(),
        date: Random.date('yyyy-MM-dd'),
        img: Random.image('100x100', '#00ff00', '.Grant'),
        color: Random.color()
      }
    ]
  }
  return Mock.mock(template)
}
