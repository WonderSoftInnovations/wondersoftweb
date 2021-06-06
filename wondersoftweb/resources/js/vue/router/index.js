import Home from '../components/Views/Home.vue'
import Contact from '../components/Views/Contact.vue';
import Team from '../components/Views/Team.vue';
import About from '../components/Views/About.vue';

export default {
    mode : 'history',

    routes : [
        {
            path : '/',
            component : Home

        },

        {
            path : '/contact',
            component : Contact
        },

        {
            path : '/team',
            component : Team
        },

        {
            path : '/about',
            component : About
        }
    ]
}