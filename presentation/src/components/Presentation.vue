<script setup>
import { ref, onMounted } from "vue";

const unlocked = ref(false);
const pwd = ref("");

async function unlock() {
  const body = new FormData();
  body.append("password", pwd.value);

  // Use same-origin so the cookie is stored
  const res = await fetch("/login", {
    method: "POST",
    body,
    credentials: "same-origin",
  });

  if (res.ok) {
    unlocked.value = true;
    // Optional: ping the PDF to confirm access and warm cache
    // await fetch("/protected/Presentation1.pdf", { method: "HEAD", credentials: "same-origin" });
  } else {
    alert("Wrong password 😅");
  }
}

const inputEl = ref(null);
onMounted(() => inputEl.value?.focus());
</script>

<template>
  <main class="viewer">
    <form v-if="!unlocked" class="login" @submit.prevent="unlock">
      <h2>Password required</h2>
      <input ref="inputEl" v-model.trim="pwd" type="password" placeholder="Password" />
      <button type="submit">Unlock</button>
    </form>

    <div v-else class="pdf-wrap">
      <iframe
          src="/protected/Presentations/Presentation1.pdf"
          title="Presentation PDF"
          referrerpolicy="no-referrer"
      ></iframe>
      <p class="fallback">
        Can’t see it? <a href="/protected/Presentations/Presentation1.pdf" download>Download the PDF</a>.
      </p>
    </div>
  </main>
</template>

<style scoped>
.viewer { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
.login { display: flex; flex-direction: column; gap: 12px; padding: 24px; border: 1px solid #eee; border-radius: 12px; }
.pdf-wrap { width: min(960px, 95vw); }
.pdf-wrap iframe { width: 100%; height: 80vh; border: 0; }
.fallback { margin-top: .5rem; text-align: center; }
</style>