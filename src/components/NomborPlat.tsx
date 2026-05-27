"use client";

import { useState, useMemo } from "react";
import { decodePlate } from "@/lib/platkereta";

const STATE_FLAGS: Record<string, string> = {
  KUL: "🏙️", PJY: "🏛️", SGR: "🌊", JHR: "🦁", KDH: "🌾", KTN: "🏕️",
  LBN: "🏝️", MLK: "⛵", NSN: "🦅", PHG: "🐻", PNG: "🌉", PRK: "🏔️",
  PLS: "👑", SBH: "🌴", SWK: "🦜", TRG: "🐢", "?": "❓", X: "⭐",
};

const POPULAR_PLATES = ["W", "WA", "WB", "WD", "B", "BG", "J", "JA", "JB", "P", "PA", "K", "D", "C", "T", "N", "M", "Q", "SA", "Y", "L", "F", "R"];

export default function NomborPlat() {
  const [plate, setPlate] = useState("WXX1234A");
  const [lang, setLang] = useState<"bm" | "en">("bm");

  const result = useMemo(() => decodePlate(plate), [plate]);
  const emoji = STATE_FLAGS[result.stateCode] ?? "🚗";

  const t = {
    bm: {
      title: "🚘 Semak Nombor Plat Kereta",
      subtitle: "Ketahui negeri asal nombor plat kenderaan Malaysia",
      inputLabel: "Nombor Plat",
      placeholder: "Contoh: WXX1234A",
      state: "Negeri",
      type: "Jenis Plat",
      standard: "Biasa", special: "Khas / Custom", unknown: "Tidak dikenal pasti",
      popularPrefix: "Awalan Popular",
      note: "* Berdasarkan awalan nombor plat JPJ Malaysia. Nombor siri khusus mungkin berbeza.",
    },
    en: {
      title: "🚘 Malaysia Car Plate Checker",
      subtitle: "Find out which state a Malaysia vehicle plate is from",
      inputLabel: "Plate Number",
      placeholder: "e.g. WXX1234A",
      state: "State",
      type: "Plate Type",
      standard: "Standard", special: "Special / Custom", unknown: "Unrecognised",
      popularPrefix: "Popular Prefixes",
      note: "* Based on JPJ Malaysia plate prefixes. Special series may differ.",
    },
  };
  const s = t[lang];

  return (
    <div className="min-h-screen">
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 space-y-6">

          <div className="animate-in text-center space-y-2 pt-4">
            <h1 className="text-3xl font-black text-white drop-shadow-lg">{s.title}</h1>
            <p className="text-white/60 text-sm">{s.subtitle}</p>
            <div className="flex justify-center mt-3">
              <div className="flex gap-1 bg-white/10 rounded-lg p-0.5">
                {(["bm","en"] as const).map(l => (
                  <button key={l} onClick={() => setLang(l)}
                    className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-colors ${lang === l ? "bg-yellow-500 text-black" : "text-white/60 hover:text-white"}`}>
                    {l === "bm" ? "BM" : "EN"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="animate-in delay-1 card-glass rounded-2xl p-5 space-y-4">
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">{s.inputLabel}</label>
              <input
                type="text"
                value={plate}
                onChange={e => setPlate(e.target.value.toUpperCase())}
                placeholder={s.placeholder}
                maxLength={10}
                className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-2xl font-black tracking-widest uppercase focus:outline-none focus:border-yellow-400 placeholder:text-white/20"
              />
            </div>
            <div>
              <div className="text-xs text-white/40 mb-2">{s.popularPrefix}:</div>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_PLATES.map(p => (
                  <button key={p} onClick={() => setPlate(p + "1234")}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors font-mono">
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className={`animate-in delay-2 rounded-2xl p-6 text-center border ${result.isValid ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20" : "bg-red-900/10 border-red-500/20"}`}>
            <div className="text-6xl mb-3">{emoji}</div>
            <div className="text-3xl font-black text-white">
              {lang === "bm" ? result.state : result.stateEn}
            </div>
            <div className="text-white/40 text-sm mt-1">
              {s.type}: {result.type === "standard" ? s.standard : result.type === "special" ? s.special : s.unknown}
            </div>
            <div className="mt-3 font-mono text-2xl text-yellow-300 tracking-widest">{plate.toUpperCase()}</div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-10 bg-[#0a0a0a]">
        <p className="text-xs text-white/20 text-center px-4 py-6">{s.note}</p>
      </div>
    </div>
  );
}
