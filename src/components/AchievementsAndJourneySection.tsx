import {AWARDS, TIMELINE} from '../data/portfolioData';

export function AchievementsAndJourneySection() {
  return (
    <>
      {/* ACHIEVEMENTS & AWARDS (#achievements) */}
      <section
        id="achievements"
        className="w-full px-space-md md:px-margin py-space-xl bg-surface relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between pb-space-md border-b-2 border-on-surface mb-space-lg">
            <div>
              <div className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
                06 // RECOGNITIONS &amp; CITATIONS
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-on-surface tracking-tight">
                HONORS &amp; EXHIBITIONS
              </h2>
            </div>
            <div className="font-annotation-hand text-annotation-hand text-secondary rotate-1 hidden sm:block">
              &ldquo;Verified by industry juries&rdquo;
            </div>
          </div>

          <div className="bg-surface-container-lowest p-space-lg shadow-[4px_4px_0px_#1b1c1a] relative">
            {/* Official stamp corner */}
            <div className="absolute -top-5 right-6 md:right-10 w-24 h-24 rounded-full border-2 border-primary text-primary flex flex-col items-center justify-center p-2 text-center rotate-12 bg-surface/90 shadow-sm pointer-events-none">
              <span className="font-label-mono text-[8px] uppercase tracking-tighter font-bold">
                OFFICIAL RECORD
              </span>
              <span className="font-annotation-hand text-[15px] font-bold">Awarded</span>
              <span className="font-label-mono text-[8px] uppercase tabular-nums">2021-2024</span>
            </div>

            <div className="divide-y divide-surface-variant">
              {AWARDS.map((award) => (
                <div
                  key={award.title}
                  className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-sm"
                >
                  <div className="flex items-start md:items-center gap-space-sm">
                    <span className="font-label-mono text-label-mono text-primary font-bold tabular-nums pt-1 md:pt-0">
                      {award.year}
                    </span>
                    <div>
                      <div className="font-headline-md text-headline-md uppercase text-on-surface">
                        {award.title}
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary">
                        {award.subtitle}
                      </div>
                    </div>
                  </div>
                  <span className="font-label-mono text-label-mono uppercase text-on-surface bg-surface-container px-space-sm py-1 self-start md:self-auto whitespace-nowrap shrink-0">
                    {award.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY / TIMELINE (#journey) */}
      <section
        id="journey"
        className="w-full px-space-md md:px-margin py-space-xl bg-surface-container-low relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between pb-space-md border-b-2 border-on-surface mb-space-lg">
            <div>
              <div className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
                07 // CHRONOLOGY
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-on-surface tracking-tight">
                THE SCRAPBOOK TIMELINE
              </h2>
            </div>
            <div className="font-annotation-hand text-annotation-hand text-secondary -rotate-2 hidden sm:block">
              &ldquo;Evolution of an infographic atelier&rdquo;
            </div>
          </div>

          <div className="relative border-l-2 border-on-surface ml-4 md:ml-32 pl-space-md md:pl-space-xl space-y-space-xl">
            {TIMELINE.map((milestone) => (
              <div key={milestone.period} className="relative group">
                <div
                  className={`w-6 h-6 rounded-full absolute -left-[29px] md:-left-[53px] top-1.5 flex items-center justify-center font-label-mono text-[10px] shadow-[2px_2px_0px_#1b1c1a] ${milestone.markerStyle}`}
                >
                  {milestone.marker}
                </div>
                <div
                  className={`hidden md:block absolute -left-32 top-1 font-label-mono text-label-mono uppercase font-bold tabular-nums ${milestone.periodColor}`}
                >
                  {milestone.period}
                </div>
                <div
                  className={`bg-surface-container-lowest p-space-md shadow-[4px_4px_0px_#1b1c1a] max-w-2xl ${milestone.rotation}`}
                >
                  <span
                    className={`md:hidden inline-block font-label-mono text-label-mono uppercase font-bold mb-1 tabular-nums ${milestone.periodColor}`}
                  >
                    {milestone.period}
                  </span>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                    {milestone.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary mt-1">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
