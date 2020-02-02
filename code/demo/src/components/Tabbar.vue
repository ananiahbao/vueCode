<template>
    <nav>
        <!-- 声明式导航 -->
        <ul>
            <router-link to="/filme" tag="li" activeClass="active">电影</router-link>
            <router-link to="/center"  tag="li" activeClass="active">我的</router-link>
            <router-link to="/cinema"  tag="li" activeClass="active">电影院</router-link>
        </ul>
    </nav>
</template>
<style lang="scss">
    .active{
        color: red
    }
</style>
