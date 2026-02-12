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
    
    <section class="min-h-screen flex items-center px-8 relative">
      <div class="max-w-7xl mx-auto w-full">
        <div class="reveal">
          <span class="text-[#ff7a30] font-black text-xs uppercase tracking-[0.5em] block mb-6">Full-Stack Engineer</span>
          <h1 class="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter mb-12">
            Systems<br><span class="outlined-text">Architect</span>
          </h1>
          <p class="text-2xl md:text-3xl text-gray-400 font-medium max-w-3xl leading-tight mb-10">
            Specializing in the development of <span class="text-black font-bold">scalable web applications</span> and 
            <span class="text-black font-bold">API ecosystems</span> through modern backend logic and distributed architectures.
          </p>
          <a href="/resume.pdf" download class="inline-flex items-center gap-4 group">
            <span class="px-8 py-4 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full group-hover:bg-[#ff7a30] transition-all">
              Download Resume
            </span>
            <span class="w-12 h-[1px] bg-black/10 group-hover:w-16 group-hover:bg-[#ff7a30] transition-all"></span>
          </a>
        </div>
      </div>
    </section>

    <section class="py-40 px-8 border-t border-black/[0.05] reveal">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
        <div class="lg:col-span-5">
          <h2 class="text-6xl font-black uppercase tracking-tighter leading-none">The Work<br>Story.</h2>
        </div>
        <div class="lg:col-span-7 space-y-12">
          <div class="space-y-6">
            <p class="text-3xl font-bold leading-snug text-gray-800">
              Building production-grade applications with a focus on <span class="text-[#ff7a30]">MVC architecture</span> and secure data workflows.
            </p>
            <p class="text-xl text-gray-500 leading-relaxed">
              I have hands-on experience in building and deploying multiple full-stack applications using both MERN and Python-based stacks[cite: 26]. My work focuses on mastering the entire development lifecycle, from low-level server engineering to complex frontend state management.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 pt-8">
            <div class="space-y-4">
              <h4 class="text-xs font-black uppercase tracking-widest text-[#ff7a30]">Backend Logic</h4>
              <p class="text-gray-600 leading-relaxed">
                Expertise in building RESTful APIs using Node.js, Express, and Python-Flask/Django, implementing JWT-based authentication and secure session management[cite: 9, 22, 27].
              </p>
            </div>
            <div class="space-y-4">
              <h4 class="text-xs font-black uppercase tracking-widest text-[#ff7a30]">Data & Deployment</h4>
              <p class="text-gray-600 leading-relaxed">
                Experienced in designing relational SQL schemas and NoSQL MongoDB collections, managing deployments within Linux environments using Git version control[cite: 10, 20, 22, 23, 28].
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-40 px-8 bg-[#1a1a1a] text-white reveal">
      <div class="max-w-7xl mx-auto space-y-24">
        <div class="flex justify-between items-end">
          <h2 class="text-5xl font-black uppercase tracking-tighter">Technical<br>Impact.</h2>
          <span class="text-gray-800 text-8xl font-black leading-none select-none">//</span>
        </div>
        
        <div class="grid md:grid-cols-3 gap-16">
          <div class="space-y-4">
            <span class="text-[#ff7a30] font-black text-[10px] uppercase tracking-widest">Automation</span>
            <h3 class="text-2xl font-bold">API Ecosystems</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Designed and implemented REST endpoints for real-time student dashboards and library cataloging[cite: 18, 23].</p>
          </div>
          <div class="space-y-4">
            <span class="text-[#ff7a30] font-black text-[10px] uppercase tracking-widest">Security</span>
            <h3 class="text-2xl font-bold">Authentication</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Developed role-based authorization systems using JWT to ensure secure access to sensitive data[cite: 9, 18, 27].</p>
          </div>
          <div class="space-y-4">
            <span class="text-[#ff7a30] font-black text-[10px] uppercase tracking-widest">Structure</span>
            <h3 class="text-2xl font-bold">MVC Patterns</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Utilized MVC architecture to create maintainable, scalable, and responsive UI components[cite: 9, 19].</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-60 px-8 text-center reveal">
      <div class="max-w-4xl mx-auto space-y-12">
        <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">View My Portfolio.</h2>
        <div class="flex flex-wrap justify-center gap-6">
          <router-link to="/projects" class="px-12 py-5 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#ff7a30] transition-all">
            Explore Projects
          </router-link>
          <router-link to="/contact_me" class="px-12 py-5 border-2 border-black/5 text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:border-[#ff7a30] transition-all">
            Get In Touch
          </router-link>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
.outlined-text { 
  -webkit-text-stroke: 1.5px #1a1a1a; 
  color: transparent; 
}
.reveal { 
  opacity: 0; 
  transform: translateY(40px); 
  transition: all 1s cubic-bezier(0.2, 1, 0.3, 1); 
}
.reveal-visible { 
  opacity: 1; 
  transform: translateY(0); 
}
</style>