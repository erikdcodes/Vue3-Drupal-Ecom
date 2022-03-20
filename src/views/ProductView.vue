<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";

import ProductCounter from "@/components/ProductCounter.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CategoryCTACards from "@/components/CategoryCTACards.vue";
import { getSingleProduct } from "@/utils/getSingleProduct.js";
import {
  isCartOpen,
  addItemToCart,
  toggleIsCartOpen,
} from "@/myStore/cartStore.js";

// states
const featuredIsLoading = ref(false);
const productCount = ref(1);
const product = ref({});
const addButtonText = ref("Add To Cart");

// route params
const route = useRoute();
const { id } = route.params;

// get and load data
onBeforeMount(async () => {
  const thisProduct = await getSingleProduct(id);
  product.value = thisProduct[0];
});

// methods / functions
const incrementCount = () => {
  productCount.value++;
};

const decrementCount = () => {
  if (productCount.value === 1) return;
  productCount.value--;
};

const handleAddToCart = (item, pCount) => {
  const productToAdd = {
    id: item.uuid[0].value,
    image: item.field_featured_image[0].url,
    singleItemPrice: item.field_price[0].value,
    title: item.title[0].value,
    count: pCount,
  };
  addButtonText.value = "Added!";
  setTimeout(() => (addButtonText.value = "Add To Cart"), 1250);
  addItemToCart(productToAdd);
  productCount.value = 1;
};
</script>

<template>
  <DefaultLayout :includeHeroSection="false">
    <main v-if="product">
      <header class="product-header">
        <div class="grid-left">
          <div v-if="featuredIsLoading" class="image-placeholder"></div>
          <div v-else class="featured-image-container">
            <img
              class="featured-image"
              v-if="product.field_featured_image"
              :src="product?.field_featured_image[0]?.url"
              :alt="product?.field_featured_image[0]?.alt"
            />
          </div>
        </div>
        <div class="grid-right">
          <div>
            <div v-if="product.field_product_flag">
              <span class="product-flag">{{
                product?.field_product_flag[0]?.value
              }}</span>
            </div>
          </div>
          <h1 v-if="product.title" class="product-title">
            {{ product?.title[0]?.value }}
          </h1>
          <p v-if="product.field_description" class="product-description">
            {{ product?.field_description[0]?.value }}
          </p>
          <div v-if="product.field_price" class="price-container">
            ${{ product?.field_price[0]?.value }}
          </div>
          <div class="product-controls-container">
            <div class="counter-container">
              <ProductCounter
                :count="productCount"
                @emitIncrementCount="incrementCount"
                @emitDecrementCount="decrementCount"
              />
            </div>
            <button
              @click="handleAddToCart(product, productCount)"
              class="primary add-button"
            >
              {{ addButtonText }}
            </button>
          </div>
        </div>
      </header>
      <section class="features-section">
        <div class="features-container">
          <h2>Features</h2>
          {{ product.field_features && product?.field_features[0]?.value }}
        </div>
        <div class="in-the-box-container">
          <h2>In The Box</h2>
          <div
            v-if="product.field_inthebox"
            v-html="product?.field_inthebox[0]?.value"
            class="box-list"
          ></div>
        </div>
      </section>
      <section v-if="product.field_images" class="product-images-section">
        <div
          class="product-image-container"
          v-for="image in product?.field_images"
          :key="image.target_uuid"
        >
          <img :src="image.url" :alt="image.alt" />
        </div>
      </section>
      <section class="related-products-section">
        <h2>You May Also Like</h2>
        <div class="related-products-container">
          <div
            class="related-product-container"
            v-for="(item, i) in 3"
            :key="i"
          >
            <img
              class="related-product-image"
              src="http://placeimg.com/640/480/tech"
              alt=""
            />
            <h3>Item Name</h3>
            <a href="#">
              <button class="primary">See Product</button>
            </a>
          </div>
        </div>
      </section>
      <CategoryCTACards />
    </main>
  </DefaultLayout>
</template>

<style scoped>
main > * {
  margin-bottom: 64px;
}

header > * {
  margin-bottom: 16px;
}
.product-header {
  margin-top: 64px;
  height: 100%;
}
.image-placeholder {
  height: 100%;
  width: 100%;
}

img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-image {
  aspect-ratio: 1/1;
}

.product-image-container img {
  aspect-ratio: 16/9;
}

.product-flag {
  color: var(--color-brown);
  letter-spacing: 10px;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 0.8rem;
}

.product-title {
  text-transform: uppercase;
}

.product-controls-container {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
}

.price-container {
  font-size: 1.2rem;
  color: var(--color-black);
  font-weight: 700;
  letter-spacing: 0.05em;
}

.counter-container {
  flex: 0 1 150px;
}

.add-button {
  flex: 2 0 50%;
}

.grid-right > * {
  margin-bottom: 16px;
}

.features-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.features-container > *,
.in-the-box-container > * {
  margin-bottom: 16px;
}

.box-list {
  list-style: none;
}

.box-list strong {
  color: var(--color-brown);
}

.product-images-section {
  display: grid;
  grid-template-rows: 1fr 1fr 1.5fr;
  row-gap: 16px;
}

.related-products-section > * {
  margin-bottom: 32px;
}

.related-products-container {
  display: flex;
  gap: 32px;
  flex-direction: column;
  text-align: center;
}
.related-product-container > * {
  margin-bottom: 16px;
}

.related-product-image {
  aspect-ratio: 16/9;
}

.related-products-section {
  display: block;
}

/**** media queries**  */
@media (min-width: 760px) {
  main > * {
    margin-bottom: 128px;
  }

  .product-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 64px;
  }
  .grid-left {
    grid-column: 1/2;
  }

  .grid-right {
    padding-top: 60px;
  }

  .featured-image {
    min-height: 550px;
  }

  .features-section {
    flex-direction: row;
  }

  .features-container {
    flex: 1 0 70%;
  }

  .in-the-box-container {
    flex: 1 0 30%;
  }

  .product-images-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 32px;
  }

  .product-images-section > *:nth-child(3) {
    grid-row: 1/3;
    grid-column: 2/3;
  }

  .related-products-container {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
