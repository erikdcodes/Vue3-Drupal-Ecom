import { reactive, computed } from "vue";

// initial cart state
const state = reactive({
  isMobileMenuOpen: false,
});

// cart state
export const isMobileMenuOpen = computed(() => state.isMobileMenuOpen);

// cart state functions
export const toggleIsMenuOpen = () => {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;
};
