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
      <el-table-column prop="name" label="名称" width="180" align="center">
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type | CourtTypeChange }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="180" align="center">
      </el-table-column>
      <el-table-column prop="tips" label="备注" align="center">
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleShow(scope.$index, scope.row)">
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
          <el-tab-pane label="今天" name="1"></el-tab-pane>
          <el-tab-pane label="明天" name="2"></el-tab-pane>
          <el-tab-pane label="后天" name="3"></el-tab-pane>
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
      <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
  </span> -->
    </el-dialog>
  </div>
</template>

<script>
import { courtType } from "@/util/common";
export default {
  data() {
    return {
      activeName: "1",
      dialogVisible: false,
      tableData: [
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "1",
          status: "正常",
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
  cursor: pointer;
}
.box-gray:hover {
  background: #d8d8d8;
}
.box-black{
  background: #3d3d3da4;
  color: #ffffff;
}
.time-box {
  height: 50vh;
  overflow: auto;
}
</style>