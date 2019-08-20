<template>
    <ul class="list">
        <li
            class="item"
            :class="{active:key==nowKey}"
            v-for="(item,key) in cities"
            :ref="key"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >{{key}}</li>
    </ul>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: {
        letter2: String,
        cities: Object
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null,
            nowKey: "A"
        };
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
    watch: {
        letter2() {
            if (this.nowKey) {
                this.nowKey = this.letter2;
            }
        }
    },
    updated() {
        this.startY = this.$refs["A"][0].offsetTop;
    },
    methods: {
        handleLetterClick(e) {
            this.nowKey = e.target.innerText;
            console.log(this.nowKey);
            this.$emit("change", this.nowKey);
        },
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchMove(e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY;
                    const index = Math.floor((touchY - this.startY) / 20);
                    if (index >= 0 && index < this.letters.length) {
                        this.nowKey = this.letters[index];
                        // console.log(this.nowKey);

                        this.$emit("change", this.nowKey);
                    }
                }, 16);
            }
        },
        handleTouchEnd() {
            this.touchStatus = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20px;

    .item {
        line-height: 20px;
        text-align: center;
        color: #00bcd4;

        &.active {
            color: red;
        }
    }
}
</style>

