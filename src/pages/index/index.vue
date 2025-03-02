<script setup lang="ts">
import Navbar from '@/pages/index/components/Navbar.vue'
import { getHomeBanner, getHomeCategory } from '@/services/home'
import type { BannerItem, CategoryItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  bannerList.value = res.result
}

const getHomeCategoryData = async () => {
  const res = await getHomeCategory()
  console.log('前台分类', res)
  categoryList.value = res.result
}

onLoad(() => {
  getHomeBannerData(), getHomeCategoryData()
})
</script>

<template>
  <Navbar />
  <RzzSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
