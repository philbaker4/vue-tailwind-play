import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Colors from "../views/Colors.vue";
import Second from "../views/Second.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/basic-demo",
    name: "Demo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BasicDemo.vue")
  },
  {
    path: "/colors",
    name: "Colors",
    component: Colors
  },
  {
    path: "/second-page-only",
    name: "Second Page Only Route",
    component: Second
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/second/",
  routes
});
console.log({ routes }, "/second/");
export default router;
