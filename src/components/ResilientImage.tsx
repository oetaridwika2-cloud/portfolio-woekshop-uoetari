import {useState} from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel = 'ARCHIVE PLATE',
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-high border-2 border-dashed border-on-surface/30 p-space-md text-center">
        <span className="material-symbols-outlined text-primary text-[32px] mb-space-xs">
          image_search
        </span>
        <span className="font-label-mono text-label-mono uppercase text-on-surface">
          {fallbackLabel}
        </span>
        <span className="font-body-sm text-body-sm text-secondary mt-1 line-clamp-2 max-w-xs">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
