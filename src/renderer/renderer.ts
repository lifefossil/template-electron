import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style/index.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
