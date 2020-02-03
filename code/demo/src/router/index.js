import Vue from 'vue'
import Router from 'vue-router'
import Filme from '@/views/Filme.vue'
import Nowplaying from '@/views/Filme/Nowplaying'
import Comingsoon from '@/views/Filme/Comingsoon'
import Detail from '@/views/Detail'
import Cinema from '@/views/Cinema.vue'
import Center from '@/views/Center.vue'

Vue.use(Router)

const routes = [
    {
        path: '/filme',
        component: Filme,
        children: [
            {
                path: 'nowplaying',
                component: Nowplaying
            },
            {
                path: 'comingsoon',
                component: Comingsoon
            },
            {
                path: '/',
                redirect: '/filme/nowplaying'
            }
        ]
    },
    {
        path: '/cinema',
        component: Cinema
    },
    {
        path: '/center',
        // 别名
        alias: '/wode',
        component: Center
    },
    {
        path: '*',
        redirect: '/filme'
    },
    // 动态路由 路由命名
    {
        path: '/details/id=:id',
        name: 'detail',
        component: Detail
    }
]

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

// 全局路由守卫或拦截
// const user = {
//     islogin () {
//         return false
//     }
// }
// router.beforeEach((to, from, next) => {
//     if (to.path === '/center') {
//         if (user.islogin()) {
//             next()
//         } else {
//             next('/center')
//         }
//     } else {
//         next()
//     }
// })
export default router
