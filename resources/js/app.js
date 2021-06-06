require('./bootstrap');
import Vue from 'vue'
import App from './vue/app.vue';
import router from './vue/router/index';
import VueRouter from 'vue-router';

window.Vue = require('vue');

Vue.use(VueRouter);


const app = new Vue({
    el : '#app',
    router : new VueRouter(router),
    components : {App}
});