import { flipCoin, flipWeightedCoin, getRandomBetween } from "@/util/util";
import { defineStore } from "pinia";

export enum State {
  Heads = 0,
  Tails = 1
}

type CoinState = {
  face: State,
  isSpinning: boolean,
  currentSpins: number,
  spinsToDo: number
}

type CoinGetters = {}

type CoinActions = {
  swapFace: () => void,
  startSpin: () => void,
  stopSpin: (landedOn: State) => void,
  syncToAnimation: (targetFace: number) => void
}

function getSpins(currentState: State, stateToReach: State) {
  // When the state is the same (both heads or tails)
  // We want an even number of spins.

  // Likewise, if the state is not the same
  // We always want an odd number of spins.
  const isSame = (currentState === stateToReach)
  let spins = getRandomBetween(2, 8)
  const isOdd = (spins % 2 == 1)

  // Shifts the spins to be even
  // Or shifts it to be odd
  if ((isSame && isOdd) || (!isSame && !isOdd)) {
    spins++;
  }
  
  console.log("IS SAME:", isSame)
  console.log("Spins:", spins);
  return spins
}

export const useCoinFlipStore = defineStore<"coinFlip", CoinState, CoinGetters, CoinActions>("coinFlip", {
  state: (): CoinState => ({
    face: State.Heads,
    isSpinning: false,
    currentSpins: 0,
    spinsToDo: -1
  }),

  getters: {

  },

  actions: {
    swapFace() {
      this.face = 1-this.face
    },

    syncToAnimation(targetFace: number) {
      const timeForSpin = 0.5
      const spinTime = timeForSpin*this.spinsToDo
      let faceChangeInterval: NodeJS.Timeout;

      // The first half-spin takes (timeForSpin / 2) seconds
      // while every other spin takes (timeForSpin) seconds
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
      // Nice weighted coin
      // const headsOrTails = flipWeightedCoin(8, 2)
      const headsOrTails = flipCoin()

      this.isSpinning = true
      this.currentSpins = 0
      this.spinsToDo = getSpins(this.face, headsOrTails)

      this.syncToAnimation(headsOrTails)
    },

    stopSpin(landedOn: State) {
      this.isSpinning = false
      this.spinsToDo = -1

      this.face = landedOn
    }
  }
})