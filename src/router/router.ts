import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/content.vue"),
      meta: {
        layout: "dashboardLayout",
        title: "dashboard",
      },
    },
    {
      path: "/campaings",
      name: "campaigns",
      component: () => import("../views/ContnentHelloWorld.vue"),
      meta: {
        layout: "dashboardLayout",
        title: "campaigns",
      },
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("../views/contentReports.vue"),
      meta: {
        layout: "dashboardLayout",
        title: "reports",
      },
    },
  ],
});
