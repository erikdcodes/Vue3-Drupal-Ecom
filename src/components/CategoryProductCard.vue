<script setup>
const props = defineProps({
  featuredImageSrc: String,
  featuredImageAlt: String,
  title: String,
  description: String,
  url: String,
  index: Number,
});

const isReversed = props.index % 2 === 1;

console.log(props.index % 2);
</script>

<template>
  <div class="product-container" :class="{ 'is-reversed': isReversed }">
    <div class="image-container">
      <img
        class="product-image"
        :src="props.featuredImageSrc"
        :alt="props.featuredImageAlt"
      />
    </div>
    <div class="text-container">
      <div>
        <h3>{{ props.title }}</h3>
      </div>
      <div>
        <p>{{ props.description }}</p>
      </div>
      <div>
        <a :href="props.url">
          <button class="primary">See Product</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-container {
  margin-bottom: 64px;
}

.product-container > * {
  margin-bottom: 16px;
  text-align: center;
}

.image-container {
  background: var(--color-grey-light);
  padding: 32px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-container > * {
  margin-bottom: 32px;
}
.product-image {
  height: 100%;
  width: 100%;
  max-width: 250px;
  max-height: 250px;
  object-fit: cover;
}

@media (min-width: 760px) {
  .product-container {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  .text-container,
  .image-container {
    flex-basis: 50%;
  }

  .text-container {
    padding-block: 64px;
  }

  .product-image {
    max-width: 300px;
    max-height: 300px;
  }

  .is-reversed {
    flex-direction: row-reverse;
  }
}
</style>
