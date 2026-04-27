/**
 * Button component — with variants: solid, outline, ghost
 * @component
 */
export function Button({
  variant = 'solid',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  const baseClass =
    'font-body font-semibold transition-colors duration-200 rounded-none border-0 cursor-pointer';

  const sizeClass = {
    sm: 'px-3 py-2 text-meta',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-body-lg',
  }[size];

  const variantClass = {
    solid: 'bg-ink text-cream hover:bg-terracota',
    outline: 'border border-ink text-ink hover:bg-cream',
    ghost: 'text-ink hover:text-terracota',
  }[variant];

  return (
    <button
      className={`${baseClass} ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
