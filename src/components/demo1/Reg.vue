<template>
    <div>
        <div class="g-form-line">
            <div class="g-form-label">用户名：</div>
            <div class="g-form-input"><input type="text" v-model='username' placeholder="请输入用户名"></div>
        </div>
        <div class="g-form-line">
            <div class="g-form-label">密码：</div>
            <div class="g-form-input"><input type="text" v-model='password' placeholder="请输入密码"></div>
        </div>
        <div class="g-form-line">
            <div class="g-form-label"></div>
            <div class=" button">注册</div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props:['username'],
        data(){
            return {
                password:''
            }
        }
    }
</script>
