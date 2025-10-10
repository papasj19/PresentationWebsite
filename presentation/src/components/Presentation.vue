<script setup>
import { ref, onMounted } from "vue";

const unlocked = ref(false);
const pwd = ref("");

async function unlock() {
  const body = new FormData();
  body.append("password", pwd.value);

  const res = await fetch("/login", {
    method: "POST",
    body,
    credentials: "same-origin",
  });

  if (res.ok) {
    unlocked.value = true;
  } else {
    alert("Wrong password 😅");
  }
}

const inputEl = ref(null);
onMounted(() => inputEl.value?.focus());
</script>

<template>
  <main class="viewer">
    <!-- Lock card -->
    <form v-if="!unlocked" class="login" @submit.prevent="unlock">
      <div class="lockmark" aria-hidden="true">🔒</div>
      <h2>Password required</h2>

      <label class="field">
        <input
            ref="inputEl"
            v-model.trim="pwd"
            type="password"
            placeholder="Enter password"
            aria-label="Password"
            required
        />
      </label>

      <button type="submit" class="btn">Unlock</button>

    </form>

    <!-- PDF viewer -->
    <div v-else class="pdf-wrap">
      <iframe
          src="/protected/Presentations/Presentation1.pdf"
          title="Presentation PDF"
          referrerpolicy="no-referrer"
      ></iframe>

      <p class="fallback">
        Can’t see it?
        <a href="/protected/Presentations/Presentation1.pdf" download>Download the PDF</a>.
      </p>
    </div>
  </main>
</template>

<style scoped>
/* Put the variables on the wrapper so scoped CSS applies */
.viewer {
  --fg: darkslategray;
  --accent: skyblue;
  --btn-bg: antiquewhite;
  --card-bg: rgba(135, 206, 235, 0.18); /* skyblue tint for the card */

  /* light skyblue background so it’s not “just white” */
  min-height: 100vh;
  padding: 32px 20px;
  display: grid;
  place-items: center;

}

/* Lock card */
.login {
  width: min(420px, 92vw);
  border: 1px solid rgba(47, 79, 79, 0.25);
  border-radius: 16px;
  padding: 28px 24px;
  display: grid;
  justify-items: center;
  gap: 16px;
  box-shadow:
      0 12px 28px rgba(47, 79, 79, 0.1),
      0 2px 6px rgba(47, 79, 79, 0.08);

  /* Stronger blue gradient background */
  background:
      radial-gradient(
          60% 45% at 50% 10%,
          rgba(70, 130, 180, 0.35),   /* steelblue tint */
          transparent 65%
      ),
      linear-gradient(
          180deg,
          rgba(135, 206, 250, 0.95) 0%,   /* deep skyblue */
          rgba(176, 224, 230, 0.95) 100%  /* powderblue */
      );
  color: darkslategray;
}



h2 { margin: 6px 0 2px; font-size: 1.25rem; color: var(--fg); }

.login input[type="password"] {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(47, 79, 79, 0.22);
  background-color: #fff;
  outline: none;
  transition: box-shadow 160ms ease, border-color 160ms ease;
}
.login input[type="password"]::placeholder { color: rgba(47,79,79,0.55); }
.login input[type="password"]:focus-visible {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(135, 206, 235, 0.35);
}

/* Button in your colors */
.login .btn,
.login button {
  justify-self: center;
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid rgba(47,79,79,0.18);
  background: var(--btn-bg);
  color: var(--fg);
  font-weight: 600;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 160ms ease, opacity 120ms ease;
  box-shadow: 0 6px 16px rgba(222, 184, 135, 0.35);
}
.login .btn:hover,
.login button:hover { transform: translateY(-1px); }
.login .btn:active,
.login button:active { transform: translateY(0); opacity: 0.9; }

/* PDF area */
.pdf-wrap {
  width: min(980px, 96vw);
  background: #fff;
  border: 1px solid rgba(47, 79, 79, 0.12);
  border-radius: 16px;
  padding: 10px;
  box-shadow:
      0 16px 36px rgba(47, 79, 79, 0.08),
      0 2px 6px rgba(47, 79, 79, 0.06);
}
.pdf-wrap iframe {
  width: 100%;
  height: 78vh;
  border: 0;
  border-radius: 10px;
  /* simpler loading backdrop (no gradient parsing issues) */
  background: rgba(135, 206, 235, 0.08);
}

.fallback { margin-top: 8px; text-align: center; font-size: 0.92rem; }

@media (max-width: 480px) {
  .pdf-wrap iframe { height: 68vh; }
}
</style>