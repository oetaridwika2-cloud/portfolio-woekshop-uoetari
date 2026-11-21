import {SKILL_PILLARS} from '../data/portfolioData';

interface SkillsAndBannerSectionProps {
  onStartConsultation: () => void;
}

export function SkillsAndBannerSection({onStartConsultation}: SkillsAndBannerSectionProps) {
  return (
    <>
      {/* SKILLS & TOOLKIT (#skills) */}
      <section
        id="skills"
        className="w-full px-space-md md:px-margin py-space-xl bg-surface-container relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between pb-space-md border-b-2 border-on-surface mb-space-lg">
            <div>
              <div className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
                05 // TECHNICAL ARSENAL
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-on-surface tracking-tight">
                TOOLS &amp; PROFICIENCIES
              </h2>
            </div>
            <div className="font-annotation-hand text-annotation-hand text-secondary -rotate-2 hidden sm:block">
              &ldquo;From raw code to vector precision&rdquo;
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {SKILL_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-container-lowest p-space-md shadow-[4px_4px_0px_#1b1c1a]"
              >
                <div className="flex items-center gap-space-xs mb-space-sm">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    {pillar.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-secondary mb-space-md">
                  {pillar.description}
                </p>
                <div className="space-y-space-xs font-label-mono text-label-mono uppercase">
                  {pillar.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-2 p-space-xs bg-surface-container-low"
                    >
                      <span>{skill.name}</span>
                      <span
                        className={`font-annotation-hand text-[16px] normal-case shrink-0 ${
                          skill.tone === 'primary' ? 'text-primary' : 'text-secondary'
                        }`}
                      >
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE STICKER CALLOUT BANNER */}
      <section className="w-full bg-primary text-on-primary py-space-xl px-space-md md:px-margin relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-block px-space-sm py-space-xs bg-surface text-on-surface font-label-mono text-label-mono uppercase shadow-[3px_3px_0px_#1b1c1a] -rotate-2 mb-space-md font-bold">
            ✦ TRANSLATION EMERGENCY?
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight max-w-3xl leading-tight mb-space-md">
            GOT COMPLEX NUMBERS THAT DESPERATELY NEED A HUMAN VOICE?
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl mb-space-lg">
            Whether you have an upcoming investor presentation, academic report, or editorial
            campaign, let us mold your data into unforgettable visuals.
          </p>
          <button
            type="button"
            onClick={onStartConsultation}
            className="px-space-xl py-space-sm bg-inverse-surface text-inverse-on-surface font-label-mono text-label-mono uppercase tracking-wider shadow-[4px_4px_0px_#ffffff] hover:shadow-[2px_2px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            START A CONSULTATION CALL
          </button>
        </div>
      </section>
    </>
  );
}
