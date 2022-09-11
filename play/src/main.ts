import { createApp } from 'vue'
import { RButton } from '@rising-ui/rising-ui'
import '@rising-ui/components/button/style/index'
import App from './App.vue'

const app = createApp(App)
app.component('RButton', RButton)
app.mount('#app')
