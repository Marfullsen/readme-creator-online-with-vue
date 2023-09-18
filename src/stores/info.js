// stores/info.js
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', {
  state: () => {
    return { 
      typed: [],
      quizVisible: true
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})