/**
 * NewsCardTriptych organism — signature editorial card with 3-image arrangement
 * Variants: hero-stack, landscape-pair, diagonal, mosaic
 * @component
 */
import { Heading, Text, Link, Kicker } from '../atoms';
import './NewsCardTriptych.css';

export function NewsCardTriptych({
  variant = 'hero-stack',
  size = 'default',
  kicker,
  date,
  headline,
  lead,
  href,
  images = [],
  ctaLabel = 'Ler mais',
  className = '',
}) {
  if (images.length !== 3) {
    console.warn(`NewsCardTriptych: expects 3 images, got ${images.length}`);
  }

  const [imgA, imgB, imgC] = images;
  const isFeatured = size === 'featured';
  const variantClass = `triptych--${variant}`;
  const sizeClass = isFeatured ? 'triptych--featured' : '';

  // Determine aspect ratios per variant
  const aspectsByVariant = {
    'hero-stack': { a: '4/5', b: '1/1', c: '1/1' },
    'landscape-pair': { a: '16/9', b: '1/1', c: '1/1' },
    'diagonal': { a: '3/4', b: '3/4', c: '3/4' },
    'mosaic': { a: '4/5', b: '1/1', c: '16/9' },
  };

  const aspects = aspectsByVariant[variant] || aspectsByVariant['hero-stack'];

  const ariaLabel = `${kicker ? kicker + ': ' : ''}${headline}`;

  return (
    <a
      href={href}
      className={`triptych ${variantClass} ${sizeClass} ${className}`}
      aria-label={ariaLabel}
    >
      {/* Triptych container — images only */}
      <div className="triptych__images">
        {variant === 'diagonal' ? (
          /* Diagonal variant: absolute positioned staggered */
          <>
            <div className="triptych__img-wrapper triptych__img-wrapper--lead">
              <img
                src={imgA?.src}
                alt={imgA?.alt || ''}
                className="triptych__img triptych__img--lead"
                style={{ aspectRatio: aspects.a }}
                loading="eager"
              />
            </div>
            <div className="triptych__img-wrapper triptych__img-wrapper--secondary-1">
              <img
                src={imgB?.src}
                alt={imgB?.alt || ''}
                className="triptych__img"
                style={{ aspectRatio: aspects.b }}
                loading="lazy"
              />
            </div>
            <div className="triptych__img-wrapper triptych__img-wrapper--secondary-2">
              <img
                src={imgC?.src}
                alt={imgC?.alt || ''}
                className="triptych__img"
                style={{ aspectRatio: aspects.c }}
                loading="lazy"
              />
            </div>
          </>
        ) : (
          /* Grid-based variants */
          <>
            <div
              className={`triptych__img-wrapper ${
                variant === 'mosaic' ? 'triptych__img-wrapper--a-portrait' : ''
              }`}
              style={{ aspectRatio: aspects.a }}
            >
              <img
                src={imgA?.src}
                alt={imgA?.alt || ''}
                className="triptych__img triptych__img--lead"
                loading="eager"
              />
            </div>
            <div
              className="triptych__img-wrapper"
              style={{ aspectRatio: aspects.b }}
            >
              <img
                src={imgB?.src}
                alt={imgB?.alt || ''}
                className="triptych__img"
                loading="lazy"
              />
            </div>
            <div
              className={`triptych__img-wrapper ${
                variant === 'mosaic' ? 'triptych__img-wrapper--c-landscape' : ''
              }`}
              style={{ aspectRatio: aspects.c }}
            >
              <img
                src={imgC?.src}
                alt={imgC?.alt || ''}
                className="triptych__img"
                loading="lazy"
              />
            </div>
          </>
        )}
      </div>

      {/* Meta + copy section */}
      <div className="triptych__content">
        {(kicker || date) && (
          <div className="triptych__meta">
            {kicker && <Kicker>{kicker}</Kicker>}
            {kicker && date && <span className="triptych__dot">·</span>}
            {date && <Text size="meta" as="span">{date}</Text>}
          </div>
        )}

        <Heading level={isFeatured ? 2 : 3} font="display" className="triptych__headline">
          {headline}
        </Heading>

        {lead && (
          <Text size="base" tone="muted" className="triptych__lead">
            {lead}
          </Text>
        )}

        <Link href={href} arrow variant="standalone" className="triptych__cta">
          {ctaLabel}
        </Link>
      </div>
    </a>
  );
}
