import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 共享状态
        isTabbarShow: true,
        comingSoonlist: []
    },
    mutations: {
        // state 是上面的共享状态 payload传过来的参数
        hideTbbarStateMutation (state, payload) {
            // 显示tabbar
            state.isTabbarShow = payload
        },
        showTbbarStateMutation (state, payload) {
            // 影藏tabbar
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
    }
})
