/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import RzzGuess from '@/components/Guess.vue'
import RzzSwiper from '@/components/RzzSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    RzzGuess: typeof RzzGuess
    RzzSwiper: typeof RzzSwiper
  }
}

export type RzzGuessInstance = InstanceType<typeof RzzGuess>
