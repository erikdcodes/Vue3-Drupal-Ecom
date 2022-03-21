<script setup>
import ProductCounter from "@/components/ProductCounter.vue";
import { decrementItemCount, incrementItemCount } from "@/myStore/cartStore.js";
const props = defineProps({
  id: String,
  title: String,
  image: String,
  price: Number,
  count: Number,
  showCounterCountrols: { type: Boolean, default: true },
});

const handleIncrement = () => incrementItemCount(props.id);
const handleDecrement = () => decrementItemCount(props.id);
</script>

<template>
  <div class="product-container">
    <div class="image-container">
      <img class="product-image" :src="props.image" alt="" />
    </div>
    <div class="text-container">
      <p class="title">{{ props.title }}</p>
      <p class="price">
        <strong>${{ props.price }} </strong>
      </p>
    </div>
    <div class="control-container">
      <ProductCounter
        v-if="showCounterCountrols"
        :count="props.count"
        @emitDecrementCount="handleDecrement"
        @emitIncrementCount="handleIncrement"
      />
      <div v-else>x{{ props.count }}</div>
    </div>
  </div>
</template>
<style scoped>
.product-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;
  gap: 16px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--color-grey-light);
}

.product-container:not(:last-child) {
  margin-bottom: 16px;
}

.image-container {
  flex: 0 1 100px;
  border-radius: 5px;
}

.product-image {
  width: 100%;
  height: 100%;
  max-height: 100px;
  max-width: 100px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 5px;
}

.text-container {
  flex: 1 1 45%;
}

.control-container {
  flex: 0 1 20px;
  margin-right: 32px;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-black);
}
</style>
