import type { PageResult } from './global'
import type { GoodsItem } from './global'

export type SubTypeItem = {
  id: string
  title: string
  goodsItems: PageResult<GoodsItem>
}

export type HotResult = {
  id: string
  bannerPicture: string
  title: string
  subTypes: SubTypeItem[]
}
