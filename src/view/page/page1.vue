<template>
  <div class="index-page">
    <div class="box-line">
      <div @click="goToPage(2)" class="big-box">
        <div class="box-icon">
          <i class="el-icon-s-cooperation"></i>
        </div>
        <div class="box-title">资源管理</div>
      </div>
      <div @click="goToPage(3)" class="big-box">
        <div class="box-icon">
          <i class="el-icon-date"></i>
        </div>
        <div class="box-title">预订管理</div>
      </div>
      <div @click="goToPage(4)" class="big-box">
        <div class="box-icon">
          <i class="el-icon-s-custom"></i>
        </div>
        <div class="box-title">用户管理</div>
      </div>
      <div @click="goToPage(5)" class="big-box">
        <div class="box-icon">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="box-title">预订记录</div>
      </div>
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
.index-page {
  height: 100%;
  width: 100%;
}
.box-line {
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 10%;
}
.big-box {
  height: 20vw;
  width: 20vw;
  background: #606266;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #ffffff;
  border-radius: 16px;
  cursor: pointer;
}
.box-icon {
  width: 100%;
  text-align: center;
  padding-bottom: 2vh;

}
.box-icon i {
  font-size: 12vw;
}
.box-title {
  font-size: 2vw;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  width: 100%;
  padding-bottom: 5vh;
}
</style>