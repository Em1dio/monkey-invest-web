import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/axios';
import VueCookies from 'vue-cookies';
// https://www.npmjs.com/package/vue-cookies

Vue.config.productionTip = false;

Vue.filter('toCurrency', function (value) {
  if (typeof value !== 'number') {
    return value;
  }
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
});

Vue.filter('toPercent', function (value) {
  if (typeof value !== 'number') {
    return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
Vue.use(VueCookies);
