import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/axios';
import VueCookies from 'vue-cookies';
// https://www.npmjs.com/package/vue-cookies

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
Vue.use(VueCookies);
