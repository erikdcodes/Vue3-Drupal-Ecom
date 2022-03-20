import { reactive } from "vue";

const state = reactive({
  isMobileMenuOpen: false,
});

export const toggleIsMenuOpen = () => {
  state.isMenuOpen = !state.isMenuOpen;
};

export const isMenuOpen = computed(() => state.isMenuOpen);
