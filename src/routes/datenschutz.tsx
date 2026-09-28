import { createFileRoute } from "@tanstack/react-router";

import { RechtsSeite } from "~/components/RechtsSeite";
import { content } from "~/content";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: `Datenschutz — ${content.marke.business}` },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  const d = content.datenschutz;

  return (
    <RechtsSeite titel={d.ueberschrift} hinweis={d.hinweis}>
      <div className="space-y-4">
        {d.absaetze.map((a) => (
          <p key={a} className="text-sm leading-relaxed text-fg-muted sm:text-base">
            {a}
          </p>
        ))}
      </div>
    </RechtsSeite>
  );
}
