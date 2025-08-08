<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { gsap } from 'gsap';

const containerRef = ref(null);
const cols = ref(0);
const rows = ref(0);
const boxSize = 20;

const totalBoxes = computed(() => cols.value * rows.value);

let boxes = [];

const calculateGrid = () => {
  if (containerRef.value) {
    const { clientWidth, clientHeight } = containerRef.value;
    cols.value = Math.ceil(clientWidth / boxSize);
    rows.value = Math.ceil(clientHeight / boxSize);
  }
};

const handleMouseMove = (e) => {
  const rect = containerRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const colIndex = Math.floor(x / boxSize);
  const rowIndex = Math.floor(y / boxSize);
  const hoveredIndex = rowIndex * cols.value + colIndex;

  if (boxes[hoveredIndex]) {
    gsap.to(boxes[hoveredIndex], {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Optional: Restore box after delay
    gsap.to(boxes[hoveredIndex], {
      scale: 1,
      opacity: 1,
      delay: 0.8,
      duration: 0.6,
      ease: 'power2.inOut'
    });
  }
};

onMounted(() => {
  calculateGrid();
  window.addEventListener('resize', calculateGrid);
  containerRef.value.addEventListener('mousemove', handleMouseMove);
  nextTick(() => {
    boxes = containerRef.value.querySelectorAll('.box');
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', calculateGrid);
  containerRef.value.removeEventListener('mousemove', handleMouseMove);
});
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
        class="box"
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

.box {
  border: 1px solid rgba(58, 58, 58, 0.166);
  background-color: #05060b;
  transition: background-color 0.3s ease;
}
</style>
