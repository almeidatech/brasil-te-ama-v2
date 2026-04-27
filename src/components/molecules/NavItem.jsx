/**
 * NavItem molecule — navigation link with underline hover effect
 * @component
 */
export function NavItem({ href, children, active = false, className = '' }) {
  return (
    <a
      href={href}
      className={`relative px-4 py-2 text-base font-body font-medium text-ink transition-colors duration-200 ${
        active ? 'text-terracota' : 'hover:text-teal'
      } ${className}`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-4 right-4 h-0.5 bg-teal transition-all duration-300 ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </a>
  );
}
