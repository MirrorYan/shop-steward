<template>
  <img src="@/assets/images/login.svg" alt="Login" @submit="submit">
  <el-form class="login-form" ref="loginForm" :rules="rules" :model="loginForm" :show-message="false">
    <el-form-item prop="mobile" required>
      <el-input v-model="loginForm.mobile" placeholder="用户名" />
    </el-form-item>
    <el-form-item prop="password" required>
      <el-input v-model="loginForm.password" type="password" maxlength="20" placeholder="密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="button-block" @click="submit('loginForm')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { userLogin } from '@/network/api'

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
      const _this = this;
      _this.$refs[formName].validate(valid => {
        if (!valid) return false;
        userLogin(this.loginForm)
          .then(res => {
            localStorage.setItem('token', res.token);
            _this.$store.commit('changeToken', res.token);
            _this.$router.push({ name: 'Home' });
          });
      });
    }
  },
  setup() {
    const rules = {
      mobile: [{ trigger: 'blur', required: true }],
      password: [{ trigger: 'blur', required: true }],
    };

    return {
      rules
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