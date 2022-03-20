<script setup>
const props = defineProps({
  count: Number,
});
const emits = defineEmits(["emitIncrementCount", "emitDecrementCount"]);
</script>
<template>
  <div class="counter-container">
    <button @click="() => $emit('emitDecrementCount')">-</button>
    <div class="count-display">{{ count }}</div>
    <button @click="() => $emit('emitIncrementCount')">+</button>
  </div>
</template>

<style scoped>
.counter-container {
  display: flex;
}
.count-display {
  flex: 0 0 30%;
  background: var(--color-grey-light);
  padding-block: 16px;
  text-align: center;
}
button {
  background: var(--color-grey-light);
  border: none;
  flex: 1 0;
  cursor: pointer;
  text-align: center;
}
button:hover {
  filter: brightness(80%);
}
</style>
