/**
 * Kicker component — uppercase tracked label, typically above headline
 * @component
 */
export function Kicker({ children, as = 'span', className = '' }) {
  const Tag = as;

  return (
    <Tag
      className={`block text-meta font-body font-semibold uppercase tracking-[0.08em] text-text-muted mb-2 ${className}`}
    >
      {children}
    </Tag>
  );
}
