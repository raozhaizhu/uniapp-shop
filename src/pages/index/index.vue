<script setup lang="ts">
import Navbar from '@/pages/index/components/Navbar.vue'
import { getHomeBanner } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  console.log('响应数据', res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <Navbar />
  <RzzSwiper :list="bannerList" />
</template>

<style lang="scss">
//
</style>
