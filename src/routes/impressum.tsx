import { createFileRoute } from "@tanstack/react-router";

import { RechtsSeite } from "~/components/RechtsSeite";
import { content } from "~/content";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: `Impressum — ${content.marke.business}` },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  const i = content.impressum;

  return (
    <RechtsSeite titel={i.ueberschrift} hinweis={i.hinweis}>
      <dl className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-ink-850">
        {i.eintraege.map((e) => (
          <div key={e.label} className="grid gap-1 p-4 sm:grid-cols-[200px_1fr] sm:gap-4">
            <dt className="text-sm font-bold text-fg">{e.label}</dt>
            <dd className="text-sm leading-relaxed text-fg-muted">{e.wert}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-sm leading-relaxed text-fg-muted">{i.schluss}</p>
    </RechtsSeite>
  );
}
