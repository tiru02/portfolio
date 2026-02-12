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
      
      <button class="menu-btn" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
        <span class="btn-text">{{ isMenuOpen ? 'CLOSE' : 'MENU' }}</span>
        <div class="burger-icon">
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </nav>

  <Transition name="movie-fade">
    <div v-if="isMenuOpen" class="movie-overlay">
      <div class="overlay-bg"></div>
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
  </Transition>
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
  height: 65px;
  display: flex;
  align-items: center;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
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
  font-size: 1.3rem;
  text-decoration: none;
  color: #1a1a1a;
  letter-spacing: -1px;
}
.dot { color: #ff7a30; }

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-text {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #1a1a1a;
}

.burger-icon {
  width: 20px;
  height: 12px;
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

.is-active .btn-text { color: #fff; }
.is-active .burger-icon span { background: #fff; }
.is-active .burger-icon span:nth-child(1) { transform: translateY(5px) rotate(45deg); }
.is-active .burger-icon span:nth-child(2) { transform: translateY(-5px) rotate(-45deg); }

.movie-overlay {
  position: fixed;
  inset: 0;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-bg {
  position: absolute;
  inset: 0;
  background: #1a1a1a;
}

.movie-links {
  position: relative;
  list-style: none;
  padding: 0;
  text-align: center;
}

.movie-links li {
  margin: 1.5rem 0;
  overflow: hidden;
}

.movie-links a {
  text-decoration: none;
  color: #fff;
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 900;
  display: flex;
  align-items: baseline;
  justify-content: center;
  transition: opacity 0.3s;
}

.movie-links a:hover { opacity: 0.5; }

.link-num {
  font-size: 1rem;
  color: #ff7a30;
  margin-right: 1.5rem;
  font-weight: 400;
}

/* Animations */
.movie-fade-enter-active, .movie-fade-leave-active {
  transition: opacity 0.5s ease;
}
.movie-fade-enter-from, .movie-fade-leave-to {
  opacity: 0;
}

.movie-fade-enter-active .movie-links li {
  animation: slideUp 0.6s cubic-bezier(0.2, 1, 0.3, 1) both;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

    <div class="main-content">
      <slot />
      <div class="content-overlay" @click="toggleMenu"></div>
    </div>

    <div class="menu-view">
      <ul class="nav-links">
        <li v-for="(link, i) in ['Home', 'Education', 'Experience', 'Projects', 'OSS', 'Contact']" 
            :key="i" :style="{ '--i': i }">
          <RouterLink :to="'/' + link.toLowerCase()" @click="toggleMenu">
            <span class="num">0{{ i + 1 }}</span> {{ link }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.perspective-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #111; /* Background behind the tilt */
  perspective: 2000px;
  overflow: hidden;
}

#progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: #ff7a30;
  z-index: 5000;
}

.nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px; /* Precise height to avoid empty space */
  display: flex;
  align-items: center;
  z-index: 4000;
  transition: 0.5s;
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

.logo { font-weight: 900; font-size: 1.4rem; color: #1a1a1a; transition: 0.5s; }
.is-active .logo { color: white; }
.dot { color: #ff7a30; }

.burger {
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.burger span {
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  transition: 0.5s;
}

.is-active .burger span { background: white; }
.is-active .burger span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
.is-active .burger span:nth-child(2) { transform: translateY(-9px) rotate(-45deg); }

.main-content {
  position: relative;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 3000;
  transform-origin: right center;
  transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
}

.is-active .main-content {
  transform: translateX(-50%) rotateY(25deg) scale(0.8);
  border-radius: 15px;
  pointer-events: none;
  box-shadow: 0 20px 80px rgba(0,0,0,0.4);
}

.content-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.05);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
}
.is-active .content-overlay { opacity: 1; pointer-events: auto; cursor: pointer; }

.menu-view {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  z-index: 2000;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}

.is-active .menu-view { visibility: visible; opacity: 1; }

.nav-links { list-style: none; }
.nav-links li { 
  margin: 2rem 0; 
  transform: translateX(30px); 
  opacity: 0; 
  transition: 0.5s;
  transition-delay: calc(var(--i) * 0.1s);
}

.is-active .nav-links li { transform: translateX(0); opacity: 1; }

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
}

.num { font-size: 0.8rem; color: #ff7a30; margin-right: 1rem; font-weight: 400; }
</style>

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
  z-index: 1002;
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
  position: relative;
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

@media (max-width: 900px) {
  .nav-links { display: none; }
}
</style>
