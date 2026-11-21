import {useState} from 'react';

export type NavSectionId =
  | 'about'
  | 'projects'
  | 'services'
  | 'skills'
  | 'achievements'
  | 'journey'
  | 'contact';

interface HeaderProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
}

const NAV_ITEMS: {id: NavSectionId; label: string}[] = [
  {id: 'about', label: 'About'},
  {id: 'projects', label: 'Projects'},
  {id: 'services', label: 'Services'},
  {id: 'skills', label: 'Skills'},
  {id: 'achievements', label: 'Achievements'},
  {id: 'journey', label: 'Journey'},
];

export function Header({activeSection, onNavigate}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: NavSectionId) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_4px_0_0_#1b1c1a]">
      <div className="h-20 w-full px-space-md md:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm select-none shrink-0">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}
            className="flex items-baseline gap-space-xs whitespace-nowrap shrink-0"
          >
            <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight uppercase text-on-surface">
              UOETARI ✦
            </span>
            <span className="hidden sm:inline-block font-annotation-hand text-annotation-hand text-primary -rotate-2 transform">
              (Oetari Dwika)
            </span>
          </a>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-space-md font-label-mono text-label-mono uppercase"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`px-space-sm py-space-xs transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm md:gap-space-md shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="px-space-sm md:px-space-md py-space-xs bg-inverse-surface text-inverse-on-surface font-label-mono text-label-mono uppercase tracking-wider shadow-[4px_4px_0px_#dd3124] hover:shadow-[2px_2px_0px_#dd3124] hover:translate-x-[2px] hover:translate-y-[2px] hover:text-inverse-on-surface transition-all inline-block whitespace-nowrap shrink-0"
          >
            SAY HELLO
          </a>
          <button
            type="button"
            aria-label="Jump to Oetari Dwika dossier"
            onClick={() => handleNavClick('about')}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </button>
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-9 h-9 border-2 border-on-surface bg-surface-container-lowest flex items-center justify-center shadow-[2px_2px_0px_#1b1c1a] cursor-pointer"
          >
            <span className="material-symbols-outlined text-on-surface text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden bg-surface border-t-2 border-on-surface px-space-md py-space-md flex flex-col gap-space-xs shadow-[0_6px_0_0_#1b1c1a]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`px-space-sm py-space-sm font-label-mono text-label-mono uppercase transition-colors ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
