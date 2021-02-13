<template>
  <div class="court-list">
    <div class="page-header">预订管理</div>
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
          placeholder="名称或备注"
          prefix-icon="el-icon-search"
          v-model="search.Text"
          size="medium"
        >
        </el-input>
      </div>
      <div>
        <el-button size="medium" @click="reset">清除</el-button>
      </div>
    </div>
    <el-table
      :data="tableDataFilter"
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
            :style="{ color: scope.row.status == 0 ? '#67C23A' : '#F56C6C' }"
            >{{ scope.row.status == 0 ? "正常" : "停用" }}</span
          >
        </template>
      </el-table-column>
      <!-- <el-table-column prop="empty1" label="今天空余量" align="center">
      </el-table-column>
      <el-table-column prop="empty2" label="明天空余量" align="center">
      </el-table-column>
      <el-table-column prop="empty3" label="后天空余量" align="center">
      </el-table-column> -->
      <el-table-column prop="tips" label="备注" align="center">
      </el-table-column> -->
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleShow(scope.row, dayArry)"
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
        <el-tabs v-model="activeName">
          <el-tab-pane :label="'今天' + dayArry[0].str" name="1"></el-tab-pane>
          <el-tab-pane :label="'明天' + dayArry[1].str" name="2"></el-tab-pane>
          <el-tab-pane :label="'后天' + dayArry[2].str" name="3"></el-tab-pane>
        </el-tabs>
        <div class="time-box" v-if="activeName == '1'">
          <div
            class="linebox box-gray"
            v-for="(item1, index1) in order1"
            :key="index1"
          >
            <div style="width: 16%">{{ index1 | TimeType }}</div>
            <div v-if="item1.user_name" style="width: 60%">
              {{ item1.user_name }}--{{ item1.phone }}--
              <span :style="{ color: item1.status == 0 ? '' : '#67C23A' }">{{
                item1.status == 0 ? "待使用" : "已使用"
              }}</span>
            </div>
            <div v-else style="width: 60%">空</div>
            <div style="width: 15%">
              <span
                @click="statusChange(1, 1, index1, item1.id)"
                v-show="item1.user_name && item1.status == 0"
                style="color: #67c23a"
                >开始</span
              >
              <span
                @click="statusChange(2, 1, index1, item1.id)"
                v-show="item1.user_name && item1.status == 0"
                style="color: #f56c6c"
                >取消</span
              >
            </div>
          </div>
        </div>
        <div class="time-box" v-if="activeName == '2'">
          <div
            class="linebox box-gray"
            v-for="(item1, index1) in order2"
            :key="index1"
          >
            <div style="width: 16%">{{ index1 | TimeType }}</div>
            <div v-if="item1.user_name" style="width: 60%">
              {{ item1.user_name }}--{{ item1.phone }}--
              <span :style="{ color: item1.status == 0 ? '' : '#67C23A' }">{{
                item1.status == 0 ? "待使用" : "已使用"
              }}</span>
            </div>
            <div v-else style="width: 60%">空</div>
            <div style="width: 15%">
              <span
                @click="statusChange(1, 2, index1, item1.id)"
                v-show="item1.user_name && item1.status == 0"
                style="color: #67c23a"
                >开始</span
              >
              <span
                @click="statusChange(2, 2, index1, item1.id)"
                v-show="item1.user_name && item1.status == 0"
                style="color: #f56c6c"
                >取消</span
              >
            </div>
          </div>
        </div>
        <div class="time-box" v-if="activeName == '3'">
          <div
            class="linebox box-gray"
            v-for="(item1, index1) in order3"
            :key="index1"
          >
            <div style="width: 16%">{{ index1 | TimeType }}</div>
            <div v-if="item1.user_name" style="width: 60%">
              {{ item1.user_name }}--{{ item1.phone }}--
              <span :style="{ color: item1.status == 0 ? '' : '#67C23A' }">{{
                item1.status == 0 ? "待使用" : "已使用"
              }}</span>
            </div>
            <div v-else style="width: 60%">空</div>
            <div style="width: 15%">
              <span
                @click="statusChange(1, 3, index1, item1.id)"
                v-show="item1.user_name && item1.status == 0"
                style="color: #67c23a"
                >开始</span
              >
              <span
                @click="statusChange(2, 3, index1, item1.id)"
                v-show="item1.user_name && item1.status == 0"
                style="color: #f56c6c"
                >取消</span
              >
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { courtType, returnThreeDay, orderTimeType } from "@/util/common";
import { AllCourt } from "@/api/court";
import { OrderByDate, setOrder } from "@/api/order";

