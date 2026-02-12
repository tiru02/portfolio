<script setup>
import { onMounted, ref } from 'vue';

const terminalLines = ref([]);
const isBooted = ref(false);
const terminalSection = ref(null);
let hasStarted = false;

const bootSequence = [
  "> INITIALIZING SYSTEMS...",
  "> MERN STACK: ONLINE [OK]",
  "> PYTHON BACKEND: ACTIVE [OK]",
  "> DATABASE SYNC: SECURE [OK]",
  "> READY TO ARCHITECT."
];

const startBootSequence = () => {
  if (hasStarted) return;
  hasStarted = true;
  
  let i = 0;
  const interval = setInterval(() => {
    if (i < bootSequence.length) {
      terminalLines.value.push(bootSequence[i]);
      i++;
    } else {
      isBooted.value = true;
      clearInterval(interval);
    }
  }, 500);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startBootSequence();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  if (terminalSection.value) {
    observer.observe(terminalSection.value);
  }
});
</script>

<template>
  <div class="bg-white text-black selection:bg-[#ff4d00] selection:text-white font-sans antialiased">
    
    <header class="fixed top-0 left-0 w-full z-[9999] border-b border-gray-100">
      <nav class="bg-white px-6 md:px-12 h-20 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-2.5 h-2.5 bg-[#ff4d00]"></div>
          <span class="text-xs font-black uppercase tracking-[0.4em]">Tiru</span>
        </div>
        <router-link to="/contact" class="text-[10px] font-black uppercase tracking-widest hover:text-[#ff4d00] transition-colors">
          Contact
        </router-link>
      </nav>
      
      <div class="bg-gray-50 px-6 md:px-12 h-12 flex items-center justify-between border-t border-gray-100">
        <div class="flex items-center gap-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
          </span>
          <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">
            System Architect <span class="text-black ml-1">Active</span>
          </span>
        </div>
        <a href="/resume.pdf" download class="text-[9px] font-black uppercase tracking-widest text-[#ff4d00] flex items-center gap-2">
          Resume
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </header>

    <div class="h-32"></div>

    <section class="min-h-[70vh] flex items-center px-6 md:px-12">
      <div class="max-w-7xl mx-auto w-full">
        <span class="text-[#ff4d00] font-black text-xs uppercase tracking-[0.6em] block mb-6">Full-Stack Engineer</span>
        <h1 class="text-[clamp(3.5rem,15vw,11rem)] font-black uppercase leading-[0.8] tracking-tighter mb-10">
          Built<br>
          <span class="text-gray-200" style="-webkit-text-stroke: 1.5px black;">To Scale.</span>
        </h1>
        <div class="grid md:grid-cols-2 gap-12 items-end">
          <p class="text-xl md:text-3xl font-medium text-gray-500 leading-tight max-w-2xl">
            Engineering high-performance web applications using the <span class="text-black">MERN stack</span> and <span class="text-black">Python</span> infrastructures.
          </p>
        </div>
      </div>
    </section>

    <section ref="terminalSection" class="bg-[#0a0a0a] text-white py-32 px-6 md:px-12">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 class="text-[#ff4d00] font-black text-xs uppercase tracking-[0.5em] mb-8">01 / Kernel Status</h2>
          <h3 class="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">Logic<br>Systems.</h3>
          <p class="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
            Specializing in REST API development, backend logic, and secure database management.
          </p>
          <div class="flex flex-wrap gap-3">
            <span v-for="s in ['Node.js', 'React', 'Flask', 'SQL']" :key="s" class="px-5 py-2 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-[#ff4d00] transition-colors">{{ s }}</span>
          </div>
        </div>

        <div class="bg-[#111] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
          <div class="bg-[#1a1a1a] px-5 py-3 flex gap-2 border-b border-white/5">
            <div class="w-2.5 h-2.5 rounded-full bg-white/10"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-white/10"></div>
          </div>
          <div class="p-8 font-mono text-sm min-h-[300px] text-[#ff4d00]">
            <div v-for="(line, idx) in terminalLines" :key="idx" class="mb-3">{{ line }}</div>
            <div v-if="isBooted" class="w-2 h-5 bg-white animate-pulse inline-block"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 md:px-12 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-xs font-black uppercase tracking-[0.5em] mb-20 text-gray-400">02 / Academic Foundation</h2>
        <div class="grid md:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-16">
          <div class="md:col-span-5">
            <h3 class="text-3xl font-black uppercase mb-4">Amrita Sai Institute</h3>
            <p class="text-[#ff4d00] font-black text-xs uppercase tracking-widest">B.Tech / CSE (Big Data Analytics)</p>
          </div>
          <div class="md:col-span-7 flex flex-col md:flex-row gap-12">
            <div class="flex-1">
              <p class="text-5xl font-black mb-2">7.6</p>
              <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Current CGPA</p>
            </div>
            <div class="flex-1">
              <p class="text-5xl font-black mb-2">2026</p>
              <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Expected Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-24 px-6 md:px-12 border-t border-gray-100 text-center">
      <div class="max-w-4xl mx-auto">
        <router-link to="/contact" class="text-5xl md:text-8xl font-black uppercase tracking-tighter hover:text-[#ff4d00] transition-all">
          Get In Touch.
        </router-link>
        <div class="mt-16 flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
          <a href="https://github.com/tiru-chinnu" target="_blank">GitHub</a>
          <a href="https://www.instagram.com/ram_02.12" target="_blank">Instagram</a>
          <span>© 2026 Gadipudi Tiruvardhan</span>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
header {
  transform: translateZ(0);
}
* {
  -webkit-font-smoothing: antialiased;
}
section {
  contain: layout;
}
</style>