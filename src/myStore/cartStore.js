import { reactive, computed } from "vue";

// initial cart state
const cartState = reactive({
  isOpen: false,
  priceTotal: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  items: JSON.parse(localStorage.getItem("cart")) ?? [],
});

// cart states
export const isCartOpen = computed(() => cartState.isCartOpen);
export const priceTotal = computed(() => cartState.priceTotal.toFixed(2));
export const cartItems = computed(() => cartState.items);

// cart state functions
export const toggleIsCartOpen = () => {
  cartState.isCartOpen = !cartState.isCartOpen;
};

export const addItemToCart = (item) => {
  // example item shape: {title, image, count, singleItemPrice}
  const { count, singleItemPrice, id } = item;

  // check if item already exists in cart
  if (cartState.items.some((newProduct) => newProduct.id === id)) {
    // if so, update count on existing item
    // reference item by ID
    const currentItem = cartState.items.find((e) => e.id === id);
    // update item count
    currentItem.count += count;
    // update cart total price
    cartState.priceTotal += count * singleItemPrice;
    // update local storage
    updateLocalStoragePriceTotal();
    updateLocalStorageCartItems();
    return;
  }

  // item not in cart
  // add item to cart
  cartState.items = [...cartState.items, item];
  // update cart total price
  cartState.priceTotal += count * singleItemPrice;
  // update local storage
  updateLocalStoragePriceTotal();
  updateLocalStorageCartItems();
};

export const clearCart = () => {
  cartState.items = [];
  cartState.priceTotal = 0.0;
  updateLocalStorageCartItems();
  updateLocalStoragePriceTotal();
};

export const incrementItemCount = (id) => {
  //find item
  const productIndex = cartState.items.findIndex((p) => p.id === id);
  const product = cartState.items.find((p) => p.id === id);

  // increment count & price
  cartState.items[productIndex].count += 1;
  cartState.priceTotal += product.singleItemPrice;
  // update local storage
  updateLocalStorageCartItems();
  updateLocalStoragePriceTotal();
};

export const decrementItemCount = (id) => {
  //find item
  const productIndex = cartState.items.findIndex((p) => p.id === id);
  const product = cartState.items.find((p) => p.id === id);
  // check if count at 1
  if (product.count === 1) {
    // decrement count & price
    cartState.items[productIndex].count -= 1;
    cartState.priceTotal -= product.singleItemPrice;
    cartState.items = cartState.items.filter((p) => p.id !== id);
    updateLocalStorageCartItems();
    updateLocalStoragePriceTotal();
    return;
  }
  // decrement count & price
  cartState.items[productIndex].count -= 1;
  cartState.priceTotal -= product.singleItemPrice;
  // update local storage
  updateLocalStorageCartItems();
  updateLocalStoragePriceTotal();
};

// local storage functions

const updateLocalStorageCartItems = () => {
  localStorage.setItem("cart", JSON.stringify(cartState.items));
};

const updateLocalStoragePriceTotal = () => {
  localStorage.setItem("totalPrice", JSON.stringify(cartState.priceTotal));
};
