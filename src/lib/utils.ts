export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(price: number): string {
  return `R${price.toFixed(2)}`;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
