<template>
  <div class="court-list">
    <div class="page-header">预订管理</div>
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
        <el-select v-model="value1" size="medium" placeholder="状态">
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
          placeholder="名称或备注"
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
      <el-table-column prop="name" label="名称" align="center">
        <template slot-scope="scope">
          <span style="font-weight: bold">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type | CourtTypeChange }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <span
            :style="{ color: scope.row.status == 1 ? '#67C23A' : '#F56C6C' }"
            >{{ scope.row.status == 1 ? "正常" : "停用" }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="empty1" label="今天空余量" align="center">
      </el-table-column>
      <el-table-column prop="empty2" label="明天空余量" align="center">
      </el-table-column>
      <el-table-column prop="empty3" label="后天空余量" align="center">
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleShow(scope.$index, scope.row)"
          >
            查看预订
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 预订弹窗 -->
    <el-dialog
      title="预订"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="'今天'+dayArry[0].str" name="1"></el-tab-pane>
          <el-tab-pane :label="'明天'+dayArry[1].str" name="2"></el-tab-pane>
          <el-tab-pane :label="'后天'+dayArry[2].str" name="3"></el-tab-pane>
        </el-tabs>
        <div class="time-box">
          <div class="linebox box-black">上午场</div>
          <div class="linebox box-gray">9：00 - 10：00</div>
          <div class="linebox box-gray">10：00 - 11：00</div>
          <div class="linebox box-gray">11：00 - 12：00</div>
          <div class="linebox box-black">下午场</div>
          <div class="linebox box-gray">9：00 - 10：00</div>
          <div class="linebox box-gray">10：00 - 11：00</div>
          <div class="linebox box-gray">11：00 - 12：00</div>
          <div class="linebox box-black">晚上场</div>
          <div class="linebox box-gray">9：00 - 10：00</div>
          <div class="linebox box-gray">10：00 - 11：00</div>
          <div class="linebox box-gray">11：00 - 12：00</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { courtType,returnThreeDay } from "@/util/common";
export default {
  data() {
    return {
      dayArry:[],
      activeName: "1",
      dialogVisible: false,
      tableData: [
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: 1,
          tips: "上海市普陀区金沙江路 1518 弄",
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
    CourtTypeChange(value) {
      return courtType(value);
    },
  },
  mounted(){
    this.getThreeDay()
  },
  methods: {
    handleShow() {
      this.dialogVisible = true;
    },
    getThreeDay(){
      // console.log(returnThreeDay()) 
      this.dayArry = returnThreeDay()
    }
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
  cursor: pointer;
}
.box-gray:hover {
  background: #d8d8d8;
}
.box-black {
  background: #3d3d3da4;
  color: #ffffff;
}
.time-box {
  height: 50vh;
  overflow: auto;
}
</style>