
const cloud = require('wx-server-sdk')

cloud.init({
  env:"yh-family"//这是云环境id
})

exports.main = async (event, context) => {
  const OPENID = cloud.getWXContext();
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        touser: OPENID,
        page: 'pages/index/index',
        data: {
          time4: {
            value: time
          },
          thing2: {
            value: '点击登录'
          },
          thing3: {
            value: '小程序'
          },
          phrase: {
            value: '已登录'
          },
          thing5: {
            value: '欢迎登录'
          }
        },
        templateId: 'lwtYk0b2_nenzv8j-XrNa4LLDurwVMpPv3qgJfuq5N4',
      })
      
    return result
  } catch (err) {
    return err
  }
}