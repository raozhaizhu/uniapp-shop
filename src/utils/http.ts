/*
 * 添加拦截器:
 * 拦截文件上传
 * 拦截request请求
 * TODO:
 * 1. 非 http 开头需要拼接地址
 * 2. 请求超时
 * 3. 添加小程序端请求头标识
 * 4. 请求token标识

*/

import { useMemberStore } from '@/stores'

// 基础配置
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 请求超时
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4. 请求token标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      console.log('添加token头:', token) // 添加调试日志
      options.header.Authorization = `${token}` // 修改token格式
    }

    // 打印完整请求信息
    console.log('完整请求配置:', options)
  },
}

// 注册拦截器
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
