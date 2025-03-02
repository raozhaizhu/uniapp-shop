<template name="skeleton">
  <scroll-view refresher-enabled="true" scroll-y="true" class="scroll-view scroll-view">
    <view is="components/RzzSwiper">
      <view class="carousel RzzSwiper--carousel">
        <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
          <swiper-item
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(0%, 0px) translateZ(0px);
            "
          >
            <navigator class="navigator RzzSwiper--navigator" hover-class="none">
              <image class="image RzzSwiper--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="indicator RzzSwiper--indicator">
          <text class="dot RzzSwiper--dot active RzzSwiper--active"></text>
          <text class="dot RzzSwiper--dot"></text>
          <text class="dot RzzSwiper--dot"></text>
          <text class="dot RzzSwiper--dot"></text>
          <text class="dot RzzSwiper--dot"></text>
        </view>
      </view>
    </view>
    <view is="pages/index/components/CategoryPanel">
      <view class="category CategoryPanel--category">
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-105 sk-text"
            >居家</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-88 sk-text"
            >锦鲤</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-482 sk-text"
            >服饰</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-507 sk-text"
            >母婴</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-370 sk-text"
            >个护</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-838 sk-text"
            >严选</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-451 sk-text"
            >数码</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-344 sk-text"
            >运动</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-503 sk-text"
            >杂项</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-539 sk-text"
            >品牌</text
          >
        </navigator>
      </view>
    </view>
    <view is="pages/index/components/Hotpanel">
      <view class="panel Hotpanel--panel hot Hotpanel--hot">
        <view class="item Hotpanel--item">
          <view class="title Hotpanel--title">
            <text class="title-text Hotpanel--title-text sk-transparent sk-text-14-2857-837 sk-text"
              >特惠推荐</text
            >
            <text class="title-desc Hotpanel--title-desc sk-transparent sk-text-14-2857-571 sk-text"
              >精选全攻略</text
            >
          </view>
          <navigator class="cards Hotpanel--cards" hover-class="none">
            <image class="image Hotpanel--image sk-image" mode="aspectFit"></image>
            <image class="image Hotpanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item Hotpanel--item">
          <view class="title Hotpanel--title">
            <text class="title-text Hotpanel--title-text sk-transparent sk-text-14-2857-67 sk-text"
              >爆款推荐</text
            >
            <text class="title-desc Hotpanel--title-desc sk-transparent sk-text-14-2857-337 sk-text"
              >最受欢迎</text
            >
          </view>
          <navigator class="cards Hotpanel--cards" hover-class="none">
            <image class="image Hotpanel--image sk-image" mode="aspectFit"></image>
            <image class="image Hotpanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item Hotpanel--item">
          <view class="title Hotpanel--title">
            <text class="title-text Hotpanel--title-text sk-transparent sk-text-14-2857-412 sk-text"
              >一站买全</text
            >
            <text class="title-desc Hotpanel--title-desc sk-transparent sk-text-14-2857-577 sk-text"
              >精心优选</text
            >
          </view>
          <navigator class="cards Hotpanel--cards" hover-class="none">
            <image class="image Hotpanel--image sk-image" mode="aspectFit"></image>
            <image class="image Hotpanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item Hotpanel--item">
          <view class="title Hotpanel--title">
            <text class="title-text Hotpanel--title-text sk-transparent sk-text-14-2857-446 sk-text"
              >新鲜好物</text
            >
            <text class="title-desc Hotpanel--title-desc sk-transparent sk-text-14-2857-785 sk-text"
              >生活加分项</text
            >
          </view>
          <navigator class="cards Hotpanel--cards" hover-class="none">
            <image class="image Hotpanel--image sk-image" mode="aspectFit"></image>
            <image class="image Hotpanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
      </view>
    </view>
    <view is="components/RzzGuess" class="r r">
      <view class="caption RzzGuess--caption">
        <text
          class="text RzzGuess--text sk-transparent sk-text-0-0000-284 sk-text sk-pseudo sk-pseudo-circle"
          >猜你喜欢</text
        >
      </view>
    </view>
  </scroll-view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-637 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-508 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-105 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-88 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-482 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-507 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-370 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-838 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-451 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-344 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-503 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-539 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-837 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-571 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-67 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-337 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-412 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-577 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-446 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-785 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-0-0000-284 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
