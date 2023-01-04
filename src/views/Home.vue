<template>
  <el-row>
    <!-- 1.左侧 -->
    <el-col :span="8" style="padding-right: 10px">
      <!-- 用户信息展示 -->
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/imgs/tx.png" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2023-1-2</span></p>
          <p>上次登录地点：<span>四川</span></p>
        </div>
      </el-card>
      <!-- 数据卡片  prop对应data属性的 tableData 列行对应渲染-->
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          />
          <!-- <el-table-column prop="name" label="课程"> </el-table-column>
          <el-table-column prop="tadayBuy" label="今日购买"> </el-table-column>
          <el-table-column prop="monthBuy" label="本月购买"> </el-table-column>
          <el-table-column prop="totalBuy" label="总购买"> </el-table-column> -->
        </el-table>
      </el-card>
    </el-col>

    <!-- 2.右侧 -->
    <el-col :span="16" style="padding-left: 10px">
      <!-- 2.1 右上 -->
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <!-- :style渲染css -->
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">￥{{ item.value }}</p>
            <p class="dec">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <!-- 2.2右下图  -->
      <el-card style="width:80%, height: 280px">
        <!-- 折线图 ref用于获取dom结点-->
        <div ref="echarts__line" style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <!-- 柱状图 -->
          <div ref="echarts__bar" style="height: 260px"></div>
        </el-card>
        <el-card style="height: 260px">
          <!-- 饼状图 -->
          <div ref="echarts__pie" style="height: 260px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../api";
import * as echarts from "echarts";
export default {
  name: "Home",
  data() {
    return {
      // 卡片数据
      tableData: [],
      // 用于v-for遍历
      tableLabel: {
        name: "课程",
        tadayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付账单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏账单",
          value: 66,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付账单",
          value: 34,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付账单",
          value: 14,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏账单",
          value: 2334,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付账单",
          value: 14,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data.data;
      this.tableData = tableData;
      // setTimeout(() => {
      //   this.tableData = tableData;
      // }, 2000);
      // 折线图
      let echarts__line = echarts.init(this.$refs.echarts__line);
      // 处理xAixs
      const { orderData, userData, videoData } = data.data;
      const xAxis = Object.keys(orderData.data[0]);
      let echarts__line_option = {
        title: {
          text: "",
        },
        // 提示框
        tooltip: { data: 11 },
        // 图例
        legend: {
          data: xAxis,
        },
        // x轴
        xAxis: {
          data: xAxis,
        },
        // y轴
        yAxis: {},
      };
      // 数据
      echarts__line_option.series = [];
      xAxis.forEach((key) => {
        echarts__line_option.series.push({
          name: key,
          // 数组中的每个对象
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      });
      echarts__line.setOption(echarts__line_option);

      // 柱状图
      let echarts__bar = echarts.init(this.$refs.echarts__bar);
      let echarts__bar_option = {
        title: {
          text: "",
        },
        // 图例文字颜色
        legend: {
          textStyle: {
            color: "#333",
          },
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "20%",
        },
        // x轴
        xAxis: {
          type: "category", //类目轴
          data: userData.map((item) => item.data),
          axisLine: {
            linestyle: {
              co1or: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            co10r: "#333",
          },
        },
        // y轴
        yAxis: [
          {
            type: "value",
            axisLine: {
              linestyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "新增用户",
            data: userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: userData.map((item) => item.active),
            type: "bar",
          },
        ],
      };
      echarts__bar.setOption(echarts__bar_option);

      // 饼状图
      let echarts__pie = echarts.init(this.$refs.echarts__pie);
      let echarts__pie_option = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: videoData,
            type: "pie",
          },
        ],
      };
      echarts__pie.setOption(echarts__pie_option);
    });
  },
};
</script>
<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 20px;
  img {
    margin-right: 40px;
    width: 150px;
    border-radius: 50%;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}

// 右边数据价格
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    width: 32%;
    margin-bottom: 10px;
  }
  .icon {
    width: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      height: 30px;
      text-align: center;
    }
    .dec {
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }
}
// 饼状图
.graph {
  display: flex;
  justify-content: space-between;
  .el-card {
    margin-top: 20px;
    width: 48%;
  }
}
</style>