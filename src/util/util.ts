export function flipCoin(): number {
  return getRandomBetween(0, 1)
}

export function getRandomBetween(a: number, b: number): number {
  return a + (Math.floor(Math.random() * (b - a + 1)))
}

export function getStateName(value: number): string {
  return (value == 0 ? "Heads" : "Tails");
}