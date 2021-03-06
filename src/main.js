import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import  { BootstrapVue,  BootstrapVueIcons} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

 
import Vuetify from 'vuetify';

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuetify)


new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
