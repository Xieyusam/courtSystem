<template>
  <div id="login">
    <div class="login-box">
      <div class="title">球场管理系统</div>
      <div class="child-box" v-if="!isRegister">
        <el-input placeholder="your phone" v-model="phone"> </el-input>
        <el-input placeholder="your password" show-password v-model="password">
        </el-input>
        <div class="btn-line">
          <el-button @click="isRegister = !isRegister" type="primary"
            >register</el-button
          >
          <el-button type="primary" @click="doLogin">login</el-button>
        </div>
      </div>
      <div class="child-box" v-if="isRegister">
        <el-input placeholder="your username" v-model="username"> </el-input>
        <el-input placeholder="your phone" v-model="phone"> </el-input>
        <el-input placeholder="your password" show-password v-model="password">
        </el-input>
        <div class="btn-line">
          <el-button @click="isRegister = !isRegister" type="primary"
            >return</el-button
          >
          <el-button type="primary">comfirm</el-button>
        </div>
      </div>
    </div>
    <div class="login-image"></div>
  </div>
</template>

<script>
import { cookieData } from "@/util/local";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      isRegister: false,
    };
  },
  methods: {
    doLogin() {
      cookieData("set", "token", "123");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
#login {
  /* background-color: #94faf534; */
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: row;
}
#login .login-image {
  width: 50%;
  height: 100%;
  background-image: url("../../assets/篮球场.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
#login .login-box .title {
  font-size: 24px;
  color: #01201f;
  margin-top: 5%;
  padding: 20px 0;
}
#login .login-box {
  width: 50%;
  height: 100%;
}
#login .login-box .child-box {
  width: 80%;
  margin: auto;
}
#login .login-box .child-box  > .el-input {
  margin: 14px 0;
}
#login .login-box .child-box .btn-line  > .el-button {
  margin: 14px 0;
  width: 48%;
}
#login .login-box .child-box .btn-line{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
