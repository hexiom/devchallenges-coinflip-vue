import { State } from "@/stores/coinStore";

export function flipCoin(): State {
  return (getRandomBetween(0, 1) as State)
}

export function flipWeightedCoin(headsWeight: number, tailsWeight: number): State {
  const totalWeight = (headsWeight + tailsWeight);
  const rnd = getRandomBetween(0, totalWeight)

  if (rnd < headsWeight) {
    return State.Heads
  }

  return State.Tails
}

export function getRandomBetween(a: number, b: number): number {
  return a + (Math.floor(Math.random() * (b - a + 1)))
}

export function getStateName(value: number): string {
  return (value == 0 ? "Heads" : "Tails");
}