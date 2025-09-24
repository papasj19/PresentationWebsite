<script setup>

</script>

<template>

  <main>
    <div class="embed">
      <iframe
          src="https://lasalleuniversities-my.sharepoint.com/personal/spencerjames_johnson_students_salle_url_edu/_layouts/15/Doc.aspx?sourcedoc={9afe368d-b3e4-46d8-aeea-7a4baa2b2a80}&action=embedview&wdAr=1.7777777777777777"
          title="Microsoft Office presentation"
          width="476"
          height="288"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Fallback link lives OUTSIDE the iframe -->
    <p class="embed-fallback">
      Can’t see it?
      <a
          href="https://office.com"
          target="_blank"
          rel="noopener noreferrer"
      >Open in Microsoft Office</a>.
    </p>
  </main>

</template>

<style scoped>

.embed {
  max-width: 800px;
  aspect-ratio: 16 / 9;
  height: 80vh;
}
.embed iframe {
  width: 100%;
  height: 100%;
}
/* Tidy fallback text */
.embed-fallback {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

</style>