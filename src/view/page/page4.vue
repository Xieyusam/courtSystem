<template>
  <div class="court-list">
    <div class="page-header">用户管理</div>
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
      <div style="width: 100px">
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
      <!-- <div style="width: 200px">
      <el-select v-model="value" size="medium" placeholder="状态">
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
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="手机号码" align="center">
      </el-table-column>
      <el-table-column prop="role" label="角色" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
      </el-table-column>
      <el-table-column label="操作" width="280" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            停用
          </el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            重置密码
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
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: "正常",
          role: "用户",
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
  border-bottom-right-radius:50em;
  border-top-right-radius:50em;
  /* left: 0; */
  float: left;
  margin-left:-20px ;
}
.search-line{
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
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