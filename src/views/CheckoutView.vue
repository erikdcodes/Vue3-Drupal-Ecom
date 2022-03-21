<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { cartItems, priceTotal } from "@/myStore/cartStore.js";
import CartProduct from "@/components/CartProduct.vue";
import Cart from "@/components/Cart.vue";

const handleSubmit = (e) => {
  const { name, email, phone } = Object.fromEntries(new FormData(e.target));
};
</script>

<template>
  <DefaultLayout :includeHeroSection="false" :includeBlurbSection="false">
    <section class="checkout-container">
      <div class="details-container">
        <h3>Checkout</h3>
        <form @submit.prevent="(e) => handleSubmit(e)">
          <div class="billing-details-container">
            <h4>Billing Details</h4>
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" name="name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" name="email" />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input id="phone" type="phone" name="phone" />
            </div>
          </div>
          <div class="shipping-info-container">
            <h4>Shipping Info</h4>
            <div class="form-group">
              <label for="address">Street Address</label>
              <input id="address" type="text" name="address" />
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input id="city" type="text" name="city" />
            </div>
            <div class="form-group">
              <label for="zipcode">Zipcode</label>
              <input id="zipcode" type="text" name="zipcode" />
            </div>
          </div>
          <div class="summary-container">
            <h3>Summary</h3>
            <div v-for="item in cartItems" :key="item.id" class="product">
              <CartProduct
                :id="item.id"
                :title="item.title"
                :image="item.image"
                :price="item.singleItemPrice"
                :count="item.count"
                :showCounterCountrols="false"
              />
            </div>
            <div class="price-container">
              <h3>Total</h3>
              <h3>${{ priceTotal }}</h3>
            </div>
          </div>

          <button class="primary submit" type="submit">
            Continue to Payment
          </button>
        </form>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.checkout-container {
  min-height: 200px;
  background: #fff;
  border-radius: 5px;
  margin-block: 32px;
  padding: 32px;
}

.billing-details-container,
.shipping-info-container {
  margin-block: 32px;
}
.billing-details-container h4,
.shipping-info-container h4 {
  color: var(--color-brown);
  margin-bottom: 16px;
}

.summary-container {
  margin-block: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.submit {
  width: 100%;
}

.price-container {
  margin-block: 32px;
  display: flex;
  justify-content: space-between;
}
</style>
