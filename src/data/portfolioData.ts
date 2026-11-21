export interface Persona {
  id: number;
  label: string;
  title: string;
  text: string;
  meta: string;
  note: string;
}

export type ProjectCategory = 'all' | 'dataviz' | 'editorial' | 'poster';

export interface ProjectItem {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  imageUrl: string;
  imageAlt: string;
  badge: string;
  badgeVariant: 'primary' | 'inverse' | 'tertiary' | 'surface';
  discipline: string;
  year: string;
  title: string;
  description: string;
  quote: string;
  quoteTone: 'primary' | 'secondary' | 'tertiary';
  washiClass?: string;
  client: string;
  datasetScale: string;
  tools: string[];
  editorialBrief: string;
  keyFindings: string[];
}

export const HERO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuChb6bUn_r4gNLgLIE71jvpQw3RF0YVRANXXWm9RoFfMAvCjZYMN4DvGsyJOfEwih2wJ0FgPSAKUEijpyGh0XQ4SUIYiBsXutNkXBvnEd9pDPwHjwNZ0eaBIhCv-ff6jM8h-IrVtB89vTvUuM5SSQqOWkiGb3yPaQ66Xortpv3eechQjnRrs1EhtQbcDp2CkVRbtZ-WEGA0JfGZf-JM5ZVJE1SO3uLLsgmuM3M9agGYdHW_Kl2UU35S';

export const ABOUT_STUDIO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBGA3AA7CNrqjEWNp3zR--zyCnBPobDlfEia1UX6XAv-H8FaJ_pMQJMBbsyUHsNqWF-OAgB0T97oSETWKZWb0azog0_MynI9AKBelhL0v2efSl2vMQvsYtwSQkcDhhyU8IRwiROf0za45Qr7ZKb-qOUeuAfz8_5jkWWNOc2k3lWP4lLD-ZQ_0oJGgYW89N4RB-73M6id1vqgmsW9nZIqlmoyUJ5--qxkP5yHz9W0ck';

export const PERSONAS: Persona[] = [
  {
    id: 0,
    label: '01. DATA VISUALIZER',
    title: 'DATA VISUALIZER',
    text: 'Transforming multi-dimensional spreadsheets, planetary metrics, and sociological surveys into intuitive, high-impact data posters and narrative diagrams.',
    meta: 'D3.JS • PYTHON • SPREADSHEETS',
    note: 'turning chaotic data into tactile stories ✦',
  },
  {
    id: 1,
    label: '02. INFOGRAPHIC DESIGNER',
    title: 'INFOGRAPHIC DESIGNER',
    text: 'Architecting multi-layered editorial infographics that deliver instant conceptual punch followed by rich informational depth for publications and NGOs.',
    meta: 'ILLUSTRATOR • FIGMA • CARTOGRAPHY',
    note: 'precision vector clarity ✦',
  },
  {
    id: 2,
    label: '03. VISUAL STORYTELLER',
    title: 'VISUAL STORYTELLER',
    text: 'Authoring longform visual essays on Substack (@soothutari) that dissect culture, economics, and human behavior through a tactile paper aesthetic.',
    meta: 'SUBSTACK • EDITORIAL ESSAYS • RESEARCH',
    note: 'words and numbers in harmony ✦',
  },
  {
    id: 3,
    label: '04. CONTENT CREATOR',
    title: 'CONTENT CREATOR',
    text: 'Curating an engaged visual design community of 50,000+ followers, sharing behind-the-scenes sketchbooks, risograph prints, and data breakdowns.',
    meta: 'INSTAGRAM • BEHANCE • TALKS',
    note: 'democratizing data literacy ✦',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'carbon-atlas',
    category: 'dataviz',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHbmlXdr-FSdk0GIY9E2ffForiutDN7HE-wJh9HeOskHKOWZKtz8MHIWori4nrnEPb5wLmbAOE7Zjll-uuZwAWxJebeTKzUxwItfR8qFBQFhVxXxxoSdFwURSRpb6LXUpXpFhzMCEinVRFgSN_D8ZSwT4vwTSe6iN1VskxM66N9e9WMuSV9HtGQxehrBgJ9N38ROcByIQVkLmN9tcDhGrl5dJuYXeOCJbo_s8byW0',
    imageAlt:
      'Dense and intricately designed infographic poster showing global carbon footprint flows, carbon sinks, and national emission data with red and ink-black circular diagrams, isometric flow lines, and vintage technical paper textures',
    badge: 'CASE STUDY',
    badgeVariant: 'primary',
    discipline: 'CLIMATE SCIENCE / ATLAS',
    year: '2024',
    title: 'National Carbon Footprint Visual Atlas',
    description:
      'Deconstructing 40 years of cross-border carbon leakage and emissions tracking into a dual-fold foldout infographic poster.',
    quote: '"Best in Show nominee"',
    quoteTone: 'primary',
    washiClass: '-top-3 left-8 w-24 h-5 bg-surface-variant/90 shadow-sm rotate-2',
    client: 'EcoAtlas Policy Consortium',
    datasetScale: '192 countries • 40-year longitudinal ledger (1984–2024)',
    tools: ['Python (Polars)', 'D3.js Sankey', 'Adobe Illustrator', 'Risograph Spot Ink'],
    editorialBrief:
      'Policy makers often overlook embodied carbon imported through manufacturing supply chains. This foldout broadsheet reconciles territorial emissions against consumption-based footprints across four decades.',
    keyFindings: [
      '31% of net industrial emissions in OECD nations are displaced across maritime trade corridors.',
      'Tropical peatland carbon sinks offset 14% of regional output when protected against seasonal burning.',
      'Visualized via dual-hemisphere isometric flow ribbons calibrated to metric gigatonnes.',
    ],
  },
  {
    id: 'tech-salary-index',
    category: 'editorial',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkmzvWQ0B4fX22y_jIS4GxVAf0y9oJ0Iag4iLh9ybybtKH4ejhCkYVtmouI4BUc5l7RslaZ-2HpsWQMqT3ZURKNzdQjYz7k1AvgoXruWZ5So_LG8VzZ95ZBBqf0pQq5QO77oalWdK_Ux4Q-msBHgfykJ0mwscJH8qU5Ia_UhLYtXajKVuoIA4_nC3ZmaiWf0JZk4MMYjSroduHTExJ6GH59FGYqeD91D8qyn0lg2M',
    imageAlt:
      'Editorial magazine two-page spread featuring an infographic breakdown of tech industry compensation disparities, gender pay gap analysis, with red dot distribution plots, bold brutalist typography, and archival paper grain',
    badge: 'DATA JOURNALISM',
    badgeVariant: 'inverse',
    discipline: 'LABOR ECONOMICS',
    year: '2024',
    title: 'Tech Salary Disparity Index',
    description:
      'An empirical investigation analyzing 14,000 verified tech worker compensation reports across Southeast Asia and Europe.',
    quote: '"Featured in Wired"',
    quoteTone: 'secondary',
    washiClass: '-top-3 right-8 w-24 h-5 bg-surface-variant/90 shadow-sm -rotate-2',
    client: 'Rest of World & Wired UK Feature',
    datasetScale: '14,280 anonymized payroll records • 11 metropolitan hubs',
    tools: ['R / ggplot2', 'Beeswarm Distribution', 'Adobe InDesign', 'Work Sans & Space Mono'],
    editorialBrief:
      'Commissioned to uncover hidden equity and base-salary variance between remote headquarters and regional engineering hubs across Southeast Asia and Western Europe.',
    keyFindings: [
      'Purchasing-power-adjusted median total compensation diverges by 2.4x at Staff Engineering levels.',
      'Equity vesting cliffs account for 62% of the gender compensation gap beyond year three.',
      'Presented as a two-page print spread using vermilion beeswarm scatter overlays.',
    ],
  },
  {
    id: 'coffee-flavor-wheel',
    category: 'poster',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD319sS5C1YH9vYaEYVKMlNlyfyvvSG2G3dqc4IrJ2LQ65C-unKJrHF1gEboqWp5j3fV4OZ9Qa5z9_IbV-PIjKwnbad-94nf-GNFaJlfgeoE35MiN0By6XoTs7hNLd2_F007CDK0TmcZBbD7zyqrkiRH1BbGZ3xNWI1-q97Zop3h7L58IwOzZQHRJVyWlb3umf9-LOPD2tUHSTFxKojCGILNKtc_mKzT_FFPFurCMI',
    imageAlt:
      'A screen-printed botanical and sensory flavor taxonomy wheel for specialty coffee origins, featuring radial data spokes, hand-drawn annotations, terracotta and deep charcoal inks on raw textured linen paper',
    badge: 'LIMITED PRINT',
    badgeVariant: 'tertiary',
    discipline: 'SENSORY TAXONOMY',
    year: '2023',
    title: 'The Sensory Coffee Flavor Wheel',
    description:
      'Reinterpreting SCA sensory lexicons through an intuitive geometric wheel, printed in a signed 300-copy risograph run.',
    quote: '"Sold out in 48 hours"',
    quoteTone: 'primary',
    washiClass: '-top-3 left-1/3 w-20 h-5 bg-surface-variant/90 shadow-sm rotate-1',
    client: 'Soothutari Press Edition #07',
    datasetScale: '110 flavor compounds • 18 Indonesian & East African varietals',
    tools: ['Observable HQ', 'Radial Polar Script', 'Adobe Illustrator', '2-Color Soy Risograph'],
    editorialBrief:
      'Traditional cupping wheels isolate flavor notes from roast curves and altitude. This tactile print edition pairs volatile compound taxonomies with elevation rings and handwritten tasting margin notes.',
    keyFindings: [
      'Maps 110 organic ester & acid descriptors across three concentric roast-development tiers.',
      'Links Sumatran Gayo & Toraja micro-lots directly to fermentation duration curves.',
      'All 300 numbered prints on 250gsm Munken Lynx cotton stock sold out within 48 hours.',
    ],
  },
  {
    id: 'climate-risk-tracker',
    category: 'dataviz',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCxkl8AtFRUfvvv0J-dr5z7eSekEvl7XEd59nkB3OZag2Twg8ns47Bjd3Bldm0mMVGsX9E_W-ckMguSVcamUI_a7GdU6gM-46vNo5S2Q-s8GqGnl62vTvXdLCkmz2aIgohWjs325suCKjMQfZVrXcMiD8KERcg8vC5p2TyEy8WMaU5ooo067OoSZkbyHlvKnZU8S7QccHyH_-kbhQwKyW7phQcAVzdHfpA955kXGfQ',
    imageAlt:
      'Digital web interface mockups showing complex archipelago flood hazard projections with interactive D3 sliders, topographical density heatmaps, and clean editorial stat cards on warm tinted paper background',
    badge: 'INTERACTIVE',
    badgeVariant: 'primary',
    discipline: 'RISK INTELLIGENCE',
    year: '2023',
    title: 'Archipelago Climate Risk Tracker',
    description:
      'Real-time visual dashboard mapping coastal erosion vulnerabilities across 17,000 islands for policy researchers.',
    quote: '"Open source release"',
    quoteTone: 'tertiary',
    client: 'UNDP Coastal Resilience Lab',
    datasetScale: '17,504 islands • 30m DEM tidal elevation tiles',
    tools: ['QGIS', 'D3.js + Svelte', 'Python GeoPandas', 'TopoJSON'],
    editorialBrief:
      'Built for municipal planners needing rapid scenario testing under IPCC SSP2-4.5 and SSP5-8.5 sea-level trajectories without heavyweight GIS desktop licenses.',
    keyFindings: [
      'Identifies 412 high-density coastal kampungs facing compounded subsidence and tidal surge.',
      'Compresses 48GB of satellite bathymetry into sub-200ms interactive browser contours.',
      'Adopted by 19 regional adaptation planning boards across Indonesia.',
    ],
  },
  {
    id: 'urban-transit-velocity',
    category: 'editorial',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuTdBYg9zOqinkr6t1u5mOy_9Q94EuKelIlk4_mAs51bPtKhr0urnS1EDM9Pfamj98xywW9TM9zYCWcqB6RAYyR8kgbIEPEQvlfYcc7xSTwLMXFKUweBH90wkQlBCXRwiLrXw1hQQeMj8jBQb8yRmvz0LQJ3jVCFv3_r9MlAomVJPUyVTUqFkE6gToogS3coN3HVI4rWlSxzLqkcsa7hDyYLxP2cCs7eQaZJods6A',
    imageAlt:
      'Editorial diagram tracking commuter commute velocities across Jakarta and Singapore using red vector trajectories overlaid on vintage architectural blueprints',
    badge: 'SPATIAL MAPPING',
    badgeVariant: 'surface',
    discipline: 'URBAN MOBILITY',
    year: '2023',
    title: 'Transit Velocity & Commute Density',
    description:
      'Visualizing 1.2M daily transit journeys, revealing bottlenecks and equitable transit access gaps in metropolitan centers.',
    quote: '"Kantar shortlist"',
    quoteTone: 'secondary',
    client: 'Southeast Asia Urban Observatory',
    datasetScale: '1.2M daily smartcard & GTFS trip legs',
    tools: ['Python Pandas', 'QGIS Isochrones', 'Adobe Illustrator', 'Archival Blueprint Grid'],
    editorialBrief:
      'A comparative morphological study contrasting multi-modal feeder efficiency between Jabodetabek and Singapore during peak monsoon commute windows.',
    keyFindings: [
      'Last-mile transfer friction adds 38 minutes on average to outer-ring rail commutes.',
      'Isochrone blueprint overlays highlight underserved industrial corridors needing BRT spur lines.',
      'Shortlisted for Kantar Information is Beautiful spatial visualization honors.',
    ],
  },
  {
    id: 'modern-burnout-anatomy',
    category: 'poster',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsYhWpcmKtx4hLKgTV_f-ggHb3Lt1NJWkiC_Mhl84YFOxJ1Ah_hxETkc8Ot676FBRWvI5bPfy32zpxg1XpXp3WW1Bp1eWfOBJIdIwKOQOvUKaJUqCU9opPprLYt3HZZBlcIgWZJMapmYxUWKNM_756jvh0xNIEv-MEBh7nBaG4rcE4lfZwEY7-74jSTITiZfv-2oQEWDtVHP8e2BCw6qVlAKTQKmpIpIdT7gqkLVM',
    imageAlt:
      'Scrapbook style artistic infographic poster dissecting emotional burnout cycles, sleep deprivation curves, cortisol levels with hand-annotated sketches, stamp textures, and dramatic crimson ink contrasts',
    badge: 'VISUAL ESSAY',
    badgeVariant: 'primary',
    discipline: 'PSYCHOLOGY / ZINE',
    year: '2022',
    title: 'The Anatomy of Modern Burnout',
    description:
      'A viral Substack essay turned into a physical zine edition combining psychometric clinical surveys with raw personal notes.',
    quote: '"Over 40k shares"',
    quoteTone: 'primary',
    client: '@soothutari Visual Essay #019',
    datasetScale: '3,600 creative-sector respondents • Maslach Burnout Inventory',
    tools: ['R Psychometrics', 'Hand-inked Annotations', 'Adobe InDesign', 'Saddle-stitched Zine'],
    editorialBrief:
      'An intimate fusion of clinical burnout curves and personal studio diary excerpts, challenging sterile HR wellness slides with honest scrapbook candor.',
    keyFindings: [
      'Cognitive recovery requires 4.2x longer uninterrupted rest blocks than fragmented weekend off-hours.',
      'Always-on Slack notification cadence correlates strongly with flattened morning cortisol spikes.',
      'Shared over 40,000 times across Substack, Instagram, and design studio reading groups.',
    ],
  },
];

