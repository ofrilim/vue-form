import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/Form.vue";
import Card from "../views/Card.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/card",
    name: "Card",
    component: Card
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

