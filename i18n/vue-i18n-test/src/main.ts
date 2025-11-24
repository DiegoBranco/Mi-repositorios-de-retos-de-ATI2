import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      welcome: 'Welcome to Vue.js',
      congrats: 'You did it!',
      you_have_built: 'You’ve successfully created a project with',
      whats_next: 'What\'s next?',
    },
    es: {
      welcome: 'Bienvenido a Vue.js',
      congrats: '¡Lo lograste!',
      you_have_built: 'Has creado con éxito un proyecto con',
      whats_next: '¿Qué sigue?',

    }
}})

const app = createApp(App)
app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
