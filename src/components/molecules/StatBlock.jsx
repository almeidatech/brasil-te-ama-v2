/**
 * StatBlock molecule — massive number + meta text, for impact metrics
 * @component
 */
import { Heading, Text } from '../atoms';

export function StatBlock({ stat, label, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <Heading level={1} font="display" className="text-hero leading-tight">
        {stat}
      </Heading>
      <Text size="body-lg" tone="muted">
        {label}
      </Text>
    </div>
  );
}
