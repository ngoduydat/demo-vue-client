import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routers';
// import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    let isAuthenticated = localStorage.getItem('token') !== null ? true : false;

    if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
        next('/');
    } else if (
        (to.path !== '/login' || to.path !== '/register') &&
        to.matched.some(record => record.meta.requireAuth)
    ) {
        isAuthenticated ? next() : next(`/login?redirect=${to.path}`);
    } else {
        next();
    }
});

export default router;
