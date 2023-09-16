// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';

// Import your Vue components for login and signup
import StackOverflowLogin from './components/StackOverflowLogin.vue';
import StackOverflowSignup from './components/StackOverflowSignup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: StackOverflowLogin, // Redirect the root URL to the login page
  },
  {
    path: '/signup',
    component: StackOverflowSignup,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
