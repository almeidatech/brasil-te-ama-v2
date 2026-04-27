/**
 * Text component — body text with size and tone variants
 * @component
 */
export function Text({
  size = 'base',
  tone = 'default',
  children,
  as = 'p',
  className = '',
}) {
  const Tag = as;

  const sizeClass = {
    lg: 'text-body-lg',
    base: 'text-base',
    meta: 'text-meta',
    micro: 'text-micro',
  }[size];

  const toneClass = {
    default: 'text-text',
    muted: 'text-text-muted',
    inverse: 'text-text-inverse',
  }[tone];

  return (
    <Tag className={`${sizeClass} ${toneClass} font-body ${className}`}>
      {children}
    </Tag>
  );
}
