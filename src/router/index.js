import Vue from 'vue';
import VueRouter from 'vue-router';
import Giveaway from '../components/Giveaway';
import Foo from '../components/Foo';

Vue.use(VueRouter);

const routes = [
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
    props: true,
  },
];

export default new VueRouter({
  routes,
});
