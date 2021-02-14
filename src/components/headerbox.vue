<template>
  <div class="headerbox">
    <div class="headertitle" @click="goToPage(1)">
      <i class="iconfont iconzuqiuchang" style="font-size: 24px"></i>CourtSystem
    </div>
    <div class="menu-nav">
      <div class="nav-child" @click="goToPage(1)" style="line-height: 70px">
        <i class="el-icon-s-home" style="font-size: 24px"></i>
      </div>
      <div
        class="nav-child"
        @click="menuShow = !menuShow"
        style="line-height: 70px"
      >
        <i class="el-icon-menu" style="font-size: 24px"></i>
      </div>
      <!-- <div style="min-width:100px;" v-show="menuShow"> -->
      <div v-show="menuShow" class="nav-child" @click="goToPage(2)">
        资源管理
      </div>
      <div v-show="menuShow" class="nav-child" @click="goToPage(3)">
        预订管理
      </div>
      <div v-show="menuShow" class="nav-child" @click="goToPage(4)">
        用户管理
      </div>
      <div v-show="menuShow" class="nav-child" @click="goToPage(5)">
        预订记录
      </div>
      <!-- </div> -->
      <div
        class="nav-child"
        @click="dialogVisible = true"
        style="line-height: 70px"
      >
        <i class="el-icon-s-custom" style="font-size: 24px"></i>
      </div>
      <div @click="exitToLogin" class="nav-child" style="line-height: 60px">
        <i class="iconfont icontuichu1" style="font-size: 20px"></i>
      </div>
    </div>
    <!-- 我的信息 -->
    <el-dialog
      title="我的信息"
      :visible.sync="dialogVisible"
      width="600px"
      center
    >
      <div class="dialog-box">
        <el-avatar
          style="height: 60px; width: 60px"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <ul style="width: 300px; margin-left: 20px">
          <li>用户名:{{ user.name }}</li>
          <li>手机号码:{{ user.phone }}</li>
          <li>
            角色:{{
              user.role == 0
                ? "普通用户"
                : user.role == 1
                ? "管理员"
                : "超级管理员"
            }}
          </li>
        </ul>
        <div style="width: 100%; height: 100px; margin-top: 20px">
          <div style="width: 60%" v-if="isSetNew == true">
            新密码:
            <el-input size="mini" v-model="password1" show-password></el-input>
            再次确认:
            <el-input size="mini" v-model="password2" show-password></el-input>
            <el-button size="mini" type="info" @click="isSetNew = false"
              >返回</el-button
            >
            <el-button
              size="mini"
              type="primary"
              @click="setNewPassword(password1, password2)"
              >确认</el-button
            >
          </div>
          <div style="width: 60%" v-if="isSetNew == false">
            <el-button size="mini" type="primary" @click="isSetNew = true"
              >修改密码</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { cookieData, localData } from "@/util/local";
import { newPassword } from "@/api/user";
export default {
  name: "menubox",
  data() {
    return {
      dialogVisible: false,
      user: localData("get", "userinfo"),
      menuShow: false,
      isSetNew: false,
      password1: "",
      password2: "",
    };
  },
  methods: {
    goToPage(index) {
      if (index == 1) {
        this.$router.push({ path: "/" });
      } else {
        this.$router.push({ path: "/page" + index });
      }
    },
    exitToLogin() {
      cookieData("clean", "token");
      localData("clean", "userinfo");
      this.$router.push({ path: "/login" });
    },
    setNewPassword(password1, password2) {
      if (!password1) {
        this.$message({
          message: "密码不能为空",
          type: "warning",
        });
        return;
      }
      if (!password2) {
        this.$message({
          message: "请确认密码",
          type: "warning",
        });
        return;
      }
      if (password1 != password2) {
        this.$message({
          message: "两次输入的密码不一致",
          type: "warning",
        });
        return;
      }

      const parem = {
        id: this.user.id,
        password: password1,
      };
      newPassword(parem)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "修改成功，重新登录",
              type: "success",
            });
            this.exitToLogin();
          }
        })
        .catch((err) => {
          this.$message({
            message: "修改失败",
            type: "warning",
          });
        });
    },
  },
};
</script>

<style>
.headerbox {
  height: 100%;
  width: 100%;
  background-color: #606266;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.headertitle {
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 2px;
  /* line-height: 24px; */
  height: 100%;
  width: fit-content;
  line-height: 60px;
  padding-left: 20px;
  cursor: pointer;
}
.menu-nav {
  display: flex;
  flex-direction: row;
  color: #ffffff;
  height: 100%;
}
.nav-child {
  margin-right: 20px;
  line-height: 60px;
  font-size: 10px;
}
.nav-child:hover {
  color: #cecbcb;
  cursor: pointer;
}
.dialog-box {
  display: flex;
  flex-wrap: wrap;
}
</style>