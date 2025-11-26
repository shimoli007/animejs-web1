import { useState } from 'react';
import { Image } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackIcon
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError) {
    return (
      <div className={`flex items-center justify-center bg-glass border border-glass ${className}`}>
        {fallbackIcon || <Image className="w-12 h-12 text-white/30" />}
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className={`flex items-center justify-center bg-glass border border-glass ${className}`}>
          <div className="animate-pulse w-full h-full bg-white/5"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!imageLoaded ? 'hidden' : ''}`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
}
