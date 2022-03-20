<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import CategoryCTACards from "@/components/CategoryCTACards.vue";
import { getCategoryProducts } from "@/utils/getCategoryProducts.js";

//states
const products = ref([]);

// route params
const route = useRoute();
const { category } = route.params;

// get and load data
onMounted(async () => {
  const filteredProducts = await getCategoryProducts(category);
  products.value = filteredProducts;
});
</script>
<template>
  <DefaultLayout>
    <header>
      <h2>{{ category }}</h2>
    </header>
    <section class="products-container">
      <!-- product loop  -->
      <div
        class="product-container"
        :class="{ 'is-reversed': i % 2 === 0 }"
        v-for="(product, i) in products"
        :key="i"
      >
        <div class="image-container">
          <img
            class="product-image"
            :src="product.field_featured_image[0].url"
            :alt="product.field_featured_image[0].alt"
          />
        </div>
        <div class="text-container">
          <div>
            <h3>{{ product.title[0].value }}</h3>
          </div>
          <div>
            <p>{{ product.field_description[0].value }}</p>
          </div>
          <div>
            <a
              :href="`/${$route.params.category}/${product.field_slug[0].value}/${product.uuid[0].value}`"
            >
              <button class="primary">See Product</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <CategoryCTACards />
  </DefaultLayout>
</template>

<style scoped>
header {
  padding-block: 32px;
  background: var(--color-black);
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  margin-bottom: 64px;
}
header h2 {
  color: var(--color-grey-super-light);
  text-align: center;
}

.products-container {
  margin-bottom: 124px;
}

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
  max-width: 250px;
  max-height: 250px;
  height: 100%;
  width: 100%;
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
    /*  */
    flex-direction: row-reverse;
  }
}
</style>
