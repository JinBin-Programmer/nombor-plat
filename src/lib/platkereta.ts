export interface PlateInfo {
  state: string;
  stateEn: string;
  stateCode: string;
  isValid: boolean;
  type: "standard" | "special" | "unknown";
  note?: string;
}

const PLATE_PREFIXES: { prefix: string; state: string; stateEn: string; code: string }[] = [
  // Kuala Lumpur & Putrajaya
  { prefix: "W",  state: "Kuala Lumpur",      stateEn: "Kuala Lumpur",      code: "KUL" },
  { prefix: "F",  state: "Putrajaya",          stateEn: "Putrajaya",          code: "PJY" },
  // Selangor (many series)
  { prefix: "A",  state: "Selangor",           stateEn: "Selangor",           code: "SGR" },
  { prefix: "B",  state: "Selangor",           stateEn: "Selangor",           code: "SGR" },
  { prefix: "S",  state: "Selangor",           stateEn: "Selangor",           code: "SGR" },
  // Johor
  { prefix: "J",  state: "Johor",              stateEn: "Johor",              code: "JHR" },
  // Kedah
  { prefix: "K",  state: "Kedah",              stateEn: "Kedah",              code: "KDH" },
  // Kelantan
  { prefix: "D",  state: "Kelantan",           stateEn: "Kelantan",           code: "KTN" },
  // Labuan
  { prefix: "L",  state: "Labuan",             stateEn: "Labuan",             code: "LBN" },
  // Melaka
  { prefix: "M",  state: "Melaka",             stateEn: "Melaka",             code: "MLK" },
  // Negeri Sembilan
  { prefix: "N",  state: "Negeri Sembilan",    stateEn: "Negeri Sembilan",    code: "NSN" },
  // Pahang
  { prefix: "C",  state: "Pahang",             stateEn: "Pahang",             code: "PHG" },
  // Penang
  { prefix: "P",  state: "Pulau Pinang",       stateEn: "Penang",             code: "PNG" },
  // Perak
  { prefix: "R",  state: "Perak",              stateEn: "Perak",              code: "PRK" },
  // Perlis
  { prefix: "KA", state: "Perlis",             stateEn: "Perlis",             code: "PLS" },
  // Sabah
  { prefix: "SA", state: "Sabah",              stateEn: "Sabah",              code: "SBH" },
  { prefix: "SB", state: "Sabah",              stateEn: "Sabah",              code: "SBH" },
  { prefix: "Y",  state: "Sabah",              stateEn: "Sabah",              code: "SBH" },
  { prefix: "Z",  state: "Sabah",              stateEn: "Sabah",              code: "SBH" },
  // Sarawak
  { prefix: "Q",  state: "Sarawak",            stateEn: "Sarawak",            code: "SWK" },
  // Terengganu
  { prefix: "T",  state: "Terengganu",         stateEn: "Terengganu",         code: "TRG" },
];

const SPECIAL_PREFIXES = ["1", "V", "VIP", "VVV", "TRK"];

export function decodePlate(plateRaw: string): PlateInfo {
  const plate = plateRaw.toUpperCase().replace(/\s+/g, "").replace(/-/g, "");
  if (!plate) return { state: "-", stateEn: "-", stateCode: "-", isValid: false, type: "unknown" };

  // Check special/custom plates
  if (/^\d/.test(plate) || SPECIAL_PREFIXES.some(s => plate.startsWith(s))) {
    return { state: "Plat Khas / Custom", stateEn: "Special / Custom Plate", stateCode: "X", isValid: true, type: "special" };
  }

  // Try longest prefix match first (e.g. "KA" before "K", "SA" before "S")
  const sorted = [...PLATE_PREFIXES].sort((a, b) => b.prefix.length - a.prefix.length);
  const match = sorted.find(p => plate.startsWith(p.prefix));

  if (match) {
    return { state: match.state, stateEn: match.stateEn, stateCode: match.code, isValid: true, type: "standard" };
  }

  return { state: "Tidak dikenal pasti", stateEn: "Unrecognised", stateCode: "?", isValid: false, type: "unknown" };
}
