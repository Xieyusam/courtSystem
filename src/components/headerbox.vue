<template>
  <div class="headerbox">
    <div class="headertitle"><i class="iconfont iconzuqiuchang" style="font-size:24px;"></i>CourtSystem</div>
    <div class="menu-nav">
        <div class="nav-child" @click="goToPage(1)" style="line-height:70px;">
          <i class="el-icon-s-home" style="font-size:24px;"></i>
          </div>
                <div class="nav-child" @click="menuShow = !menuShow"  style="line-height:70px;">
          <i class="el-icon-menu" style="font-size:24px;"></i>
          </div>
          <!-- <div style="min-width:100px;" v-show="menuShow"> -->
        <div v-show="menuShow" class="nav-child" @click="goToPage(2)">资源管理</div>
        <div v-show="menuShow" class="nav-child" @click="goToPage(3)">预订管理</div>
        <div v-show="menuShow" class="nav-child" @click="goToPage(4)">用户管理</div>
        <div v-show="menuShow" class="nav-child" @click="goToPage(5)">预订记录</div>
        <!-- </div> -->
        <div class="nav-child" style="line-height:70px;" >
          <i class="el-icon-s-custom" style="font-size:24px;"></i>
        </div>
        <div @click="exitToLogin" class="nav-child" style="line-height:60px;" >
          <i class="iconfont icontuichu1" style="font-size:20px;"></i>
        </div>
    </div>
  </div>
</template>

<script>
import {
  cookieData
} from "@/util/local";
export default {
  name: "menubox",
  data() {
    return {
      menuShow:false
    };
  },
  methods: {
    goToPage(index) {
      this.$router.push({ path: "/page" + index });
    },
    exitToLogin(){
      cookieData('clean','token')
      this.$router.push({ path: "/login"});
    }
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
}
.menu-nav{
    display: flex;
    flex-direction: row;
    color: #ffffff;
    height: 100%;
}
.nav-child{
    margin-right: 20px;
    line-height: 60px;
    font-size: 10px;
}
.nav-child:hover{
    color: #cecbcb;
    cursor: pointer;
}
</style>