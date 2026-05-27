"use client";
interface AdBannerProps { slot: string; format?: string; className?: string; }
export default function AdBanner({ className = "" }: AdBannerProps) {
  return <div className={className} />;
}
