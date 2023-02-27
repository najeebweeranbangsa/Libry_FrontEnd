import { createApp } from 'vue';
import router from './routes';
import './style.css';
import App from './App.vue';
import VueResource from 'vue-resource';

vue.use(VueResource);

createApp(App).use(router).mount('#app')


