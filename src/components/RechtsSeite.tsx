import type { ReactNode } from "react";

import { content } from "~/content";

// Gemeinsames Gerüst für die Rechts-Seiten (Impressum, Datenschutz).
export function RechtsSeite({
  titel,
  hinweis,
  children,
}: {
  titel: string;
  hinweis: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-ink-950">
      <header className="border-b border-white/10 px-5 py-4 sm:px-8">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4">
          <a href="/" className="flex flex-col leading-none">
            <span className="text-base font-black tracking-tight">{content.marke.name}</span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              {content.marke.business}
            </span>
          </a>
          <a href="/" className="kk-btn kk-btn-sekundaer !px-4 !py-2.5 !text-sm">
            Zurück zur Startseite
          </a>
        </div>
      </header>

      <main className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-3xl">
          <p className="kk-eyebrow mb-3">Rechtliches</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{titel}</h1>

          {/* Hinweis-Kasten nur, solange der Text noch nicht vollständig ist.
              Ist "hinweis" leer, wird nichts angezeigt. */}
          {hinweis ? (
            <p className="mt-6 rounded-xl border border-dashed border-accent/40 bg-accent/5 p-4 text-sm leading-relaxed text-accent">
              {hinweis}
            </p>
          ) : null}

          <div className="mt-8">{children}</div>
        </div>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <p className="rounded-xl border border-white/10 bg-ink-850 p-4 text-xs leading-relaxed text-fg-muted">
            <strong className="font-bold text-fg">Gesundheitshinweis:</strong> {content.footer.disclaimer}
          </p>
          <nav aria-label="Rechtliche Links" className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a href="/impressum" className="text-sm font-semibold text-fg-muted hover:text-fg">
              Impressum
            </a>
            <a href="/datenschutz" className="text-sm font-semibold text-fg-muted hover:text-fg">
              Datenschutz
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
