<template>
  <img src="@/assets/images/login.svg" alt="Login" @submit="submit">
  <el-form class="login-form" ref="loginForm" :model="loginForm">
    <el-form-item ref="loginForm">
      <el-input v-model="loginForm.mobile" placeholder="用户名" required />
    </el-form-item>
    <el-form-item>
      <el-input v-model="loginForm.password" type="password" maxlength="20" placeholder="密码" required />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="button-block" @click="submit('loginForm')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { userLogin } from '@/network/user'

export default {
  data() {
    return {
      loginForm: {
        mobile: '',
        password: ''
      },
      showPass: false
    }
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) return false;
        userLogin(this.loginForm)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error)
          });
      });
    }
  }
}
</script>

<style lang="less">

.login-form {
  max-width: 500px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  .el-button {
    font-size: 1.125rem;
  }
}
</style>