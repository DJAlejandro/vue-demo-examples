<template>
    <div class="slide-show" @mouseover="stop()" @mouseout="run()">
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <transition name="slide-trans-old">
                    <!-- <div v-if="!isShow">{{nowIndex}}</div> -->
                    <img v-if="!isShow" :src="slides[nowIndex].src" />
                </transition>
                <transition name="slide-trans">
                    <!-- <div v-if="isShow">{{nowIndex}}</div> -->
                    <img v-if="isShow" :src="slides[nowIndex].src" />
                </transition>
            </a>
        </div>
        <div class="banner">{{slides[nowIndex].title}}</div>
        <div class="slide-pages">
            <li @click="goto(pre)">&lt</li>
            <li
                v-for="(item,index) in slides"
                :class="{'on':nowIndex==index}"
                @click="goto(index)"
            >{{index+1}}</li>
            <li @click="goto(next)">&gt</li>
        </div>
    </div>
</template>

<script>
// @ is an alias to /sr

export default {
    props: ["slides", "setTime"],
    data() {
        return {
            nowIndex: 0,
            isShow: false
        };
    },
    methods: {
        goto(index) {
            this.isShow = false;
            //this.nowIndex=index;
            setTimeout(() => {
                this.nowIndex = index;
                this.isShow = true;
            }, 10);
        },
        run() {
            this.time = setInterval(() => this.goto(this.next), this.setTime);
        },
        stop() {
            clearInterval(this.time);
        }
    },
    computed: {
        pre() {
            if (this.nowIndex <= 0) {
                return this.slides.length - 1;
            } else {
                return this.nowIndex - 1;
            }
        },
        next() {
            if (this.nowIndex >= this.slides.length - 1) {
                return 0;
            } else {
                return this.nowIndex + 1;
            }
        }
    },
    mounted() {
        this.run();
    }
};
</script>


<style scoped>
.slide-trans-enter-active {
    transition: all 0.5s;
}
.slide-trans-enter {
    transform: translateX(900px);
}
.slide-trans-old-leave-active {
    transition: all 0.5s;
    transform: translateX(-900px);
}
.slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 506px;
    overflow: hidden;
}
.slide-show .banner {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: 0.5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
}
.slide-img {
    width: 100%;
    font-size: 50px;
}
.slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.slide-pages {
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 15px;
}
.slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
}
.slide-pages li.on {
    text-decoration: none;
    color: red;
}
</style>
