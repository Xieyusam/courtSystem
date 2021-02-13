<template>
  <div class="court-list">
    <div class="page-header">预订记录</div>
    <div class="search-line">
      <div style="width: 100px; margin-right: 14px">
        <el-select v-model="search.type" size="medium" placeholder="类型">
          <el-option
            v-for="item in typeOptions"
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
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="width: 150px; margin-right: 14px">
        <el-select v-model="search.datetype" size="medium" placeholder="时段">
          <el-option
            v-for="item in timeType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="width: 160px; margin-right: 14px">
        <el-date-picker
          :clearable="false"
          v-model="search.date"
          value-format="yyyy-MM-dd"
          style="width: 160px"
          type="date"
          size="medium"
          placeholder="日期"
        >
        </el-date-picker>
      </div>

      <div style="width: 200px; margin-right: 14px">
        <el-input
          placeholder="预定人账号"
          prefix-icon="el-icon-search"
          v-model="search.text"
          size="medium"
        >
        </el-input>
      </div>
      <div>
        <el-button size="medium" @click="reset">清空</el-button>
      </div>
    </div>
    <el-table
      :data="tableDataFilter"
      border
      style="width: 100%"
      :header-cell-style="{ background: '#eeeeee' }"
    >
      <el-table-column prop="user_name" label="预订人" align="center">
        <template slot-scope="scope">
          <span style="font-weight: bold">{{ scope.row.user_name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="court_name" label="预定场地" align="center">
        <template slot-scope="scope">
          <span style="font-weight: bold">{{ scope.row.court_name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="预定账号" align="center">
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
          <span :style="{ color: OrderColorChange(scope.row.status) }">{{
            scope.row.status | OrderTypeChange
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.status == 0">
            <el-button
              type="success"
              size="mini"
              @click="statusChange(1, scope.row)"
            >
              使用
            </el-button>
            <el-button
              type="warning"
              size="mini"
              @click="statusChange(2, scope.row)"
            >
              取消
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  orderTimeType,
  courtType,
  dateFormat,
  getTimeType,
} from "@/util/common";
import { AllOrder, setOrder } from "@/api/order";
export default {
  data() {
    return {
      search: {
        type: "",
        status: "",
        datetype: "",
        date: "",
        text: "",
      },
      tableData: [],
      typeOptions: [
        {
          value: "",
          label: "全部",
        },
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
      statusOptions: [
        {
          value: "",
          label: "全部",
        },
        {
          value: "0",
          label: "待使用",
        },
        {
          value: "1",
          label: "已使用",
        },
        {
          value: "2",
          label: "已取消",
        },
      ],
      timeType: [],
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
      let order = ["待使用", "已使用", "已取消"];
      return order[value];
    },
  },
  computed: {
    tableDataFilter() {
      return this.tableData.filter((item) => {
        return (
          item.type.toString().indexOf(this.search.type.toString()) != -1 &&
          item.status.toString().indexOf(this.search.status.toString()) != -1 &&
          item.datetype.toString().indexOf(this.search.datetype.toString()) !=
            -1 &&
          item.date.toString().indexOf(this.search.date.toString()) != -1 &&
          (item.phone.toString().indexOf(this.search.text.toString()) != -1 ||
            item.user_name.toString().indexOf(this.search.text.toString()) !=
              -1 ||
            item.court_name.toString().indexOf(this.search.text.toString()) !=
              -1)
        );
      });
    },
  },
  mounted() {
    this.timeType = getTimeType();
    this.getAllOrder();
  },
  methods: {
    OrderColorChange(value) {
      let color = ["#F56C6C", "#67C23A", ""];
      return color[value];
    },
    getAllOrder() {
      AllOrder().then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.Orders.map((item) => {
            item.date = dateFormat("YYYY-mm-dd", new Date(parseInt(item.date)));
            return item;
          });
        }
      });
    },
    statusChange(val, row) {
      const parems = {
        id: row.id,
        status: val,
      };
      setOrder(parems)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            this.getAllOrder();
          }
        })
        .catch((err) => {
          this.$message({
            message: "失败",
            type: "warning",
          });
        });
    },
    reset() {
      this.search = {
        type: "",
        status: "",
        datetype: "",
        date: "",
        text: "",
      };
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