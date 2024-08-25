import { Link } from "react-router-dom";
import ArrowSVG from "../assets/svg/arrow.svg?react";
import CallSVG from "../assets/svg/call.svg?react";
import MailSVG from "../assets/svg/mail.svg?react";
import PageWrapper from "../components/PageWrapper";
import Spacing from "../components/Spacing";

const Privacy = () => {
	return (
		<PageWrapper>
			<div className="pt-32 pb-8">
				<Link to="/" className="flex w-max items-center gap-1.5 pb-2">
					<ArrowSVG className="rotate-180 fill-black" />
					<p>Zurück zur Startseite</p>
				</Link>
				<h1 className="text-5xl md:hidden">Datenschutz</h1>
				<h1 className="hidden text-5xl md:inline">Datenschutzerklärung</h1>
			</div>
			<p className="pb-2">
				Personenbezogene Daten &#40;nachfolgend zumeist nur „Daten“ genannt&#41;
				werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der
				Bereitstellung eines funktionsfähigen und nutzerfreundlichen
				Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
				Leistungen, verarbeitet.
			</p>
			<p className="pb-2">
				Gemäß Art. 4 Ziffer 1. der Verordnung &#40;EU&#41; 2016/679, also der
				Datenschutz-Grundverordnung &#40;nachfolgend nur „DSGVO“ genannt&#41;,
				gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter
				Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im
				Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen,
				die Organisation, das Ordnen, die Speicherung, die Anpassung oder
				Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung
				durch Übermittlung, Verbreitung oder eine andere Form der
				Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung,
				das Löschen oder die Vernichtung.
			</p>
			<p>
				Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
				insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der
				Verarbeitung personenbezogener Daten, soweit wir entweder allein oder
				gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
				entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu
				Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
				eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum
				eigener Verantwortung verarbeiten.
			</p>
			<h2 className="mt-12 pb-4">
				I. Informationen über uns als Verantwortliche
			</h2>
			<p>
				Verantwortlicher Anbieter dieses Internetauftritts im
				datenschutzrechtlichen Sinne ist:
			</p>
			<p>Jakob Wassertheurer</p>
			<p>Brixnerstraße 16</p>
			<p>6500 Landeck</p>
			<div className="flex items-center gap-2">
				<CallSVG className="fill-black" width={20} />
				<p>Bald für Sie telefonisch erreichbar!</p>
			</div>
			<div className="flex items-center gap-2">
				<MailSVG className="fill-black" width={20} />
				<a href="mailto:office@classinsights.at">office@classinsights.at</a>
			</div>
			<h2 className="mt-12 pb-4">II. Rechte der Nutzer und Betroffenen</h2>
			<p>
				Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung
				haben die Nutzer und Betroffenen das Recht:
			</p>
			<ul className="list-inside list-disc pb-3">
				{[
					"auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);",
					"auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);",
					"auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;",
					"auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);",
					"auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).",
				].map((item) => (
					<li key={item.slice(0, 10)} className="pb-1">
						{item}
					</li>
				))}
			</ul>
			<p className="pb-2">
				Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen
				gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede
				Berichtigung oder Löschung von Daten oder die Einschränkung der
				Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt,
				zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese
				Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand
				verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft
				über diese Empfänger.
			</p>
			<p>
				Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht
				auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden
				Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs.
				1 lit. f&#41; DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch
				gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
			</p>
			<h2 className="mt-12 pb-4">III. Informationen zur Datenverarbeitung</h2>
			<p>
				Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
				gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
				Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
				entgegenstehen und nachfolgend keine anderslautenden Angaben zu
				einzelnen Verarbeitungsverfahren gemacht werden.
			</p>
			<h3 className="mt-6 pb-3">Cookie Manager</h3>
			<p className="pb-2">
				Zur Einholung einer Einwilligung zum Einsatz von technisch nicht
				notwendigen Cookies auf der Website, setzt der Anbieter einen
				Cookie-Manager ein. Bei dem Aufruf der Website wird ein Cookie mit den
				Einstellungsinformationen auf dem Endgerät des Nutzers abgelegt, sodass
				bei einem weiteren Besuch die Abfrage in Bezug auf die Einwilligung
				nicht erfolgen muss. Das Cookie ist erforderlich um eine rechtskonforme
				Einwilligung des Nutzers einzuholen.
			</p>
			<p>
				Die Installation der Cookies kann der Nutzer durch Einstellungen seines
				Browsers verhindern bzw. beenden.
			</p>
			<h3 className="mt-6 pb-3">Cookies</h3>
			<h4 className="text-lg">a&#41; Sitzungs-Cookies/Session-Cookies</h4>
			<p className="pb-2">
				Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind
				kleine Textdateien oder andere Speichertechnologien, die durch den von
				Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und
				gespeichert werden. Durch diese Cookies werden im individuellen Umfang
				bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder
				Standortdaten oder Ihre IP-Adresse, verarbeitet.
			</p>
			<p className="pb-2">
				Durch diese Verarbeitung wird unser Internetauftritt
				benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw.
				die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen
				oder das Angebot einer Warenkorbfunktion ermöglicht. Rechtsgrundlage
				dieser Verarbeitung ist Art. 6 Abs. 1 lit b.&#41; DSGVO, sofern diese
				Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet
				werden.
			</p>
			<p className="pb-2">
				Falls die Verarbeitung nicht der Vertragsanbahnung oder
				Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der
				Verbesserung der Funktionalität unseres Internetauftritts.
				Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f&#41; DSGVO.
			</p>
			<p>
				Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies
				gelöscht.
			</p>
			<h4 className="mt-4 text-lg">b&#41; Drittanbieter-Cookies</h4>
			<p className="pb-2">
				Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von
				Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse
				oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten,
				verwendet.
			</p>
			<p>
				Die Einzelheiten hierzu, insbesondere zu den Zwecken und den
				Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies,
				entnehmen Sie bitte den nachfolgenden Informationen.
			</p>
			<h4 className="mt-4 text-lg">c&#41; Beseitigungsmöglichkeit</h4>
			<p className="pb-2">
				Sie können die Installation der Cookies durch eine Einstellung Ihres
				Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie
				bereits gespeicherte Cookies jederzeit löschen. Die hierfür
				erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret
				genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die
				Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden
				sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die
				Verarbeitung allerdings nicht über die Einstellungen des Browsers
				unterbunden werden. Stattdessen müssen Sie insoweit die Einstellung
				Ihres Flash-Players ändern. Auch die hierfür erforderlichen Schritte und
				Maßnahmen hängen von Ihrem konkret genutzten Flash-Player ab. Bei Fragen
				benutzen Sie daher bitte ebenso die Hilfefunktion oder Dokumentation
				Ihres Flash-Players oder wenden sich an den Hersteller bzw.
				Benutzer-Support.
			</p>
			<p>
				Sollten Sie die Installation der Cookies verhindern oder einschränken,
				kann dies allerdings dazu führen, dass nicht sämtliche Funktionen
				unseres Internetauftritts vollumfänglich nutzbar sind.
			</p>
			<h3 className="mt-6 pb-3">Kontaktanfragen / Kontaktmöglichkeit</h3>
			<p className="pb-2">
				Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten,
				werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer
				Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und
				Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung
				können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.
				Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b&#41;
				DSGVO.
			</p>
			<p className="pb-2">
				Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet
				worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten
				entgegenstehen, wie bspw. bei einer sich etwaig anschließenden
				Vertragsabwicklung.
			</p>
			<p className="pb-2">
				Soweit Sie in diese Verarbeitung einwilligen, ist Art. 6 Abs. 1 lit.
				a&#41; DSGVO Rechtsgrundlage für die Verarbeitung.
			</p>
			<p className="pb-2">
				Sofern die Eröffnung des Kundenkontos zusätzlich auch vorvertraglichen
				Maßnahmen oder der Vertragserfüllung dient, so ist Rechtsgrundlage für
				diese Verarbeitung auch noch Art. 6 Abs. 1 lit. b&#41; DSGVO.
			</p>
			<p className="pb-2">
				Die uns erteilte Einwilligung in die Eröffnung und den Unterhalt des
				Kundenkontos können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung
				für die Zukunft widerrufen. Hierzu müssen Sie uns lediglich über Ihren
				Widerruf in Kenntnis setzen.
			</p>
			<p className="pb-2">
				Die insoweit erhobenen Daten werden gelöscht, sobald die Verarbeitung
				nicht mehr erforderlich ist. Hierbei müssen wir aber steuer- und
				handelsrechtliche Aufbewahrungsfristen beachten.
			</p>
			<h3 className="mt-6 pb-3">Kundenkonto / Registrierungsfunktion</h3>
			<p className="pb-2">
				Falls Sie über unseren Internetauftritt ein Kundenkonto bei uns anlegen,
				werden wir die von Ihnen bei der Registrierung eingegebenen Daten (also
				bspw. Ihren Namen, Ihre Anschrift oder Ihre E-Mail-Adresse)
				ausschließlich für vorvertragliche Leistungen, für die Vertragserfüllung
				oder zum Zwecke der Kundenpflege (bspw. um Ihnen eine Übersicht über
				Ihre bisherigen Bestellungen bei uns zur Verfügung zu stellen) erheben
				und speichern. Gleichzeitig speichern wir dann die IP-Adresse und das
				Datum Ihrer Registrierung nebst Uhrzeit. Eine Weitergabe dieser Daten an
				Dritte erfolgt natürlich nicht.
			</p>
			<h3 className="mt-6 pb-3">
				Gespeicherte Kundendaten und Zweck der Verarbeitung
			</h3>
			<p>
				Wir erheben und speichern folgende Kundendaten: Name, Adresse,
				E-Mail-Adresse, Telefonnummer und Zahlungsinformationen. Diese Daten
				werden für die folgenden Zwecke verwendet:
			</p>
			<ul className="list-inside list-disc pb-3">
				{[
					"Vertragsabwicklung: Zur Bearbeitung und Verwaltung Ihrer Bestellungen und Zahlungen.",
					"Kundenservice: Zur Beantwortung von Anfragen und zur Unterstützung bei Problemen.",
					"Rechnungsstellung: Zur Erstellung und Übermittlung von Rechnungen.",
				].map((item) => (
					<li key={item} className="pb-1">
						{item}
					</li>
				))}
			</ul>
			<p className="pb-2">
				Die Speicherung Ihrer Daten erfolgt nur so lange, wie es für die oben
				genannten Zwecke erforderlich ist. In der Regel werden Ihre Daten nach
				Abschluss des Vertragsverhältnisses und Ablauf der gesetzlichen
				Aufbewahrungsfristen gelöscht, es sei denn, Sie haben einer längeren
				Speicherung zugestimmt.
			</p>
			<h3 className="mt-6 pb-3">Serverdaten</h3>
			<p className="pb-2">
				Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren
				und stabilen Internetauftritts, werden Daten durch Ihren
				Internet-Browser an uns bzw. an unseren Webserver-Provider übermittelt.
				Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres
				Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf
				unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s)
				unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des
				jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von
				dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.
			</p>
			<p className="pb-2">
				Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch
				nicht gemeinsam mit anderen Daten von Ihnen.
			</p>
			<p className="pb-2">
				Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit.
				f&#41; DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung,
				Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.
			</p>
			<p className="pb-2">
				Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit
				keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist.
				Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls
				ganz oder teilweise von der Löschung ausgenommen.
			</p>
			<h3 className="mt-6 pb-3">Vertragsabwicklung</h3>
			<p className="pb-2">
				Die von Ihnen zur Inanspruchnahme unseres Waren- und/oder
				Dienstleistungsangebots übermittelten Daten werden von uns zum Zwecke
				der Vertragsabwicklung verarbeitet und sind insoweit erforderlich.
				Vertragsschluss und Vertragsabwicklung sind ohne Bereitstellung Ihrer
				Daten nicht möglich.
			</p>
			<p className="pb-2">
				Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b&#41;
				DSGVO.
			</p>
			<p className="pb-2">
				Wir löschen die Daten mit vollständiger Vertragsabwicklung, müssen dabei
				aber die steuer- und handelsrechtlichen Aufbewahrungsfristen beachten.
			</p>
			<p className="pb-2">
				Im Rahmen der Vertragsabwicklung geben wir Ihre Daten an das mit der
				Warenlieferung beauftragte Transportunternehmen oder an den
				Finanzdienstleister weiter, soweit die Weitergabe zur Warenauslieferung
				oder zu Bezahlzwecken erforderlich ist.
			</p>
			<p className="pb-2">
				Rechtsgrundlage für die Weitergabe der Daten ist dann Art. 6 Abs. 1 lit.
				b&#41; DSGVO.
			</p>
			<h3 className="mt-6 pb-3">YouTube</h3>
			<p className="pb-2">
				Wir unterhalten bei YouTube eine Onlinepräsenz um unser Unternehmen
				sowie unsere Leistungen zu präsentieren und mit Kunden/Interessenten zu
				kommunizieren. YouTube ist ein Service der Google Ireland Limited,
				Gordon House, Barrow Street, Dublin 4, Irland, ein Tochterunternehmen
				der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA.
			</p>
			<p className="pb-2">
				Insofern weisen wir darauf hin, dass die Möglichkeit besteht, dass Daten
				der Nutzer außerhalb der Europäischen Union, insbesondere in den USA,
				verarbeitet werden. Hierdurch können gesteigerte Risiken für die Nutzer
				insofern bestehen, als dass z.B. der spätere Zugriff auf die Nutzerdaten
				erschwert werden kann. Auch haben wir keinen Zugriff auf diese
				Nutzerdaten. Die Zugriffsmöglichkeit liegt ausschließlich bei YouTube.
			</p>
			<p>
				Die Datenschutzhinweise von YouTube finden Sie unter{" "}
				<a
					href="https://policies.google.com/privacy"
					target="_blank"
					rel="noreferrer"
					className="text-primary"
				>
					https://policies.google.com/privacy
				</a>
			</p>
			<h3 className="mt-6 pb-3">CloudFlare</h3>
			<p className="pb-2">
				Zur Absicherung unseres Internetauftritts sowie zur Optimierung der
				Ladezeiten setzen wir den Dienst CloudFlare als sog. CDN
				(Content-Delivery-Network) ein. Es handelt sich hierbei um einen Dienst
				der Cloudflare Inc., 101 Townsend Street, San Francisco, California
				94107, USA, nachfolgend nur „CloudFlare“ genannt.
			</p>
			<p className="pb-2">
				Rechtsgrundlage ist Art. 6 Abs. 1 lit. f&#41; DSGVO. Unser berechtigtes
				Interesse liegt in dem sicheren Betrieb unseres Internetauftritts sowie
				in dessen Optimierung.
			</p>
			<p>
				Sofern Sie unseren Internetauftritt aufrufen, werden Ihre Anfragen über
				den Server von CloudFlare geleitet. Hierbei werden statistische
				Zugriffsdaten über den Besuch unseres Internetauftritts erhoben und
				durch CloudFlare ein Cookie über Ihren Internet-Browser auf Ihrem
				Endgerät gespeichert. Zu den Zugriffsdaten zählen:
			</p>
			<ul className="list-inside list-disc pb-3">
				{[
					"Ihre IP-Adresse,",
					"Typ und Version des von Ihnen genutzten Internet – Browsers,",
					"das von Ihnen genutzte Betriebssystem,",
					"die Internetseite, von der sie auf unseren Internetauftritt gewechselt haben (Referrer- URL),",
					"die Unterseiten, die Sie auf unserem Internetauftritt besuchen,",
					"die Verweildauer auf unserem Internetauftritt und",
					"die Häufigkeit des Aufrufs unseres Internetauftritts.",
				].map((item) => (
					<li key={item.slice(0, 10)} className="pb-1">
						{item}
					</li>
				))}
			</ul>
			<p className="pb-2">
				Die Daten werden durch CloudFlare zum Zwecke statistischer Auswertungen
				der Zugriffe sowie zur Sicherheit und Optimierung des Angebots
				verwendet.
			</p>
			<p className="pb-2">
				Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
				die Möglichkeit, die Installation der Cookies durch die entsprechenden
				Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten
				hierzu finden Sie vorstehend unter dem Punkt „Cookies“.
			</p>
			<p>
				CloudFlare bietet unter{" "}
				<a
					href="https://www.cloudflare.com/privacypolicy/"
					target="_blank"
					rel="noreferrer"
					className="text-primary"
				>
					https://www.cloudflare.com/privacypolicy/
				</a>{" "}
				weitere Informationen zur Erhebung und Nutzung der Daten sowie zu Ihren
				Rechten und Möglichkeiten zum Schutz Ihrer Privatsphäre an.
			</p>
			<h3 className="mt-6 pb-3">YouTube</h3>
			<p className="pb-2">
				In unserem Internetauftritt setzen wir YouTube ein. Hierbei handelt es
				sich um ein Videoportal der Google Ireland Limited, Gordon House, Barrow
				Street, Dublin 4, Irland, nachfolgend nur „YouTube“ genannt.
			</p>
			<p className="pb-2">
				Wir nutzen YouTube im Zusammenhang mit der Funktion „Erweiterter
				Datenschutzmodus“, um Ihnen Videos anzeigen zu können. Im Falle einer
				von Ihnen erteilten Einwilligung für diese Verarbeitung ist
				Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann auch
				Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt in
				der Qualitätsverbesserung unseres Internetauftritts. Die Funktion
				„Erweiterter Datenschutzmodus“ bewirkt laut Angaben von YouTube, dass
				die nachfolgend noch näher bezeichneten Daten nur dann an den Server von
				YouTube übermittelt werden, wenn Sie ein Video auch tatsächlich starten.
			</p>
			<p className="pb-2">
				Ohne diesen „Erweiterten Datenschutz“ wird eine Verbindung zum Server
				von YouTube in den USA hergestellt, sobald Sie eine unserer
				Internetseiten, auf der ein YouTube-Video eingebettet ist, aufrufen.
			</p>
			<p className="pb-2">
				Diese Verbindung ist erforderlich, um das jeweilige Video auf unserer
				Internetseite über Ihren Internet-Browser darstellen zu können. Im Zuge
				dessen wird YouTube zumindest Ihre IP-Adresse, das Datum nebst Uhrzeit
				sowie die von Ihnen besuchte Internetseite erfassen und verarbeiten.
				Zudem wird eine Verbindung zu dem Werbenetzwerk „DoubleClick“ von Google
				hergestellt.
			</p>
			<p className="pb-2">
				Sollten Sie gleichzeitig bei YouTube eingeloggt sein, weist YouTube die
				Verbindungsinformationen Ihrem YouTube-Konto zu. Wenn Sie das verhindern
				möchten, müssen Sie sich entweder vor dem Besuch unseres
				Internetauftritts bei YouTube ausloggen oder die entsprechenden
				Einstellungen in Ihrem YouTube-Benutzerkonto vornehmen.
			</p>
			<p className="pb-2">
				Zum Zwecke der Funktionalität sowie zur Analyse des Nutzungsverhaltens
				speichert YouTube dauerhaft Cookies über Ihren Internet-Browser auf
				Ihrem Endgerät. Falls Sie mit dieser Verarbeitung nicht einverstanden
				sind, haben Sie die Möglichkeit, die Speicherung der Cookies durch eine
				Einstellung in Ihrem Internet-Browsers zu verhindern. Nähere
				Informationen hierzu finden Sie vorstehend unter „Cookies“.
			</p>
			<p className="pb-2">
				Weitergehende Informationen über die Erhebung und Nutzung von Daten
				sowie Ihre diesbezüglichen Rechte und Schutzmöglichkeiten hält Google in
				den unter{" "}
				<a
					href="https://policies.google.com/privacy"
					target="_blank"
					rel="noreferrer"
					className="text-primary"
				>
					https://policies.google.com/privacy
				</a>{" "}
				abrufbaren Datenschutzhinweisen bereit.
			</p>
			<h3 className="mt-6 pb-3">WhatsApp Kontaktaufnahme</h3>
			<p className="pb-2">
				Zur Kontaktaufnahme ermöglicht der Anbieter dem Kunden unter anderem die
				Kontaktmöglichkeit über den Messenger-Dienst WhatsApp. WhatsApp ist ein
				Dienst der WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal
				Harbour, Dublin 2, Irland, nachfolgend WhatsApp, eine
				Tochtergesellschaft von Facebook.
			</p>
			<p className="pb-2">
				Durch die Kommunikation des Nutzers mit dem Anbieter über WhatsApp
				erhält sowohl der Anbieter, als auch WhatsApp die Mobilrufnummer des
				Nutzers und die Information, dass der Nutzer den Anbieter kontaktiert
				hat.
			</p>
			<p className="pb-2">
				Die vorgenannten Daten werden von WhatsApp auch an Server von Facebook
				in den USA weitergeleitet und von WhatsApp und Facebook entsprechend der
				WhatsApp-Datenschutzrichtlinie verarbeitet, was auch die Verarbeitung zu
				deren eigenen Zwecken, wie der Verbesserung des WhatsApp-Dienstes,
				beinhaltet.
			</p>
			<p className="mt-5 pb-2 font-bold">
				Die USA verfügen gegenwärtig nach Ansicht der
				Datenschutzaufsichtsbehörden allerdings nicht über ein angemessenes
				Datenschutzniveau. Es bestehen allerdings sogenannte
				Standardvertragsklauseln:
			</p>
			<a
				href="https://faq.whatsapp.com/general/about-standard-contractual-clauses"
				target="_blank"
				rel="noreferrer"
				className="text-primary"
			>
				https://faq.whatsapp.com/general/about-standard-contractual-clauses
			</a>
			<p className="mt-3 font-bold">
				Jedoch sind dies privatrechtliche Vereinbarungen und haben daher keine
				direkte Auswirkung auf die Zugriffsmöglichkeiten der Behörden in den
				USA.
			</p>
			<p className="mt-5 pb-2">
				Näheres zum Zweck und Umfang der Datenerhebung und der weiteren
				Verarbeitung dieser Daten durch WhatsApp und Facebook sowie
				diesbezügliche Rechte und Einstellungsmöglichkeiten zum Schutz der
				Privatsphäre sind in der Datenschutzrichtlinie von WhatsApp enthalten:{" "}
				<a
					href="https://www.whatsapp.com/legal/#privacy-policy"
					target="_blank"
					rel="noreferrer"
					className="text-primary"
				>
					https://www.whatsapp.com/legal/#privacy-policy
				</a>
			</p>
			<p className="pb-2">
				Rechtsgrundlage dieser Verarbeitungen und der Übermittlung an WhatsApp
				ist Art. 6 Abs. 1 S. 1 b. DSGVO, soweit die Kontaktaufnahme eine
				bestehende Vertragsbeziehung betrifft oder der Anbahnung einer solchen
				Vertragsbeziehung dient. Sollte die Kontaktaufnahme nicht aufgrund der
				vorstehenden Zwecke erfolgen, ist Rechtsgrundlage Art. 6 Abs. 1 lit. f
				DSGVO. Das berechtigte Interesse des Anbieters besteht an der
				Verbesserung der Servicequalität.
			</p>
			<h3 className="mt-6 pb-3">Sicherheitsmaßnahmen</h3>
			<p>
				Wir haben umfassende technische und organisatorische Maßnahmen
				getroffen, um Ihre personenbezogenen Daten zu schützen. Dies umfasst die
				Nutzung von Verschlüsselungstechnologien wie SSL/TLS für die sichere
				Übertragung von Daten sowie Verschlüsselung für die Speicherung. Der
				Zugriff auf Ihre Daten ist ausschließlich autorisierten Mitarbeitern
				gestattet und streng geregelt. Darüber hinaus setzen wir
				Netzwerksicherheitsmaßnahmen wie Firewalls ein, um unsere Systeme vor
				Angriffen zu schützen. Unsere Sicherheitsmaßnahmen werden regelmäßig
				überprüft und angepasst, um den aktuellen Sicherheitsstandards zu
				entsprechen. Trotz aller Vorsichtsmaßnahmen kann keine Technologie
				absolute Sicherheit garantieren, weshalb wir auch empfehlen, dass Sie
				Ihre Daten durch sichere Passwörter und vertrauliche Handhabung selbst
				schützen.
			</p>
			<p className="mt-5">
				Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf
				anzupassen, um sie an geänderte rechtliche Rahmenbedingungen oder an
				Änderungen unserer Leistungen anzupassen. Änderungen werden auf unserer
				Website veröffentlicht. Bitte überprüfen Sie regelmäßig die
				Datenschutzerklärung, um sich über mögliche Anpassungen zu informieren.
				Die Datenschutzerklärung ist stets auf dem aktuellen Stand und gilt ab
				dem Datum der Veröffentlichung auf unserer Website. Bei wesentlichen
				Änderungen, die Ihre Rechte oder unsere Verpflichtungen erheblich
				betreffen, werden wir Sie gesondert informieren.
			</p>
			<p className="mt-5">
				<a
					href="https://www.generator-datenschutzerklärung.de"
					target="_blank"
					rel="noreferrer"
					className="text-primary"
				>
					Muster-Datenschutzerklärung
				</a>{" "}
				der{" "}
				<a
					href="https://www.bewertung-löschen24.de"
					target="_blank"
					rel="noreferrer"
					className="text-primary"
				>
					Anwaltskanzlei Weiß &amp; Partner
				</a>
			</p>
			<Spacing />
		</PageWrapper>
	);
};

export default Privacy;
