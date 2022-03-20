<script setup>
const props = defineProps({
  fill: String,
});
</script>

<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group">
      <rect id="Rectangle" width="16" height="3" :fill="fill" />
      <rect id="Rectangle Copy" y="6" width="16" height="3" :fill="fill" />
      <rect id="Rectangle Copy 2" y="12" width="16" height="3" :fill="fill" />
    </g>
  </svg>
</template>

<style scoped>
svg {
  cursor: pointer;
}

svg:hover {
  filter: brightness(80%);
}
</style>
