<script setup lang="ts">
import Navbar from '@/pages/index/components/Navbar.vue'
import { getHomeBanner, getHomeCategory, getHomeHotPanel } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import Hotpanel from '@/pages/index/components/Hotpanel.vue'
import type { RzzGuessInstance } from '@/types/component'
import PageSkeleton from './components/PageSkeleton.vue'
import RzzGuess from '@/components/RzzGuess.vue'
import RzzSwiper from '@/components/RzzSwiper.vue'

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
  hotList.value = res.result
}

const isLoading = ref(false)

// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotPanelData()])
  isLoading.value = false
})
// 获取猜你喜欢组件实例
const guessRef = ref<RzzGuessInstance>()
// 滚动触底
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
//
// 下拉刷新
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 加载数据
  // await getHomeBannerData(), await getHomeCategoryData(), await getHomeHotPanelData()
  // 重置猜你喜欢数据
  guessRef.value?.resetData(),
    await Promise.all([
      getHomeBannerData(),
      getHomeCategoryData(),
      getHomeHotPanelData(),
      guessRef.value?.getMore(),
    ])
  // 结束动画
  isTriggered.value = false
}
</script>

<template>
  <view class="viewport">
    <Navbar />
    <scroll-view
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      scroll-y
      show-scrollbar="false"
    >
      <PageSkeleton v-if="isLoading" />
      <template v-else>
        <RzzSwiper :list="bannerList" />
        <CategoryPanel :list="categoryList" />
        <Hotpanel :list="hotList" />
        <RzzGuess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
