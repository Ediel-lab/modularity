// src/utils/formatter.ts

export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US');
}
