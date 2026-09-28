import { useState } from "react";

import type { Bild } from "~/content";

// ---------------------------------------------------------------------------
// Ein einzelnes Foto (Vorher oder Nachher).
// Zeigt den Hinweis "Platzhalter", solange in src/content.ts bei dem Bild
// "platzhalter: true" steht. Falls eine Bilddatei fehlt, erscheint ein
// Hinweisfeld statt eines kaputten Bildes.
// ---------------------------------------------------------------------------
export function Foto({ bild, beschriftung }: { bild: Bild; beschriftung?: string }) {
  const [fehler, setFehler] = useState(false);

  return (
    <figure className="m-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-800">
        {fehler ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-white/20 p-3 text-center">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              className="h-8 w-8 text-white/40"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="10" r="1.6" />
              <path d="m4 18 5-5 4 4 3-2 4 4" />
            </svg>
            <p className="text-[11px] leading-snug text-white/55">
              Foto fehlt: {bild.pfad}
            </p>
          </div>
        ) : (
          <img
            src={bild.pfad}
            alt={bild.alt}
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            onError={() => setFehler(true)}
            className="h-full w-full object-cover"
          />
        )}

        {bild.platzhalter && !fehler ? (
          <span className="absolute top-2 left-2 rounded-md bg-black/75 px-2 py-1 text-[10px] font-bold tracking-wider text-accent uppercase">
            Platzhalter
          </span>
        ) : null}
      </div>
      {beschriftung ? (
        <figcaption className="mt-2 text-center text-sm font-bold tracking-wide text-fg uppercase">
          {beschriftung}
        </figcaption>
      ) : null}
    </figure>
  );
}
