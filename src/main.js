import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import HeroSlide from "./components/HeroSlide.vue";

Vue.component("HeroSlide", HeroSlide);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
