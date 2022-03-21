<template>
  <div class="skeleton-container">
    <div class="image-placeholder"></div>
    <div class="text-placeholder">
      <div>
        <div class="heading"></div>
        <div class="paragraph"></div>
        <div class="paragraph"></div>
        <div class="paragraph"></div>
        <div class="button"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-container {
  height: 100%;
  display: flex;
  margin-top: 64px;
  gap: 32px;
}
.image-placeholder {
  flex: 1 1 50%;
  width: 100%;
  padding-bottom: 500px;
  animation: pulse 1250ms infinite ease-in-out;
  border-radius: 5px;
}

.text-placeholder {
  flex: 1 1 50%;
  margin-block: auto;
}

.heading {
  height: 3rem;
  width: 80%;
  animation: pulse 1250ms infinite ease-in-out;
}

.paragraph {
  height: 16px;
  width: 90%;
  animation: pulse 1250ms infinite ease-in-out;
  margin-top: 16px;
}

.button {
  margin-top: 16px;
  height: 48px;
  width: 30%;
  animation: pulse 1250ms infinite ease-in-out;
}
</style>
