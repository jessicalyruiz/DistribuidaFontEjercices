import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/estilos.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createApp(App).use(router).mount('#app')
