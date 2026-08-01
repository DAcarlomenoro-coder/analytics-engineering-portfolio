import { CertificationCard, FutureCredentialCard } from "@/components/certifications/CertificationCard";
import {
  badgesAchievements,
  badgesAchievementsFuture,
  certifications,
  futureCredentials,
  professionalLearning,
  professionalLearningFuture,
} from "@/lib/content";

export function CredentialsHub() {
  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-lg font-semibold text-foreground">🎓 Certifications</h2>
        <p className="mt-1 text-sm text-muted">
          Each card links to a full page — badge, provider, dates, skills validated, what I learned, and where it
          shows up in my actual work.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <CertificationCard key={c.slug} cert={c} />
          ))}
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {futureCredentials.map((f) => (
            <FutureCredentialCard key={f.provider} provider={f.provider} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground">📚 Professional Learning</h2>
        <p className="mt-1 text-sm text-muted">Programs and self-directed learning, distinct from formal certifications above.</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {professionalLearning.map((item) => (
            <li key={item} className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted">
              {item}
            </li>
          ))}
          {professionalLearningFuture.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between rounded-lg border border-dashed border-border px-4 py-3 text-sm text-muted"
            >
              {item}
              <span className="font-mono text-[11px] tracking-wide text-muted/70 uppercase">Planned</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground">🏅 Badges &amp; Achievements</h2>
        <p className="mt-1 text-sm text-muted">Earned recognitions beyond formal certificates.</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {badgesAchievements.map((b) => (
            <li key={b.name} className="rounded-lg border border-border bg-card px-4 py-3 text-sm">
              <span className="text-foreground">{b.name}</span>
              <span className="ml-2 text-xs text-muted">{b.note}</span>
            </li>
          ))}
          {badgesAchievementsFuture.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between rounded-lg border border-dashed border-border px-4 py-3 text-sm text-muted"
            >
              {item}
              <span className="font-mono text-[11px] tracking-wide text-muted/70 uppercase">Planned</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