export const CATALOG_ARCHIVES = [
  {
    code: 'CAT-2024-A',
    title: 'ASEAN Maritime Microplastics & Fishery Impact Ledger',
    partner: 'Regional Environmental NGO (Confidential)',
    format: '48-Page Print Monograph + Interactive Map',
    year: '2024',
  },
  {
    code: 'CAT-2024-B',
    title: 'Southeast Asian Sovereign Debt & Climate Adaptation Flows',
    partner: 'Multilateral Development Bank',
    format: 'Executive Boardroom Wall Charts (A0) + Web Explorer',
    year: '2024',
  },
  {
    code: 'CAT-2023-C',
    title: 'Gen-Z Informal Credit & Micro-Lending Risk Matrix',
    partner: 'Fintech Research Consortium',
    format: 'Editorial Slide System + Animated Data Essay',
    year: '2023',
  },
];

export const PARTNERS = [
  'THE ATLANTIC',
  'GREENPEACE INTL',
  'REST OF WORLD',
  'WIRED UK',
  'UNDP',
  'BEHANCE CURATED',
];

export const SERVICES = [
  {
    tier: 'TIER 01',
    number: '01.',
    title: 'Bespoke Data Visualization & Dashboards',
    description:
      'For organizations with heavy proprietary datasets needing custom web dashboards, interactive charts, and clean analytical clarity.',
    deliverables: [
      'Interactive D3.js or Observable notebooks',
      'Responsive web charts',
      'Color-blind compliant palette architecture',
      'CSV/API data pipeline cleaning',
    ],
    timeline: 'TIMELINE: 2–4 WEEKS',
    ctaLabel: 'COMMISSION →',
    featured: false,
    categoryValue: '03 // Interactive Web D3 / Observable',
  },
  {
    tier: 'MOST REQUESTED',
    number: '02.',
    title: 'Editorial Infographics & Visual Essays',
    description:
      'The signature Uoetari experience: translating research papers, corporate surveys, or longform journalism into tactile scrapbook posters.',
    deliverables: [
      'Multi-panel infographics (print + digital 4K)',
      'Carousel story assets for LinkedIn & Substack',
      'Vector illustrations, stamps & custom maps',
      'Press-ready CMYK files for zines & reports',
    ],
    timeline: 'TIMELINE: 1–3 WEEKS',
    ctaLabel: 'BOOK SLOT →',
    featured: true,
    categoryValue: '02 // Editorial Infographic Series',
  },
  {
    tier: 'TIER 03',
    number: '03.',
    title: 'Story Consulting & Studio Workshops',
    description:
      'Leveling up your newsroom, corporate comms team, or research department through hands-on training and visual narrative audits.',
    deliverables: [
      'Full-day interactive studio workshop',
      'Comprehensive visual audit of your reports',
      'Tailored Brand Dataviz Styleguide & Figma UI Kit',
      '1-on-1 creative direction critiques',
    ],
    timeline: 'FORMAT: REMOTE / ONSITE',
    ctaLabel: 'INQUIRE →',
    featured: false,
    categoryValue: '04 // Speaking / Workshop Engagement',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      '"Oetari transformed a 90-page climate report that nobody was reading into an explosive visual zine. Our web engagement spiked by 340% within forty-eight hours of launch."',
    author: 'Dr. Ronald Vane',
    role: 'Lead Climate Scientist, EcoAtlas',
    accent: 'primary' as const,
    rotation: '-rotate-1',
  },
  {
    quote:
      '"Very few designers possess equal fluency in raw Python datasets and delicate editorial typography. Dwika bridges those worlds effortlessly and delivers on deadline every single time."',
    author: 'Elena Marcotti',
    role: 'Art Director, Vox Media UK',
    accent: 'tertiary' as const,
    rotation: 'rotate-2',
  },
  {
    quote:
      '"Her personal Substack @soothutari is masterclass material. When we brought her on for our fintech data series, she turned dry liquidity graphs into pure visual gold."',
    author: 'Taufik Hidayat',
    role: 'Head of Brand, Kinetik Finance',
    accent: 'primary' as const,
    rotation: '-rotate-2',
  },
];

