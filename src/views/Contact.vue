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
        <span class="text-[#ff7a30] font-black text-xs uppercase tracking-[0.5em] block mb-4">Get In Touch</span>
        <h1 class="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter">
          Let's<br><span class="outlined-text">Connect</span>
        </h1>
      </div>
    </section>

    <section class="py-20 px-8 reveal">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
        
        <div class="lg:col-span-5 space-y-12">
          <div class="space-y-4">
            <h2 class="text-sm font-black uppercase tracking-widest text-gray-400">Direct Communication</h2>
            <a href="mailto:vikat0369@gmail.com" class="block text-3xl md:text-4xl font-black hover:text-[#ff7a30] transition-colors break-words">
              vikat0369@gmail.com
            </a>
          </div>

          <div class="space-y-6 pt-8">
            <h2 class="text-sm font-black uppercase tracking-widest text-gray-400">Social Presence</h2>
            <div class="flex flex-col gap-6">
              <a target="_blank" href="https://github.com/tiru-chinnu" class="group flex items-center gap-4 text-2xl font-bold">
                <span class="w-12 h-[1px] bg-black/10 group-hover:w-16 group-hover:bg-[#ff7a30] transition-all"></span>
                GitHub
              </a>
              <a target="_blank" href="https://www.instagram.com/ram_02.12" class="group flex items-center gap-4 text-2xl font-bold">
                <span class="w-12 h-[1px] bg-black/10 group-hover:w-16 group-hover:bg-[#ff7a30] transition-all"></span>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 bg-white border border-black/5 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-black/5">
          <form class="space-y-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                <input type="text" placeholder="Gadipudi Tiruvardhan" class="w-full bg-transparent border-b-2 border-black/5 py-4 focus:border-[#ff7a30] outline-none transition-colors font-medium" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" placeholder="vikat@example.com" class="w-full bg-transparent border-b-2 border-black/5 py-4 focus:border-[#ff7a30] outline-none transition-colors font-medium" />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
              <textarea rows="4" placeholder="Hello, I'd like to talk about..." class="w-full bg-transparent border-b-2 border-black/5 py-4 focus:border-[#ff7a30] outline-none transition-colors font-medium resize-none"></textarea>
            </div>

            <button type="submit" class="w-full py-6 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#ff7a30] transition-all transform hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>

    <section class="py-40 px-8 text-center reveal">
      <div class="max-w-4xl mx-auto space-y-8">
        <p class="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
          Based in Vijayawada, ready to build for the world.
        </p>
        <p class="text-xl text-gray-400 font-medium">
          Actively seeking a Full-Stack Developer role to apply my MERN and Python skills to scalable web platforms.
        </p>
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