// src/utils/checks.ts

export function isEven(number: number): boolean {
  return number % 2 === 0;
}

export function isAdult(age: number): boolean {
  return age >= 18;
}
