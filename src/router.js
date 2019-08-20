import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/demo',
            name: 'demo',
            component: Demo,
            redirect: { name: 'demo1' },
            children: [
                {
                    path: '/demo/demo1',
                    name: 'demo1',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo1.vue')
                },
                {
                    path: '/demo/demo2',
                    name: 'demo2',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo2.vue')
                },
                {
                    path: '/demo/demo3',
                    name: 'demo3',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo3.vue'),
                    children: [
                        {
                            path: 'statistics',
                            name: 'statistics',
                            component: () => import(/* webpackChunkName: "Demo3" */ './components/demo3/Statistics.vue')
                        },
                        {
                            path: 'forecast',
                            name: 'forecast',
                            component: () => import(/* webpackChunkName: "Demo3" */ './components/demo3/Forecast.vue')
                        },
                        {
                            path: 'analyze',
                            name: 'analyze',
                            component: () => import(/* webpackChunkName: "Demo3" */ './components/demo3/Analyze.vue')
                        },
                        {
                            path: 'release',
                            name: 'release',
                            component: () => import(/* webpackChunkName: "Demo3" */ './components/demo3/Release.vue')
                        }
                    ]
                },
                {
                    path: '/demo/demo4',
                    name: 'demo4',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo4.vue')
                },
                {
                    path: '/demo/demo5',
                    name: 'demo5',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo5.vue')
                },
                {
                    path: '/demo/demo6',
                    name: 'demo6',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo6.vue')
                },
                {
                    path: '/demo/demo7',
                    name: 'demo7',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo7.vue')
                },
                {
                    path: '/demo/demo8',
                    name: 'demo8',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo8.vue')
                },
                {
                    path: '/demo/demo9',
                    name: 'demo9',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo9.vue')
                },
                {
                    path: '/demo/demo10',
                    name: 'demo10',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo10.vue')
                },
                {
                    path: '/demo/demo11',
                    name: 'demo11',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo11.vue')
                },
                {
                    path: '/demo/demo12',
                    name: 'demo12',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo12.vue')
                },
                {
                    path: '/demo/demo13',
                    name: 'demo13',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo13.vue')
                },
                {
                    path: '/demo/demo14',
                    name: 'demo14',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo14.vue')
                },
                {
                    path: '/demo/demo15',
                    name: 'demo15',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo15.vue')
                },
                {
                    path: '/demo/demo16',
                    name: 'demo16',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo16.vue')
                },
                {
                    path: '/demo/demo17',
                    name: 'demo17',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo17.vue')
                },
                {
                    path: '/demo/demo18',
                    name: 'demo18',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo18.vue')
                },
                {
                    path: '/demo/demo19',
                    name: 'demo19',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo19.vue')
                },
                {
                    path: '/demo/demo20',
                    name: 'demo20',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo20.vue')
                },
                {
                    path: '/demo/demo21',
                    name: 'demo21',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo21.vue')
                },
                {
                    path: '/demo/demo22',
                    name: 'demo22',
                    component: () => import(/* webpackChunkName: "Demo" */ './views/pages/Demo22.vue')
                }
            ]
        }
    ]
})