export default {
  data() {
    return {
      search: {
        type: "",
        Text: "",
        status,
      },
      dayArry: [],
      activeName: "1",
      dialogVisible: false,
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
      order1: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      order2: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      order3: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  computed: {
    orderData() {
      if (this.activeName == "1") {
        return order1;
      }
      if (this.activeName == "2") {
        return order2;
      }
      if (this.activeName == "3") {
        return order3;
      }
    },
    tableDataFilter() {
      return this.tableData.filter((item) => {
        return (
          item.type.toString().indexOf(this.search.type.toString()) != -1 &&
          item.status.toString().indexOf(this.search.status.toString()) != -1 &&
          (item.name.toString().indexOf(this.search.Text.toString()) != -1 ||
            item.tips.toString().indexOf(this.search.Text.toString()) !=
              -1)
        );
      });
    },
  },
  filters: {
    CourtTypeChange(value) {
      return courtType(value);
    },
    TimeType(value) {
      return orderTimeType(value);
    },
  },
  created(){
    this.getThreeDay();
  },
  mounted() {
    this.getAllCourt();
  },
  methods: {
    getAllCourt() {
      AllCourt().then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.Courts;
        }
      });
    },
    handleShow(row, dayArry) {
      this.dialogVisible = true;
      const parem1 = {
        courtId: row.id,
        date: dayArry[0].gettime.toString(),
      };
      const parem2 = {
        courtId: row.id,
        date: dayArry[1].gettime.toString(),
      };
      const parem3 = {
        courtId: row.id,
        date: dayArry[2].gettime.toString(),
      };
      this.getThreeDayOrder(parem1, parem2, parem3);
    },
    getThreeDayOrder(parem1, parem2, parem3) {
      OrderByDate(parem1).then((res) => {
        if (res.code == 200) {
          // console.log(res.data, 1);
          const data = res.data.Orders.filter((item) => item.status != 2);
          this.orderDue(1, data);
        }
      });
      OrderByDate(parem2).then((res) => {
        if (res.code == 200) {
          // console.log(res.data, 2);
          const data = res.data.Orders.filter((item) => item.status != 2);
          this.orderDue(2, data);
        }
      });
      OrderByDate(parem3).then((res) => {
        if (res.code == 200) {
          // console.log(res.data, 2);
          const data = res.data.Orders.filter((item) => item.status != 2);
          this.orderDue(3, data);
        }
      });
    },
    orderDue(type, data) {
      if (type == 1) {
        this.order1 = this.order1.map((item, index) => {
          data.forEach((element) => {
            if (index.toString() == element.datetype) {
              item = { ...element };
            }
          });
          return item;
        });
        console.log(this.order1, 1);
      }
      if (type == 2) {
        this.order2 = this.order2.map((item, index) => {
          data.forEach((element) => {
            if (index.toString() == element.datetype) {
              item = { ...element };
            }
          });
          return item;
        });
        console.log(this.order2, 2);
      }
      if (type == 3) {
        this.order3 = this.order3.map((item, index) => {
          data.forEach((element) => {
            if (index.toString() == element.datetype) {
              item = { ...element };
            }
          });
          return item;
        });
        console.log(this.order3, 3);
      }
    },
    getThreeDay() {
      console.log(returnThreeDay());
      this.dayArry = returnThreeDay();
    },
    handleClose() {
      this.order1 = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
      this.order2 = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
      this.order3 = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
      this.activeName = "1"
      this.dialogVisible = false;
    },
    //val:改变的值，index1:第几个order，index2:几个元素，id:订单id
    statusChange(val, index1, index2, id) {
      const parems = {
        id: id,
        status: val,
      };
      setOrder(parems)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            if (val == 1) {
              //开始订单
              if (index1 == 1) {
                this.order1[index2].status = 1;
              }
              if (index1 == 2) {
                this.order2[index2].status = 1;
              }
              if (index1 == 3) {
                this.order3[index2].status = 1;
              }
            } else {
              //取消订单
              if (index1 == 1) {
                this.order1[index2].user_name = ''
              }
              if (index1 == 2) {
                this.order2[index2].user_name = ''
              }
              if (index1 == 3) {
                this.order3[index2].user_name = ''
              }
            }
          }
        })
        .catch((err) => {
          this.$message({
            message: "失败",
            type: "warning",
          });
        });
    },
    reset(){
      this.search = {
        type: "",
        Text: "",
        status
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
  /* text-align: start; */
  /* background: #eeeeee; */
  font-size: 14px;
  line-height: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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