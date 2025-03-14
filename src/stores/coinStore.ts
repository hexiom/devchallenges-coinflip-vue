import { flipCoin, flipWeightedCoin, getRandomBetweenInclusive } from "@/util/util";
import { defineStore } from "pinia";

export enum Face {
  Heads = 0,
  Tails = 1
}

type CoinState = {
  face: Face,
  isSpinning: boolean
}

type CoinGetters = {}

type CoinActions = {
  swapFace: () => void,
  startSpin: () => void,
  stopSpin: (landedOn: Face) => void,
  syncToAnimation: (spins: number, targetFace: number) => void
}

function getSpins(currentFace: Face, targetFace: Face) {
  // When both the current face and the target face is the same
  // We always want an even number of spins.

  // Likewise, if the faces are not the same
  // We always want an odd number of spins.
  const isSame = (currentFace === targetFace)
  let spins = getRandomBetweenInclusive(2, 8)
  const isOdd = (spins % 2 == 1)

  // Shifts the spins to be even if both faces are the same
  // Or shifts it to be odd if both faces are different
  if ((isSame && isOdd) || (!isSame && !isOdd)) {
    spins++;
  }
  
  return spins
}

export const useCoinFlipStore = defineStore<"coinFlip", CoinState, CoinGetters, CoinActions>("coinFlip", {
  state: (): CoinState => ({
    face: Face.Heads,
    isSpinning: false
  }),

  getters: {},

  actions: {
    swapFace() {
      this.face = (1 - this.face);
    },

    syncToAnimation(spins: number, targetFace: number) {
      // Also change the CSS variable in Coin.vue
      // When you want to change timeForSpin
      const timeForSpin = 0.5 
      const spinTime = timeForSpin * spins
      let faceChangeInterval: NodeJS.Timeout;

      // The first half-spin (when we need to change the face) takes "timeForSpin / 2" seconds
      // while every other half-spin takes "timeForSpin" seconds
      setTimeout(() => {
        // Edge case if the spin time is less than timeForHalfSpin
        // Shouldn't happen though.
        if (!this.isSpinning) {
          return;
        }

        this.swapFace()
        faceChangeInterval = setInterval(this.swapFace, timeForSpin*1000)
      }, (timeForSpin / 2)*1000)

      setTimeout(() => {
        clearInterval(faceChangeInterval)

        this.stopSpin(targetFace)
      }, spinTime*1000)
    },

    startSpin() {
      // If I want to rig the coin for example.
      // const headsOrTails = flipWeightedCoin(100, 0);
      const headsOrTails = flipCoin()
      const spins = getSpins(this.face, headsOrTails)

      this.isSpinning = true
      this.syncToAnimation(spins, headsOrTails)
    },

    stopSpin(landedOn: Face) {
      this.isSpinning = false
      this.face = landedOn
    }
  }
})