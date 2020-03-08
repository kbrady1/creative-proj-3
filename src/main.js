import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock_data.js'


let data = {
  contacts: mock,
  favorites: [],
  selectedContact: ''
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
