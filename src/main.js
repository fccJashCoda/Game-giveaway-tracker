import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTired } from '@fortawesome/free-solid-svg-icons';
import {
  faXbox,
  faPlaystation,
  faSteam,
  faWindows,
  faItchIo,
  faAndroid,
  faAppStore,
  faTwitch,
  faBattleNet,
  faApple,
  faAppStoreIos,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faXbox,
  faPlaystation,
  faSteam,
  faWindows,
  faItchIo,
  faAndroid,
  faAppStore,
  faTwitch,
  faBattleNet,
  faTired,
  faApple,
  faAppStoreIos
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
