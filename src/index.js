import Vue from 'vue';
import Main from './templates/Main.vue';
import Nav from './templates/Nav.vue';
import VueRouter from 'vue-router';
import { routes } from './js/routes.js';
import './styles/main.scss';

// Routes
Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes,
    mode: 'history' //style routes without hash
});

// Nav component
Vue.component('cmp-nav', Nav);

new Vue({
    el: '#nav',
    router: router,
    render: h =>h(Main)
})