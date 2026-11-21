import {useEffect} from 'react';
import {CATALOG_ARCHIVES} from '../data/portfolioData';

interface CatalogModalProps {
  open: boolean;
  onClose: () => void;
  onRequestAccess: () => void;
}

export function CatalogModal({open, onClose, onRequestAccess}: CatalogModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="catalog-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/75 p-space-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface border-2 border-on-surface shadow-[8px_8px_0px_#1b1c1a] p-space-md md:p-space-lg my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-space-md pb-space-sm border-b-2 border-on-surface mb-space-md">
          <div>
            <div className="font-label-mono text-label-mono uppercase text-primary font-bold">
              CONFIDENTIAL DOSSIER INDEX
            </div>
            <h3
              id="catalog-modal-title"
              className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface"
            >
              UNRELEASED STUDIO CATALOG
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close studio catalog"
            className="w-9 h-9 bg-inverse-surface text-inverse-on-surface flex items-center justify-center shadow-[3px_3px_0px_#dd3124] hover:bg-primary transition-colors cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="font-body-md text-body-md text-secondary mb-space-md">
          Selected proprietary reports, policy monographs, and boardroom visualization systems are
          shared privately under NDA. Preview recent catalog entries below or request full PDF
          access.
        </p>

        <div className="space-y-space-sm mb-space-lg">
          {CATALOG_ARCHIVES.map((entry) => (
            <div
              key={entry.code}
              className="p-space-sm bg-surface-container-lowest border-2 border-on-surface shadow-[3px_3px_0px_#1b1c1a]"
            >
              <div className="flex items-center justify-between font-label-mono text-[11px] uppercase text-primary">
                <span>{entry.code}</span>
                <span className="text-secondary tabular-nums">{entry.year}</span>
              </div>
              <div className="font-headline-md text-[20px] uppercase text-on-surface mt-0.5">
                {entry.title}
              </div>
              <div className="font-body-sm text-body-sm text-secondary mt-1">
                {entry.partner} · {entry.format}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm border-t border-surface-variant">
          <span className="font-annotation-hand text-annotation-hand text-secondary">
            &ldquo;PDF dossier dispatched within 24h&rdquo;
          </span>
          <button
            type="button"
            onClick={onRequestAccess}
            className="px-space-md py-space-xs bg-primary text-on-primary font-label-mono text-label-mono uppercase shadow-[4px_4px_0px_#1b1c1a] hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer"
          >
            REQUEST FULL CATALOG ACCESS →
          </button>
        </div>
      </div>
    </div>
  );
}
