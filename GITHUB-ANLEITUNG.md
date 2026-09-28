# Fotos & Texte selbst ändern — die Klick-Anleitung (GitHub)

Diese Anleitung ist für dich, **ohne** Programmier- oder Git-Kenntnisse.
Du brauchst nur: einen Browser, deine Fotos und dein GitHub-Konto (du bist dort
bereits eingeloggt bzw. kennst dein Passwort).

**Dein Repository (deine Website-Dateien):**

> https://github.com/rezeyy123/kurkowski-coaching-site

Wichtig zu wissen: **Was du dort änderst, ist noch nicht sofort auf der
Live-Seite.** GitHub kann unsere Live-Seite nicht selbst erreichen. Deshalb:
Wenn du fertig bist, gib uns **kurz Bescheid** (WhatsApp/E-Mail, eine Zeile
reicht, z. B. „Fotos sind drin“) — dann holen wir deinen Stand ab und stellen
ihn live. Das dauert in der Regel nur wenige Minuten.

---

## 1. Ein Foto austauschen (z. B. `vorher.jpg`)

1. Öffne im Browser:
   `https://github.com/rezeyy123/kurkowski-coaching-site`
2. Klicke auf den Ordner **`public`**.
3. Klicke auf den Ordner **`images`**.
   Du siehst jetzt drei Dateien: `vorher.jpg`, `nachher.jpg`, `portrait.jpg`.
4. Klicke rechts oben auf den Knopf **`Add file`** (bei schmalem Fenster nur
   ein **`+`**) und dann auf **`Upload files`**.
5. Klicke auf **`choose your files`** (bzw. ziehe die Datei hinein) und wähle
   dein neues Foto aus.
   **Wichtig:** Die Datei muss **genau** so heißen wie die, die ersetzt werden
   soll — also `vorher.jpg`. Wenn dein Handy die Datei `IMG_1234.jpg` nennt,
   benenne sie vorher auf `vorher.jpg` um (am Handy: Foto antippen →
   Umbenennen; am Computer: Datei anklicken → F2).
6. Klicke unten auf den grünen Knopf **`Commit changes`**.
   (Das ist der „Speichern“-Knopf auf GitHub — nicht irritieren lassen.)
7. Fertig. Für die anderen Fotos genauso vorgehen:

| Datei in `public/images` | Wofür |
| --- | --- |
| `vorher.jpg` | Dein Vorher-Foto (Transformation) |
| `nachher.jpg` | Dein Nachher-Foto (Transformation) |
| `portrait.jpg` | Dein aktuelles Foto im Abschnitt „Über mich“ |

**Bildformat:** JPG (Endung `.jpg`), **hochkant**, Seitenverhältnis ca. **4:5**
(z. B. 1080 × 1350 Pixel), möglichst **unter 500 KB** pro Foto.
Ein normales **Handyfoto reicht** völlig aus — du musst nichts professionell
fotografieren und nichts bearbeiten. Nur zuschneiden, wenn es quer statt
hochkant ist.

---

## 2. Danach den Platzhalter-Hinweis ausschalten

Solange ein Foto noch als Platzhalter markiert ist, zeigt die Seite oben über
dem Bild den Hinweis „Platzhalter“. Nach dem Austausch schaltest du ihn aus:

1. Im Repository auf den Ordner **`src`** klicken.
2. Auf die Datei **`content.ts`** klicken.
3. Rechts oben auf das **Stift-Symbol** (✏️, „Edit this file“) klicken.
4. Im Text nach `platzhalter: true` suchen:
   - **Computer:** `Strg` + `F` (bzw. `Cmd` + `F` am Mac) → `platzhalter: true` eingeben.
   - **Handy:** über das Browser-Menü „Auf Seite suchen“.
   - Es gibt **genau drei** Stellen (je eine für `vorher`, `nachher`, `portrait`).
5. Bei dem Foto, das du gerade ausgetauscht hast, **nur die Wörter `true` in
   `false`** ändern. Also so:

   ```ts
   platzhalter: false,
   ```

   **Nichts anderes anfassen** — keine Anführungszeichen, keine Kommas, keine
   Klammern, keine anderen Zeilen.
6. Unten auf **`Commit changes`** klicken (grüner Knopf).
7. Das für jedes der drei Fotos wiederholen, sobald du es ausgetauscht hast.

Wenn du dir unsicher bist: Lass diesen Schritt einfach weg und schreib uns.
Dann übernehmen wir das Ausschalten des Hinweises.

---

## 3. Uns Bescheid geben

Schreib uns kurz (WhatsApp oder E-Mail): **„Ich habe Fotos/Text geändert.“**
Dann holen wir deinen Stand ab und veröffentlichen ihn. Ohne diesen Schritt
bleibt deine Änderung nur im Repository und erscheint nicht auf der Website.

---

## 4. Ganz wichtig

- **Ändere nichts anderes.** Fotos und `content.ts` reichen völlig.
  Insbesondere nicht: `package.json`, `vite.config.ts`, `serve.ts`,
  `publish.sh`, `go-live.sh` oder irgendetwas anderes, das du nicht kennst.
  Eine falsche Zeile dort kann die ganze Seite lahmlegen.
- **Nichts löschen** und keine Ordner umbenennen.
- **Keine Zahlen erfinden** — kein Gewicht, kein Zeitraum, keine Kraftwerte,
  keine Kunden- oder Bewertungszahlen. Nur eintragen, was wirklich stimmt.
- **Nicht die Preise ändern** (15 € / 30 €) und nicht die Kontakt-Links
  (WhatsApp/E-Mail), es sei denn, wir sprechen es vorher ab.
- Wenn du etwas kaputt gemacht hast: Keine Panik. Schreib uns — wir können
  jede Änderung rückgängig machen, weil jede Version gespeichert bleibt.

---

## 5. Wie es bei uns weiterläuft

Unsere Live-Seite wird **nicht** direkt von GitHub ausgeliefert, sondern aus
unserem Arbeitsordner der Website. Der Ablauf ist:

1. **Du** änderst Fotos/Texte im Browser und klickst `Commit changes`.
2. **Du** gibst uns Bescheid.
3. **Wir** holen deinen Stand aus dem Repository ab und veröffentlichen ihn.
4. **Die Seite** ist kurze Zeit später live — mit deinen Fotos.

Wenn du und wir gleichzeitig etwas ändern, gilt: **deine Änderung gewinnt.**
Wir überschreiben nie, was du selbst im Repository gemacht hast.
