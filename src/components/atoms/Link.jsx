/**
 * Link component — text links with optional arrow, standalone or inline
 * @component
 */
export function Link({
  href,
  children,
  arrow = false,
  variant = 'inline',
  className = '',
}) {
  const isStandalone = variant === 'standalone';
  const baseClass = 'font-body font-medium transition-colors duration-200';
  const colorClass = isStandalone
    ? 'text-text hover:text-link'
    : 'text-link hover:text-link-hover';
  const underlineClass = isStandalone
    ? 'underline hover:no-underline'
    : '';

  return (
    <a
      href={href}
      className={`${baseClass} ${colorClass} ${underlineClass} ${className}`}
    >
      {children}
      {arrow && ' →'}
    </a>
  );
}
