<template>
    <div>
        <div class="img-box">
            <swiper :options="swiperOption">
                <swiper-slide v-for="img in images" :key="img.id">
                    <!-- <a
                        href="https://coding.imooc.com/class/372.html?mc_marking=e91c9889e8e0ae89addbc2c114466de3&mc_channel=banner"
                    >-->
                    <img :src="img.src" />
                    <!-- </a> -->
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
                <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi ipsum perspiciatis atque, error, laborum, enim deserunt cum architecto minima at nihil doloribus a alias corrupti et odio rerum ad?</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    id: "001",
                    src: "https://img.mukewang.com/5d48cfba00011a9016000540.jpg"
                },
                {
                    id: "002",
                    src: "https://img.mukewang.com/5d520a480001636518720632.jpg"
                },
                {
                    id: "003",
                    src: "https://img.mukewang.com/5d5208ee0001e72616000540.jpg"
                },
                {
                    id: "004",
                    src: "https://img.mukewang.com/5d2435f800012cc016000540.jpg"
                },
                {
                    id: "005",
                    src: "https://img.mukewang.com/5c6154b1000193ed18720632.jpg"
                },
                {
                    id: "006",
                    src: "https://img.mukewang.com/5d520dfc000175a518720632.jpg"
                },
                {
                    id: "007",
                    src: "https://img.mukewang.com/5d5a6bbc00013ebf09360316.jpg"
                },
                {
                    id: "008",
                    src: "https://img.mukewang.com/5d5b595800017b7f18720632.jpg"
                },
                {
                    id: "009",
                    src: "https://img.mukewang.com/5cf63a960001340f18720632.jpg"
                },
                {
                    id: "010",
                    src: "https://img.mukewang.com/5d4248360001783316000540.jpg"
                },
                {
                    id: "011",
                    src: "https://img.mukewang.com/5d5a6bbc00013ebf09360316.jpg"
                },
                {
                    id: "012",
                    src: "https://img.mukewang.com/5d5a6bbc00013ebf09360316.jpg"
                }
            ],
            swiperOption: {
                // loop: true, //slidesPerColumn目前还不兼容loop模式（loop: true）
                /* 基础 */
                initialSlide: 2, //设定初始化时slide的索引
                // direction: "vertical", //滑动方向
                speed: 2000, //切换速度
                grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                // centeredSlides: true, //设定为true时，active slide会居中，而不是默认状态下的居左。

                /* 网格系统 */
                slidesPerView: 2, //  一行显示2个
                slidesPerColumn: 2, //显示2行
                slidesPerGroup: 2, //在carousel mode下定义slides的数量多少为一组。
                // spaceBetween: 30, //在slide之间设置距离（单位px）。
                slidesPerColumnFill: "row", //多行布局中以什么形式填充

                /* 触发条件 */
                // allowTouchMove: false, //允许触摸滑动。设为false时,鼠标无法拖动，手机也无法滑动。
                touchRatio: -1, //触摸比例。触摸距离与slide滑动距离的比率。
                // touchRatio : 2,
                // touchRatio : 0.5,

                /* 禁止切换 */
                // allowSlideNext: false, //设置为false可禁止向右或下滑动。
                // allowSlidePrev: false, //设为false可禁止向左或上滑动。

                /* 监视器 */
                observer: true, //启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
                observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
                observeSlideChildren: true, //子slide更新时，swiper是否更新。默认为false不更新。

                /* ---------组件----------- */

                /* 自动切换 */
                autoplay: {
                    delay: 2000, //自动切换的时间间隔
                    stopOnLastSlide: false //如果设置为true，当切换到最后一个slide时停止自动切换
                },

                /* 切换效果 */
                // effect: "fade",
                // effect: "cube",
                effect: "coverflow",
                // effect: "flip",

                /* 分页器 */
                pagination: {
                    el: ".swiper-pagination",
                    // type: "fraction", //分式
                    // type: "progressbar", // 进度条
                    type: "bullets", //圆点
                    // dynamicBullets: true, //分页器小点的数量会部分隐藏
                    clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                },

                /* 前进后退按钮 */
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },

                /* 滚动条 */
                scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: true //该参数设置为true时允许拖动滚动条。

                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.img-box {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 33.75%;

    // padding-bottom: 16.875%;
    background: #eee;
    img {
        width: 100%;
    }
    & /deep/ .swiper-pagination-bullet-active {
        background-color: #fff;
    }
}
</style>
