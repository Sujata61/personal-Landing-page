import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Sujata | Free AI Marketing Consultation",
  description: "Get a clear, customized AI-powered marketing plan for your business.",
  openGraph: { title: "Free AI Marketing Consultation | Digital Sujata", description: "Get a clear, customized AI-powered marketing plan for your business.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
