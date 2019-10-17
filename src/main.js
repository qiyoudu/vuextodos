import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import './assets/base.css'
import './assets/index.css'
//使用 vuex管理数据
import store from './store'
Vue.config.productionTip = false

new Vue({
  strict: true,
  store,
  // router,
  render: h => h(App)
}).$mount('#app')
