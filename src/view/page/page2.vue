<template>
  <div class="court-list">
    <div class="page-header">资源管理</div>
    <div class="search-line">
      <div style="width: 200px; margin-right: 20px">
        <el-input
          placeholder="名称或备注"
          prefix-icon="el-icon-search"
          v-model="input2"
          size="medium"
        >
        </el-input>
      </div>
      <div style="width: 100px; margin-right: 20px">
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
      <div style="width: 100px; margin-right: 20px">
        <el-select v-model="value" size="medium" placeholder="状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="margin-right: 20px">
        <el-button size="medium" type="primary">查找</el-button>
        <el-button @click="dialogVisible = true" size="medium" type="primary"
          >创建球场</el-button
        >
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="名称" width="180" align="center">
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="180" align="center">
      </el-table-column>
      <el-table-column prop="tips" label="备注" align="center">
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            恢复
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 创建球场 -->
    <el-dialog
      title="创建球场"
      :visible.sync="dialogVisible"
      width="300px"
      :before-close="handleClose"
    >
      <div>

            <el-input
              placeholder="球场名称"
              v-model="input2"
              size="medium"
              style="width:100%;margin-bottom:20px;"
            >
            </el-input>


            <el-select v-model="value1" size="medium" style="width:100%;margin-bottom:20px;" placeholder="类型">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>

            <el-input
              placeholder="备注"
              v-model="input2"
              size="medium"
              style="width:100%;margin-bottom:20px;"
            >
            </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogVisible = false"
          >取 消</el-button
        >
        <el-button size="medium" type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
          status: "正常",
          tips: "上海市普陀区金沙江路 1518 弄",
        },
        {
          name: "羽毛球场1",
          type: "羽毛球",
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
  methods: {},
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
</style>