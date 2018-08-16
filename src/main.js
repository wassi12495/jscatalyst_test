import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import { store } from "./store";

import "jscatalyst/dist/jscatalyst.min.css";
import { ThemePlugin } from "jscatalyst";

Vue.use(Vuetify);
Vue.use(ThemePlugin, {
  store,
  themes: ["Blue", "Pink", "Green", "Brown", "Red", "Grey"]
});

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
