import Vue from "vue";
import axios from "axios";

require('dotenv').config()

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "http://localhost:3000",
      // baseURL: process.env.VUE_APP_NOT_BACKEND_CONFIG ,
      headers: { 
        'Content-Type': 'application/json'
      }
    })
  }
});