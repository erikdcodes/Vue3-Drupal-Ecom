<script setup>
//get a list of categories
const categories = [
  {
    name: "Earphones",
    imgSrc: "/home/image-category-thumbnail-earphones.png",
  },
  {
    name: "Headphones",
    imgSrc: "/home/image-category-thumbnail-headphones.png",
  },
  {
    name: "Speakers",
    imgSrc: "/home/image-category-thumbnail-speakers.png",
  },
];
</script>

<template>
  <section class="categories-section">
    <div
      v-for="(category, i) in categories"
      :key="i"
      class="category-container"
    >
      <img
        class="category-image"
        :src="category.imgSrc"
        :alt="category.name + 'photo'"
      />
      <h3>{{ category.name }}</h3>
      <a class="product-link" :href="`/${category.name.toLowerCase()}`"
        >shop now</a
      >
    </div>
  </section>
</template>

<style scoped>
.categories-section {
  min-height: 250px;
  margin-bottom: 64px;
}

.category-container {
  margin-top: 128px;
  max-height: 400px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
  background: var(--color-grey-light);
  background-image: linear-gradient(
    115deg,
    rgba(180, 180, 180, 0.02),
    rgba(131, 131, 131, 0.1)
  );
  border-radius: 5px;
}

.category-container a {
  margin-top: 32px;
}

.category-image {
  height: 100%;
  max-height: 250px;
  width: 100%;
  object-fit: contain;
  margin-top: -80px;
}

@media (min-width: 760px) {
  .categories-section {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }

  .category-container {
    flex-grow: 1;
    max-height: 200px;
    margin-top: 64px;
    padding-inline: 32px;
  }

  .category-image {
    margin-top: -40px;
  }
}
</style>
