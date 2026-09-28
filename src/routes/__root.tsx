import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { content } from "~/content";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${content.marke.name} — ${content.marke.business}` },
      { name: "description", content: content.marke.metaBeschreibung },
      { name: "theme-color", content: "#08090d" },
      { property: "og:title", content: `${content.marke.name} — ${content.marke.business}` },
      { property: "og:description", content: content.marke.metaBeschreibung },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-black">Seite nicht gefunden</h1>
      <p className="text-fg-muted">
        Diese Seite gibt es nicht (mehr). Zurück zur Startseite:
      </p>
      <a className="kk-btn kk-btn-primaer" href="/">
        Zur Startseite
      </a>
    </main>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
