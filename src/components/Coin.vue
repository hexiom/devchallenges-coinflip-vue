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
    <button @click="spinCoin" :disabled="coinStore.isSpinning" aria-label="Coin" class="coin">
      <img ref="coin-img" :class="{spinning: coinStore.isSpinning}" :src="coinImages[coinStore.face]" alt="">
    </button>

    <div class="coin-shadow">
      <img class="shadow-img" :src="coinShadow" alt="">
    </div>

    <p class="coin-face">{{ getStateName(coinStore.face) }}</p>
    <Button :disabled="coinStore.isSpinning" @onclick="spinCoin">RANDOM</Button>
  </div>
</template>

<style>
.coin {
  cursor: pointer;
  background: transparent;
}

.coin:not(:disabled):hover > img {
  filter: brightness(97%);
}

.coin-padding {
  padding-top: 5em;
  padding-bottom: 2rem;
}

.coin-face {
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-size: 1.75rem;
  letter-spacing: 0.03rem;
}

.coin-shadow {
  width: fit-content;
}

.spinning {
  animation: coin-flipping 0.5s linear infinite;
}

@keyframes coin-flipping {
  0%, 100% {
    scale: 1 1 1;
    transform: skewY(0);
    filter: brightness(100%);
  }

  20% {
    filter: brightness(100%)
  }

  50% {
    scale: 0 1 1;
    transform: skewY(8deg);
    filter: brightness(50%);
  }
}
</style>