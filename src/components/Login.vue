<template>
  <div class="login-panel">
    <div class="username">
      <Field v-model="username" :clearable="true" placeholder="请输入用户名" />
    </div>
    <div class="password">
      <Field v-model="password" type="password" :clearable="true" placeholder="请输入密码" />
      <i v-if="password" class="eye"></i>
    </div>
  </div>
</template>
<script>
import { Field } from 'vant';

export default {
  name: 'LoginPenel',
  components: {
    Field,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
<style lang="less" scoped>
.login-panel {
  overflow: hidden;
  max-width: 300px;
  margin: 100px auto 0;
  padding: 10px 20px;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;

  .username {
    border-bottom: 1px solid #cbcbcb;
  }

  .password {
    position: relative;

    .eye {
      position: absolute;
      top: 50%;
      right: 0px;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      background: url('../assets/eye.png');
      background-size: 100%;
    }
  }

  .van-cell {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
