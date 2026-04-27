/**
 * MetaLine molecule — kicker + dot + meta text composition
 * @component
 */
import { Kicker, Text } from '../atoms';

export function MetaLine({ kicker, date, author, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      {kicker && date && <span className="text-text-muted">·</span>}
      {date && <Text size="meta">{date}</Text>}
      {(kicker || date) && author && <span className="text-text-muted">·</span>}
      {author && <Text size="meta">{author}</Text>}
    </div>
  );
}
