import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from  './assets/rem'
// import Vant from 'vant'

// import axios from 'axios'
// import lodash from 'lodash'
// import moment from 'moment'
// import qs from 'qs'
// // Vue.use(Vant)
// Vue.use(axios)
// Vue.use(lodash)
// Vue.use(moment)
// Vue.use(qs)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
