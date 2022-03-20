<script setup>
const props = defineProps({
  title: String,
  body: String,
  imgSrc: String,
  imgAlt: String,
});
</script>

<template>
  <section class="blurb-section">
    <div class="blurb-image-container">
      <img class="blurb-image" :src="imgSrc" :alt="imgAlt" />
    </div>
    <div class="blurb-text-container">
      <div>
        <h2 v-html="title"></h2>
        <p>
          {{ body }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blurb-section {
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.blurb-image {
  aspect-ratio: 1/1;
  height: 100%;
  max-height: 500px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.blurb-text-container {
  text-align: center;
}

@media (min-width: 760px) {
  .blurb-section {
    flex-direction: row-reverse;
  }
  .blurb-image-container,
  .blurb-text-container {
    flex: 1 0 50%;
  }

  .blurb-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
