import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    hash: false,
    routes: [
        {
            path: '/',
            component: () => import('../components/frontend/HomePage'),
            meta: {
                layout: 'frontend/default'
            }
        },
        {
            path: '/login',
            component: () => import('../components/frontend/LoginPage'),
            meta: {
                layout: 'frontend/Auth'
            }
        },
        {
            path: '*',
            meta: {
                layout: 'frontend/Error'
            }
        },
    ]
});
