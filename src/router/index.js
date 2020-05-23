import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddNewNote',
    component: () => import('../views/AddEditNote.vue'),
  },
  {
    path: '/edit/:id',
    name: 'EditNote',
    props: true,
    component: () => import('../views/AddEditNote.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
