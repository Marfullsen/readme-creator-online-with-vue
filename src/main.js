import { createApp } from 'vue'
import router from "./router/index"
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
