<template>
    <div>
        nowplaying
        <ul>
            <li v-for="(data,index) in datalist" :key="index" @click="handleClick(index)">
                {{ data }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            datalist: ['1111', '2222', '333333']
        }
    },
    methods: {
        handleClick (id) {
            // 编程式路由导航
            // this.$router.push(`/details/id=${id}`)
            // 路由命名式跳转
            this.$router.push({ name: 'detail', params: { id: id } })
        }
    }
}
</script>
