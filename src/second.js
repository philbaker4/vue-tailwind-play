import Vue from "vue";
import App from "./App.vue";
import router from "./router/second";
import store from "./store";
import "@/scss/base.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log("second router:", this.$router);
    const paths = this.$router.options.routes.map(route => {
      return {
        name: route.name,
        path: route.path
      };
    });
    console.log({ paths });
  }
}).$mount("#app");
