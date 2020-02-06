import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SHOW_TABBAR_MUTATION, HIDE_TABBAR_MUTATION } from '@/type'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 共享状态
        isTabbarShow: true,
        comingSoonlist: []
    },
    mutations: {
        // state 是上面的共享状态 payload传过来的参数
        [SHOW_TABBAR_MUTATION] (state, payload) {
            // 显示tabbar
            console.log(payload)
            state.isTabbarShow = payload
        },
        [HIDE_TABBAR_MUTATION] (state, payload) {
            // 影藏tabbar
            console.log(payload)
            state.isTabbarShow = payload
        },
        ComingSoonMutation (state, payload) {
            state.comingSoonlist = payload
        }
    },
    actions: {
        getComingsoonAction (store) {
            // console.log(store)
            // 发起ajax
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=1096795',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15806305334105988735223"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                // commit 给mutation 操作状态
                store.commit('ComingSoonMutation', res.data.data.films)
                // console.log(res.data.data)
            })
        }
    },
    modules: {
    },
    getters: {
        filterCoingSoonList (state) {
            // 获取前五个
            return state.comingSoonlist.filter((item, index) => index < 5)
        }
    }
})
