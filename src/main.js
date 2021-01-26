import Vue from 'vue'
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.min.css"

import "./assets/css/tailwind.css"

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
