import type { Metadata } from "next";
export const metadata: Metadata = { title: "Tentang Semak Nombor Plat Malaysia" };
export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Tentang / About</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p><strong className="text-white">Semak Nombor Plat Malaysia</strong> membantu anda mengenal pasti negeri dan kawasan dari nombor plat kenderaan Malaysia berdasarkan kod huruf di hadapan plat.</p>
        <p><strong className="text-white">Malaysia Plate Decoder</strong> helps you identify the state and region from a Malaysian vehicle plate number based on the letter codes at the front of the plate.</p>
        <p className="text-yellow-400/70 text-xs">Untuk maklumat pemilik atau status kenderaan, sila gunakan portal rasmi JPJ. / For owner information or vehicle status, please use the official JPJ portal.</p>
      </div>
    </div>
  );
}
