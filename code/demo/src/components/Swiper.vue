 <template>
    <div>
        单文件中引入swiper
        <div class="swiper-container a">
            <div class="swiper-wrapper">
                <div class="swiper-slide">11111111111</div>
                <div class="swiper-slide">22222222222</div>
                <div class="swiper-slide">33333333333</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
 </template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
    mounted () {
        /* eslint-disable no-new */
        new Swiper('.a', {
            loop: true,
            pagination: {
                el: '.wiper-pagination'
            }
        })
    }
}
</script>

 <style lang="scss">
.swiper-container{
    height: 300px
}
 </style>
