/**
 * Pit-Lane Paper design reminder: deletion guidance uses the same accessible,
 * route-marked editorial document system as the main privacy policy.
 */
import { ArrowLeft, BadgeCheck, Flag, LockKeyhole, Trash2 } from "lucide-react";

export default function AccountDeletion() {
  const homePath = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/`;

  return (
    <div className="policy-shell deletion-page">
      <header className="site-header"><a className="back-link" href={homePath}><ArrowLeft size={17} /> Back to privacy policy</a></header>
      <main className="deletion-main">
        <div className="deletion-side"><span className="deletion-icon"><Trash2 size={26} /></span><p className="eyebrow"><Flag size={15} fill="currentColor" /> Account deletion</p><h1>Leaving the race?<br />Here’s the clear route.</h1></div>
        <article className="deletion-card">
          <p className="section-label"><span>01</span>Start in the app</p>
          <h2>Use the account-deletion option inside TapType.</h2>
          <p>TapType provides an account-deletion option within the application. Use that feature to request deletion of your account. If you need help with a request, email <a className="inline-link" href="mailto:albaphetsoup@gmail.com">albaphetsoup@gmail.com</a> and include your TapType account name.</p>
          <div className="deletion-steps"><div><b>1</b><span><strong>Identify the account</strong> Provide enough information for TapType to locate the account. Do not send a password or payment-card details.</span></div><div><b>2</b><span><strong>Verify the request</strong> TapType may ask for reasonable verification to help prevent an unauthorized deletion.</span></div><div><b>3</b><span><strong>Delete eligible data</strong> Once verified, TapType deletes or anonymizes associated personal information where reasonably possible.</span></div></div>
          <div className="deletion-note"><LockKeyhole size={19} /><p><strong>What may be retained.</strong> Limited information may remain where needed for legal compliance, fraud prevention, security, dispute resolution, other legitimate purposes, or normal backup replacement.</p></div>
          <div className="deletion-note"><BadgeCheck size={19} /><p><strong>What you may lose.</strong> Account deletion may remove saved progression, Notes, rankings, cosmetics, achievements, TapType+ entitlement information, and other account-associated content. Deleting an account does not automatically cancel an active Google Play subscription.</p></div>
        </article>
      </main>
      <footer className="site-footer"><a href={homePath}>TapType Privacy Policy</a><p>Account deletion resource</p></footer>
    </div>
  );
}
