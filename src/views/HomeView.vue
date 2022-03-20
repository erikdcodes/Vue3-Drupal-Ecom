<script setup>
import CategoryCTACards from "@/components/CategoryCTACards.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeProductCTA from "@/components/HomeProductCTA.vue";
const ctas = [
  {
    bgColor: "var(--color-brown)",
    productImgSrc: "/home/image-product.jpg",
    title: "zx9 speaker",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, nesciunt molestias, illo ratione dolores officiis voluptatem placeat, similique maiores error sapiente eius architecto nihil voluptatibus explicabo veniam fugit quas inventore.",
    isReversed: false,
    productUrl: "/speakers/zx9-speaker/a9714f5f-79e1-4c99-bce3-5492f14b1249",
  },
  {
    bgColor: "var(--color-grey-light)",
    productImgSrc: "/home/image-earphones-yx1.jpg",
    title: "YX1 WIRELESS EARPHONES",
    isReversed: true,
    productUrl:
      "/earphones/yx1-wireless-earphones/55c33f57-1a3f-46f6-8b6d-f9184ee8f7b1",
  },
];
</script>

<template>
  <DefaultLayout :includeHeroSection="true">
    <CategoryCTACards />

    <!-- iterate list of ctas -->
    <HomeProductCTA
      v-for="(cta, i) in ctas"
      :key="cta.title + i"
      :bgColor="cta.bgColor"
      :productImgSrc="cta.productImgSrc"
      :title="cta.title"
      :description="cta.description"
      :isReversed="cta.isReversed"
      :productUrl="cta.productUrl"
    />
  </DefaultLayout>
</template>

<style scoped>
h1 {
  color: var(--color-brown);
}
</style>
