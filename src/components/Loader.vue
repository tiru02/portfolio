<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const loading = ref(true);
let timer: ReturnType<typeof setTimeout>;

onMounted(() => {
  timer = setTimeout(() => {
    loading.value = false;
  }, 2500);
});

onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<template>
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-black z-50">
    <div class="relative text-6xl font-extrabold text-white/10 overflow-visible select-none">
      जय श्री राम
      <span
        class="
          absolute 
          left-0 
          top-0 
          text-[#FF8F29]
          overflow-hidden 
          whitespace-nowrap 
          animate-fill-custom
        "
      >
        जय श्री राम
      </span>
      <div class=" bottom-0 translate-y-2 left-0 w-full h-1 bg-[#FF8F29] animate-fill-custom"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fillAnimation {
  from { width: 0; }
  to { width: 100%; }
}

.animate-fill-custom {
  animation: fillAnimation 2s ease-in-out forwards;
}
</style>