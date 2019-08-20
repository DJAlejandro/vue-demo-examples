<template>
    <div class="container">
        <ul class="v-nav-link" v-for="(link,index) in links" :key="index">
            <div class="row">
                <router-link
                    class="col router-demo"
                    :to="{path:item}"
                    tag="div"
                    v-for="(item,index) in link"
                    :key="index"
                >{{item.slice(5)}}</router-link>
            </div>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
    name: "home",
    // props: ["size"],
    data() {
        return {
            size: 20
        };
    },
    methods: {
        getHomeInfo() {
            axios.get("/api/db.json").then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res) {
            res = res.data;
            console.log(res);
        }
    },

    computed: {
        links() {
            let arr = [];
            let len = this.size;

            for (let index = 0; index < len; index++) {
                let flag = "demo/demo" + (index + 1);
                arr[index] = flag;
            }
            // return arr;
            const links = [];
            arr.forEach((item, index) => {
                const link = Math.floor(index / 3);
                if (!links[link]) {
                    links[link] = [];
                }
                links[link].push(item);
            });
            return links;
        }
    },

    mounted() {
        this.getHomeInfo();
    }
};
</script>

<style lang='scss' scoped>
.v-nav-link {
    padding: 0 15px;
    cursor: pointer;
    & > .router-link-active {
        color: #fff;
        background-color: #337ab7;
    }
    .router-demo {
        color: #fff;
        padding: 10px;
        background-color: #337ab7;
        border: #000 solid 1px;
        border-radius: 1px;
    }
}
</style>