export const SKILL_PILLARS = [
  {
    icon: 'terminal',
    title: 'DATA & CODE',
    description: 'Wrangling messy dataframes, normalising schemas, and scripting generative shapes.',
    items: [
      { name: 'Python (Pandas, Polars)', note: 'daily driver ✦', tone: 'primary' as const },
      { name: 'D3.js & Svelte', note: 'wizard level', tone: 'primary' as const },
      { name: 'R & Ggplot2', note: 'statistical', tone: 'secondary' as const },
      { name: 'Observable HQ', note: 'rapid prototype', tone: 'primary' as const },
    ],
  },
  {
    icon: 'draw',
    title: 'DESIGN & VECTOR',
    description:
      'Crafting the final aesthetic polish, spatial hierarchy, typography, and paper textures.',
    items: [
      { name: 'Adobe Illustrator', note: '10+ years ✦', tone: 'primary' as const },
      { name: 'Figma (UI & Dataviz kits)', note: 'component nerd', tone: 'primary' as const },
      { name: 'Adobe InDesign', note: 'editorial zines', tone: 'secondary' as const },
      { name: 'After Effects', note: 'kinetic motion', tone: 'primary' as const },
    ],
  },
  {
    icon: 'menu_book',
    title: 'NARRATIVE & EDITORIAL',
    description:
      'Structuring the argument, vetting ethical representation, and authoring editorial copy.',
    items: [
      { name: 'Data Journalism', note: 'deep dive ✦', tone: 'primary' as const },
      { name: 'Cartography & GIS (QGIS)', note: 'spatial maps', tone: 'primary' as const },
      { name: 'Longform Substack Craft', note: '50k list', tone: 'secondary' as const },
      { name: 'Keynote Presentation', note: 'TEDx style', tone: 'primary' as const },
    ],
  },
];

