<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// components
import CategoryProductCard from "@/components/CategoryProductCard.vue";
import CategoryProductCardSkeleton from "@/components/CategoryProductCardSkeleton.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CategoryCTACards from "@/components/CategoryCTACards.vue";
import { getCategoryProducts } from "@/utils/getCategoryProducts.js";

//states
const products = ref([]);
const isLoading = ref(true);

// route params
const route = useRoute();
const { category } = route.params;

// get and load data
onMounted(async () => {
  const filteredProducts = await getCategoryProducts(category);
  products.value = filteredProducts;
  isLoading.value = false;
});
</script>
<template>
  <DefaultLayout>
    <header>
      <h2>{{ category }}</h2>
    </header>
    <section class="products-container">
      <div v-if="isLoading">
        <CategoryProductCardSkeleton
          v-for="(item, i) in 3"
          :key="i"
          :index="i"
        />
      </div>
      <!-- product loop  -->
      <CategoryProductCard
        v-else
        v-for="(product, i) in products"
        :key="i"
        :index="i"
        :featuredImageSrc="product.field_featured_image[0].url"
        :featuredImageAlt="product.field_featured_image[0].alt"
        :title="product.title[0].value"
        :description="product.field_description[0].value"
        :url="`/${$route.params.category}/${product.field_slug[0].value}/${product.uuid[0].value}`"
      />
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
</style>
