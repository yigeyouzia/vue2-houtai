import Vue from 'vue'
import 'default-passive-events'
import ElementUI from 'element-ui';
// import { Row, Button, Container } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router';  // 默认读取index.js
import store from './store';
import './api/mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Row)
// Vue.use(Button)
// Vue.use(Container)


new Vue({
  router,
  store,
  created() {
    store.commit("addMenu", router)  // 解决刷新白屏问题
  },
  render: h => h(App),
}).$mount('#app')
