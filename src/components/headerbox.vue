<template>
  <div class="headerbox">
    <div class="headertitle">CourtSystem</div>
    <div class="menu-nav">
        <div class="nav-child" @click="goToPage(1)">首页</div>
        <div class="nav-child" @click="goToPage(2)">资源管理</div>
        <div class="nav-child" @click="goToPage(3)">预订管理</div>
        <div class="nav-child" @click="goToPage(4)">用户管理</div>
        <div class="nav-child" @click="goToPage(5)">预订记录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menubox",
  data() {
    return {};
  },
  methods: {
    goToPage(index) {
      this.$router.push({ path: "/page" + index });
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
    font-size: 14px;
}
.nav-child:hover{
    color: #eeeeee;
    cursor: pointer;
}
</style>