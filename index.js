import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import App from "./App";
import InputModal from "./components/InputModal.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component("input-modal", InputModal);

new Vue({ el: "#app", render: (h) => h(App) });
