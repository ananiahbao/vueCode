<template>
  <div>
      <tabbar v-show="isTabbarShow"></tabbar>
      <router-view></router-view>
  </div>
</template>

<script>
// import child from '@/components/Child'
// import swiper from '@/components/Swiper'
import tabbar from '@/components/Tabbar.vue'
import { mapState } from 'vuex'
// import bus from '@/bus'
export default {
    data () {
        return {
            // ishow: true
        }
    },
    methods: {
    },
    components: {
        tabbar
    },
    // beforeMount () {
    //     // 所有dom创建完成之前执行，不然刷新组件页面会看到底部栏
    //     bus.$on('listen', (data) => {
    //         this.ishow = data
    //     })
    // },
    mounted () {
    },
    // vuex计算属性写法 --第一种写法
    // computed: {
    //     computedShow () {
    //         return this.$store.state.isTabbarShow
    //     }
    // }
    // vuex计算属性写法 --第二种写法
    // computed: mapState(['isTabbarShow'])     === {computedShow(){return fasle}}
    // vuex计算属性写法 --第三种写法
    computed: {
        ...mapState(['isTabbarShow'])
    }
}
</script>
<style lang="scss">
    *{
        padding: 0;
        margin: 0;
    }
    ul{
        li {
            list-style: none;
        }
    }
</style>
