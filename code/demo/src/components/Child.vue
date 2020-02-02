<template>
    <div>
      <!-- 单文件组件 -->
      child.vue--单文件组件
      props--{{myname}}
      <slot></slot>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['myname'],

    mounted () {
        axios.get('/ajax/movieOnInfoList?token=').then(res => {
            console.log(res.data)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
