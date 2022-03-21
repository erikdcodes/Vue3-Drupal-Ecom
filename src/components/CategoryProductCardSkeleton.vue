<script setup>
const props = defineProps({
  index: Number,
});

const isReversed = props.index % 2 === 1;
</script>

<template>
  <div class="product-container" :class="{ 'is-reversed': isReversed }">
    <div class="image-container"></div>
    <div class="text-container">
      <div>
        <h3></h3>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <a>
          <button class="primary"></button>
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
  padding: 32px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 250px;
  animation: pulse 2s infinite ease-in-out;
}
.text-container > * {
  margin-bottom: 32px;
}
.product-image {
  max-width: 250px;
  max-height: 250px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

h3,
p,
button {
  display: block;
  border-radius: 5px;
  animation: pulse 2s infinite ease-in-out;
}

h3 {
  height: 36px;
  width: 80%;
}

p {
  height: 18px;
  width: 100%;
  margin-top: 8px;
}

button {
  height: 18px;
  width: 20%;
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

  .image-container {
    border-bottom: 300px;
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
