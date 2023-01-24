import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tooltip } from "bootstrap";
import App from "./App.vue";

import router from "./router";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";

import "@/core/plugins/prismjs";
import "toastr/build/toastr.min.css";
// @ts-ignore
import toastr from "toastr";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(toastr);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);

app.directive("tooltip", (el) => {
  new Tooltip(el);
});

app.mount("#app");
