/**
 * Quote molecule — pull-quote in display serif with attribution
 * @component
 */
import { Text } from '../atoms';

export function Quote({ children, attribution, className = '' }) {
  return (
    <blockquote className={`${className}`}>
      <p className="text-h2 font-display italic text-ink mb-4">"{children}"</p>
      {attribution && (
        <Text size="meta" tone="muted" as="figcaption" className="pl-4">
          — {attribution}
        </Text>
      )}
    </blockquote>
  );
}
