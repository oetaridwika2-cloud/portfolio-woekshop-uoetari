import {useMemo, useState} from 'react';
import {PROJECTS, type ProjectCategory, type ProjectItem} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenCatalog: () => void;
}

const FILTER_TABS: {id: ProjectCategory; label: string}[] = [
  {id: 'all', label: 'ALL (06)'},
  {id: 'dataviz', label: 'DATA ESSAYS'},
  {id: 'editorial', label: 'INFOGRAPHICS'},
  {id: 'poster', label: 'PRINT & POSTER'},
];

const BADGE_CLASSES: Record<ProjectItem['badgeVariant'], string> = {
  primary: 'bg-primary text-on-primary',
  inverse: 'bg-inverse-surface text-inverse-on-surface',
  tertiary: 'bg-tertiary text-on-tertiary',
  surface: 'bg-surface-container-highest text-on-surface',
};

const QUOTE_CLASSES: Record<ProjectItem['quoteTone'], string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
};

export function ProjectsSection({onSelectProject, onOpenCatalog}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="w-full px-space-md md:px-margin py-space-xl bg-surface relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md border-b-2 border-on-surface mb-space-lg">
          <div>
            <div className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
              02 // ARCHIVE OF SELECTED GRAPHICS
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-on-surface tracking-tight">
              FEATURED VISUAL ESSAYS
            </h2>
          </div>

          {/* Filter Pill Selector */}
          <div className="flex flex-wrap gap-space-xs font-label-mono text-label-mono uppercase">
            {FILTER_TABS.map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  aria-pressed={isSelected}
                  className={`px-space-sm py-1 cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-inverse-surface text-inverse-on-surface shadow-[2px_2px_0px_#dd3124]'
                      : 'bg-surface-container-high text-on-surface shadow-[2px_2px_0px_#1b1c1a] hover:bg-secondary-container'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid with Scrapbook Hard Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-surface-container-lowest p-space-md shadow-[4px_4px_0px_#1b1c1a] hover:shadow-[7px_7px_0px_#dd3124] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {project.washiClass && (
                  <div
                    className={`absolute z-10 pointer-events-none ${project.washiClass}`}
                  />
                )}
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Open visual essay: ${project.title}`}
                  className="relative w-full h-64 overflow-hidden bg-surface-container-high mb-space-sm block text-left cursor-pointer"
                >
                  <ResilientImage
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    fallbackLabel={project.discipline}
                  />
                  <div
                    className={`absolute top-2 right-2 font-label-mono text-[10px] uppercase px-space-xs py-0.5 shadow-sm ${BADGE_CLASSES[project.badgeVariant]}`}
                  >
                    {project.badge}
                  </div>
                </button>

                <div className="flex items-center justify-between font-label-mono text-label-mono uppercase text-secondary mb-1">
                  <span>{project.discipline}</span>
                  <span className="tabular-nums">{project.year}</span>
                </div>

                <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary transition-colors">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-left uppercase cursor-pointer"
                  >
                    {project.title}
                  </button>
                </h3>
                <p className="font-body-sm text-body-sm text-secondary mt-1 mb-space-sm">
                  {project.description}
                </p>
              </div>

              <div className="pt-space-xs border-t border-surface-variant flex items-center justify-between gap-2">
                <span className={`font-annotation-hand text-annotation-hand ${QUOTE_CLASSES[project.quoteTone]}`}>
                  {project.quote}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="font-label-mono text-label-mono uppercase text-on-surface font-bold flex items-center gap-1 hover:text-primary cursor-pointer whitespace-nowrap shrink-0"
                >
                  VIEW ESSAY <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects Stamp Link */}
        <div className="mt-space-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md p-space-md bg-surface-container shadow-[4px_4px_0px_#1b1c1a]">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[28px] shrink-0">
              folder_special
            </span>
            <div>
              <div className="font-headline-md text-headline-md uppercase text-on-surface">
                WANT TO SEE THE UNRELEASED ARCHIVE?
              </div>
              <div className="font-body-sm text-body-sm text-secondary">
                Includes proprietary NGO reports, internal financial dashboards, and confidential
                graphics.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenCatalog}
            className="px-space-md py-space-xs bg-inverse-surface text-inverse-on-surface font-label-mono text-label-mono uppercase shadow-[3px_3px_0px_#dd3124] hover:bg-primary transition-colors shrink-0 cursor-pointer whitespace-nowrap"
          >
            REQUEST STUDIO CATALOG
          </button>
        </div>
      </div>
    </section>
  );
}
