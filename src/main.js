import Vue from 'vue';
import VueCookies from 'vue-cookies';
import VueTablerIcons from 'vue-tabler-icons';
import App from './App.vue';
import CommonMethods from './components/Common/CommonMethods';
import './plugins/axios';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false;

Vue.filter('toCurrency', function (value) {
  if (typeof value !== 'number') {
    return value;
  }
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
});

Vue.filter('toPercent', function (value) {
  if (typeof value !== 'number') {
    return value;
  }
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
});

Vue.use(VueTablerIcons);
Vue.use(CommonMethods);
Vue.use(Toasted);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
Vue.use(VueCookies);
