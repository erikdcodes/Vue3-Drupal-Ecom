<template>
  <section class="hero-section">
    <div class="title-container">
      <h1>XX99 MARK II HEADPHONES</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <a
        href="/headphones/xx99-mark-2-headphones/d04b7884-cb6a-434a-8dab-625363e2723a"
      >
        <button class="primary">See Product</button>
      </a>
    </div>
  </section>
</template>
<style scoped>
.hero-section {
  min-height: calc(100vh - 90px);
  background-color: var(--color-black);
  background: url("@/assets/images/home/image-header-mobile.jpg") no-repeat
    bottom center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 64px;
  margin-bottom: 64px;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
}

.hero-section h1 {
  color: #fff;
}

.title-container > *:not(:last-child) {
  margin-bottom: 32px;
}

@media (min-width: 760px) {
  .hero-section {
    background-image: url("@/assets/images/home/image-hero.jpg");
    justify-content: flex-start;
    text-align: left;
  }
  .title-container {
    max-width: 400px;
  }
}
</style>
