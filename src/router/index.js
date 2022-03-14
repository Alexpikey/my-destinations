import { createRouter, createWebHistory } from "vue-router";
import DestinationList from "../components/DestinationList.vue";
import SavedDestinations from "../components/SavedDestinations.vue";

const routes = [
  { path: "/", name: "Home", component: DestinationList },
  { path: "/my-list", name: "MyList", component: SavedDestinations },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