export const AWARDS = [
  {
    year: '2024',
    title: 'Information is Beautiful Awards',
    subtitle: "Nominee / Longlisted in 'Science & Technology' Category for the Carbon Atlas",
    tag: 'GLOBAL JURY',
  },
  {
    year: '2023',
    title: 'Kantar Information is Art Mention',
    subtitle: 'Special Commendation for Non-traditional Dataviz Print Craft',
    tag: 'COMMENDED',
  },
  {
    year: '2023',
    title: 'Behance Global Curated Showcase',
    subtitle: 'Featured #1 Worldwide in Editorial Infographics & Data Art Gallery',
    tag: 'EDITORIAL PICK',
  },
  {
    year: '2022',
    title: 'International Visual Journalism Summit',
    subtitle: 'Keynote Speaker: "Scrapbook Aesthetics in Algorithmic Times", Singapore',
    tag: 'KEYNOTE',
  },
];

export const TIMELINE = [
  {
    period: '2024 - NOW',
    title: 'Global Commissions & Soothutari Essay Press',
    description:
      'Expanded independent commissions for global institutions like The Atlantic, UNDP, and independent media labs. Launched tactile risograph print editions shipped to 34 countries.',
    marker: '✦',
    markerStyle: 'bg-primary text-on-primary',
    periodColor: 'text-primary',
    rotation: 'rotate-[0.5deg]',
  },
  {
    period: '2022 - 2023',
    title: 'The Scrapbook Aesthetic Breakthrough',
    description:
      'Developed the recognizable hand-paper-and-grid visual language. Personal Instagram reached 50,000 community members seeking thoughtful analytical narratives rather than generic reel hype.',
    marker: '✦',
    markerStyle: 'bg-inverse-surface text-inverse-on-surface',
    periodColor: 'text-on-surface',
    rotation: '-rotate-[0.5deg]',
  },
  {
    period: '2019 - 2021',
    title: 'Senior Visual Journalist & Lead Infographer',
    description:
      'Led daily visual explainers covering global health trends, election tracking, and macroeconomic crisis datasets under grueling live newsroom turnarounds.',
    marker: '✦',
    markerStyle: 'bg-inverse-surface text-inverse-on-surface',
    periodColor: 'text-on-surface',
    rotation: 'rotate-1',
  },
  {
    period: '2017 - 2018',
    title: 'Data Architecture & Print Roots',
    description:
      'Graduated with honors in Information Design. Started as a technical CAD illustrator and self-taught D3.js hacker sketching charts on graph paper during midnight transit rides.',
    marker: '●',
    markerStyle: 'bg-surface-variant text-on-surface',
    periodColor: 'text-secondary',
    rotation: '-rotate-1',
  },
];

export const PROJECT_CATEGORIES = [
  '01 // Bespoke Data Visualization Poster',
  '02 // Editorial Infographic Series',
  '03 // Interactive Web D3 / Observable',
  '04 // Speaking / Workshop Engagement',
  '05 // General Curious Inquiry',
];
