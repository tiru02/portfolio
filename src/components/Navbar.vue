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

  <div class="perspective-container" :class="{ 'is-active': isMenuOpen }">
    
    <nav class="nav-bar">
      <div class="nav-content">
        <div class="logo">VIKAT<span class="dot">.</span></div>
        <button class="burger" @click="toggleMenu">
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

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
