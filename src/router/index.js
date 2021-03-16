import Vue from "vue";
import Router from "vue-router";
import $eventHub from '../components/eventHub'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    hash: false,
    routes: [
        {
            path: '/',
            component: () => import('@/components/frontend/HomePage'),
            meta: {
                layout: 'frontend/default'
            }
        },
        {
            path: '/login',
            component: () => import('@/components/frontend/LoginPage'),
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

router.beforeEach((to, from, next) => {
    if (typeof to.matched[0]?.components.default === 'function') {
        $eventHub.$emit('asyncComponentLoading', to) // Start progress bar
    }
    next()
})

router.afterEach((to, from, next) => {
    $eventHub.$emit('asyncComponentLoaded') // Stop progress bar
    next()
})

export default router
