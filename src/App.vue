<script setup>
</script>

<template>
  <header class="centered">
    <h1 class="padding-top-large padding-bottom-medium large-border">Flip the coin</h1>
    <p>Press the coin or the button to flip the coin</p>
  </header>
</template>

<style scoped>
.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.padding-top-large {
  padding-top: 2rem;
}

.padding-bottom-medium {
  padding-bottom: 1rem;
}

.large-border {
  /* TODO: Because for some reason, this is the hardest thing to
     do on this whole project, the text-shadow given on the website
     isn't even good compared to the one shown
  */
}
</style>