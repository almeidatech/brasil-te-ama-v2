/**
 * Tag component — category badge for news and features
 * @component
 */
export function Tag({ children, tone = 'neutral', className = '' }) {
  const baseClass =
    'inline-block px-3 py-1 rounded-md text-meta font-body font-semibold';

  const toneClass = {
    neutral: 'bg-sand text-ink',
    accent: 'bg-terracota text-cream',
    success: 'bg-success text-cream',
  }[tone];

  return (
    <span className={`${baseClass} ${toneClass} ${className}`}>
      {children}
    </span>
  );
}
