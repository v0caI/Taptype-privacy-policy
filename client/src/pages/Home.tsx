/**
 * Pit-Lane Paper design reminder: warm editorial paper, cobalt route markers,
 * coral signal accents, a fixed reading rail, and Space Grotesk + Source Serif 4.
 */
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleHelp,
  Flag,
  Keyboard,
  LockKeyhole,
  ShieldCheck,
  Trash2,
} from "lucide-react";

const policySections = [
  ["01", "Overview", "overview"],
  ["02", "Data we process", "data"],
  ["03", "How we use data", "use"],
  ["04", "Service providers", "providers"],
  ["05", "Your choices", "choices"],
  ["06", "Security & updates", "security"],
] as const;

const dataMap = [
  {
    icon: Keyboard,
    title: "Game account & race data",
    text: "Account details you provide, gameplay records, race results, rankings, and typed input only where needed to run and validate a race.",
  },
  {
    icon: ShieldCheck,
    title: "Service & diagnostic data",
    text: "Technical information generated while you use TapType, such as device, browser, log, and security information needed to maintain the service.",
  },
  {
    icon: LockKeyhole,
    title: "Purchase information",
    text: "Purchase status and transaction references. Payment-card information is processed by Stripe, not stored by TapType as full card details.",
  },
];

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src="/manus-storage/taptype-mark_ba4fba5c.png" alt="" />
    </span>
  );
}

