<template>
    <div>
        <div class="g-form-line">
            <div class="g-form-label">用户名：</div>
            <div class="g-form-input">
                <input type="text" v-model="username" placeholder="请输入用户名" @keyup="userErrors" />
                <span class="g-form-error" v-if="isShowUserErr">{{ errorUserText }}</span>
            </div>
        </div>
        <div class="g-form-line">
            <div class="g-form-label">密码：</div>
            <div class="g-form-input">
                <input type="text" v-model="password" placeholder="请输入密码" @keyup="passwordErrors" />
                <span v-if="isShowPassErr" class="g-form-error">{{ errorPassText }}</span>
            </div>
        </div>
        <div class="g-form-line">
            <div class="g-form-label"></div>
            <div class="button">登录</div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            username: "",
            password: "",
            errorUserText: "",
            isShowUserErr: false,
            errorPassText: "",
            isShowPassErr: false,
            userFlag: false
        };
    },
    methods: {
        userErrors() {
            if (!/@/g.test(this.username)) {
                this.isShowUserErr = true;
                this.errorUserText = "不包含@";
            } else {
                this.isShowUserErr = false;
                this.errorUserText = "";
            }
            if (!this.userFlag) {
                this.userFlag = true;
            }
        },
        passwordErrors() {
            if (!/^\w{1,6}$/g.test(this.password)) {
                this.isShowPassErr = true;
                this.errorPassText = "密码不是1-6位";
            } else {
                this.isShowPassErr = false;
                this.errorPassText = "";
            }
            if (!this.passwordFlag) {
                this.passwordFlag = true;
            }
        }
    }
};
</script>
