<script setup>
import { ref } from "vue";

const unlocked = ref(false)
const input = ref('')
const PASSWORD = '19'

function checkPassword() {
  if (input.value.trim() === PASSWORD) {
    unlocked.value = true
  } else {
    alert('Wrong password 😅')
  }
}
</script>

<template>
  <main class="viewer">
    <!-- Password prompt -->
    <div v-if="!unlocked" class="login">
      <h2>Enter password to view slides</h2>
      <input v-model="input" type="password" placeholder="Password" />
      <button @click="checkPassword">Unlock</button>
    </div>

    <!-- PDF only shows if unlocked -->
    <div v-else class="pdf-wrap">
      <iframe
          src="/Presentations/Presentation1.pdf"
          title="Presentation PDF"
          referrerpolicy="no-referrer"
      ></iframe>

      <!-- Fallback link -->
      <p class="fallback">
        Can’t see it? <a href="/Presentations/Presentation1.pdf" download>Download the PDF</a>.
      </p>
    </div>
  </main>
</template>

<style scoped>
.viewer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fafafa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.login input {
  padding: 0.5rem;
  font-size: 1rem;
}
.login button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: #007bff;
  color: white;
  cursor: pointer;
}
.pdf-wrap {
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
}
.pdf-wrap iframe {
  width: 100%;
  height: 80vh;
  border: 0;
}
.fallback {
  margin-top: .5rem;
  font-size: .9rem;
  text-align: center;
}
</style>