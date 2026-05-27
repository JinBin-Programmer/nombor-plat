import type { Metadata } from "next";
import PlatDecoder from "@/components/PlatDecoder";

export const metadata: Metadata = {
  title: "Semak Nombor Plat Kereta Malaysia — Decode Negeri & Kawasan",
  description: "Masukkan nombor plat kereta untuk mengetahui negeri dan kawasan. WA = KL, B = Selangor, J = Johor dan lebih banyak lagi. Semak kod plat JPJ Malaysia.",
};

export default function HomePage() {
  return <PlatDecoder />;
}
