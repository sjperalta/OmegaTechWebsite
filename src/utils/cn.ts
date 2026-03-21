export function cn(...inputs: any[]) {
  return inputs
    .flat()
    .filter((item) => typeof item === 'string' && item.trim().length > 0)
    .join(' ');
}
