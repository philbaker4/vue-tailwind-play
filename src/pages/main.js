import Vue from "vue";
import App from "../App.vue";
import router from "../router";
import store from "../store";
import "@/scss/base.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log("main js");
  }
}).$mount("#app");
