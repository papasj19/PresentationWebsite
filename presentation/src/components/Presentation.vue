<template>
  <main class="viewer">
    <iframe
        src="/Presentations/Presentation1.pdf"
        title="Presentation PDF"
        referrerpolicy="no-referrer"
    ></iframe>

    <!-- Fallback link -->
    <p class="fallback">
      Can’t see it? <a href="/Presentations/Presentation1.pdf" download>Download the PDF</a>.
    </p>
  </main>
</template>

<style scoped>
.viewer {
  min-height: 100vh;         /* make sure there’s height to fill */
  display: flex;
  flex-direction: column;
}
.viewer iframe {
  flex: 1 1 auto;            /* iframe fills remaining height */
  width: 100%;
  border: 0;
}
.fallback { margin-top: .5rem; font-size: .9rem; }
</style>