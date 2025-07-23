// src/utils/time.ts

export function getCurrentTime(): string {
  const now = new Date();
  return now.toLocaleTimeString('en-US');
}

export function getWeekday(): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[new Date().getDay()];
}
