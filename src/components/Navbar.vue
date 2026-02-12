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

      <nav class="desktop-nav">
        <ul class="nav-links">
          <li><RouterLink to="/" exact-active-class="active">Home</RouterLink></li>
          <li><RouterLink to="/education" exact-active-class="active">Education</RouterLink></li>
          <li><RouterLink to="/experience" exact-active-class="active">Experience</RouterLink></li>
          <li><RouterLink to="/projects" exact-active-class="active">Projects</RouterLink></li>
          <li><RouterLink to="/open_source" exact-active-class="active">OSS</RouterLink></li>
          <li><RouterLink to="/contact_me" class="contact-btn">Contact</RouterLink></li>
        </ul>
      </nav>

      <button class="menu-trigger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>
  </header>

  <transition name="slide">
    <div v-if="isMenuOpen" class="full-menu">
      <nav class="mobile-links-list">
        <RouterLink v-for="(link, i) in [
          { name: 'Home', path: '/' },
          { name: 'Education', path: '/education' },
          { name: 'Experience', path: '/experience' },
          { name: 'Projects', path: '/projects' },
          { name: 'OSS', path: '/open_source' },
          { name: 'Contact', path: '/contact_me' }
        ]" 
        :key="i" :to="link.path" @click="toggleMenu" class="mobile-link">
          <span class="num">0{{ i + 1 }}</span>
          <span class="text">{{ link.name }}</span>
        </RouterLink>
      </nav>
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
  z-index: 10002;
}

.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
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
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-weight: 900;
  font-size: 1.5rem;
  text-decoration: none;
  color: #1a1a1a;
  letter-spacing: -1px;
}
.dot { color: #ff7a30; }

/* Desktop Menu Styles */
.desktop-nav .nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  align-items: center;
}

.desktop-nav a {
  text-decoration: none;
  color: #666;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s;
}

.desktop-nav a:hover, .active { color: #ff7a30 !important; }

.contact-btn {
  background: #1a1a1a;
  color: white !important;
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
}

/* Mobile Trigger */
.menu-trigger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 18px;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10001;
}

.line {
  display: block;
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  transition: 0.3s;
}

/* Mobile View Adjustments */
@media (max-width: 900px) {
  .desktop-nav { display: none; }
  .menu-trigger { display: flex; }
  
  .active .line { background: #fff; }
  .active .line:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .active .line:nth-child(2) { transform: translateY(-8px) rotate(-45deg); }
}

/* Mobile Overlay */
.full-menu {
  position: fixed;
  inset: 0;
  background: #1a1a1a;
  z-index: 9999;
  display: flex;
  align-items: center;
  padding-left: 10%;
}

.mobile-links-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.num { font-size: 0.8rem; color: #ff7a30; font-family: monospace; }
.text { color: #fff; font-size: 2.5rem; font-weight: 800; text-transform: uppercase; }

/* Transitions */
.slide-enter-active, .slide-leave-active { transition: transform 0.5s cubic-bezier(0.85, 0, 0.15, 1); }
.slide-enter-from, .slide-leave-to { transform: translateY(-100%); }
</style>
