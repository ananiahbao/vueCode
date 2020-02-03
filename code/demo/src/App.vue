<template>
  <div>
      <tabbar></tabbar>
      <router-view></router-view>
  </div>
</template>

<script>
// import child from '@/components/Child'
// import swiper from '@/components/Swiper'
import tabbar from '@/components/Tabbar.vue'
export default {
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
        tabbar
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
