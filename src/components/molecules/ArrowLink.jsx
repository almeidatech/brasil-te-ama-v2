/**
 * ArrowLink molecule — link with arrow, styled for CTA
 * @component
 */
import { Link } from '../atoms';

export function ArrowLink({ href, children, className = '' }) {
  return (
    <Link href={href} arrow variant="standalone" className={className}>
      {children}
    </Link>
  );
}
