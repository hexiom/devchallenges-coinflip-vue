<script setup lang="ts">
import Coin from './components/Coin.vue';
</script>

<template>
  <header class="centered">
    <h1 class="padding-top-large padding-bottom-medium large-border">Flip the coin</h1>
    <p>Press the coin or the button to flip the coin</p>

    <Coin />
  </header>
</template>

<style scoped>

.large-border {
  /* TODO: Because for some reason, this is the hardest thing to
     do on this whole project, the text-shadow given on the website
     isn't even good compared to the one shown
  */
}
</style>