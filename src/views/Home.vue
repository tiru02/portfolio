<script setup>
import { onMounted, ref } from 'vue';

const terminalLines = ref([]);
const isBooted = ref(false);

const bootSequence = [
  "> INITIALIZING SYSTEM ARCHITECT PROTOCOL...",
  "> LOADING MERN_STACK_RESOURCES [OK]",
  "> ESTABLISHING PYTHON_BACKEND_STREAMS [OK]",
  "> SECURING JWT_AUTH_MIDDLEWARE [OK]",
  "> OPTIMIZING MONGODB_QUERY_ENGINE [OK]",
  "> SYSTEM ONLINE: READY TO ENGINEER."
];

onMounted(() => {
  // Smooth scroll logic
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Terminal Typing Animation
  let i = 0;
  const interval = setInterval(() => {
    if (i < bootSequence.length) {
      terminalLines.value.push(bootSequence[i]);
      i++;
    } else {
      isBooted.value = true;
      clearInterval(interval);
    }
  }, 600);
});
</script>

<template>
  <div class="bg-white text-black selection:bg-[#ff4d00] selection:text-white antialiased">
    
    <nav class="sticky top-0 z-[100] bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-2 h-2 bg-[#ff4d00]"></div>
          <span class="text-xs font-black uppercase tracking-[0.4em]">Tiru</span>
        </div>
        <div class="flex gap-8 items-center text-[10px] font-black uppercase tracking-widest">
          <router-link to="/contact" class="hover:text-[#ff4d00] transition-colors">Contact</router-link>
        </div>
      </div>
      
      <div class="bg-gray-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-6 h-12 flex justify-between items-center">
          <div class="flex items-center gap-4">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
            </span>
            <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">
              System Architect <span class="text-black ml-1">Active</span>
            </span>
          </div>
          <a href="/resume.pdf" download class="group flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#ff4d00]">
            Download CV
            <svg class="w-3 h-3 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </a>
        </div>
      </div>
    </nav>

    <section class="min-h-[70vh] flex items-center px-6">
      <div class="max-w-7xl mx-auto w-full py-20">
        <span class="text-[#ff4d00] font-black text-xs uppercase tracking-[0.5em] block mb-8">Full-Stack Engineer</span>
        <h1 class="text-[clamp(3.5rem,12vw,10rem)] font-black uppercase leading-[0.85] tracking-tighter mb-12">
          Engineering<br>
          The <span class="text-gray-200" style="-webkit-text-stroke: 1.5px black;">Core Logic.</span>
        </h1>
        <p class="text-xl md:text-2xl font-medium text-gray-400 leading-tight max-w-xl">
          Architecting high-performance <span class="text-black">MERN</span> platforms and secure <span class="text-black">Python</span> infrastructures.
        </p>
      </div>
    </section>

    <section class="bg-[#0a0a0a] text-white py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-[#ff4d00] font-black text-xs uppercase tracking-[0.5em] mb-6">01 / Kernel</h2>
            <h3 class="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">System<br>Status.</h3>
            <p class="text-gray-400 text-lg leading-relaxed mb-10">
              Monitoring the lifecycle of a request across the stack. From low-level SQL optimization to the final React render.
            </p>
            <div class="flex gap-4">
               <div v-for="tag in ['Node.js', 'Python', 'Docker']" :key="tag" class="px-4 py-2 border border-white/10 text-[10px] font-black uppercase tracking-widest">
                 {{ tag }}
               </div>
            </div>
          </div>

          <div class="bg-[#111] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <div class="bg-[#222] px-4 py-2 flex gap-2">
              <div class="w-2 h-2 rounded-full bg-red-500"></div>
              <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div class="p-6 font-mono text-sm min-h-[300px]">
              <div v-for="(line, idx) in terminalLines" :key="idx" class="mb-2 text-[#ff4d00]">
                {{ line }}
              </div>
              <div v-if="isBooted" class="animate-pulse w-2 h-5 bg-white inline-block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-6 mb-24">
          <h2 class="text-xs font-black uppercase tracking-[0.5em]">02 / Workflow</h2>
          <div class="h-[1px] flex-grow bg-black/10"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-12">
          <div v-for="(step, i) in ['Architect', 'Engineer', 'Deploy']" :key="step" class="group">
            <div class="text-6xl font-black opacity-5 group-hover:opacity-20 group-hover:text-[#ff4d00] transition-all duration-500 mb-6">0{{ i+1 }}</div>
            <h4 class="text-xl font-black uppercase mb-4 tracking-widest">{{ step }}</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              Implementing production-grade code that prioritizes data integrity and system response time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-white py-12 px-6 border-t border-gray-100 text-center">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <router-link to="/contact" class="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-[#ff4d00] transition-colors">
          Get In Touch
        </router-link>
        <div class="flex gap-12 text-[10px] font-black uppercase tracking-widest opacity-40">
          <a href="https://github.com/tiru02">GitHub</a>
          <a href="https://www.instagram.com/tiru._1?igsh=MXhubHhjbG9lbGNjZQ==">Instagram</a>
          <span>© 2026 Tiru</span>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
.tracking-tightest { letter-spacing: -0.06em; }

/* Prevention of flickering */
* {
  -webkit-font-smoothing: antialiased;
  transform: translateZ(0);
}

/* Ensuring layout stability */
section {
  contain: content;
}
</style>