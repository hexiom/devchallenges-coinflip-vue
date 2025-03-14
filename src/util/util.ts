import { Face } from "@/stores/coinStore";

export function flipCoin(): Face {
  return (getRandomBetweenInclusive(0, 1) as Face)
}

// Maybe will use in the future
export function flipWeightedCoin(headsWeight: number, tailsWeight: number): Face {
  const totalWeight = (headsWeight + tailsWeight);
  const rnd = getRandomBetween(0, totalWeight);

  if (rnd < headsWeight) {
    return Face.Heads;
  }

  return Face.Tails;
}

export function getFaceName(face: Face): string {
  return (face == Face.Heads ? "Heads" : "Tails");
}

export function getRandomBetween(a: number, b: number): number {
  return a + (Math.floor(Math.random() * (b-a)))
}

export function getRandomBetweenInclusive(a: number, b: number): number {
  return getRandomBetween(a, b+1)
}