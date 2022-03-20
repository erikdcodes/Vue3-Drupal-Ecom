<script setup>
import Logo from "./Logo.vue";
</script>

<template>
  <section>
    <Logo class="footer-logo" />
    <nav class="footer-nav">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">HEADPHONES</a></li>
        <li><a href="#">SPEAKERS</a></li>
        <li><a href="#">EARPHONES</a></li>
      </ul>
    </nav>
    <p>
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we’re open 7 days a week.
    </p>
  </section>
</template>

<style scoped>
section {
  background: var(--color-black);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 16px;
  padding-inline: var(--padding-inline);
  text-align: center;
  color: #fff;
}

.footer-logo {
  margin-bottom: 16px;
}

ul {
  font-size: 0.8rem;
}

ul > li {
  margin-bottom: 16px;
}

p {
  color: var(--color-grey-light);
  filter: opacity(70%);
}

@media (min-width: 760px) {
  section {
    align-items: flex-start;
    text-align: left;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
}
</style>
