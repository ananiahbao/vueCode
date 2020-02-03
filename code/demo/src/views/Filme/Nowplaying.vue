<template>
    <div>
        <ul>
            <!-- <li v-for="data in datalist" :key="data.filmId" @click="handleClick(index)">
                <div class="li-img">
                    <img :src="data.poster" alt="">
                </div>
                <div class="li-title">
                    <h3>{{data.name}}</h3>
                </div>
                <div>
                    <button>购票</button>
                </div>
            </li> -->
            <li  v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <div class="li-img">
                    <img :src="data.poster" alt="">
                </div>
                <div class="li-title">
                    <ul>
                        <li>{{data.name}}</li>
                        <li>观众评分: {{data.grade}}</li>
                        <li>主演：{{data.actors | actorsfilter}}</li>
                        <li>{{data.nation}}|{{data.runtime}}分钟</li>
                    </ul>
                </div>
                <div class="li-btn">
                    <span>购票</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import '@/filter/actorsFilter'
import axios from 'axios'
export default {
    data () {
        return {
            datalist: [],
            actors: []
        }
    },
    mounted () {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2951332',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15806305334105988735223","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            this.datalist = res.data.data.films
        })
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
<style lang="scss" scoped>
ul{
    padding: 15px;
    li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        div{
           float: left;
        }
        img{
            width: 100%;
            max-width: 100%;
        }
        div.li-img{
            width: 66px;
            height: 94px;
            background-color: #ffffff;
            opacity: 1;
            display: block
        }
        div.li-title{
            width: calc(100% - 126px)
        }
        div.li-btn{
            width: 50px;
            height: 100%;
            color: #ff5f16;
            font-size: 13px;
            padding:2px 5px;
            text-align: center;
            display: flex;
            align-items: center;
            span{
                display: block;
                width: 100%;
                height: 25px;
                line-height: 25px;
                border: 1px solid #ff5f16;
                border-radius: 2px;
            }
        }
    }
}
</style>
