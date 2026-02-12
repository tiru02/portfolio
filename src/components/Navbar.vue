<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const progressWidth = ref(0);
const isFixed = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    const height = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressWidth.value = Math.floor((height / docHeight) * 100);
    isFixed.value = height > 50;
  });
});
</script>

<template>
  <div id="progress" :style="{ width: progressWidth + '%' }"></div>
  <nav :class="['nav-container', { 'nav-fixed': isFixed }]">
    <div class="nav-content">
      <div class="logo">
        <RouterLink to="/">
          VIKAT<span class="dot">.</span>
        </RouterLink>
      </div>
      
      <ul class="nav-links">
        <li><RouterLink to="/" exact-active-class="active">Home</RouterLink></li>
        <li><RouterLink to="/education" exact-active-class="active">Education</RouterLink></li>
        <li><RouterLink to="/experience" exact-active-class="active">Experience</RouterLink></li>
        <li><RouterLink to="/projects" exact-active-class="active">Projects</RouterLink></li>
        <li><RouterLink to="/open_source" exact-active-class="active">OSS</RouterLink></li>
        <li><RouterLink to="/contact_me" class="contact-btn">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
#progress {
  height: 3px;
  background: #ff7a30;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  transition: width 0.1s ease-out;
}

.nav-container {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  background: white;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000;
}

.nav-fixed {
  position: fixed;
  top: 0;
  height: 70px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
}

.nav-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: -1px;
  text-decoration: none;
  color: #1a1a1a;
}

.dot { color: #ff7a30; }

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #666;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s;
}

.nav-links a:hover, .active {
  color: #ff7a30 !important;
}

.contact-btn {
  background: #1a1a1a;
  color: white !important;
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  transition: transform 0.3s !important;
}

.contact-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .nav-links { display: none; }
}
</style>