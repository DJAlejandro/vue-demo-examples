<template>
    <div>
        <h2>幻灯片的使用</h2>
        <p class="d-flex p-2">1.利用过渡特效实现</p>
        <p class="d-flex p-2">2.两个过渡元素，因不同的赋值时机，得到不同的索引值</p>
        <p>
            <a href="https://codepen.io/djalejandro/pen/bXmapM">代码</a>
            <iframe
                style="width: 100%; height: 400px"
                src="https://codepen.io/djalejandro/pen/bXmapM"
                allowfullscreen="allowfullscreen"
                frameborder="0"
                class="loading"
            ></iframe>
        </p>
        <h2>案例演示</h2>
        <slide :slides="slides" :setTime="setTime"></slide>
    </div>
</template>

<script>
// @ is an alias to /src
import Slide from "../../components/demo2/Slide";
export default {
    components: {
        Slide
    },
    data() {
        return {
            setTime: 2000,
            slides: [
                {
                    src: require("../../assets/demo2/pic1.jpg"),
                    title: "xxx1"
                },
                {
                    src: require("../../assets/demo2/pic2.jpg"),
                    title: "xxx2"
                },
                {
                    src: require("../../assets/demo2/pic3.jpg"),
                    title: "xxx3"
                },
                {
                    src: require("../../assets/demo2/pic4.jpg"),
                    title: "xxx4"
                }
            ]
        };
    }
};
</script>

