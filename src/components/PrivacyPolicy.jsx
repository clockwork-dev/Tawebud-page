import React, { useState } from "react";
import { Modal } from "./Modal";
import { useTranslation } from "react-i18next";

export const PrivacyPolicy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const { t } = useTranslation();

  return (
    <div>
      <button id="privacyPolicyButton" onClick={handleOpenModal}>
        Open Privacy Policy
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <h2>{t('PrivacyPolicy.Header')}</h2>
  
        <p><strong>Polityka Prywatności</strong></p>
        
        <p><strong>1. Administrator danych osobowych</strong></p>
        <p>
          Administratorem Twoich danych osobowych jest Tawebud Sp. z o.o., Kontakt z Administratorem możliwy jest poprzez adres: ul. Bernarda Milskiego, Gdańsk, lub e-mail: <a href="tawebudpl@gmail.com">tawebudpl@gmail.com</a>.
        </p>

        <p><strong>2. Zakres i cel przetwarzania danych osobowych</strong></p>
        <p>
          Przetwarzamy dane osobowe w zależności od Twojej relacji z nami, obejmujące:
        </p>
        <ul>
          <li>Dane niezbędne do zawarcia i realizacji umów,</li>
          <li>Dane kontaktowe w kontekście współpracy,</li>
          <li>Dane zgromadzone w procesach rekrutacyjnych,</li>
          <li>Dane dostarczone przez Ciebie w związku z realizacją praw przysługujących Ci na gruncie RODO.</li>
        </ul>
        <p>
          Podstawy prawne przetwarzania obejmują:
        </p>
        <ul>
          <li>Zawarcie i realizację umowy (art. 6 ust. 1 lit. b RODO),</li>
          <li>Wypełnienie obowiązków prawnych Administratora (art. 6 ust. 1 lit. c RODO),</li>
          <li>Realizację prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).</li>
        </ul>

        <p><strong>3. Odbiorcy danych osobowych</strong></p>
        <p>
          Twoje dane mogą być udostępnione:
        </p>
        <ul>
          <li>Podmiotom powiązanym i zewnętrznym usługodawcom, np. firmom IT, kancelariom prawnym, poczcie, kurierom, bankom.</li>
          <li>Organom państwowym, np. urzędom skarbowym, gdy wymaga tego prawo.</li>
        </ul>

        <p><strong>4. Okres przechowywania danych osobowych</strong></p>
        <p>
          Twoje dane osobowe będą przechowywane przez różne okresy, zależnie od celu przetwarzania, np. do czasu zakończenia współpracy, zakończenia rekrutacji lub wycofania zgody.
        </p>

        <p><strong>5. Prawa przysługujące Ci w związku z przetwarzaniem danych osobowych</strong></p>
        <p>Masz prawo do:</p>
        <ul>
          <li>Dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
          <li>Przenoszenia danych,</li>
          <li>Sprzeciwu wobec przetwarzania danych,</li>
          <li>Cofnięcia zgody na przetwarzanie danych,</li>
          <li>Złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
        </ul>

        <p><strong>6. Zautomatyzowane decyzje i profilowanie</strong></p>
        <p>Twoje dane osobowe nie są wykorzystywane do podejmowania zautomatyzowanych decyzji, w tym profilowania.</p>

        <p><strong>7. Bezpieczeństwo danych osobowych</strong></p>
        <p>Stosujemy odpowiednie środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo Twoich danych osobowych zgodnie z RODO, w tym ich poufność, integralność i dostępność.</p>

        <p><strong>8. Pliki cookies</strong></p>
        <p>
          Wykorzystujemy pliki cookies w celu poprawy funkcjonowania serwisu, dostosowania treści do preferencji użytkownika, optymalizacji korzystania z serwisu oraz wyświetlania strony zgodnie z ustawieniami urządzenia użytkownika.
        </p>


        <p><strong>Privacy Policy</strong></p>
        
        <p><strong>1. Personal Data Administrator</strong></p>
        <p>
          The administrator of your personal data is the Tawebud Sp. z o.o., You can contact the Administrator via the address: ul. Bernarda Milskiego, Gdańsk, or email: <a href="mailto:tawebudpl@gmail.com">tawebudpl@gmail.com</a>.
        </p>

        <p><strong>2. Scope and Purpose of Data Processing</strong></p>
        <p>
          We process personal data depending on your relationship with us, including:
        </p>
        <ul>
          <li>Data necessary for the conclusion and execution of contracts,</li>
          <li>Contact details in the context of cooperation,</li>
          <li>Data collected in recruitment processes,</li>
          <li>Data provided by you in connection with the exercise of your rights under GDPR.</li>
        </ul>
        <p>
          The legal bases for processing include:
        </p>
        <ul>
          <li>Conclusion and performance of a contract (Article 6(1)(b) GDPR),</li>
          <li>Fulfillment of the Administrator's legal obligations (Article 6(1)(c) GDPR),</li>
          <li>Legitimate interest of the Administrator (Article 6(1)(f) GDPR).</li>
        </ul>

        <p><strong>3. Recipients of Personal Data</strong></p>
        <p>
          Your data may be shared with:
        </p>
        <ul>
          <li>Affiliated entities and external service providers, such as IT companies, law firms, postal services, couriers, banks.</li>
          <li>State authorities, e.g., tax offices, when required by law.</li>
        </ul>

        <p><strong>4. Personal Data Retention Period</strong></p>
        <p>
          Your personal data will be retained for various periods, depending on the purpose of processing, e.g., until the end of cooperation, the end of recruitment, or withdrawal of consent.
        </p>

        <p><strong>5. Rights Related to the Processing of Personal Data</strong></p>
        <p>You have the right to:</p>
        <ul>
          <li>Access your data, rectify, delete, or restrict processing,</li>
          <li>Data portability,</li>
          <li>Object to data processing,</li>
          <li>Withdraw consent to data processing,</li>
          <li>Lodge a complaint with the President of the Personal Data Protection Office.</li>
        </ul>

        <p><strong>6. Automated Decisions and Profiling</strong></p>
        <p>Your personal data is not used for automated decision-making, including profiling.</p>

        <p><strong>7. Personal Data Security</strong></p>
        <p>We apply appropriate technical and organizational measures to ensure the security of your personal data in accordance with GDPR, including its confidentiality, integrity, and availability.</p>

        <p><strong>8. Cookies</strong></p>
        <p>
          We use cookies to improve the functioning of the service, tailor content to user preferences, optimize service usage, and display the site according to user device settings.
        </p>


        <p><strong>Datenschutzerklärung</strong></p>
        
        <p><strong>1. Verantwortlicher für personenbezogene Daten</strong></p>
        <p>
          Der Verantwortliche für Ihre personenbezogenen Daten ist die Tawebud Sp. z o.o., Kontakt mit dem Verantwortlichen ist über die Adresse möglich: ul. Bernarda Milskiego, Gdańsk, oder per E-Mail: <a href="mailto:tawebudpl@gmail.com">tawebudpl@gmail.com</a>.
        </p>

        <p><strong>2. Umfang```html
        und Zweck der Datenverarbeitung</strong></p>
        <p>
          Wir verarbeiten personenbezogene Daten abhängig von Ihrer Beziehung zu uns, einschließlich:
        </p>
        <ul>
          <li>Daten, die für den Abschluss und die Durchführung von Verträgen erforderlich sind,</li>
          <li>Kontaktdaten im Rahmen der Zusammenarbeit,</li>
          <li>In Rekrutierungsprozessen gesammelte Daten,</li>
          <li>Daten, die Sie im Zusammenhang mit der Ausübung Ihrer Rechte gemäß DSGVO bereitgestellt haben.</li>
        </ul>
        <p>
          Die rechtlichen Grundlagen für die Verarbeitung umfassen:
        </p>
        <ul>
          <li>Abschluss und Erfüllung eines Vertrags (Artikel 6(1)(b) DSGVO),</li>
          <li>Erfüllung rechtlicher Verpflichtungen des Verantwortlichen (Artikel 6(1)(c) DSGVO),</li>
          <li>Berechtigtes Interesse des Verantwortlichen (Artikel 6(1)(f) DSGVO).</li>
        </ul>

        <p><strong>3. Empfänger personenbezogener Daten</strong></p>
        <p>
          Ihre Daten können weitergegeben werden an:
        </p>
        <ul>
          <li>Verbundene Unternehmen und externe Dienstleister, z.B. IT-Unternehmen, Anwaltskanzleien, Postdienste, Kurierdienste, Banken.</li>
          <li>Staatliche Behörden, z.B. Finanzämter, wenn dies gesetzlich vorgeschrieben ist.</li>
        </ul>

        <p><strong>4. Aufbewahrungsdauer personenbezogener Daten</strong></p>
        <p>
          Ihre personenbezogenen Daten werden für verschiedene Zeiträume aufbewahrt, abhängig vom Zweck der Verarbeitung, z.B. bis zum Ende der Zusammenarbeit, bis zum Abschluss der Rekrutierung oder bis zum Widerruf der Einwilligung.
        </p>

        <p><strong>5. Rechte im Zusammenhang mit der Verarbeitung personenbezogener Daten</strong></p>
        <p>Sie haben das Recht:</p>
        <ul>
          <li>Auf Ihre Daten zuzugreifen, sie zu berichtigen, zu löschen oder die Verarbeitung einzuschränken,</li>
          <li>Ihre Daten zu übertragen,</li>
          <li>Der Verarbeitung Ihrer Daten zu widersprechen,</li>
          <li>Ihre Einwilligung zur Datenverarbeitung zu widerrufen,</li>
          <li>Eine Beschwerde beim Präsidenten des Amtes für den Schutz personenbezogener Daten einzureichen.</li>
        </ul>

        <p><strong>6. Automatisierte Entscheidungen und Profiling</strong></p>
        <p>Ihre personenbezogenen Daten werden nicht für automatisierte Entscheidungen, einschließlich Profiling, verwendet.</p>

        <p><strong>7. Sicherheit personenbezogener Daten</strong></p>
        <p>Wir wenden geeignete technische und organisatorische Maßnahmen an, um die Sicherheit Ihrer personenbezogenen Daten gemäß DSGVO zu gewährleisten, einschließlich ihrer Vertraulichkeit, Integrität und Verfügbarkeit.</p>

        <p><strong>8. Cookies</strong></p>
        <p>
          Wir verwenden Cookies, um die Funktionalität der Website zu verbessern, Inhalte an die Präferenzen der Benutzer anzupassen, die Nutzung der Website zu optimieren und die Website gemäß den Einstellungen des Benutzergeräts anzuzeigen.
        </p>
      </Modal>
    </div>
  );
};
