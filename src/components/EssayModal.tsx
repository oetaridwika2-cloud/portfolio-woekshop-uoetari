import {useEffect} from 'react';
import type {ProjectItem} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

interface EssayModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onCommissionSimilar: (project: ProjectItem) => void;
}

export function EssayModal({project, onClose, onCommissionSimilar}: EssayModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="essay-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/75 p-space-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-surface border-2 border-on-surface shadow-[8px_8px_0px_#1b1c1a] p-space-md md:p-space-lg my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between gap-space-md pb-space-sm border-b-2 border-on-surface mb-space-md">
          <div>
            <div className="flex flex-wrap items-center gap-space-sm font-label-mono text-label-mono uppercase text-primary">
              <span>{project.discipline}</span>
              <span>·</span>
              <span className="tabular-nums">{project.year}</span>
              <span>·</span>
              <span className="text-secondary">{project.client}</span>
            </div>
            <h3
              id="essay-modal-title"
              className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface mt-1"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close visual essay reader"
            className="w-9 h-9 bg-inverse-surface text-inverse-on-surface flex items-center justify-center shadow-[3px_3px_0px_#dd3124] hover:bg-primary transition-colors cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest p-space-sm border-2 border-on-surface shadow-[4px_4px_0px_#1b1c1a]">
              <div className="w-full h-72 md:h-80 overflow-hidden bg-surface-container-high">
                <ResilientImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover"
                  fallbackLabel={project.title}
                />
              </div>
              <div className="mt-space-xs flex items-center justify-between font-label-mono text-[11px] uppercase text-secondary">
                <span>ARCHIVE PLATE // {project.id.toUpperCase()}</span>
                <span className="font-annotation-hand text-annotation-hand text-primary">
                  {project.quote}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-md">
              <div>
                <div className="font-label-mono text-label-mono uppercase text-primary font-bold mb-1">
                  EDITORIAL BRIEF
                </div>
                <p className="font-body-md text-body-md text-on-surface">
                  {project.editorialBrief}
                </p>
              </div>

              <div className="bg-surface-container-low p-space-sm border border-on-surface/20">
                <div className="font-label-mono text-[11px] uppercase text-secondary mb-1">
                  DATASET SCALE
                </div>
                <div className="font-body-sm text-body-sm font-medium text-on-surface">
                  {project.datasetScale}
                </div>
              </div>

              <div>
                <div className="font-label-mono text-label-mono uppercase text-on-surface font-bold mb-space-xs">
                  KEY FINDINGS &amp; VISUAL METHOD
                </div>
                <ul className="space-y-1.5 font-body-sm text-body-sm text-secondary">
                  {project.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-space-xs">
                      <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-label-mono text-[11px] uppercase text-secondary mb-1">
                  STACK &amp; MEDIUM
                </div>
                <div className="font-label-mono text-[11px] uppercase text-on-surface">
                  {project.tools.join(' · ')}
                </div>
              </div>
            </div>

            <div className="pt-space-sm border-t border-surface-variant flex flex-wrap items-center justify-between gap-space-sm">
              <button
                type="button"
                onClick={onClose}
                className="px-space-md py-space-xs bg-surface-container-high text-on-surface font-label-mono text-label-mono uppercase shadow-[3px_3px_0px_#1b1c1a] hover:bg-secondary-container cursor-pointer"
              >
                BACK TO ARCHIVE
              </button>
              <button
                type="button"
                onClick={() => onCommissionSimilar(project)}
                className="px-space-md py-space-xs bg-primary text-on-primary font-label-mono text-label-mono uppercase shadow-[3px_3px_0px_#1b1c1a] hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer flex items-center gap-1"
              >
                <span>COMMISSION SIMILAR WORK</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
