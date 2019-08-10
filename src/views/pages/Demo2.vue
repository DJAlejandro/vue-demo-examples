<template>
    <div>
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

