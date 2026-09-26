export const defaultImage = `${import.meta.env.BASE_URL}projects/default-project.png`;

export const repoScreenshots = {
  Shui: `${import.meta.env.BASE_URL}projects/Shui.png`,
  IMDO: `${import.meta.env.BASE_URL}projects/IMDO.png`,
  "Nasa-SpaceViewer": `${import.meta.env.BASE_URL}projects/Nasa2.png`,
  ReadingSloth: `${import.meta.env.BASE_URL}projects/ReadingSloth.png`,
  FadingLightDemo: `${import.meta.env.BASE_URL}projects/FadingLight4.png`,
};

export const repoDemos = {
  IMDO: "https://tivva34.github.io/IMDO/index.html",
};

export const projectTabs = [
  { key: "live", label: "Live Demos" },
  { key: "frontend", label: "Frontend Projects" },
  { key: "fullstack", label: "Fullstack Projects" },
  { key: "games", label: "Game Projects" },
];

export const projectCategoryByName = {
  SuperMon: "games",
  "MAC Service": "frontend",
  IMDO: "frontend",
  Shui: "fullstack",
  "Nasa-SpaceViewer": "frontend",
  ReadingSloth: "frontend",
  "The Turtlebase": "frontend",
  FadingLightDemo: "games",
  "Hammarö Maskin & Smide AB": "fullstack",
  "Wermlands Skomakeri": "frontend",
  "Arvika Bygg & Stenarbeten": "frontend",
  "LJS Måleri Värmland": "frontend"
};

export const selectedRepos = [];

export const repoLanguageOverrides = {
  FadingLightDemo: ["CSharp"],
};
export const repoTechOverrides = {
  IMDO: ["API"],
  Shui: ["React", "AWS", "DynamoDB"],
  ReadingSloth: ["React", "React Router"],
  FadingLightDemo: ["Unity"],
  "Nasa-SpaceViewer": ["React", "NASA API", "Framer Motion"],
};
export const projectOrder = [
  "Hammarö Maskin & Smide AB",
  "MAC Service",
  "Wermlands Skomakeri",
  "Arvika Bygg & Stenarbeten",
  "LJS Måleri Värmland",
  "SuperMon",
  "Shui",
  "IMDO",
  "The Turtlebase",
  "ReadingSloth",
  "Nasa-SpaceViewer",
  "FadingLightDemo",
];

