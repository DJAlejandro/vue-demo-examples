<template>
    <div>
        <h2>插槽的使用</h2>
        <p class="d-flex p-2">1.利用事件间参数，复用打开和关闭按钮</p>
        <p class="d-flex p-2">2.在组件内使用插槽</p>
        <p>
            <a href="https://codepen.io/djalejandro/pen/ymRPRq">代码</a>
            <iframe
                style="width: 100%; height: 400px"
                src="https://codepen.io/djalejandro/pen/ymRPRq"
                allowfullscreen="allowfullscreen"
                frameborder="0"
                class="loading"
            ></iframe>
        </p>
        <h2>案例演示</h2>
        <header class="app-head">
            <div class="app-head-inner">
                <div class="head-nav">
                    <ul class="nav-list">
                        <li @click="openDialog('isLog')">登录</li>
                        <li class="nav-pile">|</li>

                        <li @click="openDialog('isRegister')">注册</li>
                        <li class="nav-pile">|</li>
                        <li @click="openDialog('isAbout')">关于</li>
                        <li class="nav-pile">|</li>
                        <li @click="openDialog('isTest1')">无参数</li>
                        <li class="nav-pile">|</li>
                        <li @click="openDialog('isTest2')">一个参数</li>
                        <li class="nav-pile">|</li>
                        <li @click="openDialog('isTest3')">两个参数</li>
                    </ul>
                </div>
            </div>
        </header>
        <my-dialog :is-show="isLog" @close-dialog="closeDialog('isLog')">
            <log></log>
        </my-dialog>

        <my-dialog :is-show="isRegister" @close-dialog="closeDialog('isRegister')">
            <reg></reg>
        </my-dialog>

        <my-dialog :is-show="isAbout" @close-dialog="closeDialog('isAbout')" @click.native="change">
            <p>组件的根元素能够直接监听到组件所处位置的本地事件。在这种场景中，你可以在 v-on 上使用 .native 修饰符</p>
        </my-dialog>
        <my-dialog :is-show="isTest1" @emit-test="emitTest1">
            <p>组件自定义事件：无参数。注册方法接受一个参数，为自定义事件传递的数据</p>
        </my-dialog>
        <my-dialog :is-show="isTest2" @emit-test="emitTest2('evenName')">
            <p>组件自定义事件：一个参数。注册方法接受一个参数，为该方法传入的参数值</p>
        </my-dialog>
        <my-dialog :is-show="isTest3" @emit-test="emitTest3('evenName',$event)">
            <p>组件自定义事件：两个参数。注册方法接受两个参数，前者为该方法传入的参数值，后者为自定义事件传递的数据</p>
        </my-dialog>
    </div>
</template>
<script type="text/javascript">
import Dialog from "../../components/demo1/Dialog";
import Log from "../../components/demo1/Log";
import Reg from "../../components/demo1/Reg";

export default {
    data() {
        return {
            username: "yudongdong",
            isShow: false,
            isLog: false,
            isRegister: false,
            isAbout: false,
            isTest1: false,
            isTest2: false,
            isTest3: false
        };
    },
    components: {
        MyDialog: Dialog,
        Log,
        Reg
    },
    methods: {
        openDialog(attr) {
            this[attr] = true;
        },
        closeDialog(attr) {
            this[attr] = false;
        },
        emitTest1(attr) {
            this.isTest1 = false;
            console.log(attr);
        },
        emitTest2(attr) {
            this.isTest2 = false;
            console.log(attr);
        },
        emitTest3(attr, $event) {
            this.isTest3 = false;
            console.log(attr, $event);
        },
        change() {
            alert(".native 修饰符");
        }
    }
};
</script>

<style>
li {
    list-style-type: none;
}

.app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
}

.head-nav {
    float: right;
    padding: 0 10px;
}
.head-nav ul {
    overflow: hidden;
}
.head-nav li {
    cursor: pointer;
    float: left;
}
.nav-pile {
    padding: 0 10px;
}
.app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
}
.container {
    width: 1200px;
    margin: 0 auto;
}
.hr {
    height: 1px;
    width: 100%;
    background: #ddd;
}
.button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
.button:hover {
    background: #4fc08d;
}
.g-form {
}
.g-form-line {
    padding: 15px 0;
}
.g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
}
.g-form-input {
    display: inline-block;
}
.g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
}
.g-form-btn {
    padding-left: 105px;
}
.g-form-error {
    color: red;
    padding-left: 15px;
}
</style>
