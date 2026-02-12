<script setup>
import { onMounted, ref } from 'vue';

const errorLog = ref([
  "> REQUESTING_URL: [UNDEFINED]",
  "> STATUS: 404_NOT_FOUND",
  "> ERROR_CODE: 0xSCROLL_OUT_OF_BOUNDS",
  "> TRACING_ROUTE... [FAILED]",
  "> SUGGESTION: RETURN TO KERNEL."
]);

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<template>
  <main class="bg-[#0a0a0a] text-white selection:bg-[#ff4d00] min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden antialiased">
    
    <div class="flex justify-between items-start">
      <div class="space-y-1">
        <span class="block text-[10px] font-black uppercase tracking-[0.5em] text-[#ff4d00]">Error Protocol</span>
        <span class="block text-xs font-mono opacity-40">TIMESTAMP: {{ new Date().toISOString() }}</span>
      </div>
      <router-link to="/" class="text-[10px] font-black uppercase tracking-widest border-b border-white/20 pb-1 hover:text-[#ff4d00] hover:border-[#ff4d00] transition-all">
        Esc Key: Home
      </router-link>
    </div>

    <div class="reveal-404" :class="{ 'reveal-visible': isVisible }">
      <h1 class="text-[25vw] font-black leading-[0.7] tracking-tighter italic opacity-10 select-none">
        404
      </h1>
      
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h2 class="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
          System<br><span class="text-transparent" style="-webkit-text-stroke: 1.5px white;">Void.</span>
        </h2>
        <p class="text-gray-500 font-medium text-lg md:text-xl max-w-md">
          The requested logic branch does not exist in this environment.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-12 gap-8 items-end border-t border-white/10 pt-12">
      <div class="md:col-span-8 font-mono text-[11px] space-y-2 text-[#ff4d00] opacity-80">
        <div v-for="(line, idx) in errorLog" :key="idx">
          {{ line }}
        </div>
      </div>
      
      <div class="md:col-span-4 flex md:justify-end">
        <router-link to="/" class="px-10 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#ff4d00] hover:text-white transition-all">
          Reboot System
        </router-link>
      </div>
    </div>

  </main>
</template>

<style scoped>
.reveal-404 {
  opacity: 0;
  transform: scale(1.05);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.reveal-visible {
  opacity: 1;
  transform: scale(1);
}

.text-transparent {
  color: transparent;
}

/* Glitch effect for the large 404 background */
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

h1 {
  animation: glitch 3s infinite linear alternate-reverse;
}
</style>