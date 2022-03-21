<script setup>
import { watch } from "vue";
import { isMobileMenuOpen } from "@/myStore/uiStore.js";
import { toggleBodyScroll } from "@/utils/toggleBodyScroll.js";

watch(isMobileMenuOpen, () => toggleBodyScroll(isMobileMenuOpen));
</script>

<template>
  <div v-if="isMobileMenuOpen" class="parent">
    <div class="link-container">
      <h2>
        <a href="/"> Home</a>
      </h2>
      <h2>
        <a href="/headphones"> Headphones</a>
      </h2>
      <h2>
        <a href="/speakers"> Speakers</a>
      </h2>
      <h2>
        <a href="/earphones"> Earphones</a>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.parent {
  margin-top: 90px;
  background: var(--color-black);
  position: absolute;
  height: calc(100vh - 90px);
  width: 100vw;
  z-index: 990;
}
.mobile-menu-container {
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--padding-inline);
}

.link-container {
  height: calc(100vh - 90px);
  padding-block: 64px;
  padding-inline: var(--padding-inline);
}

.link-container > *:not(:last-child) {
  margin-bottom: 32px;
}

.link-container a {
  color: var(--color-grey-super-light);
}

h2 {
  color: var(--color-grey-super-light);
}
</style>
