<template>
  <div class="court-list">
    <div class="page-header">资源管理</div>
    <div class="search-line">
      <div style="width: 100px; margin-right: 14px">
        <el-select
          v-model="search.type"
          size="medium"
          @change="searchData(search)"
          placeholder="类型"
        >
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="width: 100px; margin-right: 14px">
        <el-select
          v-model="search.status"
          size="medium"
          @change="searchData(search)"
          placeholder="状态"
        >
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
          placeholder="名称"
          prefix-icon="el-icon-search"
          @change="searchData(search)"
          v-model="search.Text"
          size="medium"
        >
        </el-input>
      </div>
      <div>
        <el-button size="medium" @click="resetSearch">清空</el-button>
        <el-button @click="changeInfo('new')" size="medium" type="primary"
          >创建球场</el-button
        >
      </div>
    </div>
    <el-table
      :data="tableData2"
      border
      style="width: 100%"
      :header-cell-style="{ background: '#eeeeee' }"
    >
      <el-table-column prop="name" label="名称" width="180" align="center">
        <template slot-scope="scope">
          <span style="font-weight: bold">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type | CourtTypeChange }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="180" align="center">
        <template slot-scope="scope">
          <span
            :style="{ color: scope.row.status == 0 ? '#67C23A' : '#F56C6C' }"
            >{{ scope.row.status == 0 ? "正常" : "停用" }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="tips" label="备注" align="center">
      </el-table-column>
      <el-table-column label="操作" width="280" align="center">
        <template slot-scope="scope">
          <el-button
            type="info"
            size="mini"
            @click="changeInfo('edit', scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            type="success"
            v-if="scope.row.status == 1"
            size="mini"
            @click="changeStatus(scope.$index, scope.row, 0)"
          >
            恢复
          </el-button>
          <el-button
            type="warning"
            v-if="scope.row.status == 0"
            size="mini"
            @click="changeStatus(scope.$index, scope.row, 1)"
          >
            停用
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
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="300px"
      :before-close="handleClose"
    >
      <div>
        <el-input
          placeholder="球场名称"
          v-model="court.name"
          size="medium"
          style="width: 100%; margin-bottom: 20px"
        >
        </el-input>

        <el-select
          v-model="court.type"
          size="medium"
          style="width: 100%; margin-bottom: 20px"
          placeholder="类型"
          :disabled="dialogTitle != '创建球场'"
        >
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
          v-model="court.tips"
          size="medium"
          style="width: 100%; margin-bottom: 20px"
        >
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button
          v-if="dialogTitle == '创建球场'"
          size="mini"
          type="primary"
          @click="newCourtPost(court)"
          >确 定</el-button
        >
        <el-button
          v-else
          size="mini"
          type="primary"
          @click="SaveCourtPost(court)"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { courtType } from "@/util/common";
import { AllCourt, setCourt, delCourt, newCourt } from "@/api/court";

export default {
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "创建球场",
      tableData: [],
      tableData2: [],
      search: {
        type: "",
        Text: "",
        status,
      },
      options1: [
        {
          value: 1,
          label: "羽毛球",
        },
        {
          value: 2,
          label: "篮球",
        },
        {
          value: 3,
          label: "乒乓球",
        },
        {
          value: 4,
          label: "桌球",
        },
        {
          value: 5,
          label: "网球",
        },
      ],
      options3: [
        {
          value: "",
          label: "全部",
        },
        {
          value: 1,
          label: "羽毛球",
        },
        {
          value: 2,
          label: "篮球",
        },
        {
          value: 3,
          label: "乒乓球",
        },
        {
          value: 4,
          label: "桌球",
        },
        {
          value: 5,
          label: "网球",
        },
      ],
      court: {
        name: "",
        type: "",
        tips: "",
      },
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
  filters: {
    CourtTypeChange(value) {
      return courtType(value);
    },
  },
  mounted() {
    this.getAllCourt();
  },
  methods: {
    searchData(search) {
      this.tableData2 = this.tableData.filter((item) => {
        return (
          item.type.toString().indexOf(search.type.toString()) != -1 &&
          item.status.toString().indexOf(search.status.toString()) != -1 &&
          item.name.toString().indexOf(search.Text.toString()) != -1
        );
      });
    },
    getAllCourt() {
      AllCourt().then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.Courts;
          this.searchData(this.search);
        }
      });
    },
    changeStatus(index, row, status) {
      const parems = {
        id: row.id,
        status: status,
      };
      setCourt(parems)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            this.getAllCourt();
          }
        })
        .catch((err) => {
          this.$message({
            message: "失败",
            type: "warning",
          });
        });
    },
    changeInfo(type, index, row) {
      if (type == "edit") {
        this.dialogVisible = true;
        this.dialogTitle = "编辑球场";
        this.court = {
          name: row.name,
          type: row.type,
          tips: row.tips,
          id: row.id,
        };
      }
      if (type == "new") {
        this.dialogVisible = true;
        this.dialogTitle = "创建球场";
        this.court = {
          name: "",
          type: "",
          tips: "",
        };
      }
    },
    // 删除
    handleDelete(index, row) {
      const parems = {
        id: row.id,
      };
      delCourt(parems)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "删除成功",
              type: "success",
            });
            this.getAllCourt();
          }
        })
        .catch((err) => {
          this.$message({
            message: "失败",
            type: "warning",
          });
        });
    },
    //新建球场
    SaveCourtPost(court) {
      this.dialogVisible = false;
      const parems = { ...court };
      setCourt(parems)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "保存成功",
              type: "success",
            });
            this.court = {
              name: "",
              type: "",
              tips: "",
            };
            this.getAllCourt();
          }
        })
        .catch((err) => {
          this.$message({
            message: "失败",
            type: "warning",
          });
        });
    },
    //新建球场
    newCourtPost(court) {
      this.dialogVisible = false;
      const parems = { ...court };
      newCourt(parems)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "新建成功",
              type: "success",
            });
            this.court = {
              name: "",
              type: "",
              tips: "",
            };
            this.getAllCourt();
          }
        })
        .catch((err) => {
          this.$message({
            message: "失败",
            type: "warning",
          });
        });
    },
    handleClose() {
      this.court = {
        name: "",
        type: "",
        tips: "",
      };
    },
    resetSearch() {
      this.search = {
        type: "",
        Text: "",
        status,
      };
      this.searchData(this.search);
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
</style>