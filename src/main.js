/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
// Use calendar defaults (optional)
// Composables
import { createApp } from 'vue'

// calendar
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import router from './routes';

const app = createApp(App)
registerPlugins(app)
app.use(VCalendar, {})
app.use(router)
app.mount('#app')
