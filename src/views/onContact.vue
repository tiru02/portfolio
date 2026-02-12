<template>
  <div class="comm-container">
    <div class="content-wrapper">
      <header class="page-header">
        <h1 class="title">CONNECT<span class="dot">.</span></h1>
        <p class="subtitle">Direct channels & future infrastructure</p>
      </header>

      <section class="channel-section">
        <div class="status-badge">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-[#91ed85] animate-ping opacity-40"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#91ed85]"></span>
          </span>
          <span class="status-text">Active Channels</span>
        </div>

        <div class="links-grid">
          <a href="mailto:vikat0369@gmail.com" class="link-card">
            <span class="label">Email</span>
            <span class="value">vikat0369@gmail.com</span>
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" class="link-card">
            <span class="label">Instagram</span>
            <span class="value">tiru._1</span>
          </a>
        </div>
      </section>

      <section class="future-section">
        <div class="server-box">
          <div class="box-header">
            <span class="terminal-dots"></span>
            <span class="box-title">System Update</span>
          </div>
          <p class="box-text">
            The integrated communication channel is currently in development. 
            Full messaging capabilities will be deployed following the next 
            major server release.
          </p>
          <div class="progress-bar-container">
            <div class="progress-fill"></div>
          </div>
          <span class="eta">Release v2.0 pending...</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.comm-container {
  min-height: 100vh;
  padding-top: 120px;
  background: white;
  color: #1a1a1a;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.title {
  font-weight: 900;
  font-size: 3.5rem;
  letter-spacing: -2px;
  margin-bottom: 0.5rem;
}

.dot { color: #ff7a30; }

.subtitle {
  color: #666;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
}

.channel-section {
  margin-top: 4rem;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.status-text {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.link-card {
  padding: 2rem;
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link-card:hover {
  border-color: #ff7a30;
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -15px rgba(0,0,0,0.05);
}

.link-card .label {
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 800;
  color: #999;
  letter-spacing: 0.1em;
}

.link-card .value {
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a1a1a;
}

.future-section {
  margin-top: 5rem;
  padding-bottom: 5rem;
}

.server-box {
  background: #f9f9f9;
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 600px;
  border: 1px solid rgba(0,0,0,0.03);
}

.box-title {
  font-size: 0.7rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.box-text {
  margin: 1.5rem 0;
  line-height: 1.6;
  color: #555;
  font-size: 0.95rem;
}

.progress-bar-container {
  height: 4px;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  width: 65%;
  height: 100%;
  background: #ff7a30;
}

.eta {
  font-size: 0.7rem;
  font-weight: 700;
  color: #bbb;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .title { font-size: 2.5rem; }
}
</style>