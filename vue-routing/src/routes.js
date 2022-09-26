import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import AsdZxc from "./components/AsdZxc.vue";
const routes = [
  {
    name: "HelloWorld",
    path: "/",
    component: HelloWorld,
  },
  {
    name: "AsdZxc",
    path: "/abc",
    component: AsdZxc,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
