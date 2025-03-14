import { State } from "@/stores/coinStore";

export function flipCoin(): State {
  return (getRandomBetweenInclusive(0, 1) as State)
}

// Maybe will use in the future
export function flipWeightedCoin(headsWeight: number, tailsWeight: number): State {
  const totalWeight = (headsWeight + tailsWeight);
  const rnd = getRandomBetween(0, totalWeight);

  if (rnd < headsWeight) {
    return State.Heads;
  }

  return State.Tails;
}

export function getStateName(value: State): string {
  return (value == State.Heads ? "Heads" : "Tails");
}

export function getRandomBetween(a: number, b: number): number {
  return a + (Math.floor(Math.random() * (b-a)))
}

export function getRandomBetweenInclusive(a: number, b: number): number {
  return getRandomBetween(a, b+1)
}