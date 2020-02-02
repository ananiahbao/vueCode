<template>
    <div>
        detail
    </div>
</template>
<script>
export default {
    mounted () {
        // 获取动态路由的参数this.$route
        console.log(this.$route.params.id)
    }
}
</script>>
