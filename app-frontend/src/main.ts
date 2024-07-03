import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import store from './store/store.ts'
import router from './router/router.ts'
import { i18n } from './i18n.ts'

createApp(App).use(store).use(router).use(i18n).mount('#app')