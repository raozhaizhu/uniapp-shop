// 分类列表-小程序
import { http } from '@/utils/http'
import type { CategoryTopItem } from '@/types/category'
// GET/category/top
/**
 *
 */

export const getCategoryTopAPI = async () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
