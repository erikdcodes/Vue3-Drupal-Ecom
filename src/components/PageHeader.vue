<script setup>
import Logo from "./Logo.vue";
import BarsIcon from "./svgIcons/BarsIcon.vue";
import CartIcon from "./svgIcons/CartIcon.vue";
import Cart from "../components/Cart.vue";
import { toggleIsCartOpen, cartItems } from "../myStore/cartStore.js";
</script>

<template>
  <Cart />
  <header>
    <div class="mobile-menu-icon-container">
      <BarsIcon fill="white" />
    </div>
    <Logo />
    <nav class="desktop-menu-container">
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/headphones">headphones</a></li>
        <li><a href="/speakers">speakers</a></li>
        <li><a href="/earphones">earphones</a></li>
      </ul>
    </nav>
    <div class="cart-icon-container">
      <CartIcon
        v-if="cartItems.length > 0"
        @click="toggleIsCartOpen"
        fill="#d87d4a"
      />
      <CartIcon v-else @click="toggleIsCartOpen" fill="white" />
    </div>
  </header>
</template>

<style scoped>
header {
  background: var(--color-black);
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--padding-inline);
}

.bars {
  height: 16px;
  width: 16px;
}

.cart {
  height: 24px;
  width: 24px;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
}

nav {
  flex-grow: 1;
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 32px;
}

@media (max-width: 760px) {
  .desktop-menu-container {
    display: none;
  }
}
@media (min-width: 761px) {
  .mobile-menu-icon-container {
    display: none;
  }
}
</style>
