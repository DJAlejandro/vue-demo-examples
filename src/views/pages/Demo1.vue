<template>
    <div>
        <h2>插槽的使用</h2>
        <header class="app-head">
            <div class="app-head-inner">
                <div class="head-nav">
                    <ul class="nav-list">
                        <li @click="openDialog('isLog')">登录</li>
                        <li class="nav-pile">|</li>

                        <li @click="openDialog('isRegister')">注册</li>
                        <li class="nav-pile">|</li>

                        <li @click="openDialog('isAbout')">关于</li>
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

        <my-dialog :is-show="isAbout" @close-dialog="closeDialog('isAbout')">
            <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
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
            isAbout: false
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
