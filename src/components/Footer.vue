<template>
  <footer class="py-12 border-t border-black/[0.05] bg-[#fafafa]">
    <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      
      <div class="flex items-center gap-2">
        <span class="text-sm font-black uppercase tracking-widest text-gray-400">
          Design & Code by
        </span>
        <span class="text-sm font-black uppercase tracking-tighter text-[#1a1a1a]">
          Tiru Vardhan<span class="text-[#ff7a30]">.</span>
        </span>
      </div>

      <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        © 2026 All Rights Reserved
      </div>

      <button 
        @click="scrollToTop" 
        class="text-[10px] font-black uppercase tracking-widest hover:text-[#ff7a30] transition-colors"
      >
        Back to Top ↑
      </button>

    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
footer {
  /* Using Tailwind classes, but adding a subtle fade-in if desired */
  user-select: none;
}
</style>