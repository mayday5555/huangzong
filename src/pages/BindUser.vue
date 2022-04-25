<template>
  <div class="box">
    <UserHeader></UserHeader>
    <div class="out-box">
      <div class="in-box">
        <div>
          <input type="text" v-model="srmAccount" placeholder="请输入供应商帐户" />
          <i v-if="srmAccount" class="clearBtn" @click="srmAccount = ''"></i>
        </div>
        <div>
          <input :type="inputType" v-model="srmPassword" placeholder="请输入密码" />
          <i v-if="srmPassword" class="clearBtn clearSrmPassword" @click="srmPassword = ''"></i>
          <span @click="toggleEyes">
            <img :src="iconPath" alt="" id="eyes" />
          </span>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <van-button type="primary" @click="bindUser">绑定</van-button>
    </div>
  </div>
</template>

<script>
import { Toast, Button } from 'vant';
import { bindUserApi } from '@/api/api';
import UserHeader from '@/components/UserHeader.vue';

const eyesPath = require('@/assets/eye.png');
const eyesClosePath = require('@/assets/eyes_close.png');

export default {
  components: {
    UserHeader,
    VanButton: Button,
  },
  data() {
    return {
      srmAccount: '',
      srmPassword: '',
      showPassword: false,
      iconPath: eyesClosePath,
      inputType: 'password',
    };
  },
  methods: {
    toggleEyes() {
      if (this.showPassword) {
        this.showPassword = false;
        this.inputType = 'password';
        this.iconPath = eyesClosePath;
      } else {
        this.showPassword = true;
        this.inputType = 'text';
        this.iconPath = eyesPath;
      }
    },
    bindUser() {
      if (!this.srmAccount || !this.srmPassword) {
        Toast('帐号或密码不能为空');
        return;
      }
      bindUserApi({
        srmAccount: this.srmAccount,
        srmPassword: this.srmPassword,
      }).then((res) => {
        if (res.status) {
          Toast('绑定成功');
          this.$router.push('/gzh/myUser');
        } else {
          Toast('绑定失败,请检查帐号密码');
        }
      });
    },
  },
};
</script>

<style scoped>
label {
  position: absolute;
  z-index: 2;
  left: 300px;
  top: 50%;
  margin-top: 5px;
}

#eyes {
  width: 28px;
  height: 28px;
}

.out-box {
  margin: 50px auto;
  width: 350px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 5px;
}

.in-box {
  padding: 23px 10px 40px 10px;
  position: relative;
}

.in-box input {
  border: none;
  border-bottom: 1px solid #dedede;
  width: 320px;
  height: 48px;
  line-height: 48px;
}

.clearBtn {
  position: absolute;
  z-index: 2;
  left: 320px;
  top: 50%;
  margin-top: -40px;
  background-image: url("../assets/close.png");
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
}

.clearSrmPassword {
  left: 280px;
  margin-top: 14px;
}

.btn-box {
  margin-top: 20px;
  text-align: center;
}

.btn-box button {
  background-color: #45bdaa;
  border: 1px solid #45bdaa;
  width: 350px;
  font-size: 18px;
  height: 44px;
  border-radius: 22px;
  outline-color: #eee;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #888;
  font-size: 18px;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #888;
  font-size: 18px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #888;
  font-size: 18px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #888;
  font-size: 18px;
}
</style>
