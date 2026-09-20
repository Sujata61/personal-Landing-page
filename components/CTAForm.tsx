"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Values = { name: string; email: string; whatsapp: string; business: string; url: string; message: string };
const initial: Values = { name: "", email: "", whatsapp: "", business: "", url: "", message: "" };

export default function CTAForm() {
  const [values, setValues] = useState(initial); const [errors, setErrors] = useState<Partial<Values>>({}); const router = useRouter();
  const update = (key: keyof Values, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const submit = (e: FormEvent) => { e.preventDefault(); const next: Partial<Values> = {}; if (!values.name.trim()) next.name = "Please enter your full name."; if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address."; if (!values.whatsapp.trim()) next.whatsapp = "Please enter your WhatsApp number."; if (!values.business.trim()) next.business = "Please enter your business name."; setErrors(next); if (!Object.keys(next).length) router.push("/thank-you"); };
  const input = (key: keyof Values, label: string, placeholder: string, type = "text") => <label><span>{label}{key !== "url" && <b> *</b>}</span><input type={type} value={values[key]} onChange={(e) => update(key, e.target.value)} placeholder={placeholder} aria-invalid={!!errors[key]} />{errors[key] && <small>{errors[key]}</small>}</label>;
  return <section id="book-call" className="form-section"><div className="form-intro"><div className="section-label">Book the call</div><h2>One-to-One Consultation</h2><p>Get focused guidance based on your business and current marketing situation.</p><div className="strategy-card"><span>✦</span><div><h3>Customized Strategy for Your Business</h3><p>Get a clear AI-powered marketing plan designed around your business.</p></div></div></div><form onSubmit={submit} noValidate><div className="form-heading"><h3>Let&apos;s talk about your business.</h3><p>Tell us a little about where you are today.</p></div>{input("name", "Full Name", "Enter your full name")}{input("email", "Active Email", "Enter your active email", "email")}{input("whatsapp", "WhatsApp Number", "Enter your WhatsApp number", "tel")}{input("business", "Business Name", "Enter your business name")}{input("url", "Website or Facebook URL", "Enter your website or Facebook URL", "url")}<label><span>Anything You Want to Say</span><textarea value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your business or marketing challenge" rows={4} /></label><button className="button form-button" type="submit">Book Free Consultation <span>→</span></button><p className="privacy">🔒 We respect your privacy. No spam.</p></form></section>;
}
