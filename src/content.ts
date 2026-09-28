/**
 * ============================================================================
 *  KURKOWSKI COACHING — ZENTRALE INHALTS-DATEI
 * ============================================================================
 *
 *  Hier steht ALLES, was auf der Website sichtbar ist: Texte, Preise, Links,
 *  Bilder und FAQ-Antworten. Die Seite liest ihre Inhalte aus dieser Datei —
 *  du musst nirgendwo sonst etwas ändern.
 *
 *  SO ÄNDERST DU ETWAS
 *  1. Nur den Text zwischen den Anführungszeichen ändern ("...").
 *  2. Datei speichern.
 *  3. Terminal im Website-Ordner öffnen und ausführen:  bun run publish
 *     -> Danach sind die Änderungen auf der Live-Seite sichtbar.
 *
 *  ANFÜHRUNGSZEICHEN, KOMMAS UND KLAMMERN NICHT LÖSCHEN — sonst lädt die
 *  Seite nicht mehr. Im Zweifel: eine Sicherungskopie der Datei anlegen,
 *  bevor du viel änderst.
 *
 *  WICHTIG
 *  - Preise stehen ausschließlich hier: 15 € einmalig / 30 € pro Monat.
 *  - Alle Stellen mit "TODO" musst du noch selbst ausfüllen.
 *  - Bitte KEINE Zahlen erfinden (kein kg-Verlust, keine Kraftwerte, keine
 *    Kundenzahlen, keine Bewertungen) — nur eintragen, was wirklich stimmt.
 *  - Keine Heilversprechen. Die Betreuung ersetzt keine ärztliche Behandlung.
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// 1. FOTOS — DEINE VORHER-/NACHHER-BILDER
// ---------------------------------------------------------------------------
//  So tauschst du die Platzhalter gegen deine echten Fotos:
//
//  1. Deine eigenen Fotos vorbereiten:
//     - Format: JPG (.jpg)
//     - Hochkant, Seitenverhältnis ca. 4:5 (z. B. 1080 x 1350 Pixel)
//     - Dateigröße möglichst unter 500 KB pro Foto (Handy-Fotos vorher
//       verkleinern oder als "mittel/groß" exportieren).
//  2. Die Dateien GENAU SO BENENNEN (Groß-/Kleinschreibung beachten):
//        vorher.jpg     nachher.jpg     (Transformation)
//        portrait.jpg   (dein aktuelles Foto im Abschnitt "Über mich")
//  3. Diese Dateien in den Ordner legen und die vorhandenen Platzhalter
//     damit ERSETZEN:
//        public/images/
//  4. Danach im Terminal ausführen:  bun run publish
//
//  Solange unten bei einem Foto "platzhalter: true" steht, zeigt die Seite
//  einen Hinweis "Platzhalter" über dem Bild. Wenn dein echtes Foto drin ist,
//  setze diesen Wert auf false — dann verschwindet der Hinweis.
//
//  Der "titel"/"text" unter jedem Bildpaar ist optional: Lass den Text leer
//  (""), wenn du keine Angaben machen willst. KEINE Zahlen erfinden.

export type Bild = {
  /** Pfad ab dem öffentlichen Ordner, z. B. "/images/vorher.jpg" */
  pfad: string;
  /** Alt-Text für Screenreader und für den Fall, dass das Bild nicht lädt. */
  alt: string;
  /** true = es liegt noch der Platzhalter im Ordner, false = echtes Foto. */
  platzhalter: boolean;
};

export type Transformation = {
  /** Überschrift der Box, z. B. "Meine Transformation" */
  titel: string;
  /** Kurzer Text unter dem Bildpaar. Leer lassen ist erlaubt. */
  text: string;
  vorher: Bild;
  nachher: Bild;
};

// ---------------------------------------------------------------------------
// 2. ALLE INHALTE DER SEITE
// ---------------------------------------------------------------------------

export const content = {
  // --- Allgemein -----------------------------------------------------------
  marke: {
    name: "Piotr Kurkowski",
    business: "Kurkowski Coaching",
    /** Kurzbeschreibung für Google & wenn der Link geteilt wird. */
    metaBeschreibung:
      "Trainings- und Ernährungsplan für 15 € oder 24/7 1:1 Online-Coaching für 30 € pro Monat. Individuell auf dich, deinen Alltag und dein Budget abgestimmt.",
  },

  // --- Kopfzeile / Navigation ---------------------------------------------
  navigation: {
    links: [
      { text: "Transformation", ziel: "#transformation" },
      { text: "Preise", ziel: "#leistungen" },
      { text: "Über mich", ziel: "#ueber-mich" },
      { text: "FAQ", ziel: "#faq" },
      { text: "Kontakt", ziel: "#kontakt" },
    ],
    /** Button rechts in der Kopfzeile. */
    ctaText: "Anfrage starten",
    ctaZiel: "#kontakt",
  },

  // --- 1. Hero -------------------------------------------------------------
  hero: {
    /** Kleine Zeile über der Überschrift. */
    badge: "1,5 Jahre echte Transformation",
    /** Große Überschrift (Name steht als Zeile darüber). */
    ueberschrift: "Dein Plan. Dein Fortschritt. Deine Betreuung.",
    /** Unterüberschrift / Claim. */
    untertext:
      "Ich bin Piotr, 17 Jahre alt und habe in 1,5 Jahren meine eigene Transformation durchgezogen — mit wissenschaftlich fundiertem Wissen über Muskulatur, Ernährung und Biohacking. Genau dieses Wissen bekommst du jetzt als Plan, der zu deinem Alltag passt.",
    /** Die beiden Buttons im Hero. */
    ctas: [
      {
        text: "Plan anfragen – 15 €",
        ziel: "#leistungen",
        stil: "primaer" as const,
      },
      {
        text: "1:1 Coaching – 30 €/Monat",
        ziel: "#leistungen",
        stil: "sekundaer" as const,
      },
    ],
    /** Drei kurze Punkte unter den Buttons. Nur Fakten, nichts erfinden. */
    punkte: [
      "Plan individuell auf dich zugeschnitten",
      "24/7 erreichbar im 1:1-Coaching",
      "Kein Standardplan von der Stange",
    ],
  },

  // --- 2. Transformation (Vorher/Nachher) ----------------------------------
  // Hinweis: Es gibt bewusst nur EIN Vorher/Nachher-Paar (Piotrs Wunsch).
  transformation: {
    ueberschrift: "Meine Transformation",
    einleitung:
      "1,5 Jahre Training, Ernährung und Disziplin — hier siehst du, was dabei passiert ist.",
    /** Eine Box mit einem Bildpaar. */
    boxen: [
      {
        titel: "Meine Transformation",
        // TODO (Piotr): Optional kurz beschreiben, was sich verändert hat.
        // Nur eintragen, wenn es stimmt. Beispiel: "1,5 Jahre Training – der
        // größte Unterschied kam durch Konstanz bei Ernährung und Schlaf."
        // Wichtig: Keine Zahlen (kg, Zeitraum, Kraftwerte) erfinden.
        text: "",
        vorher: {
          pfad: "/images/vorher.jpg",
          alt: "Vorher-Foto von Piotr Kurkowski vor seiner Transformation",
          platzhalter: true,
        },
        nachher: {
          pfad: "/images/nachher.jpg",
          alt: "Nachher-Foto von Piotr Kurkowski nach seiner 1,5-jaehrigen Transformation",
          platzhalter: true,
        },
      },
    ] as Transformation[],
  },

  // --- 3. Leistungen & Preise ---------------------------------------------
  leistungen: {
    ueberschrift: "Leistungen & Preise",
    einleitung:
      "Zwei Wege, wie du starten kannst. Beide Preise sind Einmalzahlung bzw. monatlich kündbar — ohne versteckte Kosten.",
    /** Überschrift über der Liste in jeder Karte. */
    enthaltenLabel: "Das ist enthalten",
    karten: [
      {
        id: "plan",
        name: "Trainings- & Ernährungsplan",
        /** WICHTIG: Preis exakt so lassen. */
        preis: "15 €",
        preisZusatz: "einmalig",
        beschreibung:
          "Du bekommst einen kompletten Plan, den du selbstständig umsetzen kannst — zugeschnitten auf dein Ziel, deinen Alltag und dein Budget.",
        enthalten: [
          "Individuelle Planung nach deinen Bedürfnissen",
          "Budgetplanung — Einkauf passend zu deinem Geldbeutel",
          "Zeitplanung — Training & Essen passend zu deinem Alltag",
          "Alltagstaugliche Übungen und Mahlzeiten",
          "Einmalzahlung, keine Folgekosten",
        ],
        cta: { text: "Plan anfragen – 15 €", ziel: "#kontakt" },
        /** Diese Karte wird optisch hervorgehoben. */
        hervorgehoben: false,
      },
      {
        id: "coaching",
        name: "24/7 1:1 Online-Coaching",
        preis: "30 €",
        preisZusatz: "pro Monat",
        beschreibung:
          "Du willst nicht alleine durch? Dann betreue ich dich persönlich — täglich erreichbar, mit Plan und Anpassung.",
        enthalten: [
          "24/7-Verfügbarkeit — ich bin für dich erreichbar",
          "Eigener Trainings- und Ernährungsplan",
          "Betreuung per Anruf und Direktnachricht",
          "Regelmäßige Anpassung deines Plans",
          "Check-ins zu deinem Fortschritt",
          "Basics zu Schlaf, Recovery und Biohacking",
        ],
        cta: { text: "1:1 Coaching anfragen – 30 €/Monat", ziel: "#kontakt" },
        hervorgehoben: true,
      },
    ],
  },

  // --- 4. Über mich --------------------------------------------------------
  ueberMich: {
    ueberschrift: "Über mich",
    /**
     * Dein aktuelles Foto. Datei: public/images/portrait.jpg (hochkant, ca. 4:5).
     * Solange "platzhalter: true" steht, ist darüber der Hinweis "Platzhalter"
     * sichtbar. Nach dem Austausch auf false setzen.
     */
    portrait: {
      pfad: "/images/portrait.jpg",
      alt: "Portraitfoto von Piotr Kurkowski",
      platzhalter: true,
    } as Bild,
    /** Absätze werden untereinander angezeigt. */
    absaetze: [
      "Ich bin Piotr Kurkowski, 17 Jahre alt und seit 1,5 Jahren im Training. In dieser Zeit habe ich nicht nur meinen Körper verändert, sondern vor allem gelernt, wie Training und Ernährung wirklich funktionieren — wissenschaftlich fundiert statt nach Trends.",
      "Ich habe mich intensiv mit Muskulatur-Aufbau, Ernährungslehre und Biohacking beschäftigt. Deshalb bekommst du bei mir keine Vorlage aus dem Internet, sondern einen Plan, der zu deinem Körper, deinem Zeitplan und deinem Budget passt.",
      "Mir ist wichtig, dass du verstehst, was du tust. Deshalb erkläre ich dir, warum ein Plan so aussieht, wie er aussieht — und ich bin auch dann für dich da, wenn du Fragen hast oder gerade keinen Fortschritt siehst.",
    ],
    /** Kurze Fakten-Boxen (nur gesicherte Angaben). */
    fakten: [
      { wert: "1,5 Jahre", label: "eigene Transformation" },
      { wert: "17 Jahre", label: "alt — nah an deiner Situation" },
      { wert: "1:1", label: "persönliche Betreuung statt Standardplan" },
    ],
    // TODO (Piotr): Hier kannst du später echte Ergebnisse einsetzen, sobald du
    // sie belegen kannst (z. B. "-18 kg in 12 Monaten" oder Kraftwerte).
    // Bitte nur eintragen, was stimmt — keine geschätzten Zahlen.
    ergebnisse: [] as { wert: string; label: string }[],
  },

  // --- 5. FAQ --------------------------------------------------------------
  faq: {
    ueberschrift: "Häufige Fragen",
    einleitung: "Wenn deine Frage fehlt: Schreib mir direkt eine Nachricht — ich antworte persönlich.",
    eintraege: [
      {
        frage: "Für welches Alter ist das Coaching geeignet?",
        antwort:
          "Mein Angebot ist für Einsteiger und Fortgeschrittene gedacht — vom ersten Trainingsplan bis zur gezielten Weiterentwicklung. Wenn du unter 18 bist, brauchen wir das Einverständnis eines Erziehungsberechtigten. Unsicher, ob es für dich passt? Dann frag einfach kurz an.",
      },
      {
        frage: "Was brauche ich dafür — Geräte, Zuhause oder Fitnessstudio?",
        antwort:
          "Du brauchst kein bestimmtes Equipment. Ich passe den Plan an das an, was du wirklich zur Verfügung hast: Training zu Hause (z. B. mit Kurzhanteln oder Bändern), im Fitnessstudio oder eine Mischung. Sag mir einfach in der Anfrage, was du hast — dann baue ich den Plan darum herum.",
      },
      {
        frage: "Wie läuft die Anfrage ab?",
        antwort:
          "1) Du schreibst mir per WhatsApp oder E-Mail. 2) Wir klären in einem kurzen Austausch dein Ziel, deine Vorgeschichte und wie viel Zeit du pro Woche hast. 3) Danach sage ich dir, welches Angebot zu dir passt (15 € Plan oder 30 €/Monat 1:1-Coaching) und wie es weitergeht. Erst wenn du dich entscheidest, geht es los.",
      },
      {
        frage: "Wie läuft die Betreuung im 1:1-Coaching?",
        antwort:
          "Du hast rund um die Uhr Zugang zu mir: per Anruf oder Direktnachricht. Du bekommst deinen eigenen Trainings- und Ernährungsplan, wir passen ihn regelmäßig an, und wir machen Check-ins zu deinem Fortschritt. Dazu bekommst du Basics zu Schlaf, Recovery und Biohacking, damit dein Fortschritt auch langfristig hält.",
      },
      {
        frage: "Wie schnell bekomme ich meinen Plan?",
        antwort:
          "Sobald ich alles von dir weiß, was ich brauche (Ziel, Zeit, Equipment, Essgewohnheiten), erstelle ich deinen Plan und schicke ihn dir. Wie lange das dauert, sage ich dir vorher in der Anfrage verbindlich zu — du weißt also immer, woran du bist.",
      },
      {
        frage: "Was, wenn ich mich unsicher fühle oder Fragen habe?",
        antwort:
          "Fragen sind ausdrücklich erwünscht — genau dafür bin ich da. Im 1:1-Coaching kannst du mich jederzeit kontaktieren, auch wenn du gerade motivationstechnisch hängst oder eine Übung nicht klappt. Wichtig: Meine Betreuung ersetzt keine ärztliche Beratung oder Behandlung. Bei Vorerkrankungen, Beschwerden oder Verletzungen klärst du bitte vorher ärztlich ab, ob und wie du trainieren darfst.",
      },
    ],
  },

  // --- 6. Kontakt / Anfrage -----------------------------------------------
  kontakt: {
    ueberschrift: "Deine Anfrage",
    text: "Schreib mir kurz, was du erreichen willst. Ich melde mich persönlich bei dir zurück und wir finden heraus, welches Angebot zu dir passt.",
    /** WhatsApp ist der Hauptkontakt, E-Mail der zweite Weg (öffnet das Mailprogramm). */
    kanaele: [
      {
        id: "whatsapp",
        name: "WhatsApp — der schnellste Weg",
        beschreibung:
          "Schreib mir direkt eine Nachricht. Das ist mein Hauptkontakt für Anfragen.",
        link: "https://wa.me/4915510221960?text=Hallo%20Piotr%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Coaching",
        buttonText: "WhatsApp-Nachricht schreiben",
        /** "primaer" = orange hervorgehoben (Hauptkontakt). */
        stil: "primaer" as const,
      },
      {
        id: "email",
        name: "E-Mail",
        beschreibung:
          "Du möchtest lieber eine E-Mail schreiben? Dann nutze diesen Link — er öffnet dein E-Mail-Programm mit meiner Adresse (piotr.coaches@gmail.com).",
        link: "mailto:piotr.coaches@gmail.com?subject=Anfrage%20Coaching",
        buttonText: "E-Mail schreiben",
        stil: "sekundaer" as const,
      },
    ],
    /** Ablauf in drei Schritten — bewusst ohne Zeitversprechen. */
    ablauf: [
      {
        schritt: "1",
        titel: "Du schreibst mir",
        text: "Per WhatsApp oder E-Mail — ganz unverbindlich.",
      },
      {
        schritt: "2",
        titel: "Wir sprechen kurz",
        text: "Ziel, Vorgeschichte, Zeit und Equipment klären.",
      },
      {
        schritt: "3",
        titel: "Du bekommst deinen Plan",
        text: "Passend zu deinem Alltag, deinem Budget und deinem Ziel.",
      },
    ],
  },

  // --- 7. Footer & Rechtliches --------------------------------------------
  footer: {
    /** Hinweis, solange die Kontakt-Links noch nicht eingesetzt sind. */
    platzhalterHinweis:
      "Hinweis für Piotr: Die Kontakt-Links sind noch Platzhalter. Setze sie in src/content.ts ein unter kontakt.kanaele.",
    disclaimer:
      "Meine Betreuung ersetzt keine ärztliche Beratung oder Behandlung. Bei Vorerkrankungen oder Beschwerden bitte vorher ärztlich abklären.",
    impressumLinkText: "Impressum",
    datenschutzLinkText: "Datenschutz",
  },

  // --- Impressum (eigene Seite /impressum) --------------------------------
  // Die Angaben sind gesetzt (vom Owner bestätigt). Der Platzhalter-Hinweis
  // oben auf /impressum ist deshalb leer ("") und wird nicht mehr angezeigt.
  //
  // TODO (Piotr): Du bist 17 Jahre alt, also noch minderjährig. Für Verträge
  // (z. B. Bezahlung deiner Leistungen) brauchst du das Einverständnis einer
  // erziehungsberechtigten Person. Wenn du willst, dass sie hier namentlich
  // als Vertretung steht, sag uns ihren Namen — wir tragen dann eine Zeile
  // "Gesetzliche Vertretung" ein. Bis dahin steht hier bewusst kein Name,
  // weil wir nichts erfinden.
  impressum: {
    ueberschrift: "Impressum",
    hinweis: "",
    eintraege: [
      { label: "Anbieter", wert: "Piotr Kurkowski" },
      { label: "Anschrift", wert: "Am roten Berg 18, 65207 Wiesbaden, Deutschland" },
      { label: "Verantwortlich für den Inhalt", wert: "Piotr Kurkowski" },
      { label: "Kontakt", wert: "E-Mail: piotr.coaches@gmail.com" },
    ],
    schluss:
      "Für die Inhalte dieser Seite ist der oben genannte Anbieter verantwortlich. Für Inhalte externer Links sind die jeweiligen Anbieter verantwortlich.",
  },

  // --- Datenschutz (eigene Seite /datenschutz) ----------------------------
  // Beschreibt nur, was auf dieser Seite wirklich passiert: keine Analyse,
  // keine Cookies, keine externen Fonts, keine Tracker.
  // Der Platzhalter-Hinweis bleibt leer ("") — bitte nur füllen, wenn sich
  // technisch etwas ändert.
  datenschutz: {
    ueberschrift: "Datenschutz",
    hinweis: "",
    absaetze: [
      "Verantwortlich für die Verarbeitung deiner Daten ist Piotr Kurkowski, Am roten Berg 18, 65207 Wiesbaden, E-Mail: piotr.coaches@gmail.com.",
      "Was diese Website selbst macht: Sie ist eine reine Informationsseite. Es gibt kein Kontaktformular, keine Anmeldung, keine Analyse- oder Werbe-Tracker, keine Marketing-Cookies und keine externen Schriften oder Skripte von anderen Anbietern. Ich werte dein Verhalten auf der Seite nicht aus.",
      "Server-Logs: Damit die Seite überhaupt ausgeliefert werden kann, protokolliert der Server, auf dem sie läuft, technisch notwendige Zugriffsdaten (z. B. aufgerufene Seite, Datum und Uhrzeit, übertragene Datenmenge, IP-Adresse und Browserkennung). Diese Daten entstehen automatisch beim Aufruf jeder Website, dienen nur dem technischen Betrieb und der Sicherheit (z. B. Erkennung von Angriffen) und werden von mir nicht mit deiner Person zusammengeführt oder zu Werbezwecken ausgewertet.",
      "Kontakt per WhatsApp: Wenn du mich über den WhatsApp-Link anschreibst, läuft die Nachricht über die Server von WhatsApp (Meta Platforms). Dabei werden deine Telefonnummer, der Nachrichteninhalt und technische Daten durch Meta verarbeitet. Ich habe keinen Einfluss auf diese Verarbeitung — zusätzlich gelten die Datenschutzbestimmungen von WhatsApp (Meta). Ich sehe und speichere in WhatsApp nur das, was du mir schreibst.",
      "Kontakt per E-Mail: Der E-Mail-Link auf dieser Seite öffnet nur das E-Mail-Programm auf deinem Gerät — die Website selbst verschickt und speichert nichts. Erst wenn du die E-Mail absendest, läuft sie über den E-Mail-Anbieter (Google/Gmail). Auch dort gelten zusätzlich die Datenschutzbestimmungen des Anbieters.",
      "Coaching-Daten: Wenn du Coaching bei mir buchst, brauche ich von dir Angaben, die für die Betreuung nötig sind (z. B. deine Ziele, dein Trainingsstand, Essgewohnheiten, dein Zeitplan und dein Equipment). Diese Angaben nutze ich ausschließlich, um deinen Plan zu erstellen und dich zu betreuen. Ich speichere sie nur so lange, wie die Betreuung dauert, und lösche sie danach oder auf deinen Wunsch früher. Ich gebe sie nicht an Dritte weiter — außer, du willst ausdrücklich, dass ich mit jemandem (z. B. deinem Arzt) spreche.",
      "Deine Rechte: Du kannst jederzeit Auskunft darüber verlangen, welche Daten ich zu deiner Person gespeichert habe. Du kannst außerdem die Berichtigung falscher Daten und die Löschung deiner Daten verlangen. Schreib mir dazu einfach per WhatsApp oder E-Mail an piotr.coaches@gmail.com.",
      "Hinweis: Dieser Text beschreibt die Praxis dieser Website in einfacher Sprache. Er ist keine Rechtsberatung. Wenn sich technisch etwas ändert (z. B. ein Formular, ein Newsletter oder eine Statistik-Funktion dazukommt), muss dieser Text angepasst werden — dann bitte melden.",
    ],
  },
} as const;

/**
 * Hilfsfunktion: erkennt noch nicht eingesetzte Platzhalter-Links.
 * Echte Links (http/https) und E-Mail-Links (mailto:) gelten als fertig.
 */
export function istPlatzhalterLink(link: string): boolean {
  return !/^(https?:\/\/|mailto:)/i.test(link);
}
