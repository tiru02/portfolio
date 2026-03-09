<script setup>
import { useReveal } from '@/composables/useReveal';

const projects = [
  {
    name: "Dot FM (Redline v1)",
    description: "A high-performance server framework and the previous version of Redline. Engineered as a specialized engine for digital audio and streaming, prioritizing real-time data synchronization and low-latency request handling.",
    framework: "Node.js ",
    link: "https://dot-fm.vercel.app/",
    tag: "Server Architecture",
  },
  {
    name: "Custom Server Framework",
    description: "A low-level backend framework built to understand the core mechanics of the web. By bypassing high-level abstractions like Express, this project implements native routing, request/response cycle management, and custom middleware architecture directly on top of the Node.js HTTP module.",
    framework: "Node.js (Native HTTP Module)",
    link: "https://red2.vikat.me/",
    tag: "Core Engineering",
  },
  {
    name: "Noirelle Bites",
    description: "An immersive digital storefront for artisanal confectionery. Developed with a focus on visual storytelling, seamless e-commerce navigation, and a refined aesthetic to elevate the gourmet experience.",
    framework: "React & Tailwind CSS",
    link: "https://noirellebites.vercel.app/",
    tag: "E-commerce Design",
  },
  {
    name: "Noirelle Bites (Static)",
    description: "A high-fidelity front-end showcase for a luxury culinary brand. Demonstrates advanced CSS layouts, responsive typography, and sophisticated hover interactions to create a premium, brand-focused digital experience.",
    framework: "HTML5 & CSS3",
    link: "https://noirelle-bites.vercel.app/",
    tag: "Visual Design",
  },
  {
    name: "ASIST Personal Workspace",
    description: "A refined productivity dashboard designed for organized task management and fluid workflow execution. Prioritizes a minimalist layout to minimize cognitive load and maximize user focus.",
    framework: "React & Tailwind CSS",
    link: "https://asist-cyan.vercel.app/",
    tag: "Productivity Tool",
  },
  {
    name: "Python Cloud Executor",
    description: "A high-performance web-based IDE designed for real-time script execution. Features a secure sandboxed environment for code processing and an intuitive UI for rapid prototyping and debugging.",
    framework: "Python & Flask",
    link: "https://pyexec-liart.vercel.app/",
    tag: "System Architecture",
  },
  {
    name: "Resume Validation API",
    description: "An intelligent validation engine designed to parse and verify professional document structures. Built with Python and Flask, it utilizes custom logic to ensure data integrity and structural consistency in uploaded resumes.",
    framework: "Python & Flask",
    link: "https://resval.vercel.app/",
    tag: "Intelligent Systems",
  },
  {
    name: "Taskstream Python Engine",
    description: "A robust server-side task management application utilizing a Python-driven backend. Engineered for persistent data handling and efficient request routing to ensure a seamless CRUD (Create, Read, Update, Delete) user experience.",
    framework: "Flask & Python",
    link: "https://todo-list-zeta-three-12.vercel.app/",
    tag: "Backend Development",
  },
  {
    name: "TaskFlow Static Interface",
    description: "A high-performance task management dashboard built for rapid client-side interaction. Optimized for minimalist UX/UI principles, featuring responsive grid layouts and intuitive navigation for personal organization.",
    framework: "HTML5 & Tailwind CSS",
    link: "https://task-manager-static.vercel.app/",
    tag: "Product Design",
  },
  {
    name: "Argos Grocery Hub",
    description: "A HTML5 and CSS3 clone of a UK-based grocery e-commerce platform.",
    framework: "HTML & CSS",
    link: "https://argos-beryl.vercel.app/",
    tag: "Retail E-commerce",
  },
  {
    name: "Digital Library System",
    description: "A full-stack catalog management platform. This system features role-based authorization and secure user sessions. I engineered a robust RESTful API to handle complex CRUD operations for book inventory and user management.",
    framework: "MERN Stack & Handlebars",
    link: "https://e-lib-8qk5.vercel.app/",
    tag: "Full-Stack",
  },
  {
    name: "Calendar Management API",
    description: "A specialized API ecosystem for scheduling and time management. It features secure endpoints for event creation, synchronization, and session-based data persistence using relational database schemas.",
    framework: "Python & Flask",
    link: "https://calender-api-ten.vercel.app/",
    tag: "API Design",
  },
  {
    name: "Student Complaint Portal",
    description: "A streamlined digital interface for academic grievance management. Focused on user-centric design and secure backend processing to ensure transparency and efficiency in institutional communication.",
    framework: "Express & Handlebars",
    link: "https://form-sepia-nine.vercel.app/",
    tag: "Product Design",
  },
];

useReveal({ threshold: 0.1 });
</script>

<template>
  <main class="bg-[#fafafa] text-[#1a1a1a] selection:bg-[#ff7a30] antialiased overflow-x-hidden">
    
    <section class="pt-32 pb-20 px-8 reveal">
      <div class="max-w-7xl mx-auto">
        <span class="text-[#ff7a30] font-black text-xs uppercase tracking-[0.5em] block mb-4">Engineering Journey</span>
        <h1 class="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter">
          Built<br><span class="outlined-text">& Deployed</span>
        </h1>
      </div>
    </section>

    <section class="py-20 px-8">
      <div class="max-w-7xl mx-auto space-y-32">
        
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="grid lg:grid-cols-12 gap-12 border-t border-black/10 pt-16 reveal"
        >
          <div class="lg:col-span-4">
            <h2 class="text-2xl font-black uppercase tracking-tight">{{ project.tag }}</h2>
            <p class="text-gray-400 font-bold mt-2">{{ project.framework }}</p>
          </div>
          
          <div class="lg:col-span-8 space-y-8">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h3 class="text-4xl md:text-5xl font-black leading-none tracking-tight">
                {{ project.name }}
              </h3>
              <a 
                :href="project.link" 
                target="_blank"
                class="inline-flex items-center gap-2 group text-sm font-black uppercase tracking-widest text-[#ff7a30]"
              >
                Launch Project
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <p class="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {{ project.description }}
            </p>
            
            <div class="pt-4 flex flex-wrap gap-2">
              <span 
                v-for="tech in project.framework.split('&')" 
                :key="tech"
                class="px-4 py-2 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-widest rounded-full"
              >
                {{ tech.trim() }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <footer class="py-20 px-8 border-t border-black/5 text-center">
      <p class="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
        © {{ new Date().getFullYear() }} Tiru • Engineering Portfolio
      </p>
    </footer>
  </main>
</template>

<style scoped>
.outlined-text { -webkit-text-stroke: 1.5px #1a1a1a; color: transparent; }
.reveal { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.2, 1, 0.3, 1); }
.reveal-visible { opacity: 1; transform: translateY(0); }
</style>