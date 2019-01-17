import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://fierce-gorge-95655.herokuapp.com'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
