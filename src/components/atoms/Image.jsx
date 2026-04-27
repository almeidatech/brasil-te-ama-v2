/**
 * Image component — wrapper with aspect ratio enforcement and lazy loading
 * @component
 */
export function Image({
  src,
  alt,
  aspect = '16/9',
  loading = 'lazy',
  className = '',
}) {
  const aspectRatioMap = {
    '16/9': 'aspect-video',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    '4/3': 'aspect-[4/3]',
  };

  const aspectClass = aspectRatioMap[aspect] || 'aspect-video';

  return (
    <div className={`${aspectClass} overflow-hidden bg-sand ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
