<script setup>
</script>

<template>
  <section class="landing-page">
    <div class="content">
      <h1 class="title">
        Thanks for dropping by!
        <img class="plane" src="/src/assets/plane2.png" alt="plane2" loading="lazy" />
      </h1>

      <h2 class="subtitle">
        Check out what my friends and I have been up to recently at
        <a href="https://www.studiogatogalactico.com" target="_blank" rel="noopener noreferrer">
          Studio Gato Galactico
        </a>
      </h2>

      <img src="../assets/surf.png" alt="Surf" class="hero-img" loading="lazy" />
    </div>
  </section>
</template>

<style scoped>
.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;          /* center on tall/short screens */
  min-height: 100svh;           /* mobile-safe viewport height */
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  overflow: auto;               /* allow scroll on small phones */

  background: linear-gradient(
      to bottom,
      #87ceeb 0%,
      #b0e0e6 40%,
      #ffe4b5 100%
  );

  text-align: center;
}

.content {
  width: 100%;
  max-width: 1100px;            /* keeps lines readable on desktop */
  margin-inline: auto;
  padding-inline: 0.5rem;
  animation: fadeIn 1.2s ease-in-out;
}

/* Fluid, responsive typography */
.title {
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #2c3e50;
  font-size: clamp(1.6rem, 4vw + 0.5rem, 3rem);
}

.subtitle {
  font-weight: 400;
  color: #34495e;
  margin-bottom: 1.25rem;
  line-height: 1.5;
  font-size: clamp(1rem, 1.6vw + 0.6rem, 1.4rem);
}

.subtitle a {
  color: #0077ff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}
.subtitle a:hover { color: #0056b3; text-decoration: underline; }

/* Plane icon scales with viewport, stays tidy on mobile */
.plane {
  width: clamp(28px, 6vw, 56px);
  vertical-align: middle;
  margin-left: 10px;
  animation: float 3s ease-in-out infinite;
}

/* Image adapts to screen; never overflows */
.hero-img {
  display: block;
  width: min(92vw, 900px);
  height: auto;
  max-height: 60svh;            /* don’t eat the whole screen on phones */
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transition: transform 0.4s ease;
}

/* Only apply hover zoom on devices that actually have hover */
@media (hover: hover) {
  .hero-img:hover { transform: scale(1.03); }
}

/* Small-screen tweaks */
@media (max-width: 600px) {
  .landing-page { padding: 0.75rem; }
  .subtitle { margin-bottom: 1rem; }
  .plane { margin-left: 6px; }
  .hero-img { max-height: 50svh; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Optional: keep your float animation for the plane */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
</style>