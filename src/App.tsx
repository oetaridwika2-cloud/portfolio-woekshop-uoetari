/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useCallback, useEffect, useState} from 'react';
import {AboutSection} from './components/AboutSection';
import {AchievementsAndJourneySection} from './components/AchievementsAndJourneySection';
import {CatalogModal} from './components/CatalogModal';
import {ContactAndFooterSection} from './components/ContactAndFooterSection';
import {EssayModal} from './components/EssayModal';
import {Header, type NavSectionId} from './components/Header';
import {HeroSection} from './components/HeroSection';
import {MarqueeBand} from './components/MarqueeBand';
import {ProjectsSection} from './components/ProjectsSection';
import {ServicesSection} from './components/ServicesSection';
import {SkillsAndBannerSection} from './components/SkillsAndBannerSection';
import {PROJECT_CATEGORIES, type ProjectItem} from './data/portfolioData';

const OBSERVED_SECTIONS: NavSectionId[] = [
  'about',
  'projects',
  'services',
  'skills',
  'achievements',
  'journey',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('about');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState<string | undefined>(undefined);
  const [preselectedNote, setPreselectedNote] = useState<string | undefined>(undefined);

  const scrollToSection = useCallback((sectionId: NavSectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({top, behavior: 'smooth'});
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id as NavSectionId;
          if (OBSERVED_SECTIONS.includes(id)) {
            setActiveSection(id);
          }
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    OBSERVED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectService = (categoryValue: string, tierTitle: string) => {
    setPreselectedCategory(categoryValue);
    setPreselectedNote(`Inquiry regarding ${tierTitle}: `);
    scrollToSection('contact');
  };

  const handleCommissionSimilar = (project: ProjectItem) => {
    setSelectedProject(null);
    const categoryMatch =
      project.category === 'dataviz'
        ? PROJECT_CATEGORIES[2]
        : project.category === 'editorial'
          ? PROJECT_CATEGORIES[1]
          : PROJECT_CATEGORIES[0];
    setPreselectedCategory(categoryMatch);
    setPreselectedNote(`Interested in commissioning a visual essay similar to "${project.title}". `);
    scrollToSection('contact');
  };

  const handleRequestCatalogAccess = () => {
    setCatalogOpen(false);
    setPreselectedCategory(PROJECT_CATEGORIES[4]);
    setPreselectedNote(
      'Requesting access to the Unreleased Studio Catalog (confidential NGO & boardroom case studies).',
    );
    scrollToSection('contact');
  };

  const handleStartConsultation = () => {
    setPreselectedCategory(PROJECT_CATEGORIES[3]);
    setPreselectedNote('Looking to schedule a visual storytelling consultation call.');
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="w-full pt-20 bg-surface min-h-screen flex flex-col">
        <HeroSection onNavigate={scrollToSection} />
        <MarqueeBand />
        <AboutSection />
        <ProjectsSection
          onSelectProject={setSelectedProject}
          onOpenCatalog={() => setCatalogOpen(true)}
        />
        <ServicesSection onSelectService={handleSelectService} />
        <SkillsAndBannerSection onStartConsultation={handleStartConsultation} />
        <AchievementsAndJourneySection />
        <ContactAndFooterSection
          preselectedCategory={preselectedCategory}
          preselectedNote={preselectedNote}
        />
      </main>

      <EssayModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCommissionSimilar={handleCommissionSimilar}
      />

      <CatalogModal
        open={catalogOpen}
        onClose={() => setCatalogOpen(false)}
        onRequestAccess={handleRequestCatalogAccess}
      />
    </div>
  );
}
