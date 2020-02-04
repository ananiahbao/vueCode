<template>
    <div>
        <ul>
            <li v-for="data in comingSoonlist" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster" alt="">
                <h3>{{data.name}}</h3>
                <p>主演：{{data.actors | actorsfilter}}</p>
            </li>
        </ul>
    </div>
</template>>
<script>
import '@/filter/actorsFilter'
import { mapState } from 'vuex'
export default {
    mounted () {
        if (this.comingSoonlist.length === 0) {
            // 请求数据 -存储sotre
            this.$store.dispatch('getComingsoonAction', '传去参数')
        } else {
            console.log('使用缓存数据', this.comingSoonlist)
        }
    },
    computed: {
        ...mapState(['comingSoonlist'])
    },
     methods: {
        handleClick (id) {
            // 编程式路由导航
            // this.$router.push(`/details/id=${id}`)
            // 路由命名式跳转
            this.$router.push({ name: 'detail', params: { id: id } })
        }
    }
}
</script>
