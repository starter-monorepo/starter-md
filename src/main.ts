import { createApp } from 'vue'
import './style.css'
import 'uno.css'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

import App from './App.vue'


const router = createRouter({
    routes,
    history: createWebHistory()
})
createApp(App).use(router).mount('#app')
