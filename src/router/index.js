import Vue from 'vue';
import VueRouter from 'vue-router';
import Giveaway from '../components/Giveaway';
import GiveawayList from '../components/GiveawayList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'GiveawayList',
    component: GiveawayList,
  },
  {
    path: '/giveaway/:id',
    name: 'Giveaway',
    component: Giveaway,
  },
];

export default new VueRouter({
  routes,
});
