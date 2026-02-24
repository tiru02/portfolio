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
    <div class="relative text-6xl font-extrabold text-white/10 overflow-hidden select-none px-10">
      जय श्री राम
      <span
        class="
          absolute 
          left-0 
          top-0 
          text-amber-500 
          overflow-hidden 
          whitespace-nowrap 
          w-0 
          animate-fill-custom
          border-r-4
          px-10
          border-amber-500
        "
      >
        जय श्री राम
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes fillAnimation {
  from { width: 0%; }
  to { width: 100%; }
}

.animate-fill-custom {
  animation: fillAnimation 2s ease-in-out forwards;
}
</style>