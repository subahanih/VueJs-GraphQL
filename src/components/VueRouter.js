import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Login.vue'),

        }, {
            path: '/home',
            name: 'home',
            component: () => import('../components/Home.vue')
        }, {
            path: '/**',
            redirect: '/login'
        }
    ]
});