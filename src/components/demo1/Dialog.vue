<template>
    <div v-show="isShow">
        <div class="dialog-wrap">
            <div class="dialog-cover" @click="close()"></div>
            <transition name="drop">
                <div class="dialog-content" v-show="isShow">
                    <div class="dialog-close" @click="close()">x</div>
                    <slot>no one</slot>
                </div>
            </transition>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    props: ["isShow"],
    methods: {
        close() {
            this.$emit("close-dialog");
            this.$emit("emit-test", "TESTING");
        }
    }
};
</script>
<style type="text/css">
.drop-enter-active {
    transition: all 0.5s ease;
}
.drop-leave-active {
    transition: all 0.3s ease;
}
.drop-enter {
    transform: translateY(-500px);
}
.drop-leave-active {
    transform: translateY(-500px);
}

.dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
}
.dialog-cover {
    background: #000;
    opacity: 0.3;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 2;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
}
.dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
}
.dialog-close:hover {
    color: #4fc08d;
}
</style>
