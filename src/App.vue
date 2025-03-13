<script setup lang="ts">
import Coin from './components/Coin.vue';
</script>

<template>
  <main class="centered">
    <h1 class="padding-bottom-medium large-border">Flip the coin</h1>
    <p>Press the coin or the button to flip the coin</p>

    <Coin />
  </main>
</template>

<style scoped>

main {
  height: 100%;
}

.large-border {
  /*
    This was somehow the hardest thing to do in the whole project
    And it's still subpar because there isn't a definitive text-stroke property
    except for -webkit-text-stroke, but that doesn't work on all browsers
    https://stackoverflow.com/questions/13426875/text-border-using-css-border-around-text
  */
  text-shadow: 5px 0 var(--color-dark), -5px 0 var(--color-dark), 0 5px var(--color-dark), 0 -5px var(--color-dark),
             4px 4px var(--color-dark), -4px -4px var(--color-dark), 4px -4px var(--color-dark), -4px 4px var(--color-dark);
}
</style>