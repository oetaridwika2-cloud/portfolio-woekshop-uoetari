import {ABOUT_STUDIO_URL, PARTNERS} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

export function AboutSection() {
  return (
    <>
      {/* HELLO / ABOUT SECTION (#about) */}
      <section id="about" className="w-full px-space-md md:px-margin py-space-xl bg-surface relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-space-sm pb-space-md border-b-2 border-on-surface mb-space-lg">
            <div className="flex flex-wrap items-baseline gap-space-sm">
              <span className="font-label-mono text-label-mono text-primary font-bold">
                01 // DOSSIER
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-on-surface tracking-tight">
                MEET OETARI DWIKA
              </h2>
            </div>
            <div className="font-annotation-hand text-annotation-hand text-secondary -rotate-2 hidden sm:block">
              &ldquo;The human behind the charts&rdquo;
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Scrapbook Photo & Polaroids Stack */}
            <div className="lg:col-span-5 space-y-space-md">
              <div className="relative bg-surface-container-lowest p-space-md shadow-[4px_4px_0px_#1b1c1a] rotate-1">
                <div className="absolute -top-3 left-1/4 w-28 h-6 bg-surface-variant/80 -rotate-2" />
                <div className="w-full h-72 overflow-hidden bg-surface-container-high mb-space-sm">
                  <ResilientImage
                    src={ABOUT_STUDIO_URL}
                    alt="Oetari Dwika working at a wooden drafting desk with colored markers, notebook data plots, architectural rulers, and printed paper test strips"
                    className="w-full h-full object-cover"
                    fallbackLabel="STUDIO ARCHIVE #042"
                  />
                </div>
                <div className="flex justify-between items-center font-label-mono text-label-mono uppercase pt-space-xs">
                  <span className="text-on-surface font-bold">STUDIO ARCHIVE #042</span>
                  <span className="text-secondary">JAKARTA / REMOTE</span>
                </div>
                <p className="font-annotation-hand text-annotation-hand text-on-surface-variant pt-space-xs">
                  &ldquo;Messy sketchbooks always precede clean vector polygons.&rdquo;
                </p>
              </div>

              {/* Sticky Note Grid of Quick Facts */}
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                <div className="p-space-sm bg-primary-fixed shadow-[3px_3px_0px_#1b1c1a] -rotate-2">
                  <div className="font-headline-lg text-headline-lg uppercase text-on-primary-fixed leading-none tabular-nums">
                    120+
                  </div>
                  <div className="font-label-mono text-label-mono uppercase text-on-primary-fixed-variant mt-1">
                    Data Stories Produced
                  </div>
                </div>
                <div className="p-space-sm bg-tertiary-fixed shadow-[3px_3px_0px_#1b1c1a] rotate-2">
                  <div className="font-headline-lg text-headline-lg uppercase text-on-tertiary-fixed leading-none tabular-nums">
                    8+ YRS
                  </div>
                  <div className="font-label-mono text-label-mono uppercase text-on-tertiary-fixed-variant mt-1">
                    Information Craft
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Bio & Analytical Approach */}
            <div className="lg:col-span-7 space-y-space-md">
              <div className="bg-surface-container-lowest p-space-lg shadow-[4px_4px_0px_#1b1c1a]">
                <div className="inline-block px-space-xs py-0.5 bg-primary text-on-primary font-label-mono text-[11px] uppercase tracking-widest mb-space-sm">
                  STATEMENT OF CRAFT
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface leading-tight mb-space-sm">
                  bridging computational rigor and tactile editorial aesthetics.
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface mb-space-md">
                  I am Oetari Dwika (widely known as{' '}
                  <span className="text-primary font-bold">@uoetari</span> and curator of the
                  visual essay publication{' '}
                  <span className="text-tertiary font-bold">@soothutari</span>). With a background
                  spanning information architecture, statistical data analysis, and publication
                  design, I dissect intricate systems—from environmental carbon flows to labor
                  economics—and render them into visual forms that readers can feel, remember, and
                  dissect.
                </p>
                <p className="font-body-md text-body-md text-secondary">
                  Unlike generic dashboard automation, my studio treats data visualization as fine
                  editorial literature. Every diagram is typographically calibrated, rhythmically
                  structured, and layered with visual metaphors designed to cut through information
                  overload.
                </p>

                {/* Inline Highlight Metric Strip */}
                <div className="mt-space-lg pt-space-md border-t-2 border-surface-variant grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                  <div>
                    <div className="font-label-mono text-label-mono uppercase text-secondary">
                      Community
                    </div>
                    <div className="font-headline-md text-headline-md text-on-surface tabular-nums">
                      50,000+
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary">
                      Substack &amp; IG readers
                    </div>
                  </div>
                  <div>
                    <div className="font-label-mono text-label-mono uppercase text-secondary">
                      Reach
                    </div>
                    <div className="font-headline-md text-headline-md text-primary tabular-nums">
                      2.4M+
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary">
                      Global impressions
                    </div>
                  </div>
                  <div>
                    <div className="font-label-mono text-label-mono uppercase text-secondary">
                      Speaking
                    </div>
                    <div className="font-headline-md text-headline-md text-tertiary tabular-nums">
                      14 Talks
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary">
                      Conferences &amp; Masterclasses
                    </div>
                  </div>
                </div>
              </div>

              {/* Manifest Note Pin */}
              <div className="p-space-md bg-surface-container-high shadow-[3px_3px_0px_#1b1c1a] flex items-start gap-space-sm -rotate-1">
                <span className="material-symbols-outlined text-primary text-[24px] shrink-0">
                  push_pin
                </span>
                <div>
                  <span className="font-label-mono text-label-mono uppercase text-on-surface font-bold">
                    CREATIVE PHILOSOPHY:
                  </span>
                  <p className="font-annotation-hand text-annotation-hand text-on-surface-variant">
                    &ldquo;If the audience cannot synthesize the central takeaway within 7 seconds,
                    the diagram has failed—no matter how mathematically pristine the raw dataset
                    was.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATED WITH / PARTNERS BAND (#collaborated) */}
      <section
        id="collaborated"
        className="w-full bg-inverse-surface py-space-lg px-space-md md:px-margin relative z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm shrink-0">
            <span className="w-3 h-3 bg-primary" />
            <span className="font-label-mono text-label-mono uppercase text-surface tracking-widest">
              SELECTED PARTNERS &amp; PRESS:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-space-sm">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="px-space-md py-space-xs bg-surface/10 text-surface font-headline-md text-headline-md tracking-tight uppercase hover:bg-primary transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
