import { readFileSync } from "node:fs";
import { join } from "node:path";
import Script from "next/script";

const embedSource = readFileSync(join(process.cwd(), "public", "flodesk-embed.html"), "utf8");
const secondScriptStart = embedSource.lastIndexOf("<script>");
const firstScriptStart = embedSource.lastIndexOf("<script>", secondScriptStart - 1);

if (firstScriptStart < 0 || secondScriptStart < 0) throw new Error("Flodesk embed scripts are missing.");

const markup = embedSource.slice(0, firstScriptStart);
const scripts = Array.from(embedSource.slice(firstScriptStart).matchAll(/<script>([\s\S]*?)<\/script>/g), (match) => match[1]);

if (scripts.length !== 2) throw new Error("Flodesk embed must contain its original two scripts.");

export default function FlodeskEmbed() {
  return <div className="flodesk-host"><div dangerouslySetInnerHTML={{ __html: markup }} /><Script id="flodesk-loader" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: scripts[0] }} /><Script id="flodesk-handler" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: scripts[1] }} /></div>;
}
