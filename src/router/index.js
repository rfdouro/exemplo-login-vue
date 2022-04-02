import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ErroNotFound from "../views/errors/ErroNotFound.vue";
import ErroGeneric from "../views/errors/ErroGeneric.vue";

/**
 * https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
 */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  { path: '/erro404', name: 'erro404', component: ErroNotFound},
  { path: "/erro500", name: 'erro500', component: ErroGeneric },
  { path: '/:pathMatch(.*)*', redirect: '/erro404' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("to ", to);
  console.log("from ", from);
  let isAuthenticated = sessionStorage.getItem("user");
  if (!isAuthenticated && to.name !== "login" && !to.name.startsWith("erro")) {
    console.log("aqui");
    // redirect the user to the login page
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
