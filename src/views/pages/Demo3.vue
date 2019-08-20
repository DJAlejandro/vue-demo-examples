<template>
    <div>
        <h2>图片的渲染与路由的双向绑定</h2>
        <p>1.从比较中能看出，利用路由导航是双向的，利用原生方法改变索引，导航是单向的（路径的改变不会触发索引的更新）。因此这种根据路径，渲染不同元素的情景跟推荐用router完全去实现</p>
        <p>2.当图片src写在js中时，需要用require的方式引入</p>
        <div class="detail-wrap">
            <div class="detail-left product-board">
                <img :src="imgMap1[imgSrc]" />
                <img :src="imgMap2[nowIndex]" />

                <ul>
                    <router-link
                        v-for="product in products"
                        tag="li"
                        active-class="active"
                        :to="'/demo/demo3/'+product.path"
                        :key="product.path"
                    >{{'router'+product.name}}</router-link>
                    <router-link
                        v-for="(product ,index) in products"
                        tag="li"
                        active-class="active"
                        :to="'/demo/demo3/'+product.path"
                        @click.native="changImg(index)"
                        :key="index"
                    >{{'@click'+product.name}}</router-link>
                </ul>
            </div>
            <div class="detail-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    components: {},
    data() {
        return {
            nowIndex: 0,
            products: [
                {
                    name: "数据统计",
                    path: "statistics",
                    active: false
                },
                {
                    name: "数据预测",
                    path: "forecast",
                    active: false
                },
                {
                    name: "流量分析",
                    path: "analyze",
                    active: false
                },
                {
                    name: "广告发布",
                    path: "release",
                    active: false
                }
            ],
            imgMap1: {
                "/demo/demo3/statistics": require("../../assets/demo3/1.png"),
                "/demo/demo3/forecast": require("../../assets/demo3/2.png"),
                "/demo/demo3/analyze": require("../../assets/demo3/3.png"),
                "/demo/demo3/release": require("../../assets/demo3/4.png")
            },
            imgMap2: [
                require("../../assets/demo3/1.png"),
                require("../../assets/demo3/2.png"),
                require("../../assets/demo3/3.png"),
                require("../../assets/demo3/4.png")
            ]
        };
    },
    methods: {
        changImg(index) {
            this.nowIndex = index;
        }
    },
    computed: {
        imgSrc() {
            return this.$route.path;
        }
    }
};
</script>

<style>
.detail-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
}
.detail-left {
    float: left;
    width: 200px;
    text-align: center;
}
.detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
}
.product-board {
    background: #fff;
    padding: 20px 0;
}
.product-board ul {
    margin-top: 20px;
}
.product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
    background: #4fc08d;
    color: #fff;
}
.product-board li a {
    display: block;
}
</style>
