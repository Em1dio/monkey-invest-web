import Vue from 'vue';
import axios from 'axios';

require('dotenv').config();

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      // baseURL: 'http://0034ce5b2967.ngrok.io',
<<<<<<< HEAD
      baseURL: process.env.VUE_APP_BASE_URL,
      // baseURL: process.env.VUE_APP_NOT_BACKEND_CONFIG ,
=======
      // baseURL: 'http://localhost:3000',
      baseURL: process.env.VUE_APP_NOT_BACKEND_CONFIG,
>>>>>>> 440141c80e6a5d6dc073b091ae449bff4320ffc2
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
});
