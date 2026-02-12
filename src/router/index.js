// src/router/index.js
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Experience from "../views/Experience.vue";
import Education from "@/views/Education.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Opensource from "@/views/Opensource.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/experience", name: "experience", component: Experience },
  { path: "/education", name: "education", component: Education },
  { path: "/projects", name: "projects", component: Projects },
  { path: "/contact_me", name: "contact", component: Contact },
  { path: "/open_source", name: "opensource", component: Opensource },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
