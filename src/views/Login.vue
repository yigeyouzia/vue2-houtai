<template>
  <el-form
    label-width="70px"
    :inline="true"
    class="login-container"
    :model="form"
    :rules="rules"
    ref="form"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="form.password"
        placeholder="请输入免密"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit" class="login_btn" type="primary">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import startSakura from "../util/sakura.js";
// import cursor from "../util/cursor.js";
import Mock from "mockjs";
import Cookie from "js-cookie";
import { geMenu, getMenu } from "../api";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" }, // blur失去焦点提示
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入用户名" }, // blur失去焦点提示
        ],
      },
    };
  },
  methods: {
    // 登录
    submit() {
      // token信息
      // token信息存入cookie用于不同页面通信
      this.$refs.form.validate((valid) => {
        if (valid) {
          // this.form： username password 对象
          getMenu(this.form).then(({ data }) => {
            console.log(data);
            if (data.code === 20000) {
              // 存入token
              Cookie.set("token", data.data.token);
              this.$message.success(`欢迎${this.form.username}`);
              // 跳转
              this.$router.push("/home");
            } else {
              this.$message.error(data.data.message);
            }
          });
        }
      });
    },
  },
  mounted() {
    // fairyDustCursor();
  },
  //   mounted() {
  //     let script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src = "../util/sakura.js";
  //     document.body.appendChild(script);
  //   },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  //   box-sizing: border-box;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
  .login_btn {
    margin-left: 105px;
    margin-top: 10px;
  }
}
</style>