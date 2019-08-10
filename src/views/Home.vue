<template>
    <div class="container">
        <div class="row">
            <div class="col-2">
                <ul class="v-nav-link" v-for="item in links">
                    <router-link :to="{name:item}" tag="li">{{item}}</router-link>
                </ul>
            </div>
            <div class="col-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "home",
    // props: ["size"],
    data() {
        return {
            size: 20
        };
    },
    computed: {
        links() {
            let arr = [];
            let len = this.size;

            for (let index = 0; index < len; index++) {
                let flag = "demo" + (index + 1);
                arr[index] = flag;
            }
            return arr;
        }
    }
};
</script>

<style lang='scss' scoped>
.v-nav-link {
    cursor: pointer;
    & > .router-link-active {
        color: #fff;
        background-color: #337ab7;
        border-radius: 4px;
        padding: 10px 15px;
    }
}
</style>