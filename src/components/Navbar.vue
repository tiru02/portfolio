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

  <nav class="navbar">
    <div class="nav-content">
      <div class="logo">
        <RouterLink to="/" @click="isMenuOpen = false">
          VIKAT<span class="dot">.</span>
        </RouterLink>
      </div>
      
      <button class="menu-btn" @click="toggleMenu">
        <span class="btn-text">{{ isMenuOpen ? 'CLOSE' : 'MENU' }}</span>
        <div class="burger-icon" :class="{ 'is-active': isMenuOpen }">
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </nav>

  <transition name="movie-fade">
    <div v-if="isMenuOpen" class="movie-overlay">
      <ul class="movie-links">
        <li v-for="(link, i) in [
          { name: 'Home', path: '/' },
          { name: 'Education', path: '/education' },
          { name: 'Experience', path: '/experience' },
          { name: 'Projects', path: '/projects' },
          { name: 'OSS', path: '/open_source' },
          { name: 'Contact', path: '/contact_me' }
        ]" :key="i" :style="{ transitionDelay: (i * 0.1) + 's' }">
          <RouterLink :to="link.path" @click="toggleMenu">
            <span class="link-num">0{{ i + 1 }}</span>
            <span class="link-text">{{ link.name }}</span>
          </RouterLink>
        </li>
      </ul>
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
  z-index: 10000;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.nav-content {
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

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-text {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.burger-icon {
  width: 20px;
  height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.burger-icon span {
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  transition: 0.3s;
}

.burger-icon.is-active span { background: #fff; }
.burger-icon.is-active span:nth-child(1) { transform: translateY(4px) rotate(45deg); }
.burger-icon.is-active span:nth-child(2) { transform: translateY(-4px) rotate(-45deg); }

.movie-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9998;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-links {
  list-style: none;
  padding: 0;
  text-align: center;
}

.movie-links li {
  margin: 1.5rem 0;
  opacity: 0;
  transform: translateY(20px);
}

.movie-links a {
  text-decoration: none;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-num {
  font-size: 0.8rem;
  color: #ff7a30;
  margin-right: 1rem;
}

.movie-fade-enter-active, .movie-fade-leave-active {
  transition: opacity 0.4s ease;
}

.movie-fade-enter-from, .movie-fade-leave-to {
  opacity: 0;
}

.movie-fade-enter-active .movie-links li {
  animation: slideIn 0.5s forwards;
}

@keyframes slideIn {
  to { opacity: 1; transform: translateY(0); }
}
</style>
