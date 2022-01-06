/* 
Vuex использует в своей работе Promise (opens new window). 
Если необходимо поддерживать старые браузеры, 
которые не реализуют Promise (например, IE) — добавим полифил, 
например es6-promise (https://github.com/stefanpenner/es6-promise).

через CDN:
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
 
*/
import 'es6-promise/auto';
/* ===================================================== */

import Vue from 'vue';
import Vuex from 'vuex'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/css/main.css';


Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


const store = new Vuex.Store({
  state: {
    count: 999
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app');
