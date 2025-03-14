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
      <img :class="{'shadow-spin': coinStore.isSpinning}" :src="coinShadow" alt="">
    </button>

    <p class="coin-face">{{ getStateName(coinStore.face) }}</p>
    <Button :disabled="coinStore.isSpinning" @onclick="spinCoin">RANDOM</Button>
  </div>
</template>

<style>
.coin {
  --spin-time: 0.5s;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  cursor: pointer;
  background: transparent;
}

/* Don't make cursor into a pointer if disabled */
.coin:disabled {
  cursor: auto;
}

/* Hover effect of coin */
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

.spinning {
  animation: coin-flipping var(--spin-time) linear infinite;
}

.shadow-spin {
  animation: shadow-size var(--spin-time) linear infinite;
}

@keyframes shadow-size {
  0%, 100% {
    transform: scaleX(1);
  }

  50% {
    transform: scaleX(0);
  }
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