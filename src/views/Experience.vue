<script setup>
import { onMounted, nextTick } from 'vue';

onMounted(async () => {
  await nextTick();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
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
      <div class="max-w-7xl mx-auto space-y-40">
        
        <div class="grid lg:grid-cols-12 gap-12 border-t border-black/5 pt-12 reveal">
          <div class="lg:col-span-4">
            <h2 class="text-2xl font-black uppercase tracking-tight">Core Backend</h2>
            <p class="text-gray-400 font-bold mt-2">Node.js Low-Level Engineering</p>
          </div>
          <div class="lg:col-span-8 space-y-8">
            <h3 class="text-4xl md:text-5xl font-black leading-none">Custom Server Framework</h3>
            <p class="text-xl text-gray-500 leading-relaxed italic border-l-4 border-[#ff7a30] pl-6">
              Mastering the fundamentals of server-side logic and HTTP communication.
            </p>
            <p class="text-xl text-gray-600 leading-relaxed">
              Developed a custom server framework using the native **Node.js HTTP module**. By avoiding external libraries like Express, I implemented deep routing logic, request parsing, and middleware support to ensure high-performance backend execution.
            </p>
          </div>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 border-t border-black/5 pt-12 reveal">
          <div class="lg:col-span-4">
            <h2 class="text-2xl font-black uppercase tracking-tight">API Development</h2>
            <p class="text-gray-400 font-bold mt-2">Python & Flask Ecosystem</p>
          </div>
          <div class="lg:col-span-8 space-y-12">
            <h3 class="text-4xl md:text-5xl font-black leading-none">Intelligent API Suite</h3>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="p-8 bg-white border border-black/5 rounded-3xl group hover:border-[#ff7a30] transition-colors shadow-sm">
                <h4 class="text-[#ff7a30] font-black uppercase tracking-widest text-xs mb-4">Code Execution API</h4>
                <p class="text-gray-600">Built a secure Python-based backend capable of real-time code execution and environment management.</p>
              </div>
              <div class="p-8 bg-white border border-black/5 rounded-3xl group hover:border-[#ff7a30] transition-colors shadow-sm">
                <h4 class="text-[#ff7a30] font-black uppercase tracking-widest text-xs mb-4">Resume Validation</h4>
                <p class="text-gray-600">Implemented document parsing and validation logic to verify data integrity using Flask endpoints.</p>
              </div>
            </div>
            <p class="text-xl text-gray-600 leading-relaxed">
              Leveraged **Flask and Django** to create robust REST endpoints for calendar synchronization and complex relational database schemas, ensuring data consistency and secure user sessions.
            </p>
          </div>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 border-t border-black/5 pt-12 reveal pb-32">
          <div class="lg:col-span-4">
            <h2 class="text-2xl font-black uppercase tracking-tight">Full-Stack</h2>
            <p class="text-gray-400 font-bold mt-2">MERN Stack Architecture</p>
          </div>
          <div class="lg:col-span-8 space-y-8">
            <h3 class="text-4xl md:text-5xl font-black leading-none">Digital Library System</h3>
            <p class="text-xl text-gray-500 leading-relaxed italic border-l-4 border-[#ff7a30] pl-6">
              A comprehensive MERN application for global catalog management.
            </p>
            <p class="text-xl text-gray-600 leading-relaxed">
              Engineered a full-stack library platform using **Express.js and MongoDB**. Integrated **JWT Authentication** and role-based authorization to secure CRUD operations for book cataloging and user management.
            </p>
            <div class="pt-4 flex flex-wrap gap-4">
              <span class="px-4 py-2 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-widest rounded-full">MongoDB</span>
              <span class="px-4 py-2 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-widest rounded-full">Express</span>
              <span class="px-4 py-2 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-widest rounded-full">React</span>
              <span class="px-4 py-2 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-widest rounded-full">Python</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<style scoped>
.outlined-text { -webkit-text-stroke: 1.5px #1a1a1a; color: transparent; }
.reveal { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.2, 1, 0.3, 1); }
.reveal-visible { opacity: 1; transform: translateY(0); }
</style>