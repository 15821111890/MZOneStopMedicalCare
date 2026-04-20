import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import { useAuthStore } from './stores/auth';
import './styles/main.css';

const app = createApp(App);
app.use(createPinia());

const auth = useAuthStore();
auth.hydrate();

app.use(router);
app.use(i18n);
app.mount('#app');
