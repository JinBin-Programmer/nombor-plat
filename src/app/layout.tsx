import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://plat.themalaysianinfo.online"),
  title: { default: "Semak Nombor Plat Malaysia — Decode Plat Kereta", template: "%s — Semak Plat MY" },
  description: "Semak nombor plat kereta Malaysia — ketahui negeri dan kawasan dari kod plat. Decode Malaysian car plate number to find state and region. JPJ plate info.",
  keywords: ["semak nombor plat malaysia", "car plate malaysia", "nombor plat kereta", "plat kereta negeri", "decode plate number malaysia", "jpj plate"],
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚗</text></svg>" },
  openGraph: { type: "website", locale: "ms_MY", siteName: "Semak Nombor Plat Malaysia" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
                <span className="text-2xl">🚗</span>
                <div>
                  <div className="leading-none">Semak Plat MY</div>
                  <div className="text-[10px] text-white/40 font-normal leading-none">Malaysia Plate Decoder</div>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-white/60">
                  <Link href="/" className="hover:text-white transition-colors">Semak</Link>
                  <Link href="/about" className="hover:text-white transition-colors">Tentang</Link>
                </div>
                <LanguageToggle />
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/30 space-y-1">
            <p>Maklumat negeri dari kod plat JPJ · State information from JPJ plate codes</p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link href="/about" className="hover:text-white">Tentang / About</Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-white">Privasi / Privacy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white">Terma / Terms</Link>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} Semak Plat MY · Untuk rujukan sahaja / For reference only</p>
          </footer>

        {/* ── The Malaysian Info Hub Banner ── */}
        <a
          href="https://www.themalaysianinfo.online"
          target="_blank"
          rel="noopener noreferrer"
          style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",width:"100%",background:"rgba(100,0,0,0.28)",borderTop:"1px solid rgba(180,40,40,0.2)",padding:"10px 16px",fontSize:"11px",color:"rgba(255,255,255,0.42)",textDecoration:"none"}}
        >
          <span>&#x1F1F2;&#x1F1FE;</span>
          <strong style={{color:"rgba(240,110,110,0.85)",fontWeight:600,fontStyle:"normal"}}>The Malaysian Info</strong>
          <span>&middot;</span>
          <span>Terokai 27 alatan percuma lagi &#x2192;</span>
        </a>
        </LanguageProvider>
      </body>
    </html>
  );
}
