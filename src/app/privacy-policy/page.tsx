import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dasar Privasi — Semak Plat MY" };
export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Dasar Privasi / Privacy Policy</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Nombor plat yang anda masukkan tidak disimpan atau dihantar ke mana-mana pelayan. Semua pemprosesan berlaku dalam pelayar anda.</p>
        <p>Plate numbers you enter are not stored or sent to any server. All processing happens in your browser.</p>
        <p className="text-white/40 text-xs">Dikemas kini: Mei 2026 / Updated: May 2026</p>
      </div>
    </div>
  );
}
