// src/router/index.js
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "../../public/Home.vue";
import About from "../views/About.vue";
import Experience from "../views/Experience.vue";
import Education from "@/views/Education.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Opensource from "@/views/Opensource.vue";
import error from "@/views/404.vue";
import onContact from "@/views/onContact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience,
  },
  {
    path: "/education",
    name: "education",
    component: Education,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/contact_me",
    name: "contact",
    component: Contact,
  },
  {
    path: "/open_source",
    name: "opensource",
    component: Opensource,
  },
  {
    path:'/on_contact',
    name:'on_con',
    component:onContact
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: error,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