export default function Home() {
  return (
    <div className="policy-shell">
      <header className="site-header">
        <a className="brand" href="#overview" aria-label="TapType privacy policy">
          <Mark />
          <span className="brand-name">TapType</span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-page">Privacy Policy</span>
        </a>
        <a className="header-action" href="#data">
          Read the data map <ArrowDown size={15} strokeWidth={2.25} />
        </a>
      </header>

      <main>
        <section className="hero" id="overview">
          <div className="hero-copy">
            <div className="eyebrow"><Flag size={15} fill="currentColor" /> Privacy notice</div>
            <h1>Privacy, without<br />the pit stops.</h1>
            <p className="hero-intro">
              TapType is a competitive typing-racing game. This policy explains the information used to operate the game, manage purchases, and protect players.
            </p>
            <div className="document-meta" aria-label="Document information">
              <span><b>Effective</b> August 20, 2026</span>
              <span><b>Applies to</b> TapType game &amp; services</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract illustration of keyboard data moving safely through TapType" role="img">
            <img src="/manus-storage/taptype-keyboard-circuit_939be43d.png" alt="" />
            <span className="hero-stamp">Player data<br /><strong>on a clear route</strong></span>
          </div>
        </section>

        <section className="quick-facts" aria-label="Privacy highlights">
          <div className="quick-fact"><Check size={18} /> We use data to operate and improve TapType.</div>
          <div className="quick-fact"><Check size={18} /> Stripe processes payment details for purchases.</div>
          <div className="quick-fact"><Check size={18} /> You can request account and data deletion.</div>
        </section>

        <div className="document-layout">
          <aside className="policy-rail" aria-label="Privacy policy sections">
            <p className="rail-label">On this route</p>
            <nav>
              {policySections.map(([number, name, id]) => (
                <a href={`#${id}`} key={id}>
                  <span>{number}</span>{name}<ChevronRight size={14} />
                </a>
              ))}
            </nav>
            <a className="rail-deletion" href="/account-deletion">
              <Trash2 size={15} /> Account deletion
            </a>
          </aside>

          <article className="policy-document">
            <section className="policy-section" id="overview">
              <SectionLabel number="01" label="Overview" />
              <h2>A clear policy for a fast game.</h2>
              <p>
                This Privacy Policy describes how TapType handles information about players who access our game, website, and related services (collectively, the “Services”). It applies whenever you play, make a purchase, contact us, or otherwise use TapType.
              </p>
              <p>
                The information we process depends on the features you use. We aim to collect only what is reasonably necessary to provide a competitive, reliable typing-racing experience and to meet legal, security, and payment obligations.
              </p>
            </section>

            <section className="policy-section data-section" id="data">
              <SectionLabel number="02" label="Data we process" />
              <div className="section-heading-with-art">
                <div>
                  <h2>The data that keeps the race running.</h2>
                  <p>TapType may process the following categories of information, depending on how you use the Services.</p>
                </div>
                <img src="/manus-storage/taptype-data-care_71727ea9.png" alt="Abstract cards representing protected account, game, and payment data" />
              </div>
              <div className="data-map">
                {dataMap.map(({ icon: Icon, title, text }, index) => (
                  <div className="data-row" key={title}>
                    <span className="data-number">0{index + 1}</span>
                    <span className="data-icon"><Icon size={20} /></span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
              <p className="fine-print">
                We do not ask you to provide full payment-card numbers directly to TapType. Stripe collects and processes payment information under its own privacy terms when you complete a purchase.
              </p>
            </section>

            <section className="policy-section" id="use">
              <SectionLabel number="03" label="How we use data" />
              <h2>We use information to run the game—not to slow you down.</h2>
              <div className="split-copy">
                <p>TapType uses information to create and maintain accounts, connect players to races, calculate results and leaderboards, process purchases, respond to support requests, protect against abuse or cheating, fix technical issues, and comply with legal obligations.</p>
                <p>We may also use aggregated or de-identified information to understand how the Services perform and to improve gameplay. We do not use your payment-card details for this purpose.</p>
              </div>
            </section>

            <section className="policy-section" id="providers">
              <SectionLabel number="04" label="Service providers & sharing" />
              <h2>The partners on our service route.</h2>
              <p>We use vetted providers to run essential parts of TapType. We share information only as needed for the provider to perform services for us, to comply with law, or with your direction.</p>
              <div className="provider-table" role="table" aria-label="Key service providers">
                <div className="provider-head" role="row"><span role="columnheader">Provider</span><span role="columnheader">Role</span><span role="columnheader">Data purpose</span></div>
                <div className="provider-row" role="row"><strong role="cell">Supabase</strong><span role="cell">Data infrastructure</span><span role="cell">Stores and retrieves account, gameplay, and service data needed to operate TapType.</span></div>
                <div className="provider-row" role="row"><strong role="cell">Stripe</strong><span role="cell">Payments</span><span role="cell">Processes purchases and sends TapType the payment status and transaction information needed to fulfill them.</span></div>
                <div className="provider-row" role="row"><strong role="cell">Google Play</strong><span role="cell">Distribution</span><span role="cell">Provides the app marketplace and handles information as described in Google’s own privacy documentation.</span></div>
              </div>
              <p>TapType does not sell personal information. We do not share personal information for another company’s independent marketing use.</p>
            </section>

            <section className="policy-section" id="choices">
              <SectionLabel number="05" label="Your choices & retention" />
              <h2>Your account, your call.</h2>
              <div className="choice-panel">
                <div><Trash2 size={21} /><h3>Account deletion</h3><p>You may request deletion of your TapType account and associated data. Start with the account-deletion guide, which explains the verification needed to protect your account.</p></div>
                <a href="/account-deletion" className="outline-link">Open deletion guide <ArrowUpRight size={16} /></a>
              </div>
              <p>We retain information only for as long as needed for the purposes described here, including to deliver the Services, resolve disputes, maintain security, meet recordkeeping obligations, and enforce our agreements. We may retain limited information when required or permitted by law, including information needed to prevent fraud or abuse.</p>
            </section>

            <section className="policy-section" id="security">
              <SectionLabel number="06" label="Security, children & updates" />
              <h2>Keeping the route protected.</h2>
              <p>We use reasonable technical and organizational safeguards designed to protect information in transit and at rest. No service can guarantee absolute security; please use a unique password where TapType offers account sign-in and contact us promptly if you believe your account is compromised.</p>
              <p>TapType is not directed to children under the age at which parental consent is required in their location. If we learn that we collected personal information from a child without appropriate authorization, we will take steps to delete it. Parents or guardians can contact the privacy channel identified in TapType’s Google Play listing with related questions.</p>
              <p>We may update this policy as TapType evolves. When a change is material, we will provide notice in the Services or by another appropriate method before it takes effect. The “Effective” date at the top identifies the latest version.</p>
            </section>

            <section className="contact-panel" aria-labelledby="contact-title">
              <CircleHelp size={21} />
              <div><p className="eyebrow">Questions or requests</p><h2 id="contact-title">Use TapType’s listed privacy contact.</h2><p>For privacy questions, data requests, or account deletion, contact the developer through the support email shown on TapType’s Google Play store listing. Please include the account information needed to identify your request, but do not send passwords or payment-card information.</p></div>
            </section>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#overview"><Mark /><span className="brand-name">TapType</span></a>
        <p>Competitive typing, clear data practices.</p>
        <a href="/account-deletion">Account deletion <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <p className="section-label"><span>{number}</span>{label}</p>;
}
