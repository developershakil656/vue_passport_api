import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

import AdminDashbord from "../views/admin/AdminDashbord.vue";

import CreatorDashbord from "../views/creator/CreatorDashbord.vue";
import CLogin from "../views/creator/CLogin.vue";
import CLogout from "../components/CLogout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/admin/dashbord",
    name: "ADashbord",
    component: AdminDashbord,
  },
  {
    path: "/creator/dashbord",
    name: "CDashbord",
    component: CreatorDashbord,
    meta:{
      requireCreator:true
    }
  },
  {
    path: "/creator/login",
    name: "CLogin",
    component: CLogin,
    meta:{
      visitor: true
    }
  },
  {
    path: "/creator/logout",
    name: "CLogout",
    component: CLogout,
    meta:{
      requireCreator:true
    }
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireCreator)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.CLogedIn) {
      next({
        name: 'CLogin'
      })
    } else {
      next()
    }
  }
  else if (to.matched.some(record => record.meta.visitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.CLogedIn) {
      next({
        name: 'CDashbord'
      })
    } else {
      next()
    }
  } 
  else {
    next() // make sure to always call next()!
  }
})


export default router;
