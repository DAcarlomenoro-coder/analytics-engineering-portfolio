import Image from "next/image";
import { site } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Avatar({ size = 96 }: { size?: number }) {
  if (site.photo) {
    return (
      <Image
        src={site.photo}
        alt={site.name}
        width={size}
        height={size}
        className="rounded-2xl border border-border object-cover"
        priority
      />
    );
  }

  // No headshot on file yet — render a clean initials placeholder rather
  // than a fabricated photo. Drop a real image at public/photo.jpg and set
  // site.photo in lib/content.ts to replace this.
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-2xl border border-border bg-surface-strong font-mono text-2xl font-medium tracking-wide text-muted"
      aria-label={`${site.name} — photo not yet added`}
      role="img"
    >
      {initials(site.name)}
    </div>
  );
}
