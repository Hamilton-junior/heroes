import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/Home.vue";
import HeroPage from "../views/Hero.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/heroi/:id",
    name: "hero",
    component: HeroPage,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
