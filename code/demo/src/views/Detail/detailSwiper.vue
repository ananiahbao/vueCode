 <template>
    <div>
        <div :class="'swiper-container ' +swipername">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
 </template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    mounted () {
        /* eslint-disable no-new */
        new Swiper('.' + this.swipername, {
            pagination: '.swiper-pagination',
            slidesPerView: this.perview,
            paginationClickable: true,
            spaceBetween: 5,
            freeMode: true
        })
    },
    props: ['perview', 'swipername']
}
</script>

 <style lang="scss">
 .swiper-wrapper{
     width: 100%;
 }
 </style>
