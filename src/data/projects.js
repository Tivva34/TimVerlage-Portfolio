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
  "Jannes Maskin o Smide",
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
    hidden: true,
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
    id: "jannes-maskin-o-smide",
    name: "Jannes Maskin o Smide",
    category: "fullstack",
    type: "CUSTOM BUSINESS PLATFORM",
    slug: "jannes-maskin-o-smide",
    description: "The project is a custom, web-based digital business platform. The goal of the solution is to gather the company's digital sales, customer inquiries, customer dialogue, and internal administration into a single, cohesive system.",
    detailedContent: {
      introTitle: "A solution with a clear purpose.",
      intro: "The project is a custom, web-based digital business platform. The goal of the solution is to gather the company's digital sales, customer inquiries, customer dialogue, and internal administration into a single, cohesive system. Through this architecture, previously isolated systems are replaced with a context-driven flow where all information is connected - from the first search on Google to a closed deal.",
      sections: [
        {
          tag: "01 — PUBLIC WEBSITE & COMPANY AREA",
          title: "The company's digital interface towards customers.",
          text: "The public website is built to work seamlessly across desktop, mobile, and tablet, with a clear focus on responsive design, accessibility, and conversion.",
          bullets: [
            "Home page and Company Information",
            "Machine Sales and Machine Listings (incl. detail pages)",
            "Presentation of Inventory",
            "Specific sections for Workshop and Metalwork",
            "Transport-related contact flows",
            "Smart, contextual contact features and a direct \"Call us\" function for mobile devices"
          ]
        },
        {
          tag: "02 — SALES",
          title: "Machines & Inventory.",
          text: "Sales are integrated directly into the platform. Staff can manage the inventory via the administration, and what is published internally is immediately mirrored externally. Each machine and inventory item has its own detail page with specifications, images, and unique contact options."
        },
        {
          tag: "03 — CUSTOMER DIALOGUE",
          title: "Context-based Inquiries.",
          text: "A central concept in the platform is that all inquiries are linked to the right context. Smart forms automatically connect the customer, the message, and the machine in a ticket. Inquiries for metalwork and workshop are separated automatically, and email communication is fully integrated into the system."
        },
        {
          tag: "04 — ADMIN & CRM",
          title: "Administrative Business System.",
          text: "The internal administration system is built as a separate application (PWA) for managing all business data. It includes handling tickets, customer dialogue with history, filtering, and role-based access control (RBAC) for security. The system can be installed as a real app on all devices."
        },
        {
          tag: "05 — TECH & PERFORMANCE",
          title: "Real-time, Architecture & SEO.",
          text: "The system uses advanced real-time functionality with Supabase Realtime for instant updates and Web Push notifications. The backend is handled by a robust PostgreSQL database with Edge Functions and RLS. The frontend is built in React & Vite and optimized for lightning-fast load times and high SEO ranking."
        },
        {
          tag: "06 — THE CUSTOMER JOURNEY",
          title: "Cohesive flow.",
          text: "Google → Website → Machine / Service → Detail page → Contact inquiry → Automatically linked ticket → Notification to the right staff (via PWA) → Reply from within CRM (email integrated) → Follow-up and closing."
        }
      ]
    },
    html_url: null,
    liveUrl: "https://jannes-maskin-o-smide-cloudflare.pages.dev/",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["React", "Supabase", "Realtime", "PWA", "Service Worker", "Responsive Design"],
    screenshot: `${import.meta.env.BASE_URL}projects/JannesMaskinOSmide/Kundsida/1. Hem - Hero - Sektion.png`,
    gallery: {
        "Kundsida": [
          "projects/JannesMaskinOSmide/Kundsida/1. Hem - Hero - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/2. Hem - Info - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/3. Maskiner - Översikt - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/4. Maskiner - Lazy Load - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/5. Maskiner - Försäljning Inköp Transport - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/6. Maskiner - Kontaktformulär - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida/7. Maskiner - Ring Försäljning - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida/9. Maskiner - Vald Maskin Bilder - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/10. Maskiner - Vald Maskin Bildgalleri - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/11. Maskiner - Vald Maskin - Page.png",
          "projects/JannesMaskinOSmide/Kundsida/11. Maskiner - Vald Maskin Lightbox - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida/12. Maskiner - Vald Maskin Info - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/13. Maskiner - Vald Maskin Botten - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/14. Maskiner - Kontaktformulär Vald Maskin - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida/15. Maskiner - Transport Vald Maskin - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida/16. Lösöre - Översikt - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/17. Lösöre - Alla Lösören - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/18. Lösöre - Hittar Inte - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/19. Lösöre - Vald Lösöre - Page.png",
          "projects/JannesMaskinOSmide/Kundsida/20. Lösöre - Vald Lösöre Detaljer - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/21. Lösöre - Vald Lösöre Botten - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/22. Lösöre - Kontaktformulär Vald Lösöre - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida/23. Verkstad & Smide - Verkstad - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/24. Verkstad & Smide - Specialtillverkning Transport - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/25. Verkstad & Smide - Kontaktformulär - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida/26. Om oss - Om Företaget - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/27. Om oss - Vad Vi Gör - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/28. Om oss - Familjeföretaget - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/29. Kontakt - Kontakta Oss - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida/30. Kontakt - Formulär - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida/31. Hem - Footer - Sektion.png"
        ],
        "Kundsida-Lightmode": [
          "projects/JannesMaskinOSmide/Kundsida-Lightmode/1. Hem - Hero - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida-Lightmode/2. Hem - Info - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida-Lightmode/3. Maskiner - Alla Maskiner - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida-Lightmode/4. Lösöre - Alla Lösören - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida-Lightmode/5. Verkstad & Smide - Verkstad - Sektion.png",
          "projects/JannesMaskinOSmide/Kundsida-Lightmode/6. Om oss - Om Företaget - Sektion.png"
        ],
        "Kundsida-English": [
          "projects/JannesMaskinOSmide/Kundsida-English/1. Home - Hero - Section.png",
          "projects/JannesMaskinOSmide/Kundsida-English/2. Home - Info - Section.png",
          "projects/JannesMaskinOSmide/Kundsida-English/3. Machines - All Machines - Section.png",
          "projects/JannesMaskinOSmide/Kundsida-English/4. Machines - Chosen Machine Top - Section.png",
          "projects/JannesMaskinOSmide/Kundsida-English/5. Machines - Chosen Machine Bottom - Section.png",
          "projects/JannesMaskinOSmide/Kundsida-English/6. Machines - Contactform - Modal.png",
          "projects/JannesMaskinOSmide/Kundsida-English/11. Inventory - All Inventory - Section.png",
          "projects/JannesMaskinOSmide/Kundsida-English/12. Workshop & Metalwork - Workshop - Section.png",
          "projects/JannesMaskinOSmide/Kundsida-English/13. About us - About us - Section.png",
          "projects/JannesMaskinOSmide/Kundsida-English/14. Contact - Contactform - Modal.png"
        ],
        "Admin": [
          "projects/JannesMaskinOSmide/Admin/1. Admin - Inloggning - Page.png",
          "projects/JannesMaskinOSmide/Admin/2. Admin - Återställ Lösenord - Page.png",
          "projects/JannesMaskinOSmide/Admin/3. Admin - Maskiner Översikt Top - Page.png",
          "projects/JannesMaskinOSmide/Admin/4. Admin - Maskiner Översikt Botten - Page.png",
          "projects/JannesMaskinOSmide/Admin/5. Admin - Lägg Till Maskin Top - Page.png",
          "projects/JannesMaskinOSmide/Admin/6. Admin - Lägg Till Maskin Mitten - Page.png",
          "projects/JannesMaskinOSmide/Admin/7. Admin - Lägg Till Maskin Botten - Page.png",
          "projects/JannesMaskinOSmide/Admin/8. Admin - Lägg Till Maskin Engelsk Sektion - Sektion.png",
          "projects/JannesMaskinOSmide/Admin/9. Admin - Lägg Till Maskin Bilduppladdning - Sektion.png",
          "projects/JannesMaskinOSmide/Admin/10. Admin - Redigera Maskin - Page.png",
          "projects/JannesMaskinOSmide/Admin/11. Admin - Lösöre Översikt - Page.png",
          "projects/JannesMaskinOSmide/Admin/12. Admin - Redigera Lösöre - Page.png",
          "projects/JannesMaskinOSmide/Admin/13. Admin - Lägg Till Lösöre Botten - Page.png",
          "projects/JannesMaskinOSmide/Admin/14. Admin - Förfrågningar Översikt - Page.png",
          "projects/JannesMaskinOSmide/Admin/15. Admin - Förfrågan Detaljer Top - Modal.png",
          "projects/JannesMaskinOSmide/Admin/16. Admin - Förfrågan Detaljer Mitten - Modal.png",
          "projects/JannesMaskinOSmide/Admin/17. Admin - Förfrågan Detaljer Botten - Modal.png",
          "projects/JannesMaskinOSmide/Admin/18. Admin - Statistik - Page.png",
          "projects/JannesMaskinOSmide/Admin/19. Admin - Försäljning Översikt - Page.png",
          "projects/JannesMaskinOSmide/Admin/20. Admin - Försäljning Top - Page.png",
          "projects/JannesMaskinOSmide/Admin/21. Admin - Försäljning Såld Maskin - Modal.png",
          "projects/JannesMaskinOSmide/Admin/22. Admin - Användare & Behörigheter - Page.png",
          "projects/JannesMaskinOSmide/Admin/23. Admin - Min Profil Översikt - Page.png",
          "projects/JannesMaskinOSmide/Admin/24. Admin - Min Profil Notifikationer - Sektion.png"
        ],
        "Admin-Lightmode": [
          "projects/JannesMaskinOSmide/Admin-Lightmode/1. Admin - Förfrågningar Översikt - Page.png",
          "projects/JannesMaskinOSmide/Admin-Lightmode/2. Admin - Försäljning Översikt - Page.png",
          "projects/JannesMaskinOSmide/Admin-Lightmode/3. Admin - Användare & Behörigheter - Page.png"
        ]
      }
  },
  {
    id: "macservice",
    name: "MAC Service",
    category: "frontend",
    type: "BUSINESS WEBSITE",
    slug: "mac-service",
    description: "A modern and responsive corporate website for MAC Service in Köping. The website presents construction and renovation, property maintenance, and gardening services, leading the visitor from services and project images to a free quote request.",
    detailedContent: {
      introTitle: "A sales-driving platform for craftsmanship services.",
      intro: "A custom and responsive corporate website developed for MAC Service in Köping. The purpose of the project was to create a modern, fast, and user-friendly platform to present the company's services in construction, property maintenance, and gardening. The main focus was on converting visitors into customers through clear contact flows for free quotes.",
      sections: [
        {
          tag: "01 — SERVICES & GALLERY",
          title: "Structure and trust.",
          text: "The website is divided into clear, custom-designed sections for each business area. To build trust, a dynamic project gallery was integrated to showcase previously completed works.",
          bullets: [
            "Sections for construction, property maintenance, and gardening services",
            "Project gallery to strengthen trust with new customers"
          ]
        },
        {
          tag: "02 — UX & CONVERSION",
          title: "Focus on the user experience.",
          text: "By optimizing CTA (Call To Action) flows, it was ensured that the user can easily navigate from reading about a specific service directly to requesting a free quote.",
          bullets: [
            "Clear CTA flows for quote requests",
            "Direct contact paths via phone, email, and social media",
            "Responsive design that works just as well on mobile as desktop"
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
    description: "A modern and minimalistic corporate website for Wermlands Skomakeri in Karlstad, focusing on traditional craftsmanship, shoe repairs, and personal service. The website highlights the workshop's craftsmanship and makes it easy for the visitor to find information, view services, and get in touch with the shoemaker.",
    detailedContent: {
      introTitle: "Genuine craftsmanship in a digital format.",
      intro: "A custom and responsive corporate website for Wermlands Skomakeri in Karlstad. The main purpose was to create a digital presence that feels just as genuine and crafted as the business itself. By combining a timeless visual expression with modern web technology, the result was a platform where the visitor can quickly find the right services, opening hours, and contact information.",
      sections: [
        {
          tag: "01 — PRESENTATION OF CRAFTSMANSHIP",
          title: "Showing the value of repairs.",
          text: "To highlight the quality of the shoemaker's craftsmanship, specific sections were built to show before and after pictures. This gives the customer a direct understanding of the value of repairing instead of buying new.",
          bullets: [
            "Before and after pictures for different types of shoe repairs",
            "Clear and structured presentation of available services"
          ]
        },
        {
          tag: "02 — INTEGRATION & ADMINISTRATION",
          title: "Digital presence in symbiosis.",
          text: "The website was built with a modern architecture and centralized management of customer data. To keep the content alive, the company's Instagram feed was also integrated, giving visitors an insight into the workshop's everyday life.",
          bullets: [
            "Instagram integration for current updates directly from the workshop",
            "Centralized data management for opening hours and contact details",
            "Optimized, fast, and fully responsive design for all devices"
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
    description: "A professional corporate website built for a local company. The focus was on creating a trustworthy design, highlighting their services, and making it easy for customers to request a quote.",
    detailedContent: {
      introTitle: "Trust-building online presence.",
      intro: "A professional and trustworthy corporate website developed for a local construction and stonework company in Arvika. The focus was on building a stable and fast digital presence that effectively highlights the company's core services and drives new quote requests.",
      sections: [
        {
          tag: "01 — STRUCTURE & TRUST",
          title: "Reference-driven design.",
          text: "Since the construction industry relies heavily on trust, the website was structured to highlight reference projects and certifications. This creates a sense of security for potential customers right from the first impression.",
          bullets: [
            "Clear division of the company's construction and stonework services",
            "Reference-driven structure designed to build customer trust"
          ]
        },
        {
          tag: "02 — USER EXPERIENCE",
          title: "Conversion and accessibility.",
          text: "The site was developed with a 'mobile-first' strategy to ensure an excellent experience regardless of which device the customer is using. Well-placed CTA buttons quickly lead the visitor to a smooth quote request.",
          bullets: [
            "Fast and easy path to a quote request",
            "Fully responsive and accessible design"
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
    description: "Corporate website that helps the painting company showcase past reference projects and collect new customer inquiries. Fast loading time and optimized for local SEO.",
    detailedContent: {
      introTitle: "Local visibility and fast contact.",
      intro: "A fast, modern, and locally optimized corporate website developed for LJS Måleri Värmland. The project's goal was to digitize the company's portfolio, showcase past reference projects, and create a simple, frictionless channel for new customer inquiries.",
      sections: [
        {
          tag: "01 — PORTFOLIO & LOCAL SEO",
          title: "Being visible where the customers are.",
          text: "The architecture and content structure were built with local visibility (Local SEO) in mind. By clearly presenting specific painting services and local reference projects, the company's chances of reaching the right target audience were improved.",
          bullets: [
            "Optimized structure for better local visibility",
            "Clear presentation of painting services and reference works"
          ]
        },
        {
          tag: "02 — FUNCTIONALITY",
          title: "Responsive and accessible.",
          text: "With a large proportion of visitors from mobile devices, the design was developed to be one hundred percent responsive. Contact paths were made extra clear so that customers can easily request a quote directly from the workplace or from home.",
          bullets: [
            "Clear contact paths optimized for conversion",
            "Fully responsive experience on mobile, tablet, and desktop"
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
