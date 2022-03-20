<script setup>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageBlurbSection from "@/components/PageBlurbSection.vue";
import PageHeroSection from "@/components/PageHeroSection.vue";

const props = defineProps({
  includeHeroSection: { type: Boolean, default: false },
  includeBlurbSection: { type: Boolean, default: true },
  includePageHeader: { type: Boolean, default: true },
});
</script>

<template>
  <div class="layout-container">
    <PageHeader v-if="includePageHeader" />
    <PageHeroSection
      v-if="includeHeroSection"
      bgImgSrc="@/assets/images/home/image-hero.jpg"
    />

    <div class="container">
      <slot />
      <PageBlurbSection
        v-if="includeBlurbSection"
        title="Bringing you the <strong> best </strong> audio gear"
        body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores explicabo non perspiciatis tenetur architecto suscipit sit quibusdam, quos eum recusandae. Similique minima hic perferendis quam maxime labore quidem nesciunt mollitia."
        imgSrc="/image-best-gear.jpg"
        imgAlt="photo of man"
      />
    </div>
    <PageFooter />
  </div>
</template>

<style scoped>
.layout-container {
  min-height: 100vh;
}

.container {
  padding-inline: var(--padding-inline);
  min-height: 200px;
}
</style>
