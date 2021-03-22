import Vue from 'vue';
import axios from 'axios';
import router from './../router';

require('dotenv').config();

const errorHandler = (error) => {
  if (error.response.status === 401) {
    router.push({ name: 'Home' });
    // store.dispatch('user/logout'); // now store should be accessible
  }
  return Promise.reject({ ...error });
};

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      // baseURL: 'http://0034ce5b2967.ngrok.io',
      baseURL: 'http://localhost:3000',
      // baseURL: process.env.VUE_APP_NOT_BACKEND_CONFIG ,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    Vue.prototype.$http.interceptors.response.use(
      (response) => response,
      (error) => errorHandler(error),
    );
  },
});
