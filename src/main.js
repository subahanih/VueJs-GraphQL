import Vue from 'vue'
import App from './App.vue'
import router from './components/VueRouter'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

export const myVue = new Vue();

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
