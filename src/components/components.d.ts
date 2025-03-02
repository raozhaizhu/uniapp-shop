import 'vue'
import RzzSwiper from './RzzSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    RzzSwiper: typeof RzzSwiper
  }
}
