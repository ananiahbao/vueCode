<template>
     <div class="swiper-container a">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    mounted () {
        /* eslint-disable no-new */
        new Swiper('.a', {
            loop: true,
            autoplay: 3000,
            autoplayStopOnlast: true,
            pagination: '.swiper-pagination'
        })
    }
}
</script>>

<style lang="scss" scoped>
.swiper-wrapper {
    img{
        width: 100%;
    }
}
</style>
