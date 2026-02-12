<script setup>
import { onMounted, onUnmounted } from 'vue';

let observer;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -10px 0px' 
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <main class="bg-white text-black selection:bg-[#ff4d00] selection:text-white antialiased overflow-x-hidden min-h-screen">
    
    <section class="min-h-[50vh] flex flex-col justify-end p-6 md:p-12 border-b border-gray-100">
      <div class="reveal space-y-6">
        <div class="flex items-center gap-4">
          <span class="w-12 h-[1px] bg-[#ff4d00]"></span>
          <span class="text-[#ff4d00] font-black text-[10px] uppercase tracking-[0.5em]">Identity / Full-Stack Engineer</span>
        </div>
        
        <h1 class="text-[clamp(3.5rem,14vw,10rem)] font-black uppercase leading-[0.8] tracking-tighter italic">
          Gadipudi<br>
          <span class="text-gray-200" style="-webkit-text-stroke: 1.5px black;">Tiruvardhan.</span>
        </h1>
      </div>
    </section>

    <section class="grid md:grid-cols-12 border-b border-gray-100">
      <div class="md:col-span-5 p-8 md:p-16 border-b md:border-b-0 md:border-r border-gray-100 reveal">
        <h2 class="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] mb-12">01 / Profile</h2>
        <h3 class="text-5xl font-black uppercase tracking-tighter leading-none mb-8 italic">Logic<br>Driven.</h3>
        <p class="text-gray-500 text-lg leading-relaxed font-medium">
          Driven B.Tech student specializing in Full-Stack development. I master the entire development lifecycle, from low-level Node.js server engineering to complex frontend state management.
        </p>
      </div>
      
      <div class="md:col-span-7 p-8 md:p-16 reveal flex flex-col justify-center">
        <p class="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.9] text-gray-200" style="-webkit-text-stroke: 1px #e5e7eb;">
          Engineering systems with zero-compromise on <span class="text-black italic">data integrity</span> and <span class="text-black italic">security</span>.
        </p>
        <div class="mt-12 pt-12 border-t border-gray-100 flex flex-wrap gap-12">
          <div v-for="metric in ['MERN Stack', 'Python Architecture', 'API Design']" :key="metric" class="space-y-2">
            <span class="block text-[10px] font-black uppercase tracking-widest text-[#ff4d00]">Domain</span>
            <span class="text-lg font-black uppercase italic tracking-tighter">{{ metric }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        <h2 class="text-[#ff4d00] font-black text-[10px] uppercase tracking-[0.5em] mb-24 text-center">
          02 / Technical Domain
        </h2>

        <div class="grid md:grid-cols-3 gap-0 border-t border-white/10">
          <div class="p-12 border-r border-white/10 reveal space-y-8 hover:bg-white/5 transition-colors duration-500">
            <h4 class="text-gray-500 text-[10px] font-black uppercase tracking-widest">01 / Languages</h4>
            <ul class="space-y-4 text-2xl font-black uppercase tracking-tighter italic">
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>C</li>
            </ul>
          </div>

          <div class="p-12 border-r border-white/10 reveal space-y-8 hover:bg-white/5 transition-colors duration-500">
            <h4 class="text-gray-500 text-[10px] font-black uppercase tracking-widest">02 / Backend</h4>
            <ul class="space-y-4 text-2xl font-black uppercase tracking-tighter italic">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Flask</li>
              <li>JWT Auth</li>
            </ul>
          </div>

          <div class="p-12 reveal space-y-8 hover:bg-white/5 transition-colors duration-500">
            <h4 class="text-gray-500 text-[10px] font-black uppercase tracking-widest">03 / Tools</h4>
            <ul class="space-y-4 text-2xl font-black uppercase tracking-tighter italic">
              <li>Git</li>
              <li>Linux</li>
              <li>Postman</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 md:px-12 reveal border-b border-gray-100">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div class="space-y-4">
          <h2 class="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em]">03 / Academic Foundation</h2>
          <h3 class="text-6xl md:text-8xl font-black uppercase tracking-tight italic leading-none">The Degree.</h3>
        </div>
        
        <div class="text-right space-y-2">
          <p class="text-2xl font-black uppercase">Computer Science & Engineering</p>
          <p class="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Specialization: Big Data Analytics</p>
          <p class="text-black font-black uppercase tracking-tighter border-b-2 border-black inline-block">Expected: 2026</p>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
.overflow-x-hidden {
  contain: paint;
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

.italic {
  font-style: italic;
}
</style>