import { createApp } from 'vue';
import VeeValidatePlugin from './plugin/validation';
import App from './App.vue';
import './assets/tailwind.css';

const app = createApp(App);

app.use(VeeValidatePlugin);

app.mount('#app');
