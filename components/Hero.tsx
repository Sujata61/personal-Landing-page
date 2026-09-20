"use client";

export default function Hero() {
  const scrollToForm = () => document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
  return <section id="top" className="hero"><div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="eyebrow">Free AI Marketing Consultation</div><h1>Stop Guessing. Get a <em>Clear Marketing Plan</em> for Your Business.</h1><p className="hero-lead">Get a free, customized AI-powered marketing plan to help you identify what you should focus on to attract and convert more customers.</p><button className="button" onClick={scrollToForm}>Book Free Consultation <span>→</span></button><p className="microcopy">A focused one-to-one consultation for your business.</p></section>;
}
