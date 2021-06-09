<template>
  <div class="container">
    <el-card id="login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item size="mini">
          <h3>个人博客B端管理台</h3>
        </el-form-item>
        <el-form-item label="用户名" prop="username" size="mini">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" size="mini">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" size="mini"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  name: "login",
  data() {
    return {
      rules: {
        username: [
          {
            max: 11,
            min: 11,
            message: "请输入正确的账号",
            trigger: "blur",
            required: true,
          },
        ],
        password: [
          {
            max: 16,
            min: 8,
            message: "请输入正确的密码",
            trigger: "blur",
            required: true,
          },
        ],
      },
      ruleForm: {
        username: "",
        password: "",
      },
    };
  },
  setup() {
    const store = reactive({});
    return {
      ...toRefs(store),
    };
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/background.jpg");
  background-size: 100% 100%;
}
#login {
  width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>