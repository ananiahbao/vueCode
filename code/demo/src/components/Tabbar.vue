<template>
    <nav>
        <!-- 声明式导航 -->
        <ul>
            <router-link to="/filme" tag="li" activeClass="active">
                <span>电影</span>
                <i class="iconfont icon-dianying"></i>
            </router-link>
            <router-link to="/center"  tag="li" activeClass="active">
                <span>影院</span>
                <i class="iconfont icon-yingyuan"></i>
            </router-link>
            <router-link to="/cinema"  tag="li" activeClass="active">
                <span>我的</span>
                <i class="iconfont icon-gerenzhongxin"></i>
            </router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .active{
        color: red
    }
    nav{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #ffffff;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
                span{
                    padding-right: 5px;
                }
            }
        }
    }
</style>
