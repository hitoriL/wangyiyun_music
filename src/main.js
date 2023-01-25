import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const axios = require('axios')
axios
  .get('https://vodkgeyttp8.vod.126.net/cloudmusic/d490/core/86bb/464fd0f0bebadfaa7625f9832b3bfe52.mp4?wsSecret=d39b7758fbc53a231eb9fa20cf36ed77&wsTime=1671698141')
  .then(result => {
    console.log(result)
  })
  .catch(err => {})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
