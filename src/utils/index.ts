// ─── UTILITY FUNCTIONS ────────────────────────────────────────────────────────

export const generateOrderId = (): string => {
  return `PWR-${Math.floor(Math.random() * 90000) + 10000}`;
};

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};

export const formatCurrency = (amount: number): string => {
  return `₹${amount}`;
};
