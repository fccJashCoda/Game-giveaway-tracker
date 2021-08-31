import Vue from 'vue';
import VueRouter from 'vue-router';
import Giveaway from '../components/Giveaway';
import GiveawayList from '../components/GiveawayList';
import Foo from '../components/Foo';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'GiveawayList',
    component: GiveawayList,
  },
  {
    path: '/foo',
    name: 'foo',
    component: Foo,
    props: true,
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
