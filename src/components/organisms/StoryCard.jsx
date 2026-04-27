/**
 * StoryCard organism — simple single-image news card
 * Used as complement to NewsCardTriptych in news grids
 * @component
 */
import { Heading, Text, Link, Kicker } from '../atoms';
import './StoryCard.css';

export function StoryCard({
  kicker,
  date,
  headline,
  lead,
  href,
  image,
  ctaLabel = 'Ler mais',
  className = '',
}) {
  const ariaLabel = `${kicker ? kicker + ': ' : ''}${headline}`;

  return (
    <a
      href={href}
      className={`story-card ${className}`}
      aria-label={ariaLabel}
    >
      {/* Image */}
      <div className="story-card__image" style={{ aspectRatio: '16 / 9' }}>
        <img
          src={image?.src}
          alt={image?.alt || ''}
          className="story-card__img"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="story-card__content">
        {(kicker || date) && (
          <div className="story-card__meta">
            {kicker && <Kicker>{kicker}</Kicker>}
            {kicker && date && <span className="story-card__dot">·</span>}
            {date && <Text size="meta" as="span">{date}</Text>}
          </div>
        )}

        <Heading level={3} font="display" className="story-card__headline">
          {headline}
        </Heading>

        {lead && (
          <Text size="base" tone="muted" className="story-card__lead">
            {lead}
          </Text>
        )}

        <Link href={href} arrow variant="standalone" className="story-card__cta">
          {ctaLabel}
        </Link>
      </div>
    </a>
  );
}
