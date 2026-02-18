<script setup>
import { onMounted, nextTick } from 'vue';

const projects = [
  {
    name: "Custom Server Framework",
    description: "A low-level backend framework built to understand the core mechanics of the web. By bypassing high-level abstractions like Express, this project implements native routing, request/response cycle management, and custom middleware architecture directly on top of the Node.js HTTP module.",
    framework: "Node.js (Native HTTP Module)",
    link: "https://red2.vikat.me/",
    tag: "Core Engineering"
  },
  {
    name: "Digital Library System",
    description: "A full-stack catalog management platform. This system features role-based authorization and secure user sessions. I engineered a robust RESTful API to handle complex CRUD operations for book inventory and user management.",
    framework: "MERN Stack & Handlebars",
    link: "https://digitallibrary-ht59.onrender.com",
    tag: "Full-Stack"
  },
  {
    name: "Resume Validation API",
    description: "An intelligent validation engine designed to parse and verify professional document structures. Built with Python and Flask, it utilizes custom logic to ensure data integrity and structural consistency in uploaded resumes.",
    framework: "Python & Flask",
    link: "https://resval.vercel.app/",
    tag: "Intelligent Systems"
  },
  {
    name: "Calendar Management API",
    description: "A specialized API ecosystem for scheduling and time management. It features secure endpoints for event creation, synchronization, and session-based data persistence using relational database schemas.",
    framework: "Python & Flask",
    link: "https://calender-api-ten.vercel.app/",
    tag: "API Design"
  },
  {
    name: "Student Complaint Portal",
    description: "A streamlined digital interface for academic grievance management. Focused on user-centric design and secure backend processing to ensure transparency and efficiency in institutional communication.",
    framework: "Express & Handlebars",
    link: "https://complaintform.onrender.com",
    tag: "Product Design"
  }
];

onMounted(async () => {
  await nextTick();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('reveal-visible'));
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
</script>

<template>
  <main class="bg-[#fafafa] text-[#1a1a1a] selection:bg-[#ff7a30] antialiased">
    
    <section class="pt-32 pb-20 px-8 reveal">
      <div class="max-w-7xl mx-auto">
        <span class="text-[#ff7a30] font-black text-xs uppercase tracking-[0.5em] block mb-4">Selected Works</span>
        <h1 class="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter">
          Systems<br><span class="outlined-text">& Logic</span>
        </h1>
      </div>
    </section>

    <section class="py-20 px-8">
      <div class="max-w-7xl mx-auto space-y-48">
        
        <div v-for="(proj, i) in projects" :key="i" class="grid lg:grid-cols-12 gap-16 items-start reveal">
          <div class="lg:col-span-5 space-y-8">
            <div class="space-y-4">
              <span class="text-[#ff7a30] font-black text-[10px] uppercase tracking-widest">{{ proj.tag }}</span>
              <h2 class="text-5xl font-black uppercase tracking-tighter">{{ proj.name }}</h2>
              <p class="text-sm font-bold text-gray-400 italic uppercase tracking-wider">{{ proj.framework }}</p>
            </div>
            
            <p class="text-xl text-gray-600 leading-relaxed border-l-4 border-black/5 pl-8">
              {{ proj.description }}
            </p>

            <a :href="proj.link" target="_blank" 
               class="inline-block px-10 py-4 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#ff7a30] hover:scale-105 transition-all">
              Launch Project
            </a>
          </div>

          <div class="lg:col-span-7 relative group">
            <div class="absolute -inset-4 bg-gradient-to-tr from-[#ff7a30]/10 to-[#465c88]/10 rounded-[40px] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <div class="relative bg-white border border-black/5 rounded-[32px] overflow-hidden shadow-2xl h-[500px] md:h-[600px]">
              <div class="bg-gray-50 border-b border-black/5 px-6 py-3 flex gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <iframe :src="proj.link" class="w-full h-full" loading="lazy"></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<style scoped>
.outlined-text { -webkit-text-stroke: 1.5px #1a1a1a; color: transparent; }
.reveal { opacity: 0; transform: translateY(50px); transition: all 1s cubic-bezier(0.2, 1, 0.3, 1); }
.reveal-visible { opacity: 1; transform: translateY(0); }

@media (max-width: 1024px) {
  .reveal { transform: translateY(30px); }
}
</style>
