<template>
  <div class="court-list">
    <div class="page-header">用户管理</div>
    <div class="search-line">
      <div style="width: 100px; margin-right: 14px">
        <el-select v-model="value1" size="medium" placeholder="角色">
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
        <el-select v-model="value2" size="medium" placeholder="状态">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="width: 200px">
        <el-input
          placeholder="姓名或手机号码"
          prefix-icon="el-icon-search"
          v-model="input2"
          size="medium"
        >
        </el-input>
      </div>
      <div>
        <el-button size="medium" icon="el-icon-search"></el-button>
        <el-button @click="dialogVisible = true" size="medium" type="primary"
          >创建管理员</el-button
        >
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :header-cell-style="{ background: '#eeeeee' }"
    >
      <el-table-column prop="name" label="姓名" align="center">
        <template slot-scope="scope">
          <span style="font-weight: bold">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号码" align="center">
      </el-table-column>
      <el-table-column prop="role" label="角色" align="center">
        <template slot-scope="scope">
          <span :style="{ color: scope.row.role == 0 ? '#909399' : '#67C23A' }"
            ><i
              class="iconfont"
              :class="scope.row.role == 0 ? 'iconyonghu' : 'iconguanliyuan2'"
            ></i
            >{{ scope.row.role == 0 ? "普通用户" : "管理员" }}</span
          >
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
      <el-table-column label="操作" width="280" align="center">
        <template slot-scope="scope">
          <el-button
            type="success"
            v-if="scope.row.status == 0"
            size="mini"
            @click="handleOpen(scope.$index, scope.row)"
          >
            恢复
          </el-button>
          <el-button
            type="warning"
            v-if="scope.row.status == 1"
            size="mini"
            @click="handleStop(scope.$index, scope.row)"
          >
            停用
          </el-button>
          <el-button size="mini" @click="handleReset(scope.$index, scope.row)">
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
    <!-- 创建管理员 -->
    <el-dialog
      title="创建管理员"
      :visible.sync="dialogVisible"
      width="300px"
      :before-close="handleClose"
    >
      <div>
        <el-input
          placeholder="姓名"
          v-model="newUser.name"
          size="medium"
          style="width: 100%; margin-bottom: 20px"
        >
        </el-input>
        <el-input
          placeholder="手机号"
          v-model="newUser.phone"
          size="medium"
          style="width: 100%; margin-bottom: 20px"
        >
        </el-input>
        <el-input
          placeholder="初始密码默认：123456"
          v-model="notext"
          disabled
          size="medium"
          style="width: 100%; margin-bottom: 20px"
        >
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible = false"
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
      newUser: {
        name: "",
        phone: "",
        password: 123456,
      },
      notext: "初始密码默认：123456",
      dialogVisible: false,
      tableData: [
        {
          name: "用户1",
          phone: "13143101301",
          status: 0,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 0,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 2,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 2,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
        {
          name: "用户1",
          phone: "13143101301",
          status: 1,
          role: 0,
        },
      ],
      options1: [
        {
          value: "2",
          label: "全部",
        },
        {
          value: "0",
          label: "普通用户",
        },
        {
          value: "1",
          label: "管理员",
        },
      ],
      value1: "2",
      options2: [
        {
          value: "0",
          label: "全部",
        },
        {
          value: "1",
          label: "正常",
        },
        {
          value: "2",
          label: "停用",
        },
      ],
      value2: "0",
    };
  },
  methods: {
    // 删除
    handleDelete(index, row) {
      alert("删除" + index);
    },
    // 恢复
    handleOpen(index, row) {
      alert("恢复" + index);
    },
    // 停用
    handleStop(index, row) {
      alert("停用" + index);
    },
    // 重置密码
    handleReset(index, row) {
      alert("重置密码" + index);
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