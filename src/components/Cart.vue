<script setup>
import { watch } from "vue";
import CartProduct from "@/components/CartProduct.vue";
import {
  isCartOpen,
  toggleIsCartOpen,
  cartItems,
  priceTotal,
  clearCart,
} from "@/myStore/cartStore.js";

const toggleBodyScroll = () => {
  if (isCartOpen.value === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

watch(isCartOpen, () => toggleBodyScroll());
</script>

<template>
  <section
    @click.self="toggleIsCartOpen"
    v-if="isCartOpen"
    class="cart-container"
  >
    <div class="cart">
      <div class="close">
        <button @click.self="toggleIsCartOpen" class="primary">x</button>
      </div>
      <header>
        <h3>Shopping Cart</h3>
        <a @click.prevent="clearCart" href="#">Remove All</a>
      </header>
      <div class="cart-items">
        <CartProduct
          v-for="item in cartItems"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :price="item.singleItemPrice"
          :count="item.count"
          :id="item.id"
        />
      </div>
      <div class="total-price-container">
        <h3>Total</h3>
        <h3>${{ priceTotal }}</h3>
      </div>
      <a href="/checkout">
        <button class="primary checkout">Checkout</button>
      </a>
    </div>
  </section>
</template>

<style scoped>
.cart-container {
  height: 100%;
  width: 100vw;
  position: absolute;
  background: rgba(34, 33, 33, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
}

.close {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.cart {
  height: 90%;
  width: 90%;
  max-width: 600px;
  background: #fff;
  margin-top: 32px;
  padding: 32px;
  border-radius: 5px;
  overflow: scroll;
  overflow-x: hidden;
}

.cart > * {
  margin-bottom: 32px;
}

.cart-items {
  min-height: 100px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkout {
  width: 100%;
}

@media (min-width: 760px) {
  .cart-container {
    justify-content: flex-end;
  }
  .cart {
    margin-right: 64px;
  }
}
</style>
