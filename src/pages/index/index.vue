<script setup lang="ts">
import Navbar from '@/pages/index/components/Navbar.vue'
import { getHomeBanner, getHomeCategory, getHomeHotPanel } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import Hotpanel from '@/pages/index/components/Hotpanel.vue'
import type { RzzGuessInstance } from '@/types/component'

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
// 获取猜你喜欢组件实例
const guessRef = ref<RzzGuessInstance>()
// 滚动触底
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
</script>

<template>
  <view class="viewport">
    <Navbar />
    <scroll-view
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      scroll-y
      :show-scrollbar="false"
    >
      <RzzSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <Hotpanel :list="hotList" />
      <RzzGuess ref="guessRef" />
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
