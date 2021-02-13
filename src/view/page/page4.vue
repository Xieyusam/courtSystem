<template>
  <div class="court-list">
    <div class="page-header">用户管理</div>
    <div class="search-line">
      <div style="width: 100px; margin-right: 14px">
        <el-select v-model="search.role" size="medium" placeholder="角色">
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
        <el-select v-model="search.status" size="medium" placeholder="状态">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="width: 200px; margin-right: 14px">
        <el-input
          placeholder="姓名"
          prefix-icon="el-icon-search"
          v-model="search.name"
          size="medium"
        >
        </el-input>
      </div>
      <div>
        <el-button size="medium" @click="reset">清空</el-button>
        <!-- <el-button @click="dialogVisible = true" size="medium" type="primary"
          >创建管理员</el-button
        > -->
      </div>
    </div>
    <el-table
      :data="tableData.filter(item =>{
        return item.role.toString().indexOf(search.role.toString()) != -1 &&
          item.status.toString().indexOf(search.status.toString()) != -1 &&
          item.name.toString().indexOf(search.name.toString()) != -1
      })"
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
            >{{
              scope.row.role == 0
                ? "普通用户"
                : scope.row.role == 1
                ? "管理员"
                : "超级管理员"
            }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <span
            :style="{ color: scope.row.status == 0 ? '#67C23A' : '#F56C6C' }"
            >{{ scope.row.status == 0 ? "正常" : "停用" }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="320" align="center">
        <template slot-scope="scope">
          <div v-if="mine.role > scope.row.role">
            <el-button
              type="success"
              v-if="mine.role == 2 && scope.row.role == 0"
              size="mini"
              @click="userInfoChange('role', 1, scope.row)"
            >
              设为管理员
            </el-button>
            <el-button
              type="warning"
              v-if="mine.role == 2 && scope.row.role == 1"
              size="mini"
              @click="userInfoChange('role', 0, scope.row)"
            >
              取消管理员
            </el-button>
            <el-button
              type="success"
              v-if="scope.row.status == 1"
              size="mini"
              @click="userInfoChange('status', 0, scope.row)"
            >
              恢复
            </el-button>
            <el-button
              type="warning"
              v-if="scope.row.status == 0"
              size="mini"
              @click="userInfoChange('status', 1, scope.row)"
            >
              停用
            </el-button>
            <el-button
              size="mini"
              @click="handleReset(scope.$index, scope.row)"
            >
              重置密码
            </el-button>
            <!-- <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            > -->
          </div>
          <div v-else>您无法对该账号操作</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { AllUser, userChange , resetPassword } from "@/api/user";
import { localData } from "@/util/local";
export default {
  data() {
    return {
      mine: {},
      newUser: {
        name: "",
        phone: "",
        password: 123456,
      },
      notext: "初始密码默认：123456",
      dialogVisible: false,
      search:{
        status:"",
        role:"",
        name:""
      },
      tableData: [],
      options1: [
        {
          value: "",
          label: "全部",
        },
        {
          value: "0",
          label: "普通用户",
        },
        {
          value: "1",
          label: "管理员",
        },{
          value: "2",
          label: "超级管理员",
        }
      ],
      options2: [
        {
          value: "",
          label: "全部",
        },
        {
          value: "0",
          label: "正常",
        },
        {
          value: "1",
          label: "停用",
        },
      ],
    };
  },
  mounted() {
    this.mine = localData("get", "userinfo");
    this.getAllUser();
  },
  methods: {
    getAllUser() {
      AllUser().then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.users.filter((item) => {
            return item.id != this.mine.id;
          });
        }
      });
    },
    userInfoChange(type, value, row) {
      let parems = {
        id: row.id,
      };
      if (type == "role") {
        parems.role = value;
      }
      if (type == "status") {
        parems.status = value;
      }
      userChange(parems)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            this.getAllUser();
          }
        })
        .catch((err) => {
          this.$message({
            message: "失败",
            type: "warning",
          });
        });
    },

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
      const parems = {
        id:row.id
      }
      resetPassword(parems).then(res =>{
        if(res.code == 200) {
          this.$message({
              message: "账号"+ row.name+ "密码已重置为123456",
              type: "success",
            });
        }
      })
      .catch(err =>{
        this.$message({
            message: "失败",
            type: "warning",
          });
      })
    },
    reset(){
      this.search = {
        status:"",
        role:"",
        name:""
      }
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
}
.time-box {
  height: 300px;
  overflow: auto;
}
</style>