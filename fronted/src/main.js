import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

import store from './vuex/store'
import axios from 'axios'

import {getRequest} from './utils/api'
import {postRequest} from './utils/api'
import {deleteRequest} from './utils/api'
import {putRequest} from './utils/api'
import {uploadFileRequest} from './utils/api'
Vue.prototype.axios=axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
/* eslint-disable no-new */
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.uploadFile=uploadFileRequest;
Vue.prototype.rootUrl='http://localhost:8080/';
router.beforeEach(({name}, from, next) => {
  // 获取 JWT Token
  if (sessionStorage.getItem('userinfo')) {
    // 如果用户在login页面
    next()
  } else {
    if (name === 'login') {
      next();
    } else if(name=='admin'){
      next('/login');
    }else{
      next()
    }
  }
});

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
