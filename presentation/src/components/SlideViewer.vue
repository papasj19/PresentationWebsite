<script setup lang="ts">
import { onMounted, ref, watch, onBeforeUnmount } from 'vue'

// 1) Import PDF.js (v3/v4 compatible names)
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from 'pdfjs-dist'

// 2) Point PDF.js to its worker (Vite needs a URL import)
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
GlobalWorkerOptions.workerSrc = workerSrc

// 3) Import your PDF as a URL (the ?url helps TS + Vite)
import pdfUrl from '@/assets/Presentation1.pdf?url'

const container = ref<HTMLElement | null>(null)
const canvasEl = ref<HTMLCanvasElement | null>(null)
const pdfDoc = ref<PDFDocumentProxy | null>(null)
const pageNum = ref(1)
const pageCount = ref(0)
let resizeObs: ResizeObserver | null = null
let rendering = false

async function loadPdf() {
  const task = getDocument({ url: pdfUrl })
  pdfDoc.value = await task.promise
  pageCount.value = pdfDoc.value.numPages
  await renderPage()
}

async function renderPage() {
  if (!pdfDoc.value || !canvasEl.value || !container.value) return
  if (rendering) return
  rendering = true

  const page = await pdfDoc.value.getPage(pageNum.value)

  // Fit-to-width
  const desiredWidth = container.value.clientWidth || 800
  const unscaled = page.getViewport({ scale: 1 })
  const scale = desiredWidth / unscaled.width
  const viewport = page.getViewport({ scale })

  const canvas = canvasEl.value
  const ctx = canvas.getContext('2d')!

  const dpr = window.devicePixelRatio || 1
  canvas.style.width = viewport.width + 'px'
  canvas.style.height = viewport.height + 'px'
  canvas.width = Math.floor(viewport.width * dpr)
  canvas.height = Math.floor(viewport.height * dpr)

  const transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined
  await page.render({ canvasContext: ctx, viewport, transform }).promise
  rendering = false
}

function nextPage() { if (pageNum.value < pageCount.value) pageNum.value++ }
function prevPage() { if (pageNum.value > 1) pageNum.value-- }
function onJump(e: Event) {
  const val = Number((e.target as HTMLInputElement).value)
  if (val >= 1 && val <= pageCount.value) pageNum.value = val
}

watch(pageNum, () => renderPage())

onMounted(async () => {
  await loadPdf()
  resizeObs = new ResizeObserver(() => renderPage())
  if (container.value) resizeObs.observe(container.value)
})
onBeforeUnmount(() => {
  if (resizeObs && container.value) resizeObs.unobserve(container.value)
})
</script>

<template>
  <div class="wrap">
    <div class="toolbar">
      <button @click="prevPage" :disabled="pageNum===1">Prev</button>
      <span>Page <input class="jump" type="number" :max="pageCount" min="1" :value="pageNum" @change="onJump" /> / {{ pageCount }}</span>
      <button @click="nextPage" :disabled="pageNum===pageCount">Next</button>
      <a class="download" :href="(pdfUrl as unknown as string)" download>Download</a>
    </div>
    <div class="viewer" ref="container">
      <canvas ref="canvasEl"></canvas>
    </div>
  </div>
</template>

<style scoped>
.wrap { max-width: 1200px; margin: 0 auto; padding: 12px; }
.toolbar { display: flex; gap: 12px; align-items: center; margin-bottom: 8px; flex-wrap: wrap; }
.toolbar button { padding: 6px 10px; border-radius: 10px; border: 1px solid #ddd; background: #f7f7f7; cursor: pointer; }
.toolbar button:disabled { opacity: .5; cursor: not-allowed; }
.jump { width: 64px; padding: 4px; }
.download { margin-left: auto; text-decoration: underline; }
.viewer { width: 100%; display: grid; place-items: center; background: #fafafa; border: 1px solid #eee; border-radius: 12px; padding: 8px; }
canvas { max-width: 100%; height: auto; display: block; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,.06); }
</style>