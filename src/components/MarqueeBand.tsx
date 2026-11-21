const MARQUEE_ITEMS = [
  {label: '✦ DATA VISUALIZATION', color: 'text-primary-fixed-dim'},
  {label: '✦ INFOGRAPHIC DESIGN', color: 'text-inverse-on-surface'},
  {label: '✦ VISUAL ESSAYS', color: 'text-tertiary-fixed'},
  {label: '✦ EDITORIAL INFORMATION DESIGN', color: 'text-primary-fixed-dim'},
  {label: '✦ DATA JOURNALISM', color: 'text-inverse-on-surface'},
  {label: '✦ CREATIVE DIRECTION', color: 'text-tertiary-fixed'},
];

export function MarqueeBand() {
  return (
    <div className="w-full bg-inverse-surface text-inverse-on-surface py-space-sm overflow-hidden shadow-[0_4px_0_0_#dd3124] relative z-20">
      <div className="animate-marquee whitespace-nowrap font-headline-md text-headline-md uppercase tracking-wider">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <span key={idx} className={`mx-space-md ${item.color}`}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
