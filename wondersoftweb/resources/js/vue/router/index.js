import Vue from 'vue'
import Home from '../components/Views/Home.vue'
import Contact from '../components/Views/Contact.vue';
import Router from 'vue-router';

Vue.use(Router)


const routes =  [
    { path: '/', component: Home },
    { path: '/contact', component: Contact }
];

const router = new Router({
    routes
})

export default router;