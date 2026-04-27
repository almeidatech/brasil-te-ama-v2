/**
 * Heading component — semantic heading with Atomic Design levels
 * @component
 */
export function Heading({
  level = 1,
  font = 'display',
  children,
  className = '',
}) {
  const Tag = `h${level}`;

  const fontClass = font === 'display' ? 'font-display' : 'font-body';

  const sizeClass = {
    1: 'text-h1 font-bold',
    2: 'text-h2 font-bold',
    3: 'text-h3 font-semibold',
    4: 'text-h4 font-semibold',
    5: 'text-base font-semibold',
    6: 'text-meta font-semibold',
  }[level];

  return (
    <Tag className={`${fontClass} ${sizeClass} text-ink ${className}`}>
      {children}
    </Tag>
  );
}
