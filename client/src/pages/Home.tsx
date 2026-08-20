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
  Gamepad2,
  Keyboard,
  LockKeyhole,
  MessageCircleMore,
  ShieldCheck,
  Trash2,
  Trophy,
  UserRound,
  WalletCards,
} from "lucide-react";

const policySections = [
  ["01", "Accounts & profiles", "accounts"],
  ["02", "Gameplay & matches", "gameplay"],
  ["03", "Purchases & chat", "purchases"],
  ["04", "Providers & advertising", "providers"],
  ["05", "Use & sharing", "use-sharing"],
  ["06", "Retention & deletion", "retention"],
  ["07", "Rights & contact", "rights"],
] as const;

const overviewCards = [
  { icon: UserRound, title: "Account & public profile", text: "Username, account identifier, competitive profile, and the profile picture you choose to make public." },
  { icon: Trophy, title: "Competition & gameplay", text: "Match records, typed race input, WPM, accuracy, results, ratings, rewards, and matchmaking activity." },
  { icon: WalletCards, title: "Memberships & services", text: "TapType+ entitlement status, optional chat, analytics, advertising where enabled, and technical service data." },
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663901806309/UzvSwJoXrAQoxvvx.png" alt="" /></span>;
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <p className="section-label"><span>{number}</span>{label}</p>;
}

function DataList({ children }: { children: React.ReactNode }) {
  return <ul className="policy-data-list">{children}</ul>;
}

export default function Home() {
  const appPath = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

  return (
    <div className="policy-shell">
      <header className="site-header">
        <a className="brand" href="#accounts" aria-label="TapType privacy policy"><Mark /><span className="brand-name">TapType</span><span className="brand-divider" aria-hidden="true" /><span className="brand-page">Privacy Policy</span></a>
        <a className="header-action" href="#gameplay">Read the data map <ArrowDown size={15} strokeWidth={2.25} /></a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><Flag size={15} fill="currentColor" /> Privacy notice</div>
            <h1>Privacy, without<br />the pit stops.</h1>
            <p className="hero-intro">TapType is an online typing game developed and operated by TapType. This policy explains what we collect, how we use it, where it is stored, who may process it, and the choices available to you.</p>
            <div className="document-meta" aria-label="Document information"><span><b>Last updated</b> August 20, 2026</span><span><b>Account required</b> to play TapType</span></div>
          </div>
          <div className="hero-visual" aria-label="Abstract illustration of keyboard data moving safely through TapType" role="img"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663901806309/ScvfWEbDJegTsJdJ.png" alt="" /><span className="hero-stamp">Player data<br /><strong>on a clear route</strong></span></div>
        </section>

        <section className="quick-facts" aria-label="Privacy highlights">
          <div className="quick-fact"><Check size={18} /> A username and password are required; an email is not.</div>
          <div className="quick-fact"><Check size={18} /> Competitive data helps operate fair multiplayer races.</div>
          <div className="quick-fact"><Check size={18} /> You can delete your account in the app or contact us.</div>
        </section>

        <div className="document-layout">
          <aside className="policy-rail" aria-label="Privacy policy sections">
            <p className="rail-label">On this route</p>
            <nav>{policySections.map(([number, name, id]) => <a href={`#${id}`} key={id}><span>{number}</span>{name}<ChevronRight size={14} /></a>)}</nav>
            <a className="rail-deletion" href={appPath("/account-deletion")}><Trash2 size={15} /> Account deletion</a>
          </aside>

          <article className="policy-document">
            <section className="policy-section" id="accounts">
              <SectionLabel number="01" label="Accounts & public profiles" />
              <h2>The details that identify your player account.</h2>
              <p>TapType requires an account to play. When you create one, you provide a username and password. We do not require an email address to create an account. Each account is assigned a unique identifier that links your profile, statistics, matches, purchases, and other game information to your account.</p>
              <p>TapType does not intentionally store passwords in readable, plain-text form. Authentication is handled through the game’s authentication system.</p>
              <div className="account-grid">
                <div><UserRound size={20} /><h3>Account information</h3><DataList><li>Username</li><li>Password authentication data</li><li>Unique player account identifier</li></DataList></div>
                <div><Trophy size={20} /><h3>Player profile</h3><DataList><li>Rank, tier, Elo, WPM, accuracy, wins, losses, and progression</li><li>Notes balance, unlocked items, cosmetics, badges, and achievements</li><li>TapType+ status and the profile picture you choose to upload</li></DataList></div>
              </div>
              <div className="public-note"><CircleHelp size={19} /><p><strong>Public profile information.</strong> Your username and profile picture are visible to other TapType players and may be visible wherever TapType makes player information public. Do not use personally identifying or sensitive information in either if you do not want it publicly associated with your account.</p></div>
            </section>

            <section className="policy-section data-section" id="gameplay">
              <SectionLabel number="02" label="Gameplay, matchmaking & multiplayer" />
              <div className="section-heading-with-art"><div><h2>The data that keeps the race running.</h2><p>TapType records gameplay information to provide rankings, rewards, multiplayer matches, statistics, and other competitive features.</p></div><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663901806309/hzLyVlQwCxdskDtA.png" alt="Abstract cards representing protected account, game, and payment data" /></div>
              <div className="data-map">{overviewCards.map(({ icon: Icon, title, text }, index) => <div className="data-row" key={title}><span className="data-number">0{index + 1}</span><span className="data-icon"><Icon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
              <div className="detail-table" role="table" aria-label="Competitive data TapType may record">
                <div className="detail-head" role="row"><span role="columnheader">Feature</span><span role="columnheader">Information that may be recorded</span></div>
                <div className="detail-row" role="row"><strong role="cell">Typing races</strong><span role="cell">Match and round identifiers, player and opponent identifiers, phrase identifier, typed text, start and finish time, WPM, accuracy, faults, result, winner or loser information, Elo changes, Notes, rank or tier changes, and related statistics.</span></div>
                <div className="detail-row" role="row"><strong role="cell">Matchmaking</strong><span role="cell">Account identifier, phrase selected for matchmaking, queue-entry time, and the last activity or heartbeat associated with a queue entry.</span></div>
                <div className="detail-row" role="row"><strong role="cell">Multiplayer matches</strong><span role="cell">Both players’ account identifiers, positions, cosmetic display information, selected phrase, ready and match status, typed text, WPM, accuracy, faults, finish times, results, and rewards.</span></div>
              </div>
              <p>TapType may calculate important gameplay results on the server rather than relying entirely on a player’s device. This helps keep competitive results consistent and reduces opportunities for cheating or manipulation.</p>
            </section>

            <section className="policy-section" id="purchases">
              <SectionLabel number="03" label="TapType+, purchases, chat & photos" />
              <h2>Optional features, with their own clear lanes.</h2>
              <div className="split-copy"><p>TapType offers an optional paid subscription called TapType+. Purchases and subscriptions on the Android version are processed through Google Play Billing. TapType may receive the purchase information needed to determine whether your account has an active subscription and may store entitlement status so TapType+ features can be enabled.</p><p>Where purchases are offered outside Google Play, TapType uses Stripe to process payment transactions. TapType does not need to store your full credit-card or debit-card number to provide TapType+ through Google Play Billing or Stripe.</p></div>
              <div className="feature-tracks">
                <div><MessageCircleMore size={21} /><h3>TapType+ chat</h3><p>Chat may include your account identifier, participant identifiers, the message, date and time, and delivery information. Chat messages are automatically deleted after <strong>24 hours</strong>. We may process chat to investigate reported abuse, cheating, harassment, threats, or other rule violations.</p></div>
                <div><UserRound size={21} /><h3>Profile pictures</h3><p>TapType+ members may upload a profile picture. It is stored in TapType backend storage and remains associated with the account until replaced, removed, or the account is deleted, subject to normal backup and technical retention. Profile pictures are public and may be removed if they violate law, rules, or Terms of Service.</p></div>
              </div>
            </section>

            <section className="policy-section" id="providers">
              <SectionLabel number="04" label="Providers, analytics & advertising" />
              <h2>The services on our route.</h2>
              <p>TapType uses service providers to provide authentication, database storage, backend functions, file storage, subscription processing, analytics, advertising, security, and delivery. Providers may process information according to their own privacy policies and terms.</p>
              <div className="provider-table" role="table" aria-label="Key service providers"><div className="provider-head" role="row"><span role="columnheader">Provider</span><span role="columnheader">Role</span><span role="columnheader">Data purpose</span></div><div className="provider-row" role="row"><strong role="cell">Supabase</strong><span role="cell">Backend infrastructure</span><span role="cell">Authentication, database storage, backend functions, and file storage for account identifiers, profiles, statistics, matchmaking, match data, progression, entitlements, chat, and profile pictures.</span></div><div className="provider-row" role="row"><strong role="cell">Google Play &amp; Stripe</strong><span role="cell">Payments</span><span role="cell">Google Play Billing processes Android TapType+ purchases. Stripe processes transactions where purchases are offered outside Google Play. TapType receives the limited status and transaction information needed to provide an entitlement.</span></div><div className="provider-row" role="row"><strong role="cell">Google Analytics</strong><span role="cell">Analytics</span><span role="cell">May process app usage, interactions, device or app information, and technical information to understand feature use, diagnose problems, and improve TapType.</span></div><div className="provider-row" role="row"><strong role="cell">Google advertising</strong><span role="cell">Optional ads</span><span role="cell">When advertising is enabled, Google advertising technology may process device, app, advertising, interaction, advertising-identifier, and related technical information as permitted by applicable products and settings.</span></div></div>
              <p>TapType uses Supabase database security controls and access policies to limit access to protected records. Protected account and gameplay records are not intended to be freely accessible to other players simply by requesting another player’s database record. Usernames and profile pictures are examples of information TapType intentionally makes public.</p>
              <p>TapType does not intentionally store IP addresses as part of its player database. The Services and their providers may nevertheless process limited technical information necessary for operation, security, authentication, analytics, advertising, or delivery, including device type, operating-system information, app version, connection information, anonymous or pseudonymous identifiers, advertising identifiers where applicable, and basic diagnostic or performance information.</p>
              <div className="exclusion-panel"><ShieldCheck size={21} /><div><h3>Information we do not intentionally collect</h3><p>TapType does not require your real name or email address, and does not intentionally collect precise GPS location, contacts, your phone’s photo library, private messages, call history, microphone recordings, camera recordings, browsing history outside TapType, or a full payment-card number. A profile picture is the exception for a voluntarily uploaded photograph.</p></div></div>
            </section>

            <section className="policy-section" id="use-sharing">
              <SectionLabel number="05" label="How we use & share information" />
              <h2>We use information to operate a fair game.</h2>
              <p>TapType uses information to create and maintain accounts, authenticate players, save progression, run matchmaking, create and operate multiplayer matches, provide typing races, calculate WPM, accuracy and Elo, maintain ranks and leaderboards, record results, award Notes and other rewards, maintain unlocked content, provide TapType+ features and chat, store public profile pictures, detect cheating and manipulated results, investigate abuse, protect accounts, diagnose technical problems, understand general use, improve the game, display advertisements when enabled, and maintain subscription entitlements.</p>
              <p>TapType does not sell personal information. Information may be processed by service providers necessary to operate TapType, including Supabase, Google Play, Stripe, Google Analytics, Google advertising services when ads are enabled, and other providers added when necessary to operate, secure, or improve the Service.</p>
              <p>We may also disclose information when reasonably necessary to comply with applicable law or valid legal requests; protect TapType or its users; investigate fraud, cheating, abuse, or harassment; protect Service security; enforce our Terms of Service; or prevent serious harm or illegal activity.</p>
            </section>

            <section className="policy-section" id="retention">
              <SectionLabel number="06" label="Security, retention & deletion" />
              <h2>Keeping the route protected—and giving you an exit.</h2>
              <p>TapType uses reasonable technical and organizational measures to protect account information. Our backend uses authentication and database access controls to restrict unauthorized access to protected information. We also use server-side processing for certain multiplayer and scoring operations to reduce opportunities for competitive manipulation. No online service can guarantee complete security, so choose a strong password and keep account credentials private.</p>
              <p>We keep information for as long as reasonably necessary to provide TapType. Account and progression information may remain while an account is active. Game results, statistics, rankings, and similar information may be retained to maintain leaderboards, rankings, and competitive history. Chat messages are automatically deleted after 24 hours. Profile pictures remain until replaced, removed, or the account is deleted, subject to normal technical and backup retention.</p>
              <div className="choice-panel"><div><Trash2 size={21} /><h3>Delete from inside the game</h3><p>TapType provides an account-deletion option within the application. You can use it to request deletion of your account. Once deleted, we will delete or anonymize associated personal information where reasonably possible.</p></div><a href={appPath("/account-deletion")} className="outline-link">Open deletion guide <ArrowUpRight size={16} /></a></div>
              <p>Deletion may remove account and profile information, profile pictures, TapType+ entitlement information, gameplay information, and chat not already deleted. It may also cause loss of saved progression, Notes, rankings, cosmetics, achievements, and other account-associated content. Limited information may be retained where reasonably necessary for legal compliance, fraud prevention, security, dispute resolution, other legitimate purposes, or normal backup replacement. Deleting your account does not necessarily cancel a Google Play subscription; active TapType+ subscriptions may need to be cancelled separately through Google Play.</p>
            </section>

            <section className="policy-section" id="rights">
              <SectionLabel number="07" label="Privacy rights, updates & contact" />
              <h2>Your questions deserve a direct response.</h2>
              <p>Depending on where you live, applicable privacy law may give you rights to request access to personal information, correction of inaccurate information, deletion, an explanation of how information is used, an objection to certain processing, a restriction on certain processing, or a copy of certain information where applicable. We may need to verify that you control the relevant TapType account before completing a request.</p>
              <p>TapType may update this policy when the game changes, new features or providers are introduced, or legal requirements change. When we update it, we will change the “Last updated” date. For significant changes, we may provide additional notice in the application or by another appropriate method.</p>
            </section>

            <section className="contact-panel" aria-labelledby="contact-title"><CircleHelp size={21} /><div><p className="eyebrow">Questions or requests</p><h2 id="contact-title">Contact TapType directly.</h2><p>For questions, concerns, privacy-rights requests, or account deletion support, email <a href="mailto:albaphetsoup@gmail.com">albaphetsoup@gmail.com</a>. Include the information needed to identify your TapType account, but do not send passwords or payment-card information.</p></div></section>
          </article>
        </div>
      </main>

      <footer className="site-footer"><a className="brand" href="#top"><Mark /><span className="brand-name">TapType</span></a><p>Competitive typing, clear data practices.</p><a href={appPath("/account-deletion")}>Account deletion <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
