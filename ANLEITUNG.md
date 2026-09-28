# Kurkowski Coaching — Website: kurze Anleitung

Diese Seite ist eine Landing-Page. Alles, was Besucher sehen (Texte, Preise,
Links, Fotos), steht in **einer** Datei:

> **`src/content.ts`**

Dort sind alle Stellen auf Deutsch kommentiert. Du musst nirgendwo sonst etwas
ändern — außer den Fotos (siehe unten).

## Änderungen live stellen — der GitHub-Weg

Du änderst Fotos und Texte **selbst im Browser auf GitHub**. Deine Dateien
liegen hier:

> https://github.com/rezeyy123/kurkowski-coaching-site

Die Schritt-für-Schritt-Klick-Anleitung (auch für Fotos) steht in
**`GITHUB-ANLEITUNG.md`** im selben Ordner.

Kurzfassung:

1. Auf GitHub einloggen, Repository öffnen, Datei ändern bzw. Foto hochladen.
2. Unten auf **`Commit changes`** klicken (das ist der Speichern-Knopf).
3. **Uns kurz Bescheid geben** (WhatsApp/E-Mail): „Ich habe etwas geändert.“
   GitHub kann die Live-Seite nicht selbst erreichen — wir holen deinen Stand ab
   und veröffentlichen ihn. Erst danach ist die Änderung auf der Website.

Eine Änderung, die nur im Repository steht und uns nicht gemeldet wurde, ist
noch **nicht** live.

## Was noch fehlt: nur noch deine 3 Fotos

Alles andere (Kontakt-Links, Impressum, Datenschutz) ist gesetzt. Es fehlen
nur noch diese **drei** Bilddateien. Fotos auf GitHub in `public/images/`
hochladen (mit genau diesen Namen) und damit die vorhandenen Platzhalter
ersetzen — Details in `GITHUB-ANLEITUNG.md`:

| Datei (genau so benennen) | Wofür |
| --- | --- |
| `public/images/vorher.jpg` | Dein Vorher-Foto (Transformation) |
| `public/images/nachher.jpg` | Dein Nachher-Foto (Transformation) |
| `public/images/portrait.jpg` | Dein aktuelles Foto im Abschnitt „Über mich“ |

- Format: JPG (`.jpg`), hochkant, Seitenverhältnis ca. 4:5 (z. B. 1080 × 1350),
  möglichst unter 500 KB pro Foto. Handyfotos reichen.
- Danach in `src/content.ts` bei jedem der drei Bilder `platzhalter: true` auf
  `false` setzen (bei `transformation.boxen[0].vorher`, `...nachher` und
  `ueberMich.portrait`) — auf GitHub über das Stift-Symbol. Dann verschwindet der
  Hinweis „Platzhalter“ über dem Bild.
- Zum Schluss auf GitHub `Commit changes` klicken **und uns Bescheid geben** —
  dann veröffentlichen wir.

Nur diese drei Dateien werden gebraucht. Ältere Namen (`vorher-1.jpg`,
`nachher-1.jpg`, `vorher-2.jpg`, `nachher-2.jpg`) gibt es nicht mehr.

## Was schon gesetzt ist (nichts mehr zu tun)

- **WhatsApp:** `kontakt.kanaele` → `whatsapp.link` =
  `https://wa.me/4915510221960` (mit vorausgefülltem Text). Das ist der
  Hauptkontakt und auf der Seite orange hervorgehoben.
- **E-Mail:** `kontakt.kanaele` → `email.link` = `mailto:piotr.coaches@gmail.com`.
  Öffnet nur das Mailprogramm des Besuchers — die Website verschickt keine
  E-Mails selbst.
- **Impressum:** `impressum.eintraege` (Piotr Kurkowski, Am roten Berg 18,
  65207 Wiesbaden, E-Mail). Der Platzhalter-Hinweis oben ist entfernt.
- **Datenschutz:** `datenschutz.absaetze` beschreibt, was auf der Seite wirklich
  passiert (WhatsApp/Meta, E-Mail/Gmail, Server-Logs, Coaching-Daten, Rechte).
  Der Platzhalter-Hinweis oben ist entfernt.
- **Preise:** 15 € einmalig (Plan) / 30 € pro Monat (1:1-Coaching) — unverändert.

## Offene Punkte für dich

- **Gesetzliche Vertretung im Impressum:** Du bist 17, also noch minderjährig.
  Für Verträge (z. B. Bezahlung deiner Leistungen) brauchst du das Einverständnis
  einer erziehungsberechtigten Person. Wenn sie namentlich auf der Seite stehen
  soll, sag uns ihren Namen — dann ergänzen wir die Zeile. Bis dahin steht dort
  bewusst kein Name (nichts erfinden). Siehe Kommentar über `impressum` in
  `src/content.ts`.
- **Transformations-Zahlen** (Gewicht, Kraftwerte, Zeitraum): nur eintragen,
  wenn du sie nennen willst. Auch der Text unter der Transformations-Box ist
  leer — kein erfundener Zeitraum.
- **Optional: echte Ergebnisse** → `ueberMich.ergebnisse` in `src/content.ts`.

**Wichtig:** Keine Zahlen erfinden (kein kg-Verlust, keine Kraftwerte, keine
Kundenzahl, keine Bewertungen). Nur eintragen, was stimmt.

## Hinweise

- Diese Website liegt jetzt in einem GitHub-Repository
  (`rezeyy123/kurkowski-coaching-site`). Du bearbeitest sie im Browser —
  Fotos und Texte. Veröffentlicht wird sie weiterhin von uns aus unserem
  Arbeitsordner, deshalb der kurze Bescheid nach jeder Änderung.
  Anleitung: **`GITHUB-ANLEITUNG.md`**.
- Die Seite zeigt oben über jedem Foto den Hinweis „Platzhalter“, solange in
  `content.ts` bei diesem Bild `platzhalter: true` steht. Nach dem Austausch auf
  `false` setzen — dann verschwindet der Hinweis.
- Im Footer bleibt ein oranger Hinweis-Kasten sichtbar, solange ein Kontakt-Link
  kein echter Link ist. Aktuell werden beide Links erkannt, der Kasten ist also
  nicht sichtbar — er kommt nur zurück, wenn ein Link fehlt oder kaputt ist.
- Preise stehen nur in `leistungen.karten` (15 € einmalig / 30 € pro Monat).
- Gesundheitshinweis steht in `footer.disclaimer` und erscheint auf jeder Seite.
- Design (Farben, Abstände) steckt in `src/styles/app.css`.
- Die Seite ist bewusst schlank: keine Analyse-Tools, keine Cookies, keine
  externen Schriften. Wenn so etwas dazukommt, muss der Datenschutz-Text in
  `datenschutz.absaetze` angepasst werden.

## Seiten

- `/` — Startseite (alle Abschnitte)
- `/impressum` — Impressum
- `/datenschutz` — Datenschutz
