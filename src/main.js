import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueMeta from 'vue-meta';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles



 

Vue.config.productionTip = false;

//@@@ Using
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(Vuesax, {
  // options here
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
