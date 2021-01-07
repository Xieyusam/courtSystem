<template>
  <div class="court-list">
    <div class="page-header">预订记录</div>
    <div class="search-line">
      <div style="width: 100px; margin-right: 14px">
        <el-select v-model="value1" size="medium" placeholder="类型">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="width: 100px; margin-right: 14px">
        <el-select v-model="value1" size="medium" placeholder="时段">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="width: 200px">
        <el-input
          placeholder="预定人、预订场地"
          prefix-icon="el-icon-search"
          v-model="input2"
          size="medium"
        >
        </el-input>
      </div>
      <div>
        <el-button size="medium" icon="el-icon-search"></el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :header-cell-style="{ background: '#eeeeee' }"
    >
      <el-table-column prop="username" label="预订人" align="center">
        <template slot-scope="scope">
          <span style="font-weight: bold">{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="courtname" label="预定场地" align="center">
        <template slot-scope="scope">
          <span style="font-weight: bold">{{ scope.row.courtname }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="场地类型" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type | CourtTypeChange }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="预订日期" align="center">
      </el-table-column>
      <el-table-column prop="datetype" label="预订时段" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.datetype | TimeType }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <span :style="{ color: OrderColorChange(scope.row.status)  }">{{ scope.row.status | OrderTypeChange }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { orderTimeType, courtType } from "@/util/common";
export default {
  data() {
    return {
      activeName: "1",
      dialogVisible: false,
      tableData: [
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 8,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 7,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 5,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: 1,
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
      ],
      options1: [
        {
          value: "1",
          label: "羽毛球",
        },
        {
          value: "2",
          label: "篮球",
        },
        {
          value: "3",
          label: "乒乓球",
        },
        {
          value: "4",
          label: "桌球",
        },
        {
          value: "5",
          label: "网球",
        },
      ],
      value1: "",
      options2: [
        {
          value: "1",
          label: "正常",
        },
        {
          value: "2",
          label: "停用",
        },
      ],
      value2: "1",
    };
  },
  filters: {
    TimeType(value) {
      return orderTimeType(value);
    },
    CourtTypeChange(value) {
      return courtType(value);
    },
    OrderTypeChange(value) {
      let order = ['待使用','已使用','已取消']
      return order[value]
    },
  },
  methods: {
    OrderColorChange(value){
      let color = ['#F56C6C','#67C23A','']
      return color[value]
    },
    handleShow() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
.court-list {
  width: 100%;
}
.page-header {
  text-align: start;
  /* float: left; */
  /* position: relative; */
  background: #606266;
  color: #ffffff;
  padding: 5px 20px;
  border-bottom-right-radius: 50em;
  border-top-right-radius: 50em;
  /* left: 0; */
  float: left;
  margin-left: -20px;
}
.search-line {
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.linebox {
  height: 40px;
  text-align: start;
  /* background: #eeeeee; */
  font-size: 14px;
  line-height: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 0 10px;
}
.box-gray {
  background: #eeeeee;
}
.time-box {
  height: 300px;
  overflow: auto;
}
</style>