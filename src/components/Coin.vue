<script setup lang="ts">
import coinHeadsSvg from "@/assets/svg/coin/heads.svg"
import coinTailsSvg from "@/assets/svg/coin/tails.svg"
import coinShadow from "@/assets/svg/coin/shadow.svg"
import Button from "./Button.vue"
import { useCoinFlipStore } from "@/stores/coinStore"
import { getStateName } from "@/util/util"

const coinStore = useCoinFlipStore()
const coinImages = [
  coinHeadsSvg,
  coinTailsSvg
]

function spinCoin() {
  coinStore.startSpin()
}

</script>

<template>
  <div class="centered coin-padding gap-medium">
    <div class="coin">
      <img :class="{spinning: coinStore.isSpinning}" :src="coinImages[coinStore.face]" alt="">
    </div>

    <div class="coin-shadow">
      <img class="shadow-img" :src="coinShadow" alt="">
    </div>

    <p class="padding-top-medium padding-bottom-large">{{ getStateName(coinStore.face) }}</p>

    <Button :disabled="coinStore.isSpinning" @onclick="spinCoin">RANDOM</Button>
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

.spinning {
  animation: coin-flipping 0.5s linear infinite;
  transition: rotate 100ms linear;
}

@keyframes coin-flipping {
  0%, 100% {
    transform: scaleX(1);
  }

  50% {
    transform: scaleX(0);
  }
}
</style>