"use client";
import { useLanguage } from "@/contexts/LanguageContext";
export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-0.5">
      {(["bm", "en"] as const).map(l => (
        <button key={l} onClick={() => setLang(l)}
          className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-colors ${lang === l ? "bg-yellow-500 text-black" : "text-white/60 hover:text-white"}`}>
          {l === "bm" ? "BM" : "EN"}
        </button>
      ))}
    </div>
  );
}
