<template>
  <div>
    <UserHeader />
    <br />
    <p style="margin-left: 16px; font-size: 12px">已绑定供应商</p>
    <div v-for="user in srmUserList" :key="user.srmAccount">
      <van-cell-group inset class="item-group">
        <van-cell title="供应商帐号" :value="user.srmAccount"></van-cell>
        <van-cell title="供应商名称" :value="user.srmName"></van-cell>
        <van-cell
          ><button
            @click.prevent="unbindUser(user.srmAccount)"
            style="color: #aa00aa; margin-right: 0px"
          >
            解除绑定
          </button>
        </van-cell>
      </van-cell-group>
    </div>
    <div>
      <button
        @click.prevent="toBindUser"
        style="margin-right: 32px; font-size: 18px; color: #45bdaa; padding-top: 10px"
      >
        新增绑定
      </button>
    </div>
    <div class="loading-div">
      <van-loading
        class="loading-bg"
        align="center"
        type="spinner"
        color="#1989fa"
        size="24px"
        v-show="pageLoading"
      />
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant';
import UserHeader from '@/components/UserHeader.vue';
import { getBindUserApi, unBindUserApi } from '@/api/api';

export default {
  components: {
    UserHeader,
  },
  data() {
    return {
      // openId: "",
      pageLoading: true,
      show: false,
      srmUserList: [],
    };
  },
  methods: {
    unbindUser(srmAccount) {
      Dialog.confirm({
        title: '解除绑定用户',
        message: `确定解除绑定用户${srmAccount}?`,
      })
        .then(() => {
          unBindUserApi({ srmAccount }).then((res) => {
            if (res.status) {
              Toast(`解绑【${srmAccount}】成功`);
              this.getBindUsers();
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    toBindUser() {
      this.$router.push('/gzh/bindUser');
    },
    getBindUsers() {
      getBindUserApi(location.search).then((res) => {
        this.show = true;
        this.pageLoading = false;

        if (res.status) {
          // this.openId = res.data.openId;
          sessionStorage.setItem('openId', res.data.openId);
          this.srmUserList = res.data.srmUserList;
          if (res.data.srmUserList.length === 0) {
            this.toBindUser();
          }
        } else {
          Toast('获取绑定用户列表失败');
        }
      });
    },
  },
  mounted() {
    this.getBindUsers();
  },
};
</script>

<style scoped>
a {
  display: block;
  float: right;
  margin-right: 16px;
}

.item-group {
  margin-top: 10px;
}

.loading-div {
  margin-top: 20px;
}
</style>
