<template>
  <div>
      <div>
          支持手势
          <v-touch @swiperLft="onSwipeLeft" tag="p">Swipe me!</v-touch>
      </div>
  </div>
</template>

<script>
const cross = true
export default {
    // 局部路由拦截
    // 在渲染该组件的对应路由被confirm调用
    // 不能获取该组件实例 this
    // 因为当守卫执行前，组件实例还没被创建
    beforeRoterEnter (to, from, next) {
        if (cross) {
            next()
        } else {
            next('/filem')
        }
    },
    methods: {
        onSwipeLeft () {
            console.log('左滑')
        }
    }
}
</script>
