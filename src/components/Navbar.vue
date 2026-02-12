<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);
const progressWidth = ref(0);

const handleScroll = () => {
  const height = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressWidth.value = docHeight > 0 ? Math.floor((height / docHeight) * 100) : 0;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <div id="progress" :style="{ width: progressWidth + '%' }"></div>

  <header class="nav-header">
    <div class="nav-wrapper">
      <div class="logo">
        <RouterLink to="/" @click="isMenuOpen = false">
          VIKAT<span class="dot">.</span>
        </RouterLink>
      </div>

      <button class="menu-trigger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>
  </header>

  <transition name="slide">
    <div v-if="isMenuOpen" class="full-menu">
      <div class="menu-content">
        <nav class="links-list">
          <RouterLink v-for="(link, i) in [
            { name: 'Home', path: '/' },
            { name: 'Education', path: '/education' },
            { name: 'Experience', path: '/experience' },
            { name: 'Projects', path: '/projects' },
            { name: 'OSS', path: '/open_source' },
            { name: 'Contact', path: '/contact_me' }
          ]" 
          :key="i" 
          :to="link.path" 
          @click="toggleMenu"
          class="menu-link"
          :style="{ transitionDelay: (i * 0.05) + 's' }">
            <span class="num">0{{ i + 1 }}</span>
            <span class="text">{{ link.name }}</span>
          </RouterLink>
        </nav>
      </div>
    </div>
  </transition>
</template>

<style scoped>
#progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: #ff7a30;
  z-index: 10001;
}

/* Header Styling */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 10000;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.nav-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-weight: 900;
  font-size: 1.2rem;
  text-decoration: none;
  color: #1a1a1a;
}
.dot { color: #ff7a30; }

/* Hamburger Button */
.menu-trigger {
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10001;
}

.line {
  display: block;
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.active .line { background: #fff; }
.active .line:nth-child(1) { transform: translateY(5px) rotate(45deg); }
.active .line:nth-child(2) { transform: translateY(-5px) rotate(-45deg); }

/* Fullscreen Overlay */
.full-menu {
  position: fixed;
  inset: 0;
  background: #1a1a1a;
  z-index: 9999;
  display: flex;
  align-items: center;
  padding: 0 10%;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.menu-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: 0.3s;
}

.num {
  font-family: monospace;
  color: #ff7a30;
  font-size: 0.8rem;
}

.text {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -1px;
}

/* Stable Animations */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.6s cubic-bezier(0.85, 0, 0.15, 1);
}

.slide-enter-from, .slide-leave-to {
  transform: translateY(-100%);
}

@media (max-width: 600px) {
  .text { font-size: 1.8rem; }
}
</style>
