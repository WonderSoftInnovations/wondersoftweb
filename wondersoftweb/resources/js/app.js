require('./bootstrap');
import Vue from 'vue'
import App from './vue/app.vue';
import router from './vue/router/';



const app = new Vue({
    el : 'app',
    router,
    components : {App}
});