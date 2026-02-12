<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const progressWidth = ref(0);
const isFixed = ref(false);
const showSecondary = ref(false);
const isMobileMenuOpen = ref(false);

const currentPath = computed(() => {
  const path = route.path === "/" ? "HOME" : route.path.toUpperCase().replace("/", "");
  return `~/${path}`;
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressWidth.value = docHeight > 0 ? Math.floor((scrollY / docHeight) * 100) : 0;
  isFixed.value = scrollY > 50;
  showSecondary.value = scrollY > 400;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // FIX: Prevent background scrolling
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  } else {
    document.body.style.overflow = '';
    document.body.style.height = '';
  }
};

// FIX: Auto-close and reset scroll when route changes
watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
  document.body.style.height = '';
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div id="progress-container">
    <div id="progress-bar" :style="{ width: progressWidth + '%' }"></div>
  </div>
  
  <div class="nav-wrapper">
    <nav :class="['nav-main', { 'nav-fixed': isFixed, 'menu-active': isMobileMenuOpen }]">
      <div class="nav-content">
        <div class="logo">
          <RouterLink to="/" @click="isMobileMenuOpen = false">VIKAT<span class="dot">.</span></RouterLink>
        </div>

        <ul class="nav-links desktop-only">
          <li><RouterLink to="/" exact-active-class="active">Home</RouterLink></li>
          <li><RouterLink to="/education" exact-active-class="active">Education</RouterLink></li>
          <li><RouterLink to="/experience" exact-active-class="active">Experience</RouterLink></li>
          <li><RouterLink to="/projects" exact-active-class="active">Projects</RouterLink></li>
          <li><RouterLink to="/open_source" exact-active-class="active">OSS</RouterLink></li>
          <li>
            <RouterLink to="/contact_me" class="portal-btn">
              <span class="btn-text">Let's Talk</span>
              <div class="portal-aura"></div>
            </RouterLink>
          </li>
        </ul>

        <button 
          class="mobile-toggle" 
          @click="toggleMobileMenu" 
          :class="{ 'is-open': isMobileMenuOpen }"
        >
          <div class="toggle-box">
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </button>
      </div>
    </nav>
  </div>

  <Transition name="hw-slide">
    <div v-if="isMobileMenuOpen" class="mobile-overlay">
      <div class="overlay-grid"></div>
      <div class="overlay-content">
        <div class="menu-sys-label">SYS_PATH: {{ currentPath }} // STATUS: ACTIVE</div>
        
        <nav class="mobile-nav-list">
          <RouterLink to="/" @click="toggleMobileMenu"><span>01</span> HOME</RouterLink>
          <RouterLink to="/education" @click="toggleMobileMenu"><span>02</span> EDUCATION</RouterLink>
          <RouterLink to="/experience" @click="toggleMobileMenu"><span>03</span> EXPERIENCE</RouterLink>
          <RouterLink to="/projects" @click="toggleMobileMenu"><span>04</span> PROJECTS</RouterLink>
          <RouterLink to="/open_source" @click="toggleMobileMenu"><span>05</span> OSS</RouterLink>
          <RouterLink to="/contact_me" @click="toggleMobileMenu" class="mobile-accent"><span>06</span> CONNECT</RouterLink>
        </nav>
      </div>
    </div>
  </Transition>

  <aside :class="['hud-menu', { 'hud-visible': showSecondary && !isMobileMenuOpen }]">
    <div class="hud-container">
      <div class="hud-prefix">{{ currentPath }}</div>
      
      <div class="hud-links">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
        <RouterLink to="/contact_me" class="hud-accent">Contact</RouterLink>
      </div>

      <div class="hud-suffix">CMD_LOAD: {{ progressWidth }}%</div>
    </div>
  </aside>
</template>

<style scoped>
#progress-container { position: fixed; top: 0; left: 0; width: 100%; height: 2px; z-index: 9999; background: rgba(0,0,0,0.05); }
#progress-bar { height: 100%; background: #ff4d00; transition: width 0.2s; }

.nav-wrapper { height: 90px; }
.nav-main {
  width: 100%; height: 90px; background: white;
  display: flex; align-items: center; z-index: 3000;
  transition: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.nav-fixed { position: fixed; top: 0; height: 70px; border-bottom: 2px solid #000; background: rgba(255, 255, 255, 0.98); }

.nav-content {
  max-width: 1400px; width: 100%; margin: 0 auto; padding: 0 2rem;
  display: flex; justify-content: space-between; align-items: center;
}

.logo a { font-weight: 900; font-size: 1.5rem; color: #000; text-decoration: none; letter-spacing: -2px; }
.dot { color: #ff4d00; }

.nav-links { display: flex; gap: 2.2rem; list-style: none; align-items: center; }
.nav-links a:not(.portal-btn) { text-decoration: none; color: #000; font-size: 0.7rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.15em; }

.active { color: #ff4d00 !important; }

/* FIXED CLOSE BUTTON FIX */
.mobile-toggle {
  height: max-content;
  display: none; background: #000; border: none; padding: 12px;
  cursor: pointer; z-index: 9000; position: relative;
}

/* When open, force button to fixed position so it never scrolls away */
.is-open { position: fixed; top: 25px; right: 2rem; }

.toggle-box { width: 20px; height: 12px; display: flex; flex-direction: column; justify-content: space-between; }
.bar { width: 100%; height: 2px; background: #fff; transition: 0.3s; }

.is-open .bar:nth-child(1) { transform: translateY(5px) rotate(45deg); background: #ff4d00; }
.is-open .bar:nth-child(2) { transform: translateY(-5px) rotate(-45deg); background: #ff4d00; }

/* OVERLAY */
.mobile-overlay {
  position: fixed; inset: 0; background: #fff; z-index: 8000;
  display: flex; align-items: center; padding: 2rem;
  overflow-y: auto; /* Menu itself can scroll if items are many */
}

.overlay-grid {
  position: absolute; inset: 0; z-index: -1;
  background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.menu-sys-label { font-family: monospace; font-size: 10px; color: #ff4d00; font-weight: 900; margin-bottom: 2rem; letter-spacing: 2px; }
.mobile-nav-list { display: flex; flex-direction: column; gap: 1rem; }
.mobile-nav-list a { font-size: 2.5rem; font-weight: 900; text-decoration: none; color: #000; letter-spacing: -2px; text-transform: uppercase; }
.mobile-nav-list a span { font-size: 0.8rem; color: #ccc; margin-right: 10px; vertical-align: middle; }
.mobile-accent { color: #ff4d00 !important; }

/* HUD */
.hud-menu {
  position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%) translateY(100px);
  z-index: 3500; transition: 0.5s; opacity: 0;
}
.hud-visible { transform: translateX(-50%) translateY(0); opacity: 1; }
.hud-container {
  display: flex; align-items: center; gap: 20px; background: #000; color: #fff;
  padding: 10px 24px; font-family: monospace; font-size: 10px;
  box-shadow: 8px 8px 0px rgba(255, 77, 0, 0.3); border: 1px solid rgba(255,255,255,0.1);
}
.hud-prefix { color: #ff4d00; font-weight: 900; padding-right: 15px; border-right: 1px solid rgba(255,255,255,0.2); }
.hud-links { display: flex; gap: 20px; }
.hud-links a { text-decoration: none; color: #fff; font-size: 10px; text-transform: uppercase; }
.hud-links a:hover { color: #ff4d00; }
.hud-suffix { padding-left: 15px; border-left: 1px solid rgba(255,255,255,0.2); opacity: 0.6; }

@media (max-width: 900px) {
  .desktop-only { display: none !important; }
  .mobile-toggle { display: block; }
  .hud-container { width: 90vw; padding: 10px; }
}

.hw-slide-enter-active, .hw-slide-leave-active { transition: 0.4s cubic-bezier(0.8, 0, 0.2, 1); }
.hw-slide-enter-from, .hw-slide-leave-to { transform: translateX(-100%); }

/* PORTAL BUTTON */
.portal-btn { position: relative; padding: 8px 20px; border: 1px solid #000; overflow: hidden; display: flex; text-decoration: none; font-weight: 900; font-size: 0.7rem; text-transform: uppercase; }
.portal-aura { position: absolute; top: 50%; left: 50%; width: 0%; height: 0%; background: #ff4d00; transform: translate(-50%, -50%); z-index: -1; transition: 0.4s; border-radius: 50%; filter: blur(12px); opacity: 0; }
.portal-btn:hover .portal-aura { width: 120%; height: 150%; opacity: 0.25; }
</style>