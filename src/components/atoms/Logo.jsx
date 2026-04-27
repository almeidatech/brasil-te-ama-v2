/**
 * Logo component — SVG logo with color variants
 * @component
 */
export function Logo({ variant = 'dark', size = 40, className = '' }) {
  const colorClass = variant === 'light' ? 'text-cream' : 'text-ink';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`${colorClass} ${className}`}
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 8v24M8 20h24"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
