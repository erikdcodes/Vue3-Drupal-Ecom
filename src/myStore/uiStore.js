import { reactive, computed } from "vue";

const state = reactive({
  isMobileMenuOpen: false,
});

export const toggleIsMenuOpen = () => {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;
};

export const isMobileMenuOpen = computed(() => state.isMobileMenuOpen);
