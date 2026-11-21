import {SERVICES, TESTIMONIALS} from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (categoryValue: string, tierTitle: string) => void;
}

export function ServicesSection({onSelectService}: ServicesSectionProps) {
  return (
    <>
      {/* WORK WITH ME / SERVICES (#services) */}
      <section
        id="services"
        className="w-full px-space-md md:px-margin py-space-xl bg-surface-container-low relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between pb-space-md border-b-2 border-on-surface mb-space-lg">
            <div>
              <div className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
                03 // COOPERATION PACKAGES
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-on-surface tracking-tight">
                SERVICES &amp; DELIVERABLES
              </h2>
            </div>
            <div className="font-annotation-hand text-annotation-hand text-secondary -rotate-3 hidden md:block">
              &ldquo;Tailored visual synthesis for high-stakes briefs&rdquo;
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className={`relative bg-surface-container-lowest p-space-lg flex flex-col justify-between ${
                  service.featured
                    ? 'shadow-[6px_6px_0px_#dd3124] lg:-translate-y-2 border-2 border-primary'
                    : 'shadow-[4px_4px_0px_#1b1c1a]'
                }`}
              >
                <div
                  className={`absolute -top-3 px-space-xs py-0.5 font-label-mono text-[10px] uppercase shadow-sm ${
                    service.featured
                      ? 'right-6 bg-primary text-on-primary font-bold'
                      : 'left-6 bg-surface-variant text-on-surface'
                  }`}
                >
                  {service.tier}
                </div>

                <div>
                  <div className="font-headline-lg text-headline-lg uppercase text-primary tabular-nums">
                    {service.number}
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mt-1 mb-space-sm">
                    {service.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary mb-space-md">
                    {service.description}
                  </p>
                  <div className="space-y-space-xs mb-space-md">
                    <div className="font-label-mono text-label-mono uppercase text-on-surface font-bold">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1 font-body-sm text-body-sm text-secondary">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-space-xs">
                          <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-space-md border-t border-surface-variant flex items-center justify-between gap-2">
                  <span className="font-label-mono text-label-mono uppercase text-secondary">
                    {service.timeline}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.categoryValue, service.title)}
                    className={`font-label-mono text-label-mono uppercase cursor-pointer whitespace-nowrap shrink-0 ${
                      service.featured
                        ? 'px-space-sm py-1 bg-primary text-on-primary shadow-[2px_2px_0px_#1b1c1a] hover:bg-primary-container'
                        : 'text-primary font-bold hover:underline'
                    }`}
                  >
                    {service.ctaLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full px-space-md md:px-margin py-space-xl bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between pb-space-md border-b-2 border-on-surface mb-space-lg">
            <div>
              <div className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
                04 // VERIFICATIONS
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-on-surface tracking-tight">
                KIND WORDS &amp; DISPATCHES
              </h2>
            </div>
            <div className="font-annotation-hand text-annotation-hand text-secondary -rotate-1 hidden sm:block">
              &ldquo;Directly from editors &amp; directors&rdquo;
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {TESTIMONIALS.map((item) => {
              const isPrimary = item.accent === 'primary';
              return (
                <div
                  key={item.author}
                  className={`relative bg-surface-container-lowest p-space-md shadow-[4px_4px_0px_#1b1c1a] ${item.rotation} flex flex-col justify-between`}
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      isPrimary ? 'bg-primary/20' : 'bg-tertiary/20'
                    } absolute -top-2 left-1/2 -translate-x-1/2 flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isPrimary ? 'bg-primary' : 'bg-tertiary'
                      }`}
                    />
                  </div>
                  <div>
                    <span
                      className={`material-symbols-outlined text-[28px] ${
                        isPrimary ? 'text-primary' : 'text-tertiary'
                      }`}
                    >
                      format_quote
                    </span>
                    <p className="font-body-md text-body-md text-on-surface my-space-sm italic">
                      {item.quote}
                    </p>
                  </div>
                  <div className="pt-space-xs border-t border-surface-variant flex items-center justify-between">
                    <div>
                      <div className="font-headline-md text-[18px] uppercase text-on-surface">
                        {item.author}
                      </div>
                      <div className="font-label-mono text-[11px] text-secondary uppercase">
                        {item.role}
                      </div>
                    </div>
                    <span
                      className={`font-annotation-hand text-annotation-hand ${
                        isPrimary ? 'text-primary' : 'text-tertiary'
                      }`}
                    >
                      Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
