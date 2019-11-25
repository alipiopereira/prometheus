import Vue from "vue";
import Vuetify from "vuetify";
import Typer from 'vue-typer'
import Prometheus from "./Prometheus.vue";
import router from "./routes";
import store from "./store";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Typer);

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          appBarColor: "#A9E8DF",
          waveColor: "#A9E8DF",
          primary: "#3f51b5",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c"
        }
      }
    }
  }),
  render: h => h(Prometheus)
}).$mount("#app");