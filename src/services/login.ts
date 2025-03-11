import { http } from '@/utils/http'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
/**
 * 小程序内测试登录
 * @param phoneNumber 模拟手机号码
 * @returns
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http({
    method: 'POST',
    url: '/login/wxMinSimple',
    data: {
      phoneNumber,
    },
  })
}
