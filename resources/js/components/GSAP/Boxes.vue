<!-- Boxes.vue -->

<script setup>

import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import gsap from 'gsap'

const containerRef = ref(null)
const cols = ref(0)
const rows = ref(0)
const boxSize = 50

const totalBoxes = computed(() => cols.value * rows.value)

let timeline

const animateBoxes = () => {
  if (!containerRef.value || totalBoxes.value === 0) return

  if (timeline) timeline.kill()

  const boxes = containerRef.value.querySelectorAll('.box')

  timeline = gsap.timeline({
    repeat: -1,
    yoyo: true
  })

  timeline.to(boxes, {
    scale: 0.2,
    opacity: 0.3,
    duration: .1,
    ease: 'power2.inOut',
    stagger: {
      each: 0.08,
      from: 'center',
      grid: [rows.value, cols.value]
    }
  })
}

const calculateGrid = () => {
  if (containerRef.value) {
    const { clientWidth, clientHeight } = containerRef.value
    cols.value = Math.ceil(clientWidth / boxSize)
    rows.value = Math.ceil(clientHeight / boxSize)
  }
}

watch(totalBoxes, (newTotal) => {
  if (newTotal > 0) {
    nextTick(() => {
      animateBoxes()
    })
  }
})

onMounted(() => {
  calculateGrid()
  window.addEventListener('resize', calculateGrid)
})

onUnmounted(() => {
  window.removeEventListener('resize', calculateGrid)
  if (timeline) timeline.kill()
})
</script>


<template>
  <div class="boxes-container" ref="containerRef">
    <div
      v-if="cols > 0"
      class="grid-background"
      :style="{ gridTemplateColumns: 'repeat(' + cols + ', 1fr)' }"
    >
      <div
        v-for="i in totalBoxes"
        :key="i"
        class="border border-[rgba(41,106,25,0.69)] bg-[#0000ff] transition-colors duration-300 ease-in-out"
      ></div>
    </div>
  </div>
</template>



<style scoped>
.boxes-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.grid-background {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
}

/* .box {
  border: 1px solid rgba(106, 25, 25, 0.2);
  background-color: #0b0b1e4f!important;
  transition: background-color 0.3s ease;
} */
</style>
