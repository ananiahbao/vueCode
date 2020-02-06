import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
// 引入vue-touch
var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(Mint)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
