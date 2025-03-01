import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义会员信息的类型
type Member = {
  nickname?: string
  token?: string
  [key: string]: any
}

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 明确指定类型
    const profile = ref<Member>()

    // 保存会员信息，登录时使用
    const setProfile = (val: Member) => {
      console.log('设置会员信息：', val) // 添加调试日志
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
      console.log('清理会员信息完成') // 添加调试日志
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          const value = uni.getStorageSync(key)
          console.log('获取存储数据：', key, value) // 添加调试日志
          return value
        },
        setItem(key, value) {
          console.log('设置存储数据：', key, value) // 添加调试日志
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
