import { createFileRoute } from "@tanstack/react-router";

import { Foto } from "~/components/Foto";
import { content, istPlatzhalterLink } from "~/content";

export const Route = createFileRoute("/")({
  component: Startseite,
});

// ---------------------------------------------------------------------------
// Wiederverwendbare Bausteine
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
    >
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

function Abschnitt({
  id,
  eyebrow,
  ueberschrift,
  einleitung,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  ueberschrift: string;
  einleitung?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8 sm:mb-10">
          {eyebrow ? <p className="kk-eyebrow mb-3">{eyebrow}</p> : null}
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{ueberschrift}</h2>
          {einleitung ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {einleitung}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Die Seite
// ---------------------------------------------------------------------------

function Startseite() {
  const { marke, navigation, hero, transformation, leistungen, ueberMich, faq, kontakt, footer } =
    content;

  return (
    <div className="min-h-dvh bg-ink-950">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-black"
      >
        Zum Inhalt springen
      </a>

      {/* Kopfzeile ------------------------------------------------------- */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#inhalt" className="flex flex-col leading-none">
            <span className="text-base font-black tracking-tight sm:text-lg">{marke.name}</span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              {marke.business}
            </span>
          </a>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 md:flex">
            {navigation.links.map((l) => (
              <a
                key={l.ziel}
                href={l.ziel}
                className="text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
              >
                {l.text}
              </a>
            ))}
          </nav>

          <a href={navigation.ctaZiel} className="kk-btn kk-btn-primaer !px-4 !py-2.5 !text-sm">
            {navigation.ctaText}
          </a>
        </div>
      </header>

      <main id="inhalt">
        {/* 1. HERO ------------------------------------------------------- */}
        <section className="relative overflow-hidden px-5 pt-12 pb-14 sm:px-8 sm:pt-20 sm:pb-20">
          {/* Dekorativer Farbschleier — rein visuell, für Screenreader versteckt */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-6xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-bold tracking-wide text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {hero.badge}
            </p>

            <h1 className="text-4xl leading-[1.05] font-black tracking-tight sm:text-6xl">
              <span className="block text-fg-muted text-xl font-bold tracking-[0.2em] uppercase sm:text-2xl">
                {marke.name}
              </span>
              <span className="mt-3 block">{hero.ueberschrift}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {hero.untertext}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.text}
                  href={cta.ziel}
                  className={`kk-btn ${cta.stil === "primaer" ? "kk-btn-primaer" : "kk-btn-sekundaer"} sm:w-auto`}
                >
                  {cta.text}
                </a>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {hero.punkte.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm font-semibold text-fg-muted">
                  <CheckIcon />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. TRANSFORMATION --------------------------------------------- */}
        <Abschnitt
          id="transformation"
          eyebrow="Ergebnis"
          ueberschrift={transformation.ueberschrift}
          einleitung={transformation.einleitung}
          className="border-y border-white/10 bg-ink-900"
        >
          <div className="mx-auto grid w-full max-w-3xl gap-6">
            {transformation.boxen.map((box) => (
              <article key={box.titel} className="kk-card p-4 sm:p-5">
                <h3 className="mb-4 text-lg font-black tracking-tight sm:text-xl">{box.titel}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Foto bild={box.vorher} beschriftung="Vorher" />
                  <Foto bild={box.nachher} beschriftung="Nachher" />
                </div>
                {box.text ? (
                  <p className="mt-4 text-sm leading-relaxed text-fg-muted">{box.text}</p>
                ) : null}
              </article>
            ))}
          </div>
        </Abschnitt>

        {/* 3. LEISTUNGEN & PREISE ---------------------------------------- */}
        <Abschnitt
          id="leistungen"
          eyebrow="Preise"
          ueberschrift={leistungen.ueberschrift}
          einleitung={leistungen.einleitung}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {leistungen.karten.map((karte) => (
              <article
                key={karte.id}
                className={`kk-card flex flex-col p-5 sm:p-7 ${
                  karte.hervorgehoben ? "border-accent/50 ring-1 ring-accent/30" : ""
                }`}
              >
                <h3 className="text-xl font-black tracking-tight sm:text-2xl">{karte.name}</h3>

                <p className="mt-4 flex flex-wrap items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tight text-accent sm:text-5xl">
                    {karte.preis}
                  </span>
                  <span className="text-sm font-bold text-fg-muted">{karte.preisZusatz}</span>
                </p>

                <p className="mt-4 text-sm leading-relaxed text-fg-muted sm:text-base">
                  {karte.beschreibung}
                </p>

                <p className="mt-6 mb-3 text-xs font-bold tracking-[0.14em] text-fg uppercase">
                  {leistungen.enthaltenLabel}
                </p>
                <ul className="mb-6 space-y-2.5">
                  {karte.enthalten.map((e) => (
                    <li key={e} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg">
                      <CheckIcon />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={karte.cta.ziel}
                  className={`kk-btn mt-auto w-full ${karte.hervorgehoben ? "kk-btn-primaer" : "kk-btn-sekundaer"}`}
                >
                  {karte.cta.text}
                </a>
              </article>
            ))}
          </div>
        </Abschnitt>

        {/* 4. ÜBER MICH -------------------------------------------------- */}
        <Abschnitt
          id="ueber-mich"
          eyebrow="Wer ich bin"
          ueberschrift={ueberMich.ueberschrift}
          className="border-y border-white/10 bg-ink-900"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_1.5fr] md:items-start md:gap-12">
            <div className="mx-auto w-full max-w-[15rem] sm:max-w-[17rem] md:mx-0">
              <Foto bild={ueberMich.portrait} />
            </div>

            <div>
              <div className="space-y-4">
                {ueberMich.absaetze.map((a) => (
                  <p key={a} className="text-base leading-relaxed text-fg-muted">
                    {a}
                  </p>
                ))}
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {ueberMich.fakten.map((f) => (
                  <li key={f.label} className="kk-card p-4">
                    <p className="text-2xl font-black tracking-tight text-accent">{f.wert}</p>
                    <p className="mt-1 text-sm text-fg-muted">{f.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Abschnitt>

        {/* 5. FAQ ------------------------------------------------------- */}
        <Abschnitt
          id="faq"
          eyebrow="Gut zu wissen"
          ueberschrift={faq.ueberschrift}
          einleitung={faq.einleitung}
        >
          <div className="space-y-3">
            {faq.eintraege.map((e) => (
              <details key={e.frage} className="kk-details kk-card px-4 py-3 sm:px-5 sm:py-4">
                <summary className="flex items-center justify-between gap-4 py-1">
                  <h3 className="text-base font-bold sm:text-lg">{e.frage}</h3>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="kk-chevron h-5 w-5 shrink-0 text-accent transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">{e.antwort}</p>
              </details>
            ))}
          </div>
        </Abschnitt>

        {/* 6. KONTAKT / ANFRAGE ------------------------------------------ */}
        <Abschnitt
          id="kontakt"
          eyebrow="Los geht's"
          ueberschrift={kontakt.ueberschrift}
          einleitung={kontakt.text}
          className="border-y border-white/10 bg-ink-900"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {kontakt.kanaele.map((k) => {
              const offen = istPlatzhalterLink(k.link);
              const extern = /^https?:\/\//i.test(k.link);
              const istPrimaer = k.stil === "primaer";
              return (
                <article key={k.id} className="kk-card flex flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-black tracking-tight sm:text-xl">{k.name}</h3>
                  <p className="mt-2 mb-5 text-sm leading-relaxed text-fg-muted">{k.beschreibung}</p>
                  {offen ? (
                    <>
                      <span className="kk-btn kk-btn-deaktiviert mt-auto w-full" aria-disabled="true">
                        {k.buttonText}
                      </span>
                      <p className="mt-2 text-xs text-fg-muted">
                        Link wird noch eingesetzt — schreib mir solange über den anderen Kanal.
                      </p>
                    </>
                  ) : (
                    <a
                      href={k.link}
                      target={extern ? "_blank" : undefined}
                      rel={extern ? "noopener noreferrer" : undefined}
                      className={`kk-btn mt-auto w-full ${istPrimaer ? "kk-btn-primaer" : "kk-btn-sekundaer"}`}
                    >
                      {k.buttonText}
                    </a>
                  )}
                </article>
              );
            })}
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {kontakt.ablauf.map((s) => (
              <li key={s.schritt} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-black text-black">
                  {s.schritt}
                </span>
                <div>
                  <p className="text-sm font-bold">{s.titel}</p>
                  <p className="mt-1 text-sm leading-relaxed text-fg-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Abschnitt>
      </main>

      {/* 7. FOOTER ------------------------------------------------------- */}
      <footer className="px-5 py-12 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
            <div>
              <p className="text-base font-black tracking-tight">{marke.name}</p>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                {marke.business}
              </p>
            </div>

            <nav aria-label="Footer-Navigation" className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
              {navigation.links.map((l) => (
                <a
                  key={l.ziel}
                  href={l.ziel}
                  className="text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
                >
                  {l.text}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6">
            <a
              href="/impressum"
              className="text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
            >
              {footer.impressumLinkText}
            </a>
            <a
              href="/datenschutz"
              className="text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
            >
              {footer.datenschutzLinkText}
            </a>
          </div>

          <p className="mt-6 max-w-3xl rounded-xl border border-white/10 bg-ink-850 p-4 text-xs leading-relaxed text-fg-muted">
            <strong className="font-bold text-fg">Gesundheitshinweis:</strong> {footer.disclaimer}
          </p>

          {/* Sicherheitsnetz: Dieser Hinweis erscheint automatisch, wenn ein
              Link in kontakt.kanaele kein echter Link mehr ist (z. B. leer oder
              "TODO"). Sind alle Links gesetzt, ist nichts sichtbar. */}
          {kontakt.kanaele.some((k) => istPlatzhalterLink(k.link)) ? (
            <p className="mt-6 rounded-xl border border-dashed border-accent/40 p-3 text-xs leading-relaxed text-accent">
              {footer.platzhalterHinweis}
            </p>
          ) : null}

          <p className="mt-6 text-xs text-fg-muted">
            © {new Date().getFullYear()} {marke.business}
          </p>
        </div>
      </footer>
    </div>
  );
}
