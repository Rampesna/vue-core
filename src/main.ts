import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/plugins/global/plugins.bundle.css'
import '@/assets/css/style.bundle.css'
import App from './App.vue'
import router from './router'
import {useAuthStore} from "@/stores/auth";

const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
app.use(router)

app.mount('#app');

