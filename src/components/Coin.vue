<script setup lang="ts">
import coinHeadsSvg from "@/assets/svg/coin/heads.svg"
import coinTailsSvg from "@/assets/svg/coin/tails.svg"
import coinShadow from "@/assets/svg/coin/shadow.svg"
import Button from "./Button.vue"

function flipCoin() {
  const result = Math.floor(Math.random() + 0.5)
}

</script>

<template>
  <div class="centered coin-padding gap-medium">
    <div class="coin">
      <img :src="coinHeadsSvg" alt="">
    </div>

    <div class="coin-shadow">
      <img class="shadow-img" :src="coinShadow" alt="">
    </div>

    <p class="padding-y-medium">Heads</p>

    <Button @on-click="">RANDOM</Button>
  </div>
</template>

<style>
.coin-padding {
  padding-top: 5em;
  padding-bottom: 2rem;
}
.coin-shadow {
  width: fit-content;
}
</style>