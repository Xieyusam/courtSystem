<template>
  <div class="court-list">
    <!-- <div class="page-header">资源管理</div>
    <el-divider></el-divider> -->
    <div class="search-line">
      <div style="width: 200px">
        <el-input
          placeholder="名称或备注"
          prefix-icon="el-icon-search"
          v-model="input2"
          size="small"
        >
        </el-input>
      </div>
      <div style="width: 100px">
        <el-select v-model="value1" size="small" placeholder="类型">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- <div style="width: 200px">
      <el-select v-model="value" size="small" placeholder="状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div> -->
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="username" label="预订人" align="center">
      </el-table-column>
      <el-table-column prop="courtname" label="预定场地" align="center">
      </el-table-column>
      <el-table-column prop="date" label="预订日期" align="center">
      </el-table-column>
      <el-table-column prop="datetype" label="预订时段" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="color: rgb(40, 252, 13);">{{ scope.row.datetype | TimeType }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { orderTimeType } from "@/util/common";
export default {
  data() {
    return {
      activeName: "1",
      dialogVisible: false,
      tableData: [
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 8,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 7,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 5,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
          date: "2020-12-31",
          datetype: 1,
          status: 0,
        },
        {
          username: "用户1",
          courtname: "羽毛球场1",
          type: "羽毛球",
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
  },
  methods: {
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
}
.search-line {
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