import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/plugins/global/plugins.bundle.css'
import '@/assets/css/style.bundle.css'
import LoadScript, {loadScript} from "vue-plugin-load-script";
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(LoadScript);
app.use(router)

app.mount('#app');

