// ─── STAR COMPONENT ────────────────────────────────────────────────────────────

interface StarProps {
  filled: boolean;
}

export const Star = ({ filled }: StarProps) => (
  <span style={{ color: filled ? "#f4a535" : "#d0c9be", fontSize: 14 }}>★</span>
);

interface StarsProps {
  n: number;
}

export const Stars = ({ n }: StarsProps) =>
  [1, 2, 3, 4, 5].map(i => <Star key={i} filled={i <= n} />);
