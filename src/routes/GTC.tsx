import Button from "@/components/Button";
import Spacing from "@/components/Spacing";
import { Calendar, ChevronLeft } from "lucide-react";
import { Link } from "react-router";

/** The General Terms and Conditions page (AGB) */
const GTC = () => (
  <>
    <div className="pt-32 pb-8">
      <Link to="/" className="flex w-max items-center gap-1.5 pb-2">
        <ChevronLeft className="shrink-0 text-black" />
        <p>Zurück zur Startseite</p>
      </Link>
      <h1 className="hidden text-5xl lg:block">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <h1 className="text-5xl lg:hidden">Allgemeine Geschäfts-bedingungen (AGB)</h1>
      <p className="mt-2">der ClassInsights GesbR</p>
      <p className="ml-2">mit Jakob Wassertheurer (A-6500 Landeck, Brixnerstraße 16)</p>
      <p className="ml-2">und Julian Grill (A-6561 Ischgl, Versahlweg 26)</p>
      <p>für Unternehmen und Bildungseinrichtungen</p>
      <div className="flex items-center gap-2">
        <Calendar size={16} />
        <p>Stand: 12. September 2025</p>
      </div>
    </div>
    <div className="print:hidden">
      <Button label="AGB ausdrucken/speichern" onPress={() => window.print()} arrowed />
    </div>
    <h2 className="mt-10 pb-2">0. Begriffe & Vertragsabschluss</h2>
    <h3 className="mt-4 pb-1">0.1</h3>
    <p>
      „Auftragnehmer“ ist die ClassInsights GesbR; „Auftraggeber“ ist die jeweilige
      Schule/Bildungseinrichtung. „Standardsoftware“ bezeichnet die Software „ClassInsights“
      inklusive lokalem Windows-Dienst, lokaler API und Anbindung an die ClassInsights API.
      „Lizenzmetrik“ ist die im Bestellschein ausgewiesene Nutzungsbasis (z. B. pro Schule/Standort,
      pro Gerät, pro Raum).
    </p>
    <h3 className="mt-4 pb-1">0.2</h3>
    <p>
      Ein Vertrag kommt ausschließlich durch schriftliche Annahme (Textform genügt) oder durch
      Freischaltung/Übermittlung eines Lizenzschlüssels durch den Auftragnehmer zustande. Der
      Auftragnehmer ist frei, Anfragen nach eigenem Ermessen anzunehmen oder abzulehnen.
    </p>
    <h2 className="mt-10 pb-2">1. Vertragsumfang & Gültigkeitsbereich</h2>
    <h3 className="mt-4 pb-1">1.1</h3>
    <p>
      Für den Geschäftsverkehr der ClassInsights GesbR (nachstehend genannt Auftragnehmer), A-6500
      Landeck, Brixnerstraße 16, gelten ausschließlich die nachfolgenden Allgemeinen
      Geschäftsbedingungen (nachstehend kurz "AGB" genannt). Diese AGB gelten ausschließlich
      gegenüber Unternehmern im Sinne des § 1 KSchG sowie juristischen Personen des öffentlichen
      Rechts. Juristische Personen des öffentlichen Rechts gelten stets als Unternehmer. Verträge
      mit Verbrauchern iSd KSchG werden nicht geschlossen. Öffentliche Schulen und sonstige
      Bildungseinrichtungen gelten als Unternehmer im Sinn dieser AGB.
    </p>
    <h3 className="mt-4 pb-1">1.2</h3>
    <p>
      Alle Aufträge und Vereinbarungen sind nur dann rechtsverbindlich, wenn sie vom Auftragnehmer
      schriftlich und firmengemäß gezeichnet werden und verpflichten nur in dem in der
      Auftragsbestätigung angegebenem Umfang. Einkaufsbedingungen des Auftraggebers werden für das
      gegenständliche Rechtsgeschäft und die gesamte Geschäftsbeziehung hiermit ausgeschlossen.
      Angebote sind grundsätzlich freibleibend. Im Falle von Widersprüchen gilt folgende
      Reihenfolge: (I) Individualvertrag/Bestellschein, (II) diese AGB, (III) Angebot inkl.
      Leistungsbeschreibung, (IV) sonstige Unterlagen; Textform (E-Mail) genügt.
    </p>
    <h3 className="mt-4 pb-1">1.3</h3>
    <p>
      Sofern der Auftraggeber dem öffentlichen Beschaffungsrecht unterliegt und zwingende
      vergaberechtliche Bestimmungen entgegenstehen, gehen diese nur vor, soweit zwingend; im
      Übrigen gelten diese AGB.
    </p>
    <h2 className="mt-10 pb-2">2. Leistung und Prüfung (Standardsoftware)</h2>
    <h3 className="mt-4 pb-1">2.1</h3>
    <p>
      Regelmäßiger Vertragsgegenstand ist die Einräumung befristeter Nutzungsrechte an der
      Standardsoftware ClassInsights; Individualleistungen (z. B. Anpassung, Installation, Schulung,
      Wartung) erfolgen ausschließlich bei gesonderter schriftlicher Beauftragung.
    </p>
    <h3 className="mt-4 pb-1">2.2</h3>
    <p>
      Die Ausarbeitung individueller Organisationskonzepte und Programme (soweit in diesen AGB von
      Software gesprochen wird, sind die beiden Begriffe synonym) erfolgt nach Art und Umfang der
      vom Auftraggeber vollständig zur Verfügung gestellten bindenden Informationen, Unterlagen und
      Hilfsmittel. Dazu zählen auch praxisgerechte Testdaten sowie Testmöglichkeiten in
      ausreichendem Ausmaß, die der Auftraggeber zeitgerecht, in der Normalarbeitszeit und auf seine
      Kosten zur Verfügung stellt. Wird vom Auftraggeber bereits auf der zum Test zur Verfügung
      gestellten Anlage im Echtbetrieb gearbeitet, liegt die Verantwortung für die Sicherung der
      Echtdaten beim Auftraggeber.
    </p>
    <h3 className="mt-4 pb-1">2.3 (nur bei ausdrücklich beauftragten Individualleistungen)</h3>
    <p>
      Grundlage für die Erstellung von Individualprogrammen ist die schriftliche
      Leistungsbeschreibung, die der Auftragnehmer gegen Kostenberechnung aufgrund der ihm zur
      Verfügung gestellten Unterlagen und Informationen ausarbeitet bzw. der Auftraggeber zur
      Verfügung stellt. Diese Leistungsbeschreibung ist vom Auftraggeber auf Richtigkeit und
      Vollständigkeit zu überprüfen und mit seinem Zustimmungsvermerk zu versehen. Später
      auftretende Änderungswünsche können zu gesonderten Termin- und Preisvereinbarungen führen.
      Entfällt für Standardsoftware. Findet nur Anwendung bei ausdrücklich beauftragten
      Individualleistungen in separatem Vertrag. Bei Standardsoftware findet keine Abnahme statt;
      die Nutzung stellt keine Abnahme individueller Leistungen dar.
    </p>
    <h3 className="mt-4 pb-1">2.4 (nur bei ausdrücklich beauftragten Individualleistungen)</h3>
    <p>
      Individuell erstellte Software bzw. Programmadaptierungen bedürfen für das jeweils betroffene
      Programmpaket einer Programmabnahme spätestens vier Wochen ab Lieferung durch den
      Auftraggeber. Diese wird in einem Protokoll vom Auftraggeber bestätigt. (Prüfung auf
      Richtigkeit und Vollständigkeit anhand der vom Auftragnehmer akzeptierten
      Leistungsbeschreibung mittels der unter Punkt 2.2. angeführten zur Verfügung gestellten
      Testdaten). Lässt der Auftraggeber den Zeitraum von vier Wochen ohne Programmabnahme
      verstreichen, so gilt die gelieferte Software mit dem Enddatum des genannten Zeitraumes als
      abgenommen. Bei Einsatz der Software im Echtbetrieb durch den Auftraggeber gilt die Software
      jedenfalls als abgenommen. Etwa auftretende Mängel, das sind Abweichungen von der schriftlich
      vereinbarten Leistungsbeschreibung, sind vom Auftraggeber ausreichend dokumentiert dem
      Auftragnehmer zu melden, der um rasche mögliche Mängelbehebung bemüht ist. Liegen schriftlich
      gemeldete, wesentliche Mängel vor, das heißt, dass der Echtbetrieb nicht begonnen oder
      fortgesetzt werden kann, so ist nach Mängelbehebung eine neuerliche Abnahme erforderlich. Der
      Auftraggeber ist nicht berechtigt, die Abnahme von Software wegen unwesentlicher Mängel
      abzulehnen. „Abnahmeprozesse gelten ausschließlich für ausdrücklich beauftragte
      Individualleistungen; bei Standardsoftware erfolgt keine Abnahme, die Nutzung gilt nicht als
      Abnahme individueller Leistungen.
    </p>
    <h3 className="mt-4 pb-1">2.5</h3>
    <p>
      Bei Bestellung von Bibliotheks-(Standard-)Programmen bestätigt der Auftraggeber mit der
      Bestellung die Kenntnis des Leistungsumfanges der bestellten Programme.
    </p>
    <h3 className="mt-4 pb-1">2.6</h3>
    <p>
      Sollte sich im Zuge der Arbeiten herausstellen, dass die Ausführung des Auftrages gemäß
      Leistungsbeschreibung tatsächlich oder rechtlich unmöglich ist, ist der Auftragnehmer
      verpflichtet, dies dem Auftraggeber sofort anzuzeigen. Ändert der Auftraggeber die
      Leistungsbeschreibung nicht dahingehend bzw. schafft die Voraussetzung, dass eine Ausführung
      möglich wird, kann der Auftragnehmer die Ausführung ablehnen. Ist die Unmöglichkeit der
      Ausführung die Folge eines Versäumnisses des Auftraggebers oder einer nachträglichen Änderung
      der Leistungsbeschreibung durch den Auftraggeber, ist der Auftragnehmer berechtigt, vom
      Auftrag zurückzutreten. Die bis dahin für die Tätigkeit des Auftragnehmers angefallenen Kosten
      und Spesen sowie allfällige Abbaukosten sind vom Auftraggeber zu ersetzen.
    </p>
    <h3 className="mt-4 pb-1">2.7</h3>
    <p>
      Die Bereitstellung erfolgt elektronisch. Auf ausdrücklichen Wunsch des Auftraggebers kann eine
      physische Lieferung erfolgen; diese erfolgt auf Kosten und Gefahr des Auftraggebers.
    </p>
    <h3 className="mt-4 pb-1">2.8</h3>
    <p>
      Eine barrierefreie Ausgestaltung (insb. nach BGStG, WZG und dem mit 28. Juni 2025 in Kraft
      tretenden BaFG) ist nicht geschuldet, sofern nicht ausdrücklich vereinbart. Der Auftraggeber
      prüft die rechtliche Zulässigkeit eigener Inhalte. Der Auftragnehmer erfüllt eine angemessene
      Warnpflicht; bei nur leichter Fahrlässigkeit und/oder nach Erfüllung der Warnpflicht haftet er
      nicht für vom Auftraggeber vorgegebene Inhalte.
    </p>
    <h3 className="mt-4 pb-1">2.9</h3>
    <p>
      Eine aktuelle Online-Kurzdokumentation/Benutzerhilfe wird bereitgestellt; weitergehende
      Dokumentation nur bei ausdrücklicher Vereinbarung.
    </p>
    <h3 className="mt-4 pb-1">2.10</h3>
    <p>
      Allfällige Systempasswörter zu individuell erstellten Leistungen werden dem Auftraggeber nur
      offengelegt, wenn a) kein Wartungs-/Betreuungsvertrag mehr besteht, b) sämtliche
      Zahlungsverpflichtungen erfüllt sind, c) der Auftraggeber das Passwort benötigt, um die
      Leistung dem Vertragszweck entsprechend zu nutzen, anzupassen oder weiterzuentwickeln, und d)
      der Auftraggeber zur Kenntnis nimmt, dass der Auftragnehmer für nachfolgende Eingriffe keine
      Gewährleistung übernimmt, soweit diese auf Änderungen des Auftraggebers beruhen. Nicht
      anwendbar bei reiner Standardsoftware; gilt nur für ausdrücklich beauftragte
      Individualleistungen und wird dort separat geregelt.
    </p>
    <h3 className="mt-4 pb-1">2.11</h3>
    <p>
      Vertragsgegenstand ist ausschließlich die Einräumung von Nutzungsrechten an der
      Standardsoftware ClassInsights; Individualanpassungen, kundenspezifische Entwicklungen,
      Installations-, Konfigurations-, Schulungs- sowie sonstige Zusatzleistungen werden nur
      aufgrund gesonderter Vereinbarung erbracht.
    </p>
    <h3 className="mt-4 pb-1">2.12</h3>
    <p>
      Die Funktionsfähigkeit kann von Drittleistungen (z. B. APIs von
      Stundenplan-/Identitätsdiensten) und Netzinfrastrukturen abhängen; Störungen außerhalb des
      Einflussbereichs des Auftragnehmers begründen keinen Verzug; übliche Wartungsfenster und
      Änderungen Dritter bleiben vorbehalten. Änderungen, Limitierungen, Wartungsfenster,
      Deprecations und Authentifizierungsanforderungen Dritter gelten nicht als Verzug. Der
      Auftraggeber wird über wesentliche, funktionsrelevante Änderungen Dritter nach
      Kenntniserlangung in angemessener Frist informiert. Erforderliche Anpassungsleistungen werden
      nach Aufwand zu den aktuellen Sätzen erbracht, sofern nicht in der Lizenz inkludiert.
    </p>
    <h3 className="mt-4 pb-1">2.13</h3>
    <p>
      Der Auftragnehmer ist berechtigt, Funktionen, Schnittstellen und technische Parameter der
      Standardsoftware angemessen weiterzuentwickeln, soweit die Kernfunktionalität (automatisches
      Herunterfahren der Computer auf Basis des Stundenplans, manuelle Raumzuweisung der Computer)
      erhalten bleibt. Wesentliche, nachteilige Änderungen werden mindestens 30 Tage vor
      Wirksamwerden angekündigt.
    </p>
    <h2 className="mt-10 pb-2">3. Preise, Steuern und Gebühren</h2>
    <h3 className="mt-4 pb-1">3.1</h3>
    <p>
      Alle Preise verstehen sich in Euro ohne Umsatzsteuer. Sie gelten nur für den vorliegenden
      Auftrag. Die genannten Preise verstehen sich ab Geschäftssitz bzw. - stelle des
      Auftragnehmers. Die Bereitstellung erfolgt, wenn nicht andess vereinbart, elektronisch.
      Etwaige Vertragsgebühren trägt der Auftraggeber.“
    </p>
    <h3 className="mt-4 pb-1">3.2</h3>
    <p>
      Bei Bibliotheks- (Standard)-Programmen gelten die am Tag der Lieferung gültigen Listenpreise.
      Bei allen anderen Dienstleistungen (Organisationsberatung, Programmierung, Einschulung,
      Umstellungsunterstützung, telefonische Beratung usw.) wird der Arbeitsaufwand zu den am Tag
      der Leistungserbringung gültigen Sätzen verrechnet. Abweichungen von einem dem Vertragspreis
      zugrundeliegenden Zeitaufwand, der nicht vom Auftragnehmer zu vertreten ist, wird nach
      tatsächlichem Anfall berechnet. Preisänderungen bei Verlängerungen befristeter Lizenzen werden
      rechtzeitig mindestens 30 Tage vor Verlängerungszeitpunkt mitgeteilt. Bis zur Mitteilung
      gelten die zuletzt vereinbarten Entgelte fort.
    </p>
    <h3 className="mt-4 pb-1">3.3</h3>
    <p>
      Die Kosten für Reise-, Tag- und Nächtigungsgelder werden nach den jeweils gültigen Sätzen in
      Rechnung gestellt. Mangels solcher sind die nachgewiesenen tatsächlichen Kosten zu ersetzen.
      Wegzeiten gelten als Arbeitszeit.
    </p>
    <h2 className="mt-10 pb-2">4. Liefertermin</h2>
    <h3 className="mt-4 pb-1">4.1</h3>
    <p>
      Der Auftragnehmer ist bestrebt, die vereinbarten Termine der Erfüllung (Fertigstellung)
      möglichst genau einzuhalten.
    </p>
    <h3 className="mt-4 pb-1">4.2</h3>
    <p>
      Die angestrebten Erfüllungstermine können nur dann eingehalten werden, wenn der Auftraggeber
      zu den vom Auftragnehmer angegebenen Terminen alle notwendigen Arbeiten und Unterlagen
      vollständig, insbesondere die von ihm akzeptierte Leistungsbeschreibung lt. Punkt 2.3. zur
      Verfügung stellt und seiner Mitwirkungsverpflichtung im erforderlichen Ausmaß nachkommt.
      Lieferverzögerungen und Kostenerhöhungen, die durch unrichtige, unvollständige oder
      nachträglich geänderte Angaben und Informationen bzw. zur Verfügung gestellte Unterlagen
      entstehen, sind vom Auftragnehmer nicht zu vertreten und können nicht zum Verzug des
      Auftragnehmers führen. Daraus resultierende Mehrkosten trägt der Auftraggeber. Bei
      Standardsoftware beschränkt sich die Mitwirkungspflicht auf die Bereitstellung der für die
      Inbetriebnahme erforderlichen Informationen (z. B. Zugangsdaten zu Dritt-APIs,
      Systemvoraussetzungen). Fristen ruhen, solange notwendige Mitwirkungen, Daten oder
      Dritt-API-Zugänge nicht bereitgestellt sind.
    </p>
    <h3 className="mt-4 pb-1">4.3</h3>
    <p>
      Bei Aufträgen, die mehrere Einheiten bzw. Programme umfassen, ist der Auftragnehmer
      berechtigt, Teillieferungen durchzuführen bzw. Teilrechnungen zu legen.
    </p>
    <h3 className="mt-4 pb-1">4.4</h3>
    <p>
      Gerät der Auftraggeber in Annahmeverzug, gilt die Leistung als erbracht; etwaige Mehraufwände
      werden nach Aufwand berechnet.
    </p>
    <h2 className="mt-10 pb-2">5. Zahlung</h2>
    <h3 className="mt-4 pb-1">5.1</h3>
    <p>
      Die vom Auftragnehmer gelegten Rechnungen sind spätestens 14 Tage ab Fakturenerhalt ohne jeden
      Abzug und spesenfrei zahlbar. Für Teilrechnungen gelten die für den Gesamtauftrag festgelegten
      Zahlungsbedingungen analog. Rechnungen dürfen elektronisch übermittelt werden. Zahlungen
      erfolgen, wenn nicht anders vereinbart, per Überweisung.
    </p>
    <h3 className="mt-4 pb-1">5.2</h3>
    <p>
      Bei Aufträgen, die mehrere Einheiten (z.B. Programme und/oder Schulungen, Realisierungen in
      Teilschritten) umfassen, ist der Auftragnehmer berechtigt, nach Lieferung jeder einzelnen
      Einheit oder Leistung Rechnung zu legen.
    </p>
    <h3 className="mt-4 pb-1">5.3</h3>
    <p>
      Bei Zahlungsverzug nach zweimaliger Mahnung und einer letzten Nachfrist von 14 Tagen ist der
      Anbieter berechtigt, den Zugang vorläufig zu sperren; die Sperre wird mindestens 3 Werktage
      vorab angekündigt und nach vollständigem Ausgleich binnen 2 Werktagen aufgehoben.
    </p>
    <h3 className="mt-4 pb-1">5.4</h3>
    <p>
      Ein Zurückbehaltungsrecht wegen wesentlicher, schriftlich gerügter Mängel bleibt in
      angemessener Höhe bis zur Nacherfüllung bestehen. Die Aufrechnung ist nur mit unbestrittenen
      oder rechtskräftig festgestellten Forderungen zulässig.
    </p>
    <h3 className="mt-4 pb-1">5.5</h3>
    <p>
      Sind nach dem Auftrag (auch) körperliche Sachen in das Eigentum des Auftraggebers zu
      übertragen, bleiben diese bis zur vollständigen Bezahlung sämtlicher Forderungen des
      Auftragnehmers in dessen Eigentum.
    </p>
    <h2 className="mt-10 pb-2">6. Urheberrecht und Nutzung</h2>
    <h3 className="mt-4 pb-1">6.1</h3>
    <p>
      Vorbehaltlich von Punkt 6.2 und 6.4 erteilt der Auftragnehmer dem Auftraggeber nach Bezahlung
      des vereinbarten Entgelts ein nicht ausschließliches, nicht übertragbares, nicht
      unterlizenzierbares und zeitlich befristetes Recht (laut Vereinbarung) die Software für die im
      Vertrag spezifizierte Hardware und im Ausmaß der erworbenen Lizenz für die gleichzeitige
      Nutzung auf mehreren Arbeitsplätzen zu verwenden, sämtliche auf der Grundlage des Vertrages
      des Auftragnehmers erstellten Arbeitsergebnisse zum eigenen, internen Gebrauch zu nutzen. Die
      Lizenz endet automatisch mit Ablauf der vereinbarten Laufzeit; ab diesem Zeitpunkt kann der
      technische Zugriff deaktiviert werden; eine Weiternutzung nach Laufzeitende ist unzulässig.
      Sämtliche sonstige Rechte verbleiben beim Auftragnehmer. Durch die Mitwirkung des
      Auftraggebers bei der Herstellung der Software werden keine Rechte über die im
      gegenständlichen Vertrag festgelegte Nutzung erworben. Es entsteht keine Miturheberschaft des
      Auftraggebers. Bei Urheberrechtsverletzungen bestehen Schadenersatz- und
      Unterlassungsansprüche nach den gesetzlichen Bestimmungen; weitergehende Rechte bleiben
      vorbehalten.
    </p>
    <h3 className="mt-4 pb-1">6.2</h3>
    <p>
      Ist im Fall der Erstellung von Individualsoftware eine ausschließliche, exklusive oder
      sinngleiche Nutzungsbefugnis des Auftraggebers vereinbart, gilt § 40b Urheberrechtsgesetz
      sinngemäß. Dies gilt allerdings nicht hinsichtlich jener Programmbestandteile, die von
      unabhängigen Dritten (d.h. solchen Personen, die die Bestandteile nicht als Arbeit- oder
      Auftragnehmer des Auftragnehmers geschaffen haben) geschaffen und vom Auftragnehmer in die
      Software integriert wurden (insbesondere von Dritten geschaffene Templates,
      Programmbibliotheken usw.). Vielmehr sind insoweit die für diese bestehenden Lizenzbedingungen
      maßgeblich.
    </p>
    <h3 className="mt-4 pb-1">6.3</h3>
    <p>
      Die Anfertigung von Kopien für Archiv- und Datensicherungszwecke ist dem Auftraggeber unter
      der Bedingung gestattet, dass sämtliche Copyright- und Eigentumsvermerke in diese Kopien
      unverändert mit übertragen werden.
    </p>
    <h3 className="mt-4 pb-1">6.4</h3>
    <p>
      Soweit zur Herstellung der Interoperabilität Informationen über Schnittstellen erforderlich
      sind, kann der Auftraggeber deren Offenlegung beauftragen. Gesetzliche Rechte zur
      Dekompilierung (§§ 40d/e UrhG) bleiben unberührt; die hieraus gewonnenen Informationen dürfen
      ausschließlich zur Interoperabilität genutzt werden.
    </p>
    <h3 className="mt-4 pb-1">6.5</h3>
    <p>
      Wird dem Auftraggeber eine Software zur Verfügung gestellt, deren Lizenzinhaber ein Dritter
      ist (zB Standardsoftware von Microsoft), so richtet sich die Einräumung des Nutzungsrechts
      nach den Lizenzbestimmungen des Lizenzinhabers (Hersteller). Die Software kann
      Open-Source-Komponenten enthalten; deren Lizenzbedingungen sind einzuhalten.
    </p>
    <h3 className="mt-4 pb-1">6.6</h3>
    <p>
      Vom Auftraggeber gegebenes Feedback darf der Auftragnehmer unentgeltlich zur
      Produktverbesserung nutzen.
    </p>

    <h2 className="mt-10 pb-2">7. Rücktrittsrecht</h2>
    <h3 className="mt-4 pb-1">7.1</h3>
    <p>
      Für den Fall der Überschreitung einer vereinbarten Lieferzeit aus alleinigem Verschulden oder
      rechtswidrigem Handeln des Auftragnehmers ist der Auftraggeber berechtigt, mittels
      eingeschriebenen Briefes oder E-Mail vom betreffenden Auftrag zurückzutreten, wenn auch
      innerhalb der angemessenen Nachfrist die vereinbarte Leistung in wesentlichen Teilen nicht
      erbracht wird und den Auftraggeber daran kein Verschulden trifft.
    </p>
    <h3 className="mt-4 pb-1">7.2</h3>
    <p>
      Höhere Gewalt, Arbeitskonflikte, Naturkatastrophen und Transportsperren sowie sonstige
      Umstände, die außerhalb der Einflussmöglichkeit des Auftragnehmers liegen, entbinden den
      Auftragnehmer von der Lieferverpflichtung bzw. gestatten ihm eine Neufestsetzung der
      vereinbarten Lieferzeit.
    </p>
    <h3 className="mt-4 pb-1">7.3</h3>
    <p>
      Stornierungen durch den Auftraggeber sind nur mit schriftlicher Zustimmung des Auftragnehmers
      möglich. Ist der Auftragnehmer mit einem Storno einverstanden, so hat er das Recht, neben den
      erbrachten Leistungen und aufgelaufenen Kosten eine Stornogebühr in der Höhe von 30% des noch
      nicht abgerechneten Auftragswertes des Gesamtprojektes zu verrechnen.
    </p>
    <h2 className="mt-10 pb-2">8. Gewährleistung, Wartung, Änderungen</h2>
    <h3 className="mt-4 pb-1">8.1</h3>
    <p>
      Der Auftragnehmer gewährleistet, dass die Software die in der dazugehörigen Dokumentation
      beschriebenen Funktionen erfüllt, sofern die Software auf dem im Vertrag beschriebenen
      Betriebssystem genutzt wird. Voraussetzung ist die Einhaltung der Systemvoraussetzungen und
      Installationsanleitung laut Dokumentation. Der Auftraggeber hat Mängel nachvollziehbar zu
      dokumentieren und zu melden. Mängel sind mit nachvollziehbarer Dokumentation
      (Logs/Screenshots/Schritte) an die ClassInsights Support E-Mail{" "}
      <a href="mailto:office@classinsights.at">office@classinsights.at</a> zu melden. Der
      Auftragnehmer leistet primär Verbesserung; Ersatzlieferung bleibt vorbehalten.
    </p>
    <h3 className="mt-4 pb-1">8.2</h3>
    <p>
      Für Programme, die durch eigene Programmierer des Auftraggebers bzw. Dritte nachträglich
      verändert werden, entfällt jegliche Gewährleistung durch den Auftragnehmer.
    </p>
    <h3 className="mt-4 pb-1">8.3</h3>
    <p>
      Kosten für Hilfestellung, Fehlerdiagnose sowie Fehler- und Störungsbeseitigung, die vom
      Auftraggeber zu vertreten sind, sowie sonstige Korrekturen, Änderungen und Ergänzungen werden
      vom Auftragnehmer gegen Berechnung durchgeführt. Dies gilt auch für die Behebung von Mängeln,
      wenn Programmänderungen, Ergänzungen oder sonstige Eingriffe vom Auftraggeber selbst oder von
      dritter Seite vorgenommen worden sind.
    </p>
    <h3 className="mt-4 pb-1">8.4</h3>
    <p>
      Soweit Gegenstand des Auftrages die Änderung oder Ergänzung bereits bestehender Programme ist,
      bezieht sich die Gewährleistung auf die Änderung oder Ergänzung. Die Gewährleistung für das
      ursprüngliche Programm lebt dadurch nicht wieder auf.
    </p>
    <h3 className="mt-4 pb-1">8.5</h3>
    <p>
      Im B2B beträgt die Gewährleistungsfrist für Standardsoftware 12 Monate ab Bereitstellung;
      gesetzliche zwingende Rechte bleiben unberührt.
    </p>
    <h3 className="mt-4 pb-1">8.6</h3>
    <p>
      Die Aktualisierungspflichten des Verbrauchergewährleistungsgesetzes (VGG) finden keine
      Anwendung. Unberührt bleibt die vertragliche Zusage, während der Laufzeit sicherheits- und
      funktionsbezogene Updates bereitzustellen, soweit zur Vertragserfüllung erforderlich.
    </p>
    <h2 className="mt-10 pb-2">9. Haftung</h2>
    <h3 className="mt-4 pb-1">9.1</h3>
    <p>
      Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für
      Personenschäden. Bei leicht fahrlässigen Pflichtverletzungen ist die Haftung auf den
      typischerweise vorhersehbaren Schaden begrenzt, maximal jedoch auf die Summe der vom
      Auftraggeber in den letzten 12 Monaten vor Schadenseintritt gezahlten Netto-Lizenzentgelte,
      pro Schadensfall und insgesamt. Haftung für entgangenen Gewinn, mittelbare Schäden und
      Folgeschäden ist ausgeschlossen, außer bei Vorsatz/grober Fahrlässigkeit. Ansprüche nach dem
      PHG, bei Arglist und für Leben, Körper, Gesundheit bleiben unberührt.
    </p>
    <h3 className="mt-4 pb-1">9.2</h3>
    <p>
      Schadenersatzansprüche verjähren innerhalb der gesetzlichen Fristen (kenntnisabhängig 3
      Jahre); hiervon unberührt bleiben zwingende längere Fristen.
    </p>
    <h3 className="mt-4 pb-1">9.3</h3>
    <p>
      Sofern der Auftragnehmer das Werk unter Zuhilfenahme Dritter erbringt und in diesem
      Zusammenhang Gewährleistungs- und/oder Haftungsansprüche gegenüber diesen Dritten entstehen,
      tritt der Auftragnehmer diese Ansprüche an den Auftraggeber ab. Der Auftraggeber wird sich in
      diesem Fall vorrangig an diese Dritten halten.
    </p>
    <h3 className="mt-4 pb-1">9.4</h3>
    <p>
      Haftung für Datenwiederherstellung ist in die allgemeine Haftungsobergrenze integriert;
      weitergehende Haftung nur bei Verletzung ausdrücklich übernommener Datensicherungs- oder
      Backup-Pflichten.
    </p>
    <h2 className="mt-10 pb-2">10. Loyalität</h2>
    <h3 className="mt-4 pb-1">10.1</h3>
    <p>
      Die Vertragspartner verpflichten sich zur gegenseitigen Loyalität. Sie werden jede Abwerbung
      und Beschäftigung, auch über Dritte, von Mitarbeitern, die an der Realisierung der Aufträge
      gearbeitet haben, des anderen Vertragspartners während der Dauer des Vertrages und 12 Monate
      nach Beendigung des Vertrages unterlassen.
    </p>
    <h2 className="mt-10 pb-2">11. Datenschutz</h2>
    <h3 className="mt-4 pb-1">11.1</h3>
    <p>
      Der Auftragnehmer verpflichtet seine Mitarbeiter, die Bestimmungen gemäß § 6 des
      Datenschutzgesetzes einzuhalten. Die Parteien beachten die DSGVO und das DSG; der
      Auftragnehmer verpflichtet sämtliche Mitarbeiter auf das Datengeheimnis.
    </p>
    <h3 className="mt-4 pb-1">11.2</h3>
    <p>
      Die Datenschutzerklärung ist Bestandteil dieses Vertrages und wird dem Auftraggeber auf der
      Website des Auftragnehmers zur Verfügung gestellt.{" "}
      <Link to="/datenschutz">https://www.classinsights.at/datenschutz</Link>
    </p>

    <h2 className="mt-10 pb-2">12. Geheimhaltung</h2>
    <h3 className="mt-4 pb-1">12.1</h3>
    <p>
      Jeder Vertragspartner sichert dem anderen zu, alle ihm vom anderen im Zusammenhang mit diesem
      Vertrag und seiner Durchführung zur Kenntnis gebrachten Betriebsgeheimnisse als solche zu
      behandeln und Dritten nicht zugänglich zu machen, soweit diese nicht allgemein bekannt sind,
      oder dem Empfänger bereits vorher ohne Verpflichtung zur Geheimhaltung bekannt waren, oder dem
      Empfänger von einem Dritten ohne Geheimhaltungsverpflichtung mitgeteilt bzw. überlassen
      werden, oder vom Empfänger nachweislich unabhängig entwickelt worden sind, oder aufgrund einer
      rechtskräftigen behördlichen oder richterlichen Entscheidung offen zu legen sind.
    </p>
    <h3 className="mt-4 pb-1">12.2</h3>
    <p>
      Die mit dem Auftragnehmer verbundenen Unterauftragnehmer gelten nicht als Dritte, soweit sie
      einer inhaltlich diesem Punkt entsprechenden Geheimhaltungsverpflichtung unterliegen.
    </p>
    <h3 className="mt-4 pb-1">12.3</h3>
    <p>
      Nach Vertragsende sind vertrauliche Informationen auf Verlangen zurückzugeben oder zu löschen,
      soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
    </p>
    <h2 className="mt-10 pb-2">13. Schlussbestimmungen</h2>
    <h3 className="mt-4 pb-1">13.1</h3>
    <p>
      Soweit nicht anders vereinbart, gelten die zwischen Unternehmern zur Anwendung kommenden
      gesetzlichen Bestimmungen ausschließlich nach österreichischem Recht, auch dann, wenn der
      Auftrag im Ausland durchgeführt wird. Für eventuelle Streitigkeiten gilt ausschließlich die
      örtliche Zuständigkeit des sachlich zuständigen Gerichtes für den Geschäftssitz des
      Auftragnehmers als vereinbart.
    </p>
    <h3 className="mt-4 pb-1">13.2</h3>
    <p>
      Sollten einzelne oder mehrere Bestimmungen dieses Vertrages ganz oder teilweise unwirksam sein
      oder unwirksam werden, so wird hierdurch der übrige Inhalt dieses Vertrages nicht berührt. Die
      unwirksame oder nicht durchführbare Bestimmung ist durch eine sinngemäße gültige Regelung zu
      ersetzen, die der unwirksamen bzw. undurchführbaren Klausel am Nächsten kommt.
    </p>
    <h3 className="mt-4 pb-1">13.3</h3>
    <p>
      Gerichtsstand ist das sachlich zuständige Gericht am Geschäftssitz des Auftragnehmers;
      Gerichtsstands- und AGB-Klauseln sind nur wirksam, wenn sie dem Vertragspartner vor
      Vertragsschluss zur Verfügung gestellt wurden.
    </p>
    <h2 className="mt-10 pb-2">14. Lizenzlaufzeit</h2>
    <h3 className="mt-4 pb-1">14.1</h3>
    <p>
      Lizenzen werden befristet (z. B. 12 Monate) gewährt; die Laufzeit beginnt mit Bereitstellung
      des Lizenzschlüssels oder dem vertraglich vereinbarten Datum.
    </p>
    <h3 className="mt-4 pb-1">14.2</h3>
    <p>
      Sofern nichts anderes vereinbart ist, verlängern sich Lizenzen nicht automatisch. Eine
      ausdrückliche Verlängerung bedarf der schriftlichen Zustimmung beider Parteien.
    </p>
    <h3 className="mt-4 pb-1">14.3</h3>
    <p>
      Nach Ablauf der Laufzeit endet das Nutzungsrecht automatisch; der technische Zugriff kann ab
      diesem Zeitpunkt deaktiviert werden.
    </p>
    <h3 className="mt-4 pb-1">14.4</h3>
    <p>
      Während der Laufzeit werden verfügbare sicherheits- und funktionsbezogene Updates
      bereitgestellt; ein Anspruch auf bestimmte Funktionen, Reaktionszeiten oder Versionsstände
      besteht ohne separate Vereinbarung nicht.
    </p>
    <h2 className="mt-10 pb-2">15. Technische Voraussetzungen und Betrieb</h2>
    <h3 className="mt-4 pb-1">15.1</h3>
    <p>
      Voraussetzung für den Betrieb ist die Einhaltung der Systemanforderungen (z. B.
      Windows-Dienst, lokale API-Konnektivität, Netzwerkzugriffe) gemäß jeweils aktueller
      Dokumentation.{" "}
      <a href="https://docs.classinsights.at" target="_blank">
        https://docs.classinsights.at
      </a>
    </p>
    <p>
      Der Auftraggeber stellt einen aktuellen Virenschutz und Sicherheitsupdates der Systemumgebung
      sicher. Support- und Reaktionszeiten richten sich nach gesonderter Vereinbarung (SLA); mangels
      SLA erfolgt Support nach Verfügbarkeit.
    </p>
    <h3 className="mt-4 pb-1">15.2</h3>
    <p>
      Der Auftraggeber stellt die erforderlichen Rechte und Zugänge zu Dritt-APIs bereit.
      Änderungen/Limitierungen dieser Dritt-APIs können Funktionsumfang und Verfügbarkeit
      beeinflussen und liegen außerhalb des Verantwortungsbereichs des Auftragnehmers.
    </p>
    <h2 className="mt-10 pb-2">16. ClassInsights Testphase (Demo)</h2>
    <h3 className="mt-4 pb-1">16.1</h3>
    <p>
      {" "}
      Der Auftragnehmer kann Schulen einmalig eine unverbindliche Testphase von bis zu drei (3)
      Monaten gewähren. Ein Rechtsanspruch hierauf besteht nicht; der Auftragnehmer entscheidet nach
      eigenem Ermessen über die Freischaltung.
    </p>
    <h3 className="mt-4 pb-1">16.2</h3>
    <p>
      Die Testphase ist unentgeltlich und dient der Erprobung. Ein produktiver Einsatz erfolgt auf
      eigenes Risiko des Auftraggebers.
    </p>
    <h3 className="mt-4 pb-1">16.3</h3>
    <p>
      Während der Testphase gelten diese AGB sinngemäß; Gewährleistung ist ausgeschlossen. Während
      der unentgeltlichen Testphase haftet der Anbieter nur für Vorsatz und grobe Fahrlässigkeit;
      Personenschäden bleiben unberührt; weitergehende Ansprüche sind ausgeschlossen.
    </p>
    <h3 className="mt-4 pb-1">16.4</h3>
    <p>
      Supportleistungen in der Testphase erfolgen nach Verfügbarkeit. Ein Anspruch auf bestimmte
      Reaktionszeiten besteht nicht.
    </p>
    <h3 className="mt-4 pb-1">16.5</h3>
    <p>
      Mit Ablauf der Testphase endet der Zugang automatisch, sofern keine kostenpflichtige Lizenz
      vereinbart wird.
    </p>
    <h3 className="mt-4 pb-1">16.6</h3>
    <p>
      Jede Schule kann die Testphase nur einmal in Anspruch nehmen. Der Auftragnehmer ist
      berechtigt, Nachweise über die Schulzugehörigkeit zu verlangen und Mehrfachanmeldungen zu
      sperren.
    </p>
    <Spacing size="lg" />
  </>
);

export default GTC;
