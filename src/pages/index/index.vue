<script setup lang="ts">
import Navbar from '@/pages/index/components/Navbar.vue'
import { getHomeBanner, getHomeCategory, getHomeHotPanel } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import Hotpanel from '@/pages/index/components/Hotpanel.vue'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  bannerList.value = res.result
}

const getHomeCategoryData = async () => {
  const res = await getHomeCategory()
  categoryList.value = res.result
}

const getHomeHotPanelData = async () => {
  const res = await getHomeHotPanel()
  console.log('前台热门', res)
  hotList.value = res.result
}

onLoad(() => {
  getHomeBannerData(), getHomeCategoryData(), getHomeHotPanelData()
})
</script>

<template>
  <Navbar />
  <RzzSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <Hotpanel :list="hotList" />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
