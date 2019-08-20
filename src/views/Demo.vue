<template>
    <div class="header">
        <router-link to="/">首页</router-link>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
.header {
    height: 43px;
    line-height: 43px;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    & > .router-link-active {
        color: #fff;
    }
}
</style>