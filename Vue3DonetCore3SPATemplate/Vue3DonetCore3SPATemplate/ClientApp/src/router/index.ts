import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/testAPI',
        name: 'testAPI',
        component: () => import('../components/TestWeatherAPI.vue')
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: () => import('../components/SignIn.vue')
    },
    {
        path: '/registration',
        name: 'registration',
        component: () => import('../components/Registration.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../components/Settings.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../components/Admin.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
