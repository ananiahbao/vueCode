<template>
    <div>
        <ul>
            <router-link to="/filme/nowplaying" tag="li" activeClass="active">正在热映</router-link>
            <router-link to="/filme/comingsoon" tag="li" activeClass="active">即将上映</router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.active{
    color: red;
    border-bottom: 1px solid red;
}
ul {
    display: flex;
    li{
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
}
</style>
