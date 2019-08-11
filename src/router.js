import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: { name: 'demo1' },
            children: [
                {
                    path: 'demo1',
                    name: 'demo1',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo1.vue')
                },
                {
                    path: 'demo2',
                    name: 'demo2',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo2.vue')
                },
                {
                    path: 'demo3',
                    name: 'demo3',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo3.vue')
                },
                {
                    path: 'demo4',
                    name: 'demo4',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo4.vue')
                },
                {
                    path: 'demo5',
                    name: 'demo5',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo5.vue')
                },
                {
                    path: 'demo6',
                    name: 'demo6',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo6.vue')
                },
                {
                    path: 'demo7',
                    name: 'demo7',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo7.vue')
                },
                {
                    path: 'demo8',
                    name: 'demo8',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo8.vue')
                },
                {
                    path: 'demo9',
                    name: 'demo9',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo9.vue')
                },
                {
                    path: 'demo10',
                    name: 'demo10',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo10.vue')
                },
                {
                    path: 'demo11',
                    name: 'demo11',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo11.vue')
                },
                {
                    path: 'demo12',
                    name: 'demo12',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo12.vue')
                },
                {
                    path: 'demo13',
                    name: 'demo13',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo13.vue')
                },
                {
                    path: 'demo14',
                    name: 'demo14',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo14.vue')
                },
                {
                    path: 'demo15',
                    name: 'demo15',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo15.vue')
                },
                {
                    path: 'demo16',
                    name: 'demo16',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo16.vue')
                },
                {
                    path: 'demo17',
                    name: 'demo17',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo17.vue')
                },
                {
                    path: 'demo18',
                    name: 'demo18',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo18.vue')
                },
                {
                    path: 'demo19',
                    name: 'demo19',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo19.vue')
                },
                {
                    path: 'demo20',
                    name: 'demo20',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo20.vue')
                },
                {
                    path: 'demo21',
                    name: 'demo21',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo21.vue')
                },
                {
                    path: 'demo22',
                    name: 'demo22',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo22.vue')
                },
            ]
        }
    ]
})
