<template>
  <div>
      <filmswiper ref="filmswiper">
        <div class="swiper-slide" v-for="data in imgsrc" :key="data.id">
            <img :src="data.src" alt="">
        </div>
      </filmswiper>
      <filmnav :class="isfixed ? 'fixed' : ''"></filmnav>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import filmnav from './Filme/Filmnav'
import filmswiper from './Filme/FilmSwiper'
export default {
    data () {
        return {
            datalist: [],
            imgsrc: [
                // assets中的图片必须用require引入，此处的模块化。放在public中需引入绝对路径，打包之后webpack直接拷贝到dist中
                { id: 1, src: require('../assets/img/1.jpg') },
                { id: 2, src: require('../assets/img/2.jpg') }
            ],
            isfixed: false
        }
    },
    mounted () {
        console.log(this.$refs.filmswiper.$el.offsetHeight)
        if (document.documentElement.scrollTop > this.$refs.filmswiper.$el.offsetHeight) {
            this.isfixed = true
        } else {
            this.isfixed = false
        }
    },
    components: {
        filmnav,
        filmswiper
    }
}
</script>
<style lang="scss" scoped>
    .fixed{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 40px;
        background-color: #ffffff;
        z-index: 3;
    }
</style>