export const getSortedProjects = (projects) =>
  [...projects].sort((a, b) => {
    const indexA = projectOrder.indexOf(a.name);
    const indexB = projectOrder.indexOf(b.name);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

export const featuredProjects = [
  {
    id: "hammaro-maskin-smide",
    name: "Hammarö Maskin & Smide AB",
    category: "fullstack",
    type: "CUSTOM BUSINESS PLATFORM",
    slug: "hammaro-maskin-smide",
    description: "Projektet är en skräddarsydd, webbaserad digital affärsplattform. Målet med lösningen är att samla företagets digitala försäljning, kundförfrågningar, kunddialog och interna administration i ett enda, sammanhängande system.",
    detailedContent: {
      introTitle: "En lösning med tydligt syfte.",
      intro: "Projektet är en skräddarsydd, webbaserad digital affärsplattform. Målet med lösningen är att samla företagets digitala försäljning, kundförfrågningar, kunddialog och interna administration i ett enda, sammanhängande system. Genom denna arkitektur ersätts tidigare isolerade system med ett kontextdrivet flöde där all information hänger ihop – från första sökning på Google till avslutad affär.",
      sections: [
        {
          tag: "01 — PUBLIK WEBBPLATS & FÖRETAGSYTA",
          title: "Företagets digitala yta mot kunder.",
          text: "Den publika webbplatsen är byggd för att fungera sömlöst över dator, mobil och surfplatta, med ett tydligt fokus på responsiv design, tillgänglighet och konvertering.",
          bullets: [
            "Startsida och Företagsinformation",
            "Maskinförsäljning och Maskinlistningar (inkl. detaljsidor)",
            "Presentation av Yttre lösöre",
            "Specifika sektioner för Verkstad och Smide",
            "Transportrelaterade kontaktflöden",
            "Smarta, kontextuella kontaktfunktioner och en direkt \"Ring oss\"-funktion för mobila enheter"
          ]
        },
        {
          tag: "02 — FÖRSÄLJNING",
          title: "Maskiner & Yttre Lösöre.",
          text: "Försäljningen är integrerad direkt i plattformen. Personalen kan hantera lagret via administrationen, och det som publiceras internt speglas omedelbart externt. Varje maskin och lösöre har sin egen detaljsida med specifikationer, bilder och unika kontaktmöjligheter."
        },
        {
          tag: "03 — KUNDDIALOG",
          title: "Kontextbaserade Förfrågningar.",
          text: "Ett centralt koncept i plattformen är att alla förfrågningar kopplas till rätt sammanhang. Smarta formulär kopplar automatiskt ihop kunden, meddelandet och maskinen i ett ärende. Förfrågningar för smidesarbete och verkstad separeras automatiskt, och e-postkommunikation är helt integrerad in i systemet."
        },
        {
          tag: "04 — ADMIN & CRM",
          title: "Administrativt Verksamhetssystem.",
          text: "Det interna administrationssystemet är byggt som en separat applikation (PWA) för hantering av all affärsdata. Det inkluderar hantering av ärenden, kunddialog med historik, filtrering, och rollbaserad inloggning (RBAC) för säkerhet. Systemet kan installeras som en riktig app på alla enheter."
        },
        {
          tag: "05 — TEKNIK & PRESTANDA",
          title: "Realtid, Arkitektur & SEO.",
          text: "Systemet använder avancerad realtidsfunktionalitet med Supabase Realtime för omedelbara uppdateringar och Web Push-notiser. Backend hanteras av en robust PostgreSQL-databas med Edge Functions och RLS. Frontenden är byggd i React & Vite och optimerad för blixtsnabba laddtider och hög SEO-ranking."
        },
        {
          tag: "06 — KUNDRESAN",
          title: "Sammanhängande flöde.",
          text: "Google → Webbplats → Maskin / Tjänst → Detaljsida → Kontaktförfrågan → Automatiskt kopplat ärende → Notifiering till rätt personal (via PWA) → Svar inifrån CRM (e-post integrerad) → Uppföljning och avslut."
        }
      ]
    },
    html_url: null,
    liveUrl: "https://hammaro-maskin-o-smide-cloudflare.pages.dev/",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["React", "Supabase", "Realtime", "PWA", "Service Worker", "Responsive Design"],
    screenshot: `${import.meta.env.BASE_URL}projects/HammaröMaskin&Smide/Kundsida/1.Hem - Hero - Sektion.png`,
    gallery: {
      "Kundsida": [
        "projects/HammaröMaskin&Smide/Kundsida/1.Hem - Hero - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/2.Hem - Om oss - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/3.Maskiner - Alla maskiner.png",
        "projects/HammaröMaskin&Smide/Kundsida/4.Maskiner - Alla Maskiner - Lazy loading.png",
        "projects/HammaröMaskin&Smide/Kundsida/5.Maskiner - Vald maskin.png",
        "projects/HammaröMaskin&Smide/Kundsida/6.Maskiner - Vald maskin.png",
        "projects/HammaröMaskin&Smide/Kundsida/7.Maskin - Kontaktformulär - Modal.png",
        "projects/HammaröMaskin&Smide/Kundsida/8.Maskin & Transport - Formulär - Modal.png",
        "projects/HammaröMaskin&Smide/Kundsida/9.Maskiner - Försäljning Inköp Transport - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/10.Lösöre - Alla Lösören.png",
        "projects/HammaröMaskin&Smide/Kundsida/11.Lösöre - Alla Lösören - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/12.Lösöre - Vald lösöre.png",
        "projects/HammaröMaskin&Smide/Kundsida/13.Om oss - Söker annat - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/14.Om oss - Maskiner & Smide - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/15.Lösöre - Hitta vad du söker - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/16.Verkstad & Smide - Reparation Verkstad & Smide - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/17.Verkstad & Smide -Smide & Transport - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/18.Om oss - Om oss - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/19.Om oss - Familjeföretaget - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/20.Kontakt - Kontakta oss - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/21.Kontakt Formulär -Modal.png",
        "projects/HammaröMaskin&Smide/Kundsida/22.Footer - Sektion.png",
        "projects/HammaröMaskin&Smide/Kundsida/23.LightHouse - Rating.png"
      ],
      "Kundsida-Lightmode": [
        "projects/HammaröMaskin&Smide/Kundsida-Lightmode/1.Home - Hero - Sektion - LightMode.png",
        "projects/HammaröMaskin&Smide/Kundsida-Lightmode/2.Maskiner -Alla maskiner - Sektion - LightMode.png",
        "projects/HammaröMaskin&Smide/Kundsida-Lightmode/3.Verkstad & Smide - Smide & Transport - Sektion -LightMode.png"
      ],
      "Kundsida-English": [
        "projects/HammaröMaskin&Smide/Kundsida-English/1.Home - Hero - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/2.Machines - All machines - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/3.Inventory - All inventory - section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/4.Workshop & Metalwork - Workshop & Repair - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/5.About us - About us - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/6.Contact - Contactform - Section.png"
      ],
      "Admin": [
        "projects/HammaröMaskin&Smide/Admin/1.Admin - Login.png",
        "projects/HammaröMaskin&Smide/Admin/2.Admin - Maskiner.png",
        "projects/HammaröMaskin&Smide/Admin/3.Admin - Maskiner - Sortering.png",
        "projects/HammaröMaskin&Smide/Admin/4.Admin - Lösören.png",
        "projects/HammaröMaskin&Smide/Admin/5.Admin - Redigera maskin.png",
        "projects/HammaröMaskin&Smide/Admin/6.Admin - Redigera maskin - Egenskaper & Specifikationer.png",
        "projects/HammaröMaskin&Smide/Admin/7.Admin - Redigera maskin - Engleska.png",
        "projects/HammaröMaskin&Smide/Admin/8.Admin - Redigera maskin - Bilduppladdning.png",
        "projects/HammaröMaskin&Smide/Admin/9.Admin - Förfrågningar.png",
        "projects/HammaröMaskin&Smide/Admin/10.Admin - Förfrågan.png",
        "projects/HammaröMaskin&Smide/Admin/11.Admin - Förfrågan - Bifogade bilder.png",
        "projects/HammaröMaskin&Smide/Admin/12.Admin - Förfrågan - Svar sektion.png",
        "projects/HammaröMaskin&Smide/Admin/13.Admin - Statestik.png",
        "projects/HammaröMaskin&Smide/Admin/14.Admin - Statestik -Exempel.png",
        "projects/HammaröMaskin&Smide/Admin/15.Admin - Försäljning.png",
        "projects/HammaröMaskin&Smide/Admin/16.Admin - Försäljning - Maskin.png",
        "projects/HammaröMaskin&Smide/Admin/17.Admin - Användare & Behörigheter.png",
        "projects/HammaröMaskin&Smide/Admin/18.Admin - Redigera användare.png",
        "projects/HammaröMaskin&Smide/Admin/19.Admin - Min profil.png",
        "projects/HammaröMaskin&Smide/Admin/20.Admin - Min profil - Notifikationer.png"
      ],
      "Admin-Lightmode": [
        "projects/HammaröMaskin&Smide/Admin-Lightmode/1.Admin - Maskiner - LightMode.png",
        "projects/HammaröMaskin&Smide/Admin-Lightmode/2.Admin - Förfrågan - Lightmode.png"
      ]
    }
  },
  {
    id: "macservice",
    name: "MAC Service",
    category: "frontend",
    type: "BUSINESS WEBSITE",
    slug: "mac-service",
    description: "En modern och responsiv företagswebbplats för MAC Service i Köping. Webbplatsen presenterar byggnation och renovering, fastighetsskötsel samt trädgårdsservice, och leder besökaren från tjänst och projektbilder till en kostnadsfri offertförfrågan.",
    detailedContent: {
      introTitle: "En säljdrivande plattform för hantverkstjänster.",
      intro: "En anpassad och responsiv företagswebbplats utvecklad för MAC Service i Köping. Syftet med projektet var att skapa en modern, snabb och användarvänlig plattform för att presentera företagets tjänster inom byggnation, fastighetsskötsel och trädgårdsservice. Huvudfokus låg på att konvertera besökare till kunder genom tydliga kontaktflöden för kostnadsfria offerter.",
      sections: [
        {
          tag: "01 — TJÄNSTER & GALLERI",
          title: "Struktur och förtroende.",
          text: "Webbplatsen är uppdelad i tydliga, custom-designade sektioner för varje affärsområde. För att bygga förtroende integrerades ett dynamiskt projektgalleri som visar upp tidigare utförda arbeten.",
          bullets: [
            "Sektioner för byggnation, fastighetsskötsel och trädgårdsservice",
            "Projektgalleri för att stärka förtroende hos nya kunder"
          ]
        },
        {
          tag: "02 — UX & KONVERTERING",
          title: "Fokus på användarupplevelsen.",
          text: "Genom att optimera CTA-flöden (Call To Action) säkerställdes det att användaren enkelt kan navigera från att läsa om en specifik tjänst direkt till att begära en kostnadsfri offert.",
          bullets: [
            "Tydliga CTA-flöden för offertförfrågan",
            "Direkta kontaktvägar via telefon, e-post och sociala medier",
            "Responsiv design som fungerar lika bra på mobil som desktop"
          ]
        }
      ]
    },
    html_url: null,
    liveUrl: "https://mackoping.se",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["React", "Vite", "Framer Motion", "SEO", "Responsive Design"],
    screenshot: `${import.meta.env.BASE_URL}projects/MacService/1.Hem - Hero - Sektion.png`,
    gallery: [
      "projects/MacService/1.Hem - Hero - Sektion.png",
      "projects/MacService/2.Hem - Våra tjänster - Sektion.png",
      "projects/MacService/3.Hem - Om oss - Sektion.png",
      "projects/MacService/4.Hem -Om oss - Sektion Bildspel.png",
      "projects/MacService/5.Hem - Kontakta oss & Footer - Sektion.png",
      "projects/MacService/6.Om oss - Hero - Sektion.png",
      "projects/MacService/7.Om oss - Om oss - Sektion.png",
      "projects/MacService/8.Om oss - Varfför välja MAC - Sektion.png",
      "projects/MacService/9.Tjänster-Hero - Sektion.png",
      "projects/MacService/10.Tjänster - Våra tjänster - Sektion.png",
      "projects/MacService/11.Tjänster - Detaljerade tjänster - Sektion.png",
      "projects/MacService/12.Tjänster - Att anlita oss - Sektion.png",
      "projects/MacService/13.Kontakt - Hero - Sektion.png"
    ]
  },
  {
    id: "wermlands-skomakeri",
    name: "Wermlands Skomakeri",
    category: "frontend",
    type: "COMPANY WEBSITE",
    slug: "wermlands-skomakeri",
    description: "En modern och avskalad företagswebbplats för Wermlands Skomakeri i Karlstad, med fokus på traditionellt hantverk, skoreparationer och personlig service. Webbplatsen lyfter verkstadens hantverk och gör det enkelt för besökaren att hitta information, se tjänster och komma i kontakt med skomakeriet.",
    detailedContent: {
      introTitle: "Genuint hantverk i digitalt format.",
      intro: "En skräddarsydd och responsiv företagswebbplats för Wermlands Skomakeri i Karlstad. Huvudsyftet var att skapa en digital närvaro som känns lika genuin och hantverksmässig som själva verksamheten. Genom att kombinera ett tidlöst visuellt uttryck med modern webbteknik blev resultatet en plattform där besökaren snabbt kan hitta rätt tjänster, öppettider och kontaktinformation.",
      sections: [
        {
          tag: "01 — PRESENTATION AV HANTVERK",
          title: "Att visa värdet av reparationer.",
          text: "För att belysa kvaliteten i skomakeriets hantverk byggdes specifika sektioner för att visa före- och efterbilder. Detta ger kunden en direkt förståelse för värdet i att reparera istället för att köpa nytt.",
          bullets: [
            "Före- och efterbilder för olika typer av skoreparationer",
            "Tydlig och strukturerad presentation av tillgängliga tjänster"
          ]
        },
        {
          tag: "02 — INTEGRATION & ADMINISTRATION",
          title: "Digital närvaro i symbios.",
          text: "Webbplatsen byggdes med modern arkitektur och en centraliserad hantering av kunddata. För att hålla innehållet levande integrerades även företagets Instagram-flöde, vilket ger besökarna en inblick i verkstadens vardag.",
          bullets: [
            "Instagram-integration för aktuella uppdateringar direkt från verkstaden",
            "Centraliserad datahantering för öppettider och kontaktuppgifter",
            "Optimerad, snabb och helt responsiv design för alla enheter"
          ]
        }
      ]
    },
    html_url: null,
    liveUrl: "https://tivva34.github.io/Wermlands-Skomakeri/",
    languages: ["TypeScript", "HTML", "CSS"],
    tech: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    screenshot: `${import.meta.env.BASE_URL}projects/WermlandsSkomakeri/1.Hem - Hero - Sektion.png`,
    gallery: [
      "projects/WermlandsSkomakeri/1.Hem - Hero - Sektion.png",
      "projects/WermlandsSkomakeri/2.Hem - Våra tjänster - Sektion.png",
      "projects/WermlandsSkomakeri/3.Hem - Hantverk - Sektion.png",
      "projects/WermlandsSkomakeri/4.Hem - Före & Efter - Sektion.png",
      "projects/WermlandsSkomakeri/5.Hem - Verkstaden - Sektion.png",
      "projects/WermlandsSkomakeri/6.Hem - Kontakt & Hitta hit - Sektion.png",
      "projects/WermlandsSkomakeri/7.Hem - Footer - Sektion.png",
      "projects/WermlandsSkomakeri/8.LightHouse - Report.png"
    ]
  },
  {
    id: "arvika-bygg-stenarbeten",
    name: "Arvika Bygg & Stenarbeten",
    category: "frontend",
    type: "COMPANY WEBSITE",
    slug: "arvika-bygg-stenarbeten",
    description: "En professionell företagswebbplats byggd för ett lokalt företag. Fokus låg på att skapa en förtroendeingivande design, lyfta fram deras tjänster och göra det enkelt för kunder att begära offert.",
    detailedContent: {
      introTitle: "Förtroendebyggande närvaro online.",
      intro: "En professionell och förtroendeingivande företagswebbplats framtagen för ett lokalt bygg- och stenarbetesföretag i Arvika. Fokus låg på att bygga en stabil och snabb digital närvaro som effektivt lyfter fram företagets kärntjänster och driver in nya offertförfrågningar.",
      sections: [
        {
          tag: "01 — STRUKTUR & FÖRTROENDE",
          title: "Referensdriven design.",
          text: "Eftersom byggbranschen bygger starkt på tillit, strukturerades webbplatsen för att framhäva referensprojekt och certifieringar. Det skapar en trygghet för potentiella kunder redan vid första intrycket.",
          bullets: [
            "Tydlig uppdelning av företagets bygg- och stenarbetestjänster",
            "Referensdriven struktur utformad för att bygga kundförtroende"
          ]
        },
        {
          tag: "02 — ANVÄNDARUPPLEVELSE",
          title: "Konvertering och tillgänglighet.",
          text: "Sidan utvecklades med en 'mobile-first'-strategi för att säkerställa en utmärkt upplevelse oavsett vilken enhet kunden använder. Välplacerade CTA-knappar leder besökaren snabbt till en smidig offertförfrågan.",
          bullets: [
            "Snabb och enkel väg till offertförfrågan",
            "Helt responsiv och tillgänglig design"
          ]
        }
      ]
    },
    html_url: null,
    liveUrl: "https://tivva34.github.io/Arvika-Bygg-o-Stenarbeten/",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["React", "Vite", "Responsive Design"],
    screenshot: `${import.meta.env.BASE_URL}projects/ArvikaBygg&Stenarbete/1.Hero - Sektion.png`,
    gallery: [
      "projects/ArvikaBygg&Stenarbete/1.Hero - Sektion.png",
      "projects/ArvikaBygg&Stenarbete/2.Våra tjänster - Sektion.png",
      "projects/ArvikaBygg&Stenarbete/3.Auktoriserad - Sektion.png",
      "projects/ArvikaBygg&Stenarbete/4.Branchvana - Sektion.png",
      "projects/ArvikaBygg&Stenarbete/5.Varför välja oss - Sektion.png",
      "projects/ArvikaBygg&Stenarbete/6.Process - Sektion.png",
      "projects/ArvikaBygg&Stenarbete/7.Kontakt - Sektion.png"
    ]
  },
  {
    id: "ljs-maleri-varmland",
    name: "LJS Måleri Värmland",
    category: "frontend",
    type: "COMPANY WEBSITE",
    slug: "ljs-maleri-varmland",
    description: "Företagswebbplats som hjälper målerifirman att visa upp tidigare referensprojekt och ta in nya kundförfrågningar. Snabb laddningstid och optimerad för lokal SEO.",
    detailedContent: {
      introTitle: "Lokal synlighet och snabb kontakt.",
      intro: "En snabb, modern och lokalt optimerad företagswebbplats utvecklad för LJS Måleri Värmland. Projektets målsättning var att digitalisera företagets portfölj, visa upp tidigare referensprojekt och skapa en enkel, friktionsfri kanal för nya kundförfrågningar.",
      sections: [
        {
          tag: "01 — PORTFÖLJ & LOKAL SEO",
          title: "Att synas där kunderna finns.",
          text: "Arkitekturen och innehållsstrukturen byggdes med lokal synlighet (Local SEO) i åtanke. Genom att tydligt presentera specifika måleritjänster och lokala referensprojekt förbättrades företagets möjligheter att nå rätt målgrupp.",
          bullets: [
            "Optimerad struktur för bättre lokal synlighet",
            "Tydlig presentation av måleritjänster och referensarbeten"
          ]
        },
        {
          tag: "02 — FUNKTIONALITET",
          title: "Responsiv och lättillgänglig.",
          text: "Med en stor andel besökare från mobila enheter, utvecklades designen för att vara hundra procent responsiv. Kontaktvägarna gjordes extra tydliga så att kunder enkelt kan begära en offert direkt från arbetsplatsen eller hemifrån.",
          bullets: [
            "Tydliga kontaktvägar optimerade för konvertering",
            "Fullt responsiv upplevelse på mobil, tablet och desktop"
          ]
        }
      ]
    },
    html_url: null,
    liveUrl: "https://tivva34.github.io/LJS-Maleri-Varmland/",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["Responsive Design"],
    screenshot: `${import.meta.env.BASE_URL}projects/LJSMåleriVärmland/1.Hero - Sektion.png`,
    gallery: [
      "projects/LJSMåleriVärmland/1.Hero - Sektion.png",
      "projects/LJSMåleriVärmland/2.Villka är vi - Sektion.png",
      "projects/LJSMåleriVärmland/3.Vad vi gör - Sektion.png",
      "projects/LJSMåleriVärmland/4.Process - Sektion.png",
      "projects/LJSMåleriVärmland/5.Process - Sektion Hover.png",
      "projects/LJSMåleriVärmland/6.Kontakt - Sektion.png",
      "projects/LJSMåleriVärmland/7.Googlemaps - Sektion.png"
    ]
  },
    {
    id: 'supermon',
    name: 'SuperMon',
    category: 'games',
    slug: 'supermon',
    description: 'A Pokémon-inspired platformer built in Unity and C# as part of a collaborative exam project.',
    detailedContent: {
      introTitle: "Ett nostalgiskt 2D-äventyr i Unity.",
      intro: "Super Jespermon är ett plattformsbaserat 2D-äventyr inspirerat av klassiska titlar som Super Mario och Pokémon. Spelet utvecklades helt från grunden i Unity (C#) som ett omfattande examensarbete, med målet att tillämpa avancerad spelprogrammering, bandesign och systemarkitektur i praktiken.",
      sections: [
        {
          tag: "01 — SPELMEKANIK",
          title: "Plattformande och strid.",
          text: "Projektet krävde utveckling av flera samverkande system för att hantera spelarens rörelser, fiendernas AI och interaktioner i världen. Spelaren kan utforska handgjorda nivåer, samla mynt och använda fångstmekaniker för att besegra olika fiender.",
          bullets: [
            "Tre unikt designade nivåer fyllda med interaktiva objekt och easter eggs",
            "Dynamiska attackmekaniker och möjlighet att fånga Pokémon",
            "Egenutvecklade system för gameplay och karaktärsfysik"
          ]
        },
        {
          tag: "02 — TEKNISK IMPLEMENTATION",
          title: "Systemarkitektur i Unity.",
          text: "För att säkerställa att spelet var både utbyggbart och presterande, skapades robusta C#-skript för att styra allt från animationstillstånd och poängräkning till nivåval och UI-hantering.",
          bullets: [
            "Objektorienterad C#-arkitektur för spelets kärnsystem",
            "Skräddarsydd hantering av animationer och användargränssnitt (UI)",
            "Spar- och laddningslogik för att spåra spelarens poäng"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Zypherkill/Exam',
    liveUrl: 'https://zypherkill.github.io/supermon/',
    languages: ['CSharp', 'HTML', 'CSS'],
    tech: ['Unity'],
    screenshot: `${import.meta.env.BASE_URL}projects/SuperMon.png`,
    gallery: ['projects/SuperMon.png']
  },
  {
    id: 'iron-turtles',
    name: 'The Turtlebase',
    category: 'frontend',
    slug: 'the-turtlebase',
    description: 'Movie discovery and watchlist app built with React, Vite, and Swiper for browsing, searching, and saving films.',
    detailedContent: {
      introTitle: "Modern filmupptäckt och state management.",
      intro: "The Turtlebase is a modern, responsive movie discovery application built entirely with React and Vite. The primary goal of this project was to strengthen architectural skills in building component-based frontend applications, managing complex global state, and integrating external REST APIs.",
      sections: [
        {
          tag: "01 — CORE FUNCTIONALITY",
          title: "Browsing and Discovery.",
          text: "The application seamlessly interfaces with a movie database API to fetch and display popular movies, detailed synopses, and high-resolution posters. It features a robust search mechanism that instantly queries and filters titles based on user input.",
          bullets: [
            "Dynamic browsing of popular and trending movies",
            "Real-time search functionality for specific film titles",
            "Dedicated movie detail pages with comprehensive information"
          ]
        },
        {
          tag: "02 — TECHNICAL FEATURES",
          title: "State Management and UI.",
          text: "To create a smooth user experience, the app utilizes React Router for client-side navigation without page reloads. A personal watchlist feature is implemented using localStorage, ensuring that users' saved movies persist across sessions.",
          bullets: [
            "Persistent personal watchlist managed via browser localStorage",
            "Fluid touch-friendly carousels built with Swiper.js",
            "Clean and completely responsive UI architecture"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Tivva34/Iron-Turtles',
    liveUrl: 'https://tivva34.github.io/Iron-Turtles/',
    languages: ['JavaScript', 'HTML', 'CSS'],
    tech: ['React', 'Vite', 'Swiper', 'Responsive Design'],
    screenshot: `${import.meta.env.BASE_URL}projects/iron-turtles.png`,
    gallery: ['projects/iron-turtles.png']
  },
  {
    id: 'imdo',
    name: 'IMDO',
    category: 'frontend',
    slug: 'imdo',
    description: 'School assignment - a movie browsing web app similar to IMDb. It uses a custom API called IMDO API to fetch and display movie data such as favorites, search results, and detailed movie info.',
    detailedContent: {
      introTitle: "Ett skräddarsytt filmbibliotek med vanilj-JS.",
      intro: "IMDO is a web application heavily inspired by IMDb, designed as a comprehensive school assignment. The project focuses on core web development fundamentals, specifically utilizing vanilla JavaScript modules, intricate DOM manipulation, and asynchronous API integrations through a custom 'IMDO API'.",
      sections: [
        {
          tag: "01 — DYNAMIC RENDERING",
          title: "Interacting with the DOM.",
          text: "Rather than relying on modern frameworks, the entire interface is dynamically generated using vanilla JavaScript. The application fetches data from the API and systematically renders movie cards, detail views, and embedded trailers directly into the Document Object Model.",
          bullets: [
            "Dynamic rendering of movie cards across multiple interconnected pages",
            "Detailed movie views featuring embedded video trailers",
            "Search functionality querying the custom IMDO API"
          ]
        },
        {
          tag: "02 — DATA PERSISTENCE",
          title: "Managing User Favorites.",
          text: "A key feature of the application is the ability for users to curate their own list of favorite movies. This is handled entirely on the client side, using the browser's localStorage API to add, remove, and persist data between active sessions.",
          bullets: [
            "Modular JavaScript architecture for better code organization",
            "Save and remove favorite movies with persistent state via localStorage"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Tivva34/IMDO',
    liveUrl: 'https://tivva34.github.io/IMDO/index.html',
    languages: ['JavaScript', 'HTML', 'CSS'],
    tech: ['API', 'Responsive Design'],
    screenshot: `${import.meta.env.BASE_URL}projects/IMDO.png`,
    gallery: ['projects/IMDO.png']
  },
  {
    id: 'nasa-spaceviewer',
    name: 'Nasa-SpaceViewer',
    category: 'frontend',
    slug: 'nasa-spaceviewer',
    description: 'NASA Space Viewer: A React app that fetches and displays NASA\'s Astronomy Picture of the Day (APOD) using the official NASA API.',
    detailedContent: {
      introTitle: "Utforskning av kosmos via NASA:s API.",
      intro: "Nasa-SpaceViewer is a visually engaging React application that leverages the official NASA Astronomy Picture of the Day (APOD) API. The project was built with a strong focus on creating a stunning, immersive frontend experience through fluid micro-animations and responsive, high-fidelity media presentation.",
      sections: [
        {
          tag: "01 — API INTEGRATION",
          title: "Exploring the Cosmos.",
          text: "The application communicates asynchronously with NASA's endpoints to fetch and render the latest astronomical data. Users are not only presented with the current day's imagery, but can also query the archive to discover space media from random historical dates.",
          bullets: [
            "Live data fetching from the official NASA APOD REST API",
            "Algorithmic randomized querying to explore historical space imagery",
            "Intelligent handling of both high-resolution images and embedded iFrame videos"
          ]
        },
        {
          tag: "02 — UI & ANIMATIONS",
          title: "An Immersive Experience.",
          text: "To complement the breathtaking space imagery, the user interface was designed to be minimalistic and cinematic. Framer Motion is utilized throughout the app to orchestrate smooth page transitions and interactive micro-animations.",
          bullets: [
            "Advanced layout animations and page transitions powered by Framer Motion",
            "Responsive, modern layout strictly tailored for visual media presentation"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Tivva34/Nasa-SpaceViewer',
    liveUrl: null,
    languages: ['JavaScript', 'HTML', 'CSS'],
    tech: ['React', 'NASA API', 'Framer Motion', 'Responsive Design'],
    screenshot: `${import.meta.env.BASE_URL}projects/Nasa2.png`,
    gallery: ['projects/Nasa2.png']
  },
  {
    id: 'readingsloth',
    name: 'ReadingSloth',
    category: 'frontend',
    slug: 'readingsloth',
    description: 'A React app with user authentication (login/register), book browsing, and a persistent shopping cart.',
    detailedContent: {
      introTitle: "Simulerad e-handel och beständig kundvagn.",
      intro: "ReadingSloth is a fully functional frontend e-commerce bookstore prototype built with React. The project was designed to simulate a real-world shopping experience, requiring the implementation of complex client-side logic such as user authentication flows, protected routes, and a persistent shopping cart system.",
      sections: [
        {
          tag: "01 — AUTHENTICATION & ROUTING",
          title: "Controlling Access.",
          text: "The application utilizes React Router to handle client-side navigation. A simulated authentication system manages user login and registration states, allowing the application to conditionally render specific views and restrict areas to authenticated users only.",
          bullets: [
            "Simulated user authentication flow including registration and login states",
            "Client-side routing with protected routes via React Router",
            "Conditional UI rendering based on the active user session"
          ]
        },
        {
          tag: "02 — E-COMMERCE LOGIC",
          title: "The Shopping Experience.",
          text: "Users can browse a detailed catalog of books, view specific item details, and add products to their cart. The cart state is synchronized with the browser's localStorage, ensuring that the user's selected items survive page reloads and navigating away from the site.",
          bullets: [
            "Dynamic book catalog with detailed individual product views",
            "Complex state management for cart operations (add, remove, calculate totals)",
            "Persistent shopping cart using the browser's localStorage API"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Tivva34/ReadingSloth',
    liveUrl: null,
    languages: ['JavaScript', 'HTML', 'CSS'],
    tech: ['React', 'React Router', 'Responsive Design'],
    screenshot: `${import.meta.env.BASE_URL}projects/ReadingSloth.png`,
    gallery: ['projects/ReadingSloth.png', 'projects/Sloth3.png']
  },
  {
    id: 'shui',
    name: 'Shui',
    category: 'fullstack',
    slug: 'shui',
    description: 'A full-stack project where users can post, edit, and delete messages on a digital message board. The frontend is built with React and hosted on AWS.',
    detailedContent: {
      introTitle: "Serverlös meddelandehantering med AWS.",
      intro: "Shui är ett molnbaserat fullstack-projekt som fungerar som en digital anslagstavla. Applikationen är helt serverlös och byggdes från grunden för att demonstrera hur moderna frontend-ramverk (React) kan integreras sömlöst med skalbar molninfrastruktur via Amazon Web Services (AWS).",
      sections: [
        {
          tag: "01 — FRONTEND & FUNKTIONALITET",
          title: "Interaktion och Användarflöden.",
          text: "Användargränssnittet tillåter besökare att registrera konton, logga in och interagera med den digitala anslagstavlan. Det finns fullt stöd för CRUD-operationer (Skapa, Läsa, Uppdatera, Ta bort) på egna inlägg, samt möjlighet att filtrera och läsa specifika användares samlade meddelandehistorik.",
          bullets: [
            "Fullständigt flöde för användarregistrering och säker autentisering",
            "CRUD-funktionalitet för personliga anslagstavleinlägg",
            "Filtrering av historik kopplat till unika användarprofiler"
          ]
        },
        {
          tag: "02 — BACKEND & MOLNARKITEKTUR",
          title: "Serverlös AWS-infrastruktur.",
          text: "Istället för att hantera en traditionell server, driftas hela backend-logiken serverlöst. React-frontenden ligger hostad i en AWS S3-bucket, medan API-anrop dirigeras via AWS API Gateway till Lambda-funktioner som i sin tur kommunicerar med en NoSQL-databas (DynamoDB).",
          bullets: [
            "Serverlös backend-arkitektur byggd med AWS Lambda och API Gateway",
            "Säker och snabb databaslagring via Amazon DynamoDB",
            "Frontend-hosting distribuerad via AWS S3"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Tivva34/Shui',
    liveUrl: 'http://shui-tim-2025.s3-website.eu-north-1.amazonaws.com/',
    languages: ['JavaScript', 'HTML', 'CSS'],
    tech: ['React', 'AWS', 'DynamoDB', 'Responsive Design'],
    screenshot: `${import.meta.env.BASE_URL}projects/Shui.png`,
    gallery: ['projects/Shui.png']
  },
  {
    id: 'fading-light-demo',
    name: 'FadingLightDemo',
    category: 'games',
    slug: 'fading-light-demo',
    description: 'Fading Light is a top-down 2D puzzle solver with a strong focus on storytelling around mental health themes.',
    detailedContent: {
      introTitle: "Berättardriven pussellösning i Unity.",
      intro: "Fading Light is a top-down 2D puzzle-solving game developed over the course of two years using Unity and C#. More than just a technical prototype, this project serves as an interactive demo specifically designed to showcase the integration of narrative game design with mechanical gameplay, exploring sensitive mental health themes.",
      sections: [
        {
          tag: "01 — GAME DESIGN",
          title: "Narrative through Mechanics.",
          text: "The core gameplay loop revolves around puzzle-solving mechanics that metaphorically represent internal struggles. The atmospheric level design and intentional lighting choices are crafted to evoke specific emotional responses and drive the storytelling forward.",
          bullets: [
            "Intricate top-down 2D puzzle-solving mechanics",
            "Deep storytelling elements focused on mental health themes",
            "Atmospheric level design directly tied to narrative progression"
          ]
        },
        {
          tag: "02 — PROGRAMMING",
          title: "Custom Systems in Unity.",
          text: "Under the hood, the game relies entirely on custom-written C# scripts. These scripts control player movement, environmental interactions, puzzle state management, and the synchronization between gameplay events and narrative triggers.",
          bullets: [
            "Extensive custom C# scripting for character controllers and physics",
            "Bespoke systems for handling in-game interactions and puzzle logic",
            "Carefully crafted development to showcase the balance of narrative and mechanics"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Tivva34/FadingLightDemo',
    liveUrl: null,
    languages: ['CSharp'],
    tech: ['Unity'],
    screenshot: `${import.meta.env.BASE_URL}projects/FadingLight4.png`,
    gallery: [
      'projects/FadingLight4.png',
      'projects/FadingLight.png',
      'projects/FadingLight2.png',
      'projects/FadingLight3.png',
      'projects/FadingLight5.png',
      'projects/FadingLightMind.png'
    ]
  }
];
