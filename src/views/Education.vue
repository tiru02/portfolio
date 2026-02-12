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
        <span class="text-[#ff7a30] font-black text-xs uppercase tracking-[0.5em] block mb-4">Academic Foundation</span>
        <h1 class="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter">
          Learning<br><span class="outlined-text">& Growth</span>
        </h1>
      </div>
    </section>

    <section class="py-20 px-8 reveal">
      <div class="max-w-7xl mx-auto space-y-32">
        
        <div class="grid lg:grid-cols-12 gap-12 border-t border-black/5 pt-12">
          <div class="lg:col-span-4">
            <h2 class="text-2xl font-black uppercase tracking-tight">University</h2>
            <p class="text-gray-400 font-bold mt-2">2022 — 2026 (Expected)</p>
          </div>
          
          <div class="lg:col-span-8 space-y-8">
            <div>
              <h3 class="text-4xl md:text-5xl font-black leading-none">Amrita Sai Institute of Science and Technology</h3>
              <p class="text-xl text-[#ff7a30] font-bold mt-4 uppercase tracking-widest">B.Tech in CSE (Big Data Analytics)</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="p-8 bg-white border border-black/5 rounded-3xl shadow-sm">
                <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Academic Standing</p>
                <p class="text-4xl font-black">7.6 <span class="text-lg text-gray-300">CGPA</span></p>
              </div>
              <div class="p-8 bg-[#1a1a1a] text-white rounded-3xl shadow-sm">
                <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Specialization</p>
                <p class="text-xl font-bold leading-tight">Focusing on Big Data architectures and Full-Stack integration.</p>
              </div>
            </div>

            <div class="space-y-6 pt-4">
              <h4 class="text-sm font-black uppercase tracking-[0.2em] text-[#ff7a30]">Technical Breadth</h4>
              <p class="text-xl text-gray-500 leading-relaxed">
                Developing a strong foundation in Data Structures, REST API Design, and Backend Logic. 
                Applying theoretical knowledge to scalable web applications using MERN and Python-based stacks.
              </p>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 border-t border-black/5 pt-12 pb-20">
          <div class="lg:col-span-4">
            <h2 class="text-2xl font-black uppercase tracking-tight">Schooling</h2>
          </div>
          
          <div class="lg:col-span-8 grid md:grid-cols-2 gap-12">
            <div class="space-y-4">
              <span class="px-3 py-1 bg-[#ff7a30]/10 text-[#ff7a30] rounded-full text-[10px] font-black uppercase tracking-widest">Class XII | 2021</span>
              <h3 class="text-2xl font-black text-gray-400">Board of Intermediate Education, AP</h3>
              <p class="text-5xl font-black">Grade A</p>
            </div>
            <div class="space-y-4">
              <span class="px-3 py-1 bg-[#ff7a30]/10 text-[#ff7a30] rounded-full text-[10px] font-black uppercase tracking-widest">Class X | 2019</span>
              <h3 class="text-2xl font-black text-gray-400">Board of Secondary Education, AP</h3>
              <p class="text-5xl font-black">9.0 <span class="text-lg text-gray-300">GPA</span></p>
            </div>
          </div>
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