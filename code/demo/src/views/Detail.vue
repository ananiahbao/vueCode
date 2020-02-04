<template>
    <div v-if="filmInfo">
        <div class="film">
            <!-- 返回 -->
            <div  class="film-back">
                <div class="goback">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
                </div>
            </div>
            <!-- 图片 -->
            <div class="detail-pic">
                <img :src="filmInfo.poster" alt="" class="poster-img">
            </div>
            <!-- 详情文字 -->
            <div class="detail-title">
                <div class="detail-title-tit">
                     <div class="detail-title-name">
                        <span class="name">{{filmInfo.name}}</span>
                        <span class="item">{{filmInfo.filmType.name}}</span>
                    </div>
                    <div class="detail-title-grae">
                        <span class="grade">{{filmInfo.grade}}</span>
                        <span class="graded-text"> 分</span>
                    </div>
                </div>
                <div class="detail-title-category">
                    {{filmInfo.category}}
                </div>
                <div class="detil-title-time">
                    {{filmInfo.premiereAt}}
                </div>
                <div class="detail-title-nation">
                    {{filmInfo.nation}}|{{filmInfo.runtime}}分钟
                </div>
                <div class="detail-title-synopsis">
                    {{filmInfo.synopsis}}
                </div>
            </div>
            <div class="actors">
                <div class="actors-title">
                    <span class="actors-title-text">演职人员</span>
                </div>
                <filmSwiper perview="3" swipername="detail_actors">
                    <div class="swiper-slide" v-for="(item,index) in filmInfo.actors" :key="index">
                        <img :src="item.avatarAddress" alt="" />
                    </div>
                </filmSwiper>
            </div>

                <h3>剧照</h3>
                <filmSwiper perview="2" swipername="detail_photos">
                    <div class="swiper-slide" v-for="(item,index) in filmInfo.photos" :key="index">
                        <img :src="item" alt="" />
                    </div>
                </filmSwiper>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import filmSwiper from './Detail/detailSwiper'
// import bus from '@/bus'
export default {
    data () {
        return {
            filmInfo: null
        }
    },
    components: {
        filmSwiper
    },
    mounted () {
        // 获取动态路由的参数this.$route
        // console.log(this.$route.params.id)
        axios({
            url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=6201918`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15806305334105988735223","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res => {
            this.filmInfo = res.data.data.film
            console.log(res.data.data.film)
        })
        window.onscroll = this.handleScroll

        // 影藏底部栏
        // bus.$emit('listen', false)
        this.$store.commit('hideTbbarStateMutation', false)
    },
    methods: {
        handleScroll () {
            console.log(document.documentElement.scrollTop)
        }
    },
    destroyed () {
        // 显示底部栏
        // bus.$emit('listen', true)
        this.$store.commit('showTbbarStateMutation', true)
    }
}
</script>>
<style lang="scss" scoped>
.film{
    width: 100%;
    height: 100%;
    position: relative;
    .film-back{
        width: 100%;
        height: 44px;
        line-height: 44px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        .goback{
            position: absolute;
            height:30px;
            top: 5px;
            left: 5px;
            img{
                height:30px;
            }
        }
    }
    .detail-title{
        padding: 15px;
        padding-top: 12px;
        background-color: #ffffff;
        .detail-title-tit{
            display: flex;
            justify-content: space-between;
            .detail-title-name{
                .name{
                    color: #191a1b;
                    font-size: 18px;
                    height: 24px;
                    line-height: 24px;
                    margin-right: 7px;
                }
                .item{
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 2px;
                    border-radius: 2px;
                    display: inline-block;
                }
            }
        }
        .detail-title-grae{
            color: #ffb232;
            .grade{
                font-size: 18px;
                font-style: italic;
            }
            .grade-text{
                font-size: 10px;
            }
        }
        .detail-title-category{
            font-size: 13px;
            color: #797d82;
            margin-top: 4px;
        }
        .detil-title-time, .detail-title-nation, .detail-title-synopsis{
            font-size: 13px;
            color: #797d82;
            margin-top: 4px;
        }
        .detail-title-synopsis{
            height: 38px;
            overflow: hidden;
            margin-top: 12px;
        }
    }
    .actors{
        margin-top: 10px;
        background-color: #fff;
        .actors-title{
            width: 100%;
            padding: 15px;
            .actors-title-text{
                font-size: 16px;
                text-align: left;
                color: #191a1b;
            }
        }
    }
}
.detail-pic{
    width: 100%;
    .poster-img{
        width: 100%;
    }
}
</style>
