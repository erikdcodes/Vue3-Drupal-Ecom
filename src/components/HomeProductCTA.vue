<script setup>
const props = defineProps({
  title: String,
  description: String,
  productUrl: String,
  productImgSrc: String,
  productFlag: String,
  isReversed: Boolean,
  bgColor: String,
});
</script>

<template>
  <section
    class="cta-container"
    :style="[{ 'background-color': props.bgColor }]"
    :class="{ 'is-reversed': props.isReversed }"
  >
    <div class="image-container">
      <img class="cta-image" :src="props.productImgSrc" alt="" />
    </div>
    <div class="text-container">
      <h2>{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <a :href="props.productUrl">
        <button class="secondary">See Product</button>
      </a>
    </div>
  </section>
</template>

<style scoped>
.cta-container {
  min-height: 200px;
  margin-bottom: 64px;
  background: url("/home/pattern-circles.svg") top no-repeat,
    linear-gradient(45deg, rgba(155, 155, 155, 0.2), rgba(73, 73, 73, 0.3));

  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 64px 32px;
  border-radius: 5px;
  box-shadow: 0 0 40px 3px rgba(63, 63, 63, 0.2);
}
.cta-image {
  height: 100%;
  max-height: 400px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.text-container,
h2 {
  text-align: center;
  color: var(--color-grey-light);
}

.text-container > * {
  margin-bottom: 32px;
}

@media (min-width: 760px) {
  .cta-container {
    flex-direction: row;
  }
  .image-container {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-container {
    flex-basis: 50%;
  }
  .is-reversed {
    flex-direction: row-reverse;
  }
}
</style>
