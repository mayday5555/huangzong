import Vue from 'vue';
import VueRouter from 'vue-router';
import { Field } from 'vant';
import MyUser from '@/pages/MyUser.vue';
import BindUser from '@/pages/BindUser.vue';

Vue.use(Field);
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/gzh/bindUser',
      component: BindUser,
      meta: {
        title: '绑定用户',
      },
    }, {
      path: '/gzh/myUser',
      component: MyUser,
      meta: {
        title: '我的用户',
      },
    }, {
      path: '/',
      component: MyUser,
      meta: {
        title: '我的用户',
      },
    },
  ],
});
