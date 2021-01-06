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
    <div style="width: 100px">
      <el-select v-model="value" size="small" placeholder="状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
}
.search-line{
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  margin-bottom: 20px;
}
</style>