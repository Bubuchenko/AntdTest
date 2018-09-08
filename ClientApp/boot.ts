import "./css/site.css";
import "bootstrap";
import Vue from "vue";
import VueRouter from "vue-router";
import Antd from "ant-design-vue";
Vue.use(VueRouter);
Vue.use(Antd);


let vm : any = new Vue({
    el: "#app-root",
    router: new VueRouter({ mode: "history" }),
    render: h => h(require("./components/app/app.vue.html"))
});