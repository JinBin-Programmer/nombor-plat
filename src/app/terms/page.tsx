import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terma Penggunaan — Semak Plat MY" };
export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Terma Penggunaan / Terms of Use</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Maklumat yang dipaparkan adalah berdasarkan kod plat awam yang diketahui umum dan adalah untuk tujuan rujukan sahaja. Kami tidak mempunyai akses kepada pangkalan data JPJ.</p>
        <p>Information displayed is based on publicly known plate codes and is for reference only. We do not have access to JPJ databases. For official vehicle information, use the JPJ portal.</p>
      </div>
    </div>
  );
}
