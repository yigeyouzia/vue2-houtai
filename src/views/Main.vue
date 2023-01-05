<template>
  <div>
    <el-container>
      <!-- <el-aside width="200px"> 自适应  实现缩放 -->
      <el-aside width="auto">
        <CommonAside />
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader />
        </el-header>
        <!-- tag -->
        <CommonTag />
        <el-main>
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
import CommonTag from "../components/CommonTag";
export default {
  name: "Main",
  components: { CommonAside, CommonHeader, CommonTag },
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
</style>