/**
 * Pit-Lane Paper design reminder: deletion guidance uses the same accessible,
 * calmly confident editorial route as the main policy—clarity over decoration.
 */
import { ArrowLeft, BadgeCheck, Flag, LockKeyhole, Trash2 } from "lucide-react";

export default function AccountDeletion() {
  return (
    <div className="policy-shell deletion-page">
      <header className="site-header"><a className="back-link" href="/"><ArrowLeft size={17} /> Back to privacy policy</a></header>
      <main className="deletion-main">
        <div className="deletion-side"><span className="deletion-icon"><Trash2 size={26} /></span><p className="eyebrow"><Flag size={15} fill="currentColor" /> Account deletion</p><h1>Leaving the race?<br />Here’s the clear route.</h1></div>
        <article className="deletion-card">
          <p className="section-label"><span>01</span>Start a request</p>
          <h2>Request deletion through TapType’s listed support channel.</h2>
          <p>Send an account-deletion request to the developer support email displayed on the TapType Google Play store listing. Include your TapType account name and the email address connected to the account, if one is used.</p>
          <div className="deletion-steps">
            <div><b>1</b><span><strong>Identify the account</strong> Include enough information for us to locate your account without sharing a password or payment-card details.</span></div>
            <div><b>2</b><span><strong>Verify the request</strong> We may ask for reasonable verification to help prevent an unauthorized deletion.</span></div>
            <div><b>3</b><span><strong>Delete eligible data</strong> Once verified, we delete the account and associated data, except information we are permitted or required to retain.</span></div>
          </div>
          <div className="deletion-note"><LockKeyhole size={19} /><p><strong>What may be retained.</strong> Limited information may remain where needed for security, fraud prevention, dispute resolution, payment records, or legal compliance. We retain it only for the applicable purpose and period.</p></div>
          <div className="deletion-note"><BadgeCheck size={19} /><p><strong>Use the real privacy contact.</strong> The TapType Google Play listing should display a working developer-support email before this page is linked from Play Console.</p></div>
        </article>
      </main>
      <footer className="site-footer"><a href="/">TapType Privacy Policy</a><p>Account deletion resource</p></footer>
    </div>
  );
}
