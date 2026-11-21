import {useEffect, useState, type FormEvent} from 'react';
import {PROJECT_CATEGORIES} from '../data/portfolioData';

interface ContactAndFooterSectionProps {
  preselectedCategory?: string;
  preselectedNote?: string;
}

interface SubmittedReceipt {
  id: string;
  name: string;
  email: string;
  category: string;
  message: string;
  timestamp: string;
}

export function ContactAndFooterSection({
  preselectedCategory,
  preselectedNote,
}: ContactAndFooterSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(PROJECT_CATEGORIES[0]);
  const [message, setMessage] = useState('');
  const [receipt, setReceipt] = useState<SubmittedReceipt | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedCategory) {
      setCategory(preselectedCategory);
      setReceipt(null);
    }
  }, [preselectedCategory]);

  useEffect(() => {
    if (preselectedNote) {
      setMessage(preselectedNote);
      setReceipt(null);
    }
  }, [preselectedNote]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const code = `TX-${Math.floor(1000 + Math.random() * 9000)}`;
    setReceipt({
      id: code,
      name: name.trim(),
      email: email.trim(),
      category,
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@uoetari.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <>
      {/* LET'S CONNECT / CONTACT BAND (#contact) */}
      <section
        id="contact"
        className="w-full px-space-md md:px-margin py-space-xl bg-surface relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between pb-space-md border-b-2 border-on-surface mb-space-lg">
            <div>
              <div className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
                08 // TRANSMISSION
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-on-surface tracking-tight">
                LET&apos;S BUILD SOMETHING EXTRAORDINARY
              </h2>
            </div>
            <div className="font-annotation-hand text-annotation-hand text-primary -rotate-2 hidden sm:block">
              &ldquo;Direct transmission to Oetari&rdquo;
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left Side: Hand-Crafted Inquiries Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg shadow-[6px_6px_0px_#1b1c1a] relative">
              <div className="absolute -top-3 left-1/3 w-32 h-6 bg-surface-variant/80 rotate-1 shadow-sm pointer-events-none" />
              <div className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">
                SEND COMMISSION INQUIRY
              </div>
              <p className="font-body-sm text-body-sm text-secondary mb-space-md">
                Fill out the parameters below. Standard turnaround for commission scoping is 24
                hours.
              </p>

              {receipt ? (
                <div
                  role="status"
                  className="p-space-md bg-surface-container-low border-2 border-on-surface shadow-[4px_4px_0px_#dd3124] space-y-space-sm"
                >
                  <div className="flex items-center justify-between border-b border-surface-variant pb-space-xs">
                    <div className="flex items-center gap-space-xs text-primary font-label-mono text-label-mono uppercase font-bold">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                      <span>TRANSMISSION DISPATCHED // {receipt.id}</span>
                    </div>
                    <span className="font-label-mono text-[11px] text-secondary tabular-nums">
                      {receipt.timestamp}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    Thank you, <strong>{receipt.name}</strong>. Your project brief has been logged
                    under <strong>{receipt.category}</strong>. Oetari will reply to{' '}
                    <span className="text-primary font-medium">{receipt.email}</span> within 24
                    hours.
                  </p>
                  <div className="p-space-xs bg-surface-container-lowest border border-on-surface/20 font-body-sm text-body-sm text-secondary">
                    &ldquo;{receipt.message}&rdquo;
                  </div>
                  <button
                    type="button"
                    onClick={() => setReceipt(null)}
                    className="px-space-md py-space-xs bg-inverse-surface text-inverse-on-surface font-label-mono text-label-mono uppercase shadow-[3px_3px_0px_#dd3124] hover:bg-primary transition-colors cursor-pointer"
                  >
                    SEND ANOTHER BRIEF
                  </button>
                </div>
              ) : (
                <form className="space-y-space-md" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col space-y-1">
                      <label
                        htmlFor="name"
                        className="font-label-mono text-label-mono uppercase text-on-surface"
                      >
                        YOUR NAME / ENTITY *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Maya Chen (Vox Labs)"
                        className="w-full p-space-xs bg-surface-container-low border-2 border-on-surface font-body-md text-body-md focus:outline-none focus:shadow-[3px_3px_0px_#dd3124]"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label
                        htmlFor="email"
                        className="font-label-mono text-label-mono uppercase text-on-surface"
                      >
                        ELECTRONIC MAIL *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="maya@voxlabs.com"
                        className="w-full p-space-xs bg-surface-container-low border-2 border-on-surface font-body-md text-body-md focus:outline-none focus:shadow-[3px_3px_0px_#dd3124]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="project-type"
                      className="font-label-mono text-label-mono uppercase text-on-surface"
                    >
                      PROJECT CATEGORY
                    </label>
                    <select
                      id="project-type"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-space-xs bg-surface-container-low border-2 border-on-surface font-label-mono text-label-mono uppercase focus:outline-none focus:shadow-[3px_3px_0px_#dd3124]"
                    >
                      {PROJECT_CATEGORIES.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="message"
                      className="font-label-mono text-label-mono uppercase text-on-surface"
                    >
                      BRIEF SYNOPSIS &amp; DATASET DETAILS *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about the raw dataset, the target audience, preferred timelines, and any visual metaphors you admire..."
                      className="w-full p-space-xs bg-surface-container-low border-2 border-on-surface font-body-md text-body-md focus:outline-none focus:shadow-[3px_3px_0px_#dd3124]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                    <button
                      type="submit"
                      className="px-space-lg py-space-sm bg-primary text-on-primary font-label-mono text-label-mono uppercase tracking-wider shadow-[4px_4px_0px_#1b1c1a] hover:shadow-[2px_2px_0px_#1b1c1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-space-xs cursor-pointer"
                    >
                      <span>DISPATCH TRANSMISSION</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </button>
                    <span className="font-annotation-hand text-annotation-hand text-secondary hidden sm:inline-block">
                      ✦ encrypted studio wire
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Side: Direct Contacts & Social Cards */}
            <div className="lg:col-span-5 space-y-space-md">
              <div className="bg-surface-container-lowest p-space-md shadow-[4px_4px_0px_#1b1c1a] rotate-1">
                <div className="font-label-mono text-label-mono uppercase text-primary font-bold mb-space-xs">
                  DIRECT TRANSMISSION CHANNELS
                </div>
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                      </span>
                      <div>
                        <div className="font-label-mono text-[10px] uppercase text-secondary">
                          Primary Mailbox
                        </div>
                        <a
                          href="mailto:hello@uoetari.com"
                          className="font-headline-md text-[18px] text-on-surface hover:text-primary transition-colors"
                        >
                          hello@uoetari.com
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-space-xs py-0.5 border border-on-surface font-label-mono text-[10px] uppercase hover:bg-inverse-surface hover:text-inverse-on-surface transition-colors cursor-pointer shrink-0"
                    >
                      {copiedEmail ? 'COPIED ✓' : 'COPY'}
                    </button>
                  </div>

                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                    </span>
                    <div>
                      <div className="font-label-mono text-[10px] uppercase text-secondary">
                        Based in / Operating globally
                      </div>
                      <div className="font-body-md text-body-md text-on-surface">
                        Jakarta (WIB) &amp; Padang (WIB)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[18px]">rss_feed</span>
                    </span>
                    <div>
                      <div className="font-label-mono text-[10px] uppercase text-secondary">
                        Publication
                      </div>
                      <a
                        href="https://soothutari.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                      >
                        soothutari.substack.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Badge Grid */}
              <div className="grid grid-cols-2 gap-space-sm">
                <a
                  href="https://instagram.com/uoetari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-space-sm bg-inverse-surface text-inverse-on-surface shadow-[3px_3px_0px_#dd3124] hover:-translate-y-0.5 transition-transform flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-label-mono text-label-mono text-primary-fixed-dim">
                      INSTAGRAM
                    </span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                  <div className="font-headline-md text-[18px] uppercase mt-2">@uoetari</div>
                </a>

                <a
                  href="https://soothutari.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-space-sm bg-inverse-surface text-inverse-on-surface shadow-[3px_3px_0px_#dd3124] hover:-translate-y-0.5 transition-transform flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-label-mono text-label-mono text-primary-fixed-dim">
                      SUBSTACK
                    </span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                  <div className="font-headline-md text-[18px] uppercase mt-2">@soothutari</div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-space-sm bg-surface-container-high text-on-surface shadow-[3px_3px_0px_#1b1c1a] hover:-translate-y-0.5 transition-transform flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-label-mono text-label-mono text-secondary">
                      LINKEDIN
                    </span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                  <div className="font-headline-md text-[18px] uppercase mt-2">Oetari Dwika</div>
                </a>

                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-space-sm bg-surface-container-high text-on-surface shadow-[3px_3px_0px_#1b1c1a] hover:-translate-y-0.5 transition-transform flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-label-mono text-label-mono text-secondary">
                      BEHANCE
                    </span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                  <div className="font-headline-md text-[18px] uppercase mt-2">uoetari</div>
                </a>
              </div>

              {/* Studio Stamp Sign-off */}
              <div className="p-space-sm bg-primary-fixed text-on-primary-fixed shadow-[3px_3px_0px_#1b1c1a] -rotate-1 flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span className="font-label-mono text-label-mono uppercase font-bold">
                    ALL DATA INDEPENDENTLY VETTED
                  </span>
                </div>
                <span className="font-annotation-hand text-annotation-hand">Oetari D. ✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-inverse-surface text-inverse-on-surface font-body-sm text-body-sm relative z-30">
        <div className="w-full px-space-md md:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-space-xl items-start">
            <div className="md:col-span-5 space-y-space-sm">
              <div className="font-headline-lg text-headline-lg uppercase text-inverse-on-surface tracking-tight">
                UOETARI ✦
              </div>
              <p className="font-body-md text-body-md text-secondary-fixed-dim max-w-md">
                Data Visualizer, Infographic Designer &amp; Visual Content Creator crafting visual
                essays, tactile data posters, and analytical storytelling.
              </p>
              <div className="inline-flex items-center gap-space-xs bg-primary px-space-sm py-space-xs">
                <span className="material-symbols-outlined text-on-primary text-[16px]">
                  verified
                </span>
                <span className="font-label-mono text-label-mono uppercase text-on-primary">
                  Verified Visual Atelier
                </span>
              </div>
            </div>

            <div className="md:col-span-4 space-y-space-xs">
              <div className="font-label-mono text-label-mono uppercase text-primary-fixed-dim">
                Transmission &amp; Inquiries
              </div>
              <div className="font-headline-md text-headline-md text-inverse-on-surface">
                dwika@uoetari.design
              </div>
              <div className="font-body-sm text-body-sm text-secondary-fixed-dim">
                Available for editorial visual commissions, workshops, and speaking engagements
                worldwide.
              </div>
            </div>

            <div className="md:col-span-3 space-y-space-xs">
              <div className="font-label-mono text-label-mono uppercase text-primary-fixed-dim">
                Network Nodes
              </div>
              <div className="flex flex-col gap-space-xs font-label-mono text-label-mono uppercase">
                <a
                  href="https://instagram.com/uoetari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inverse-on-surface hover:text-primary-fixed-dim transition-colors"
                >
                  Instagram / @uoetari
                </a>
                <a
                  href="https://soothutari.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inverse-on-surface hover:text-primary-fixed-dim transition-colors"
                >
                  Substack / @soothutari
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inverse-on-surface hover:text-primary-fixed-dim transition-colors"
                >
                  LinkedIn / Oetari Dwika
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inverse-on-surface hover:text-primary-fixed-dim transition-colors"
                >
                  Behance / uoetari
                </a>
              </div>
            </div>
          </div>

          <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-mono text-label-mono uppercase text-secondary-fixed-dim">
            <div className="flex items-center gap-space-md">
              <span>© 2025 UOETARI (OETARI DWIKA)</span>
              <span>✦ ALL RIGHTS RESERVED</span>
            </div>
            <div>
              <span>HAND-CRAFTED SCRAPBOOK &amp; DATA INFOGRAPHICS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
