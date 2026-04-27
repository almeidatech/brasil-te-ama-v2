/**
 * ImagePair molecule — two images with different aspect ratios
 * @component
 */
import { Image } from '../atoms';

export function ImagePair({
  image1,
  image2,
  aspect1 = '4/3',
  aspect2 = '1/1',
  gap = 2,
  className = '',
}) {
  const gapClass = {
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
  }[gap];

  return (
    <div className={`grid grid-cols-2 ${gapClass} ${className}`}>
      <Image src={image1.src} alt={image1.alt} aspect={aspect1} />
      <Image src={image2.src} alt={image2.alt} aspect={aspect2} />
    </div>
  );
}
