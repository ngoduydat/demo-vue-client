export const userRoute = {
    path: '/about',
    name: 'About',
    component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue')
};
