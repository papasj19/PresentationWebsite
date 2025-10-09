<script setup lang="ts">
import { ref } from 'vue'

const unlocked = ref(false)
const pwd = ref('')

async function unlock() {
  const body = new FormData()
  body.append('password', pwd.value)
  const res = await fetch('/login', { method: 'POST', body })
  if (res.ok) unlocked.value = true
  else alert('Wrong password')
}
</script>

<template>
  <main class="viewer">
    <form v-if="!unlocked" @submit.prevent="unlock" class="login">
      <h2>Password required</h2>
      <input v-model="pwd" type="password" placeholder="Password" />
      <button type="submit">Unlock</button>
    </form>

    <div v-else class="pdf-wrap">
      <!-- This URL is now protected by the function -->
      <iframe src="/protected/Presentations/Presentation1.pdf" title="Presentation"></iframe>
      <p><a href="/protected/Presentations/Presentation1.pdf" download>Download PDF</a></p>
    </div>
  </main>
</template>

<style scoped>
.viewer { min-height: 100vh; display:flex; align-items:center; justify-content:center; }
.login { display:flex; flex-direction:column; gap:12px; padding:24px; border:1px solid #eee; border-radius:12px; }
.pdf-wrap iframe { width: 90vw; height: 80vh; border: 0; }
</style>