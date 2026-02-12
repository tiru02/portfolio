<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const progressWidth = ref(0);

const handleScroll = () => {
  const height = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressWidth.value = docHeight > 0 ? Math.floor((height / docHeight) * 100) : 0;
=======
const isFixed = ref(false);

const handleScroll = () => {
  isFixed.value = window.scrollY > 20;
>>>>>>> Stashed changes
=======
const isFixed = ref(false);

const handleScroll = () => {
  isFixed.value = window.scrollY > 20;
>>>>>>> Stashed changes
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
=======
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
>>>>>>> Stashed changes
=======
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
>>>>>>> Stashed changes
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  <div id="progress" :style="{ width: progressWidth + '%' }"></div>

  <header class="nav-header">
    <div class="nav-wrapper">
=======
  <nav :class="['nav-shell', { 'is-scrolled': isFixed, 'is-open': isMenuOpen }]">
    <div class="nav-inner">
>>>>>>> Stashed changes
=======
  <nav :class="['nav-shell', { 'is-scrolled': isFixed, 'is-open': isMenuOpen }]">
    <div class="nav-inner">
>>>>>>> Stashed changes
      <div class="logo">
        <RouterLink to="/" @click="isMenuOpen = false">
          VIKAT<span class="dot">.</span>
        </RouterLink>
      </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
      <ul class="nav-desktop">
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/experience">Experience</RouterLink></li>
        <li><RouterLink to="/contact_me" class="mini-btn">Contact</RouterLink></li>
      </ul>

      <button class="menu-toggle" @click="toggleMenu">
        <div class="hamburger">
          <span></span>
          <span></span>
        </div>
      </button>
<<<<<<< Updated upstream
=======
    </div>

    <div class="mobile-grid">
      <RouterLink v-for="(item, i) in ['Home', 'Education', 'Experience', 'Projects', 'OSS', 'Contact']" 
                  :key="i" 
                  :to="'/' + item.toLowerCase()" 
                  @click="toggleMenu"
                  class="grid-item">
        <span class="index">0{{ i + 1 }}</span>
        <span class="label">{{ item }}</span>
      </RouterLink>
>>>>>>> Stashed changes
    </div>

    <div class="mobile-grid">
      <RouterLink v-for="(item, i) in ['Home', 'Education', 'Experience', 'Projects', 'OSS', 'Contact']" 
                  :key="i" 
                  :to="'/' + item.toLowerCase()" 
                  @click="toggleMenu"
                  class="grid-item">
        <span class="index">0{{ i + 1 }}</span>
        <span class="label">{{ item }}</span>
      </RouterLink>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
/* 1. Slim Base Height */
.nav-shell {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* Reduced height */
  display: flex;
  align-items: center;
=======
/* 1. Slim Base Height */
.nav-shell {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* Reduced height */
  display: flex;
  align-items: center;
>>>>>>> Stashed changes
  background: white;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.is-scrolled {
  height: 50px; /* Even slimmer on scroll */
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.nav-inner {
  max-width: 1200px;
>>>>>>> Stashed changes
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
/* 2. Logo & Desktop links */
.logo a { font-weight: 900; font-size: 1.2rem; text-decoration: none; color: #1a1a1a; }
.dot { color: #ff7a30; }

.nav-desktop { display: flex; gap: 1.5rem; list-style: none; align-items: center; }
.nav-desktop a { text-decoration: none; color: #666; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
.mini-btn { background: #1a1a1a; color: white !important; padding: 0.4rem 1rem; border-radius: 4px; }

/* 3. Mobile Toggle Positioning */
.menu-toggle {
  display: none;
  background: #1a1a1a;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

.hamburger span {
  display: block;
  width: 18px;
  height: 2px;
  background: white;
  margin: 4px auto;
  transition: 0.3s;
}

=======
/* 2. Logo & Desktop links */
.logo a { font-weight: 900; font-size: 1.2rem; text-decoration: none; color: #1a1a1a; }
.dot { color: #ff7a30; }

.nav-desktop { display: flex; gap: 1.5rem; list-style: none; align-items: center; }
.nav-desktop a { text-decoration: none; color: #666; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
.mini-btn { background: #1a1a1a; color: white !important; padding: 0.4rem 1rem; border-radius: 4px; }

/* 3. Mobile Toggle Positioning */
.menu-toggle {
  display: none;
  background: #1a1a1a;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

.hamburger span {
  display: block;
  width: 18px;
  height: 2px;
  background: white;
  margin: 4px auto;
  transition: 0.3s;
}

>>>>>>> Stashed changes
/* 4. The Creative Mobile Grid */
.mobile-grid {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two column grid for unique look */
  transition: top 0.6s cubic-bezier(0.85, 0, 0.15, 1);
  z-index: -1;
}

.is-open .mobile-grid { top: 0; }

.grid-item {
  border: 0.5px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #1a1a1a;
  padding: 2rem;
  transition: background 0.3s;
}

.grid-item:hover { background: #fafafa; }
.index { font-size: 0.7rem; color: #ff7a30; margin-bottom: 0.5rem; }
.label { font-size: 1.1rem; font-weight: 800; text-transform: uppercase; }

@media (max-width: 900px) {
  .nav-desktop { display: none; }
  .menu-toggle { display: flex; }
  
  .is-open .hamburger span:nth-child(1) { transform: translateY(3px) rotate(45deg); }
  .is-open .hamburger span:nth-child(2) { transform: translateY(-3px) rotate(-45deg); }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
