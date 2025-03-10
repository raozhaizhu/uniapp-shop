import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'
// 商品详情

// GET/goods
// 规格集合需要和skus集合下的specs顺序保持一致
/**
 * 商品详情
 * @param id 商品id
 * @returns
 */

export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: `/goods`,
    data: {
      id,
    },
  })
}
