import FlodeskEmbed from "@/components/FlodeskEmbed";

export default function CTAForm() {
  return <section id="book-call" className="form-section"><div className="form-intro"><div className="section-label">Book the call</div><h2>One-to-One Consultation</h2><p>Get focused guidance based on your business and current marketing situation.</p><div className="strategy-card"><span>✦</span><div><h3>Customized Strategy for Your Business</h3><p>Get a clear AI-powered marketing plan designed around your business.</p></div></div></div><div className="flodesk-card"><div className="form-heading"><h3>Let&apos;s talk about your business.</h3><p>Tell us a little about where you are today.</p></div><FlodeskEmbed /><p className="privacy">🔒 We respect your privacy. No spam.</p></div></section>;
}
