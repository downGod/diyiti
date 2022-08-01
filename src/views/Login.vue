<template>
  <div class="box">
    <div class="lf">
      <div class="title">
      </div>
    </div>
    <div class="rt">
      <h2>登录</h2>
      <div class="form">
        <el-form label-width="120px">
          <el-input v-model="name" />
          <el-input v-model="psd" type="password" show-password />
          <div>
            <el-checkbox
              :checked="flag"
              label="记住我"
              size="large"
              @change="toggle"
            />
            <p>忘记密码?</p>
          </div>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form>
      </div>
      <div style="margin-top: 20px">
        <p>用户名:admin</p>
        <p>密码:123456</p>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import request from "../api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const form = reactive({
      name: "",
      psd: "",
      flag: false,
    });
    async function onSubmit() {
      const { data } = await request.post("/cont", {
        user: form.name,
        psd: form.psd,
      });
      console.log(data);
      if (data.status == 200) {
        localStorage.setItem("token", form.name);
        ElMessage({
          message: "登陆成功",
          type: "success",
          onClose: () => {
            router.push("/home");
            if (!form.flag) {
              (form.name = ""), (form.psd = "");
            }
          },
        });
      } else {
        ElMessage.error("登陆失败");
      }
    }
    function toggle() {
      form.flag = !form.flag;
    }
    return {
      ...toRefs(form),
      onSubmit,
      toggle,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  & > div {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .lf {
    align-items: center;
    padding-top: 40px;
    box-sizing: border-box;
    color: #fff;
    .title {
      display: flex;
      align-items: center;
      img {
        width: 48px;
        height: 48px;
      }
      h3 {
        font-size: 24px;
      }
    }
    & > img {
      width: 268px;
      height: 138px;
      margin: 50px 0;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
  }
  .rt {
    padding: 100px 0 0 100px;
    box-sizing: border-box;
    background: #fff;
    h2 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    .form {
      width: 404px;
      .el-input {
        height: 40px;
        margin-bottom: 25px;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .el-button {
        width: 100%;
        height: 35px;
        margin-top: 25px;
      }
    }
  }
}
</style>