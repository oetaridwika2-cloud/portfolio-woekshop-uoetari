import {useState} from 'react';
import {HERO_PORTRAIT_URL, PERSONAS} from '../data/portfolioData';
import type {NavSectionId} from './Header';
import {ResilientImage} from './ResilientImage';

interface HeroSectionProps {
  onNavigate: (section: NavSectionId) => void;
}

export function HeroSection({onNavigate}: HeroSectionProps) {
  const [activePersonaIndex, setActivePersonaIndex] = useState(0);
  const currentPersona = PERSONAS[activePersonaIndex];

  return (
    <section
      id="hero"
      className="relative w-full px-space-md md:px-margin py-space-xl overflow-hidden bg-surface"
    >
      {/* Grid Overlay Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#e3e2df_1px,transparent_1px),linear-gradient(to_bottom,#e3e2df_1px,transparent_1px)] bg-[size:26px_26px]" />

      {/* Paper Note Badge (Floating top left & right) */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
        <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-lowest shadow-[3px_3px_0px_#1b1c1a] -rotate-1">
          <span className="w-2 h-2 bg-primary shrink-0" />
          <span className="font-label-mono text-label-mono uppercase text-on-surface">
            Available for Commissions Q2–Q3
          </span>
        </div>
        <div className="font-annotation-hand text-annotation-hand text-primary rotate-2 flex items-center gap-space-xs">
          <span>Handcrafted in Jakarta &amp; Padang</span>
          <span className="material-symbols-outlined text-[18px]">north_east</span>
        </div>
      </div>

      {/* Main Hero Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Big Typographic Scrapbook Anchor */}
        <div className="lg:col-span-7 flex flex-col space-y-space-md">
          {/* Interactive Persona Switcher */}
          <div className="flex flex-wrap gap-space-xs items-center font-label-mono text-label-mono">
            <span className="text-secondary uppercase mr-1">Persona:</span>
            {PERSONAS.map((persona, index) => {
              const isSelected = index === activePersonaIndex;
              return (
                <button
                  key={persona.id}
                  type="button"
                  onClick={() => setActivePersonaIndex(index)}
                  aria-pressed={isSelected}
                  className={`px-space-sm py-space-xs shadow-[2px_2px_0px_#1b1c1a] cursor-pointer transition-all whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-high text-on-surface hover:bg-secondary-container'
                  }`}
                >
                  {persona.label}
                </button>
              );
            })}
          </div>

          {/* Huge Headline Block with Layered Cutouts */}
          <div className="relative pt-space-xs">
            {/* Washi tape decoration */}
            <div className="absolute -top-3 left-10 w-24 h-5 bg-surface-variant/80 rotate-3 shadow-sm z-20 pointer-events-none" />
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase text-on-surface tracking-tighter leading-none">
              UOETARI
            </h1>
            <div className="flex flex-wrap items-center gap-space-sm -mt-1 md:-mt-2">
              <span className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary tracking-tight">
                DWIKA
              </span>
              <div className="inline-block px-space-sm py-space-xs bg-inverse-surface text-inverse-on-surface font-label-mono text-label-mono uppercase shadow-[3px_3px_0px_#dd3124] rotate-2 whitespace-nowrap">
                ✦ EST. 2017
              </div>
            </div>
          </div>

          {/* Dynamic Role Description Box */}
          <div className="relative p-space-md bg-surface-container-lowest shadow-[4px_4px_0px_#1b1c1a] max-w-xl transition-all">
            <div className="absolute -top-3 right-6 font-annotation-hand text-annotation-hand text-primary -rotate-3">
              &ldquo;{currentPersona.note}&rdquo;
            </div>
            <p className="font-body-lg text-body-lg text-on-surface pt-1">{currentPersona.text}</p>
            <div className="mt-space-sm flex flex-wrap items-center gap-space-md text-secondary font-label-mono text-label-mono uppercase">
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 bg-primary" />
                {currentPersona.meta}
              </span>
              <span className="text-primary font-bold">● ACTIVE FOCUS</span>
            </div>
          </div>

          {/* Call To Action & Metrics Ticker */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('projects');
              }}
              className="px-space-lg py-space-sm bg-primary text-on-primary font-label-mono text-label-mono uppercase shadow-[4px_4px_0px_#1b1c1a] hover:shadow-[2px_2px_0px_#1b1c1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-space-xs whitespace-nowrap shrink-0"
            >
              <span>EXPLORE WORKS</span>
              <span className="material-symbols-outlined text-[16px]">south</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="px-space-lg py-space-sm bg-surface-container-lowest text-on-surface font-label-mono text-label-mono uppercase shadow-[4px_4px_0px_#dd3124] hover:bg-primary hover:text-on-primary transition-all flex items-center gap-space-xs whitespace-nowrap shrink-0"
            >
              <span>HIRE ME</span>
              <span className="material-symbols-outlined text-[16px]">draw</span>
            </a>
            <div className="font-annotation-hand text-annotation-hand text-secondary -rotate-1">
              (Response within ~24h)
            </div>
          </div>
        </div>

        {/* Right Column: Tactile Scrapbook Collage Hero Portrait */}
        <div className="lg:col-span-5 relative mt-space-md lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Washi tape at angle top */}
            <div className="absolute -top-4 left-1/3 w-32 h-6 bg-surface-variant/90 shadow-sm -rotate-6 z-30 pointer-events-none" />
            {/* Layer 1: Underlay card */}
            <div className="absolute inset-0 bg-primary-container shadow-[6px_6px_0px_#1b1c1a] rotate-3 translate-x-2 translate-y-3" />
            {/* Layer 2: Main photo collage container */}
            <div className="relative bg-surface-container-lowest p-space-sm shadow-[4px_4px_0px_#1b1c1a] -rotate-1 z-10">
              <div className="relative w-full h-[440px] overflow-hidden rounded-t-[140px] bg-inverse-surface">
                <ResilientImage
                  src={HERO_PORTRAIT_URL}
                  alt="High-fashion artistic portrait of Oetari Dwika, an Indonesian visual designer and data artist wearing a structured linen blazer with warm studio lighting"
                  className="w-full h-full object-cover object-center contrast-105"
                  fallbackLabel="OETARI DWIKA PORTRAIT"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-surface">
                  <div>
                    <div className="font-annotation-hand text-annotation-hand text-primary-fixed -rotate-2">
                      Oetari Dwika
                    </div>
                    <div className="font-label-mono text-label-mono text-surface-variant uppercase text-[10px]">
                      Data Visualizer &amp; Storyteller
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">brush</span>
                  </div>
                </div>
              </div>

              {/* Sticky sticker pinned on edge */}
              <div className="absolute -bottom-5 -right-4 bg-tertiary text-on-tertiary px-space-sm py-space-xs shadow-[3px_3px_0px_#1b1c1a] rotate-6 z-20">
                <span className="font-label-mono text-label-mono uppercase tracking-wider">
                  50k+ READERS
                </span>
              </div>

              {/* Round stamp tilted */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-surface-container-highest shadow-[3px_3px_0px_#1b1c1a] -rotate-12 flex flex-col items-center justify-center p-1 text-center z-20">
                <span className="font-label-mono text-[9px] uppercase tracking-tighter text-on-surface leading-tight font-extrabold">
                  VERIFIED
                  <br />
                  VISUAL
                  <br />
                  ATELIER
                </span>
              </div>
            </div>

            {/* Hand-drawn SVG arrow annotation */}
            <div className="hidden sm:block absolute -left-20 bottom-12 z-20 pointer-events-none">
              <svg className="text-primary" fill="none" height="60" viewBox="0 0 80 60" width="80">
                <path
                  d="M10 10 C 35 15, 55 25, 65 48"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M55 46 L 65 48 L 64 38"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span className="font-annotation-hand text-annotation-hand text-primary -rotate-6 inline-block">
                100% handcrafted!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
