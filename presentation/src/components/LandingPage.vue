<script setup>
</script>

<template>
  <section class="landing-page">
    <div class="content">
      <h1 class="title"> Thanks for dropping by! <img class="plane" src="/src/assets/plane2.png"  alt="plane2"/></h1>
      <h2 class="subtitle">
        Check out what my friends and I have been up to recently at
        <a href="https://www.studiogatogalactico.com" target="_blank" rel="noopener noreferrer">
          Studio Gato Galactico
        </a>
      </h2>
      <img src="../assets/surf.png" alt="Surf" class="hero-img" />
    </div>
  </section>
</template>

<style scoped>
.landing-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;      /* lock to viewport height */
  width: 100vw;       /* lock to viewport width */
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;

  background: linear-gradient(
      to bottom,
      #87ceeb 0%,     /* sky blue */
      #b0e0e6 40%,    /* pale aqua */
      #ffe4b5 100%    /* sandy tan */
  );

  text-align: center;
}

.plane {
  width: 10vh;
  vertical-align: middle;
  margin-left: 10px;
  animation: float 3s ease-in-out infinite;
}

.content {
  width: 100%;
  animation: fadeIn 1.2s ease-in-out;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.4rem;
  font-weight: 400;
  color: #34495e;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.subtitle a {
  color: #0077ff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.subtitle a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.hero-img {
  width: auto;
  height: 60vh;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transition: transform 0.4s ease;
}

.hero-img:hover {
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>