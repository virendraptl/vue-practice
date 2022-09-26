import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
import Home2 from "./components/Home2.vue";
import DyRouting from "./components/DyRouting.vue";
import PageNotFound from "./components/PageNotFound.vue";
import APICall from "./components/APICall.vue"
import APIForm from "./components/APIForm.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Home2",
    path: "/home2",
    component: Home2,
  },
  {
    name: "HelloWorld",
    path: "/helloworld",
    component: HelloWorld,
  },
  {
    name: "DyRouting",
    path: "/dyrouting/:msg",
    component: DyRouting,
  },
  {
    name: "APICall",
    path: "/apicall",
    component: APICall,
  },
  {
    name: "APIForm",
    path: "/apiform",
    component: APIForm,
  },
  {
    name: "PageNotFound",
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

