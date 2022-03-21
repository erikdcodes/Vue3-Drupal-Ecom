export const toggleBodyScroll = (modalState) => {
  if (modalState.value === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};
