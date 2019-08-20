<template>
    <div class="list" ref="wrapper">
        <div>
            <!-- 注意 better-scroll 只处理容器的第一个子元素（content）的滚动。，所以要再“包一层”-->

            <template>
                <ul class="item-list" v-for="(city,key) in cities" :ref="key">
                    <div class="title">{{key}}</div>
                    <li class="item border-bottom" v-for="item in city">{{item.name}}</li>
                </ul>
            </template>
        </div>
    </div>
</template>


<script>
import Bscroll from "@better-scroll/core";
export default {
    name: "CityList",
    data() {
        return {
            activeIndex: 0
        };
    },
    props: {
        cities: Object,
        letter: String,
        cityScorllTop: Array
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scrollList.scrollToElement(element);
            }
        }
    },
    computed: {
        letters() {
            let arr = [];
            for (let item in this.cities) {
                arr.push(item);
            }
            return arr;
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (!this.scrollList) {
                this.scrollList = new Bscroll(this.$refs.wrapper, {
                    click: true,
                    probeType: 3
                });

                // probeType:如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
                this.scrollList.on("scroll", pos => {
                    let scrollTop = 0;
                    scrollTop = Math.abs(Math.round(pos.y));

                    for (var i = 0; i <= this.cityScorllTop.length - 1; i++) {
                        if (scrollTop < this.cityScorllTop[0]) {
                            this.activeIndex = 0;
                        } else if (
                            scrollTop >
                            this.cityScorllTop[this.cityScorllTop.length - 1]
                        ) {
                            this.activeIndex = this.cityScorllTop.length - 1;
                        } else if (
                            this.cityScorllTop[i] < scrollTop &&
                            this.cityScorllTop[i + 1] > scrollTop
                        ) {
                            this.activeIndex = i + 1;
                        }
                    }
                    this.$emit("change", this.letters[this.activeIndex]);
                });
            }
        });
    }
};
</script>

<style lang="scss" scoped>
@import "~styles/border.css";
@import "~styles/reset.css";

.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    overflow: hidden;
    position: absolute;
    top: 45px;
    left: 0;
    right: 30px;
    bottom: 0;

    .title {
        line-height: 27px;
        background: #eee;
        padding-left: 10px;
        color: #666;
        font-size: 13px;
    }

    .item-list {
        .item {
            color: #333;
            line-height: 38px;
            padding-left: 10px;
            text-align: left;
        }
    }
}
</style>

