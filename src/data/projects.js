export const defaultImage = `${import.meta.env.BASE_URL}projects/default-project.png`;

export const repoScreenshots = {
  Shui: `${import.meta.env.BASE_URL}projects/1. Shui - Student Project.png`,
  IMDO: `${import.meta.env.BASE_URL}projects/1. IMDO - Student Project.png`,
  "Nasa-SpaceViewer": `${import.meta.env.BASE_URL}projects/1. Nasa SpaceViewer - Student Project.png`,
  ReadingSloth: `${import.meta.env.BASE_URL}projects/1. ReadingSloth - Student Project.png`,
  FadingLightDemo: `${import.meta.env.BASE_URL}projects/1. FadingLight - Prototype.png`,
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
    description: "The project is a custom, web-based digital business platform. The goal of the solution is to gather the company's digital sales, customer inquiries, customer dialogue, and internal administration into a single, cohesive system.",
    detailedContent: {
      introTitle: "A solution with a clear purpose.",
      intro: "The project is a custom, web-based digital business platform. The goal of the solution is to gather the company's digital sales, customer inquiries, customer dialogue, and internal administration into a single, cohesive system. Through this architecture, previously isolated systems are replaced with a context-driven flow where all information is connected - from the first search on Google to a closed deal.",
      sections: [
        {
          tag: "01 — PUBLIC WEBSITE & CORPORATE AREA",
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
    liveUrl: "https://hammaro-maskin-o-smide-cloudflare.pages.dev/",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["React", "Supabase", "Realtime", "PWA", "Service Worker", "Responsive Design"],
    screenshot: `${import.meta.env.BASE_URL}projects/HammaröMaskin&Smide/Kundsida/1.Home - Hero - Section.png`,
    gallery: {
      "Customer Portal": [
        "projects/HammaröMaskin&Smide/Kundsida/1.Home - Hero - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/2.Home - About us - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/3.Machines - All machines.png",
        "projects/HammaröMaskin&Smide/Kundsida/4.Machines - All Machines - Lazy loading.png",
        "projects/HammaröMaskin&Smide/Kundsida/5.Machines - Chosen machine.png",
        "projects/HammaröMaskin&Smide/Kundsida/6.Machines - Chosen machine.png",
        "projects/HammaröMaskin&Smide/Kundsida/7.Machine - Contact form - Modal.png",
        "projects/HammaröMaskin&Smide/Kundsida/8.Machine & Transport - Form - Modal.png",
        "projects/HammaröMaskin&Smide/Kundsida/9.Machines - Sales Purchasing Transport - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/10.Inventory - All Inventory.png",
        "projects/HammaröMaskin&Smide/Kundsida/11.Inventory - All Inventory - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/12.Inventory - Chosen inventory.png",
        "projects/HammaröMaskin&Smide/Kundsida/13.About us - Looking for something else - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/14.About us - Machines & Smide - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/15.Inventory - Find what you are looking for - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/16.Workshop & Metalwork - Reparation Workshop & Metalwork - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/17.Workshop & Metalwork -Metalwork & Transport - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/18.About us - About us - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/19.About us - The family business - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/20.Contact - Contact us - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/21.Contact Form -Modal.png",
        "projects/HammaröMaskin&Smide/Kundsida/22.Footer - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida/23.LightHouse - Rating.png"
      ],
      "Customer Portal - Light Mode": [
        "projects/HammaröMaskin&Smide/Kundsida-Lightmode/1.Home - Hero - Section - LightMode.png",
        "projects/HammaröMaskin&Smide/Kundsida-Lightmode/2.Machines -All machines - Section - LightMode.png",
        "projects/HammaröMaskin&Smide/Kundsida-Lightmode/3.Workshop & Metalwork - Metalwork & Transport - Section -LightMode.png"
      ],
      "Customer Portal - English": [
        "projects/HammaröMaskin&Smide/Kundsida-English/1.Home - Hero - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/2.Machines - All machines - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/3.Inventory - All inventory - section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/4.Workshop & Metalwork - Workshop & Repair - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/5.About us - About us - Section.png",
        "projects/HammaröMaskin&Smide/Kundsida-English/6.Contact - Contactform - Section.png"
      ],
      "Admin Panel": [
        "projects/HammaröMaskin&Smide/Admin/1.Admin - Login.png",
        "projects/HammaröMaskin&Smide/Admin/2.Admin - Machines.png",
        "projects/HammaröMaskin&Smide/Admin/3.Admin - Machines - Sorting.png",
        "projects/HammaröMaskin&Smide/Admin/4.Admin - Inventory.png",
        "projects/HammaröMaskin&Smide/Admin/5.Admin - Edit machine.png",
        "projects/HammaröMaskin&Smide/Admin/6.Admin - Edit machine - Properties & Specifications.png",
        "projects/HammaröMaskin&Smide/Admin/7.Admin - Edit machine - English.png",
        "projects/HammaröMaskin&Smide/Admin/8.Admin - Edit machine - Image upload.png",
        "projects/HammaröMaskin&Smide/Admin/9.Admin - Inquiries.png",
        "projects/HammaröMaskin&Smide/Admin/10.Admin - Inquiry.png",
        "projects/HammaröMaskin&Smide/Admin/11.Admin - Inquiry - Attached images.png",
        "projects/HammaröMaskin&Smide/Admin/12.Admin - Inquiry - Reply section.png",
        "projects/HammaröMaskin&Smide/Admin/13.Admin - Statistics.png",
        "projects/HammaröMaskin&Smide/Admin/14.Admin - Statistics -Example.png",
        "projects/HammaröMaskin&Smide/Admin/15.Admin - Sales.png",
        "projects/HammaröMaskin&Smide/Admin/16.Admin - Sales - Machine.png",
        "projects/HammaröMaskin&Smide/Admin/17.Admin - Users & Permissions.png",
        "projects/HammaröMaskin&Smide/Admin/18.Admin - Edit user.png",
        "projects/HammaröMaskin&Smide/Admin/19.Admin - My profile.png",
        "projects/HammaröMaskin&Smide/Admin/20.Admin - My profile - Notifications.png"
      ],
      "Admin Panel - Light Mode": [
        "projects/HammaröMaskin&Smide/Admin-Lightmode/1.Admin - Machines - LightMode.png",
        "projects/HammaröMaskin&Smide/Admin-Lightmode/2.Admin - Inquiry - Lightmode.png"
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
      intro: "Through this architecture, previously isolated systems are replaced with a context-driven flow where all information is connected - from the first search on Google to a closed deal.",
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
          tag: "05 — TECHNICAL ARCHITECTURE & PERFORMANCE",
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
    liveUrl: "https://tivva34.github.io/JannesMaskin/",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["React", "Supabase", "PWA", "Service Worker", "Responsive Design"],
    screenshot: `${import.meta.env.BASE_URL}projects/JannesMaskinOSmide/Kundsida/1. Home - Hero - Section.png`,
    gallery: {
      "Customer Portal": [
        "projects/JannesMaskinOSmide/Kundsida/1. Home - Hero - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/2. Home - Info - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/3. Machines - Overview - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/4. Machines - Lazy Load - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/5. Machines - Sales Purchasing Transport - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/6. Machines - Contact form - Modal.png",
        "projects/JannesMaskinOSmide/Kundsida/7. Machines - Call Sales - Modal.png",
        "projects/JannesMaskinOSmide/Kundsida/9. Machines - Chosen Machine Images - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/10. Machines - Chosen Machine Image Gallery - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/11. Machines - Chosen Machine Lightbox - Modal.png",
        "projects/JannesMaskinOSmide/Kundsida/12. Machines - Chosen Machine Info - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/13. Machines - Chosen Machine Bottom - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/14. Machines - Contact form Chosen Machine - Modal.png",
        "projects/JannesMaskinOSmide/Kundsida/15. Machines - Transport Chosen Machine - Modal.png",
        "projects/JannesMaskinOSmide/Kundsida/16. Inventory - Overview - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/17. Inventory - All Inventory - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/18. Inventory - Cant Find - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/19. Inventory - Chosen Inventory - Page.png",
        "projects/JannesMaskinOSmide/Kundsida/20. Inventory - Chosen Inventory Details - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/21. Inventory - Chosen Inventory Bottom - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/22. Inventory - Contact form Chosen Inventory - Modal.png",
        "projects/JannesMaskinOSmide/Kundsida/23. Workshop & Metalwork - Workshop - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/24. Workshop & Metalwork - Custom Manufacturing Transport - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/25. Workshop & Metalwork - Contact form - Modal.png",
        "projects/JannesMaskinOSmide/Kundsida/26. About us - About the Company - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/27. About us - What we do - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/28. About us - The family business - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/29. Contact - Contact us - Section.png",
        "projects/JannesMaskinOSmide/Kundsida/30. Contact - Form - Modal.png",
        "projects/JannesMaskinOSmide/Kundsida/31. Home - Footer - Section.png"
      ],
      "Customer Portal - Light Mode": [
        "projects/JannesMaskinOSmide/Kundsida-Lightmode/1. Home - Hero - Section.png",
        "projects/JannesMaskinOSmide/Kundsida-Lightmode/2. Home - Info - Section.png",
        "projects/JannesMaskinOSmide/Kundsida-Lightmode/3. Machines - All Machines - Section.png",
        "projects/JannesMaskinOSmide/Kundsida-Lightmode/4. Inventory - All Inventory - Section.png",
        "projects/JannesMaskinOSmide/Kundsida-Lightmode/5. Workshop & Metalwork - Workshop - Section.png",
        "projects/JannesMaskinOSmide/Kundsida-Lightmode/6. About us - About the Company - Section.png"
      ],
      "Customer Portal - English": [
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
      "Admin Panel": [
        "projects/JannesMaskinOSmide/Admin/1. Admin - Login - Page.png",
        "projects/JannesMaskinOSmide/Admin/2. Admin - Reset password - Page.png",
        "projects/JannesMaskinOSmide/Admin/3. Admin - Machines Overview Top - Page.png",
        "projects/JannesMaskinOSmide/Admin/4. Admin - Machines Overview Bottom - Page.png",
        "projects/JannesMaskinOSmide/Admin/5. Admin - Add Machine Top - Page.png",
        "projects/JannesMaskinOSmide/Admin/6. Admin - Add Machine Middle - Page.png",
        "projects/JannesMaskinOSmide/Admin/7. Admin - Add Machine Bottom - Page.png",
        "projects/JannesMaskinOSmide/Admin/8. Admin - Add Machine English Section - Section.png",
        "projects/JannesMaskinOSmide/Admin/9. Admin - Add Machine Image upload - Section.png",
        "projects/JannesMaskinOSmide/Admin/10. Admin - Edit Machine - Page.png",
        "projects/JannesMaskinOSmide/Admin/11. Admin - Inventory Overview - Page.png",
        "projects/JannesMaskinOSmide/Admin/12. Admin - Edit Inventory - Page.png",
        "projects/JannesMaskinOSmide/Admin/13. Admin - Add Inventory Bottom - Page.png",
        "projects/JannesMaskinOSmide/Admin/14. Admin - Inquiries Overview - Page.png",
        "projects/JannesMaskinOSmide/Admin/15. Admin - Inquiry Details Top - Modal.png",
        "projects/JannesMaskinOSmide/Admin/16. Admin - Inquiry Details Middle - Modal.png",
        "projects/JannesMaskinOSmide/Admin/17. Admin - Inquiry Details Bottom - Modal.png",
        "projects/JannesMaskinOSmide/Admin/18. Admin - Statistics - Page.png",
        "projects/JannesMaskinOSmide/Admin/19. Admin - Sales Overview - Page.png",
        "projects/JannesMaskinOSmide/Admin/20. Admin - Sales Top - Page.png",
        "projects/JannesMaskinOSmide/Admin/21. Admin - Sales Sold Machine - Modal.png",
        "projects/JannesMaskinOSmide/Admin/22. Admin - Users & Permissions - Page.png",
        "projects/JannesMaskinOSmide/Admin/23. Admin - My profile Overview - Page.png",
        "projects/JannesMaskinOSmide/Admin/24. Admin - My profile Notifications - Section.png"
      ],
      "Admin Panel - Light Mode": [
        "projects/JannesMaskinOSmide/Admin-Lightmode/1. Admin - Inquiries Overview - Page.png",
        "projects/JannesMaskinOSmide/Admin-Lightmode/2. Admin - Sales Overview - Page.png",
        "projects/JannesMaskinOSmide/Admin-Lightmode/3. Admin - Users & Permissions - Page.png"
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
    screenshot: `${import.meta.env.BASE_URL}projects/MacService/1. Home - Hero - Section.png`,
    gallery: [
      "projects/MacService/1. Home - Hero - Section.png",
      "projects/MacService/2. Home - Our services - Section.png",
      "projects/MacService/3. Home - About us - Section.png",
      "projects/MacService/4. Home - About us - Slideshow.png",
      "projects/MacService/5. Home - Contact us & Footer - Section.png",
      "projects/MacService/6. About us - Hero - Section.png",
      "projects/MacService/7. About us - About us - Section.png",
      "projects/MacService/8. About us - Why choose MAC - Section.png",
      "projects/MacService/9. Services - Hero - Section.png",
      "projects/MacService/10. Services - Our services - Section.png",
      "projects/MacService/11. Services - Detailed services - Section.png",
      "projects/MacService/12. Services - Hiring us - Section.png",
      "projects/MacService/13. Contact - Hero - Section.png"
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
    screenshot: `${import.meta.env.BASE_URL}projects/WermlandsSkomakeri/1. Home - Hero - Section.png`,
    gallery: [
      "projects/WermlandsSkomakeri/1. Home - Hero - Section.png",
      "projects/WermlandsSkomakeri/2. Home - Our services - Section.png",
      "projects/WermlandsSkomakeri/3. Home - Craftsmanship - Section.png",
      "projects/WermlandsSkomakeri/4. Home - Before & After - Section.png",
      "projects/WermlandsSkomakeri/5. Home - The workshop - Section.png",
      "projects/WermlandsSkomakeri/6. Home - Contact & Find us - Section.png",
      "projects/WermlandsSkomakeri/7. Home - Footer - Section.png",
      "projects/WermlandsSkomakeri/8. LightHouse - Report.png"
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
    screenshot: `${import.meta.env.BASE_URL}projects/ArvikaBygg&Stenarbete/1. Home - Hero - Section.png`,
    gallery: [
      "projects/ArvikaBygg&Stenarbete/1. Home - Hero - Section.png",
      "projects/ArvikaBygg&Stenarbete/2. Home - Our services - Section.png",
      "projects/ArvikaBygg&Stenarbete/3. Home - Authorized - Section.png",
      "projects/ArvikaBygg&Stenarbete/4. Home - Industry experience - Section.png",
      "projects/ArvikaBygg&Stenarbete/5. Home - Why choose us - Section.png",
      "projects/ArvikaBygg&Stenarbete/6. Home - Process - Section.png",
      "projects/ArvikaBygg&Stenarbete/7. Home - Contact - Section.png"
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
    screenshot: `${import.meta.env.BASE_URL}projects/LJSMåleriVärmland/1. Home - Hero - Section.png`,
    gallery: [
      "projects/LJSMåleriVärmland/1. Home - Hero - Section.png",
      "projects/LJSMåleriVärmland/2. Home - Who are we - Section.png",
      "projects/LJSMåleriVärmland/3. Home - What we do - Section.png",
      "projects/LJSMåleriVärmland/4. Home - Process - Section.png",
      "projects/LJSMåleriVärmland/5. Home - Process - Section Hover.png",
      "projects/LJSMåleriVärmland/6. Home - Contact - Section.png",
      "projects/LJSMåleriVärmland/7. Home - Google Maps - Section.png"
    ]
  },
  {
    id: 'supermon',
    name: 'SuperMon',
    category: 'games',
    slug: 'supermon',
    description: 'A Pokémon-inspired platformer built in Unity and C# as part of a collaborative exam project.',
    detailedContent: {
      introTitle: "A nostalgic 2D adventure in Unity.",
      intro: "Super Jespermon is a platform-based 2D adventure inspired by classic titles like Super Mario and Pokémon. The game was developed entirely from scratch in Unity (C#) as a comprehensive degree project, with the goal of applying advanced game programming, level design, and system architecture in practice.",
      sections: [
        {
          tag: "01 — GAME MECHANICS",
          title: "Platforming and combat.",
          text: "The project required the development of several interacting systems to handle player movements, enemy AI, and interactions in the world. The player can explore hand-crafted levels, collect coins, and use capture mechanics to defeat various enemies.",
          bullets: [
            "Three uniquely designed levels filled with interactive objects and easter eggs",
            "Dynamic attack mechanics and the ability to capture Pokémon",
            "Custom-developed systems for gameplay and character physics"
          ]
        },
        {
          tag: "02 — TECHNICAL IMPLEMENTATION",
          title: "System architecture in Unity.",
          text: "To ensure the game was both expandable and performant, robust C# scripts were created to control everything from animation states and score keeping to level selection and UI management.",
          bullets: [
            "Object-oriented C# architecture for the game's core systems",
            "Custom handling of animations and user interfaces (UI)",
            "Save and load logic to track the player's score"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Zypherkill/Exam',
    liveUrl: 'https://zypherkill.github.io/supermon/',
    languages: ['CSharp', 'HTML', 'CSS'],
    tech: ['Unity'],
    screenshot: `${import.meta.env.BASE_URL}projects/1. SuperMon - Student Project.png`,
    gallery: ['projects/1. SuperMon - Student Project.png']
  },
  {
    id: 'iron-turtles',
    name: 'The Turtlebase',
    category: 'frontend',
    slug: 'the-turtlebase',
    description: 'Movie discovery and watchlist app built with React, Vite, and Swiper for browsing, searching, and saving films.',
    detailedContent: {
      introTitle: "Modern movie discovery and state management.",
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
    screenshot: `${import.meta.env.BASE_URL}projects/1. The Turtlebase - Student Project.png`,
    gallery: ['projects/1. The Turtlebase - Student Project.png']
  },
  {
    id: 'imdo',
    name: 'IMDO',
    category: 'frontend',
    slug: 'imdo',
    description: 'School assignment - a movie browsing web app similar to IMDb. It uses a custom API called IMDO API to fetch and display movie data such as favorites, search results, and detailed movie info.',
    detailedContent: {
      introTitle: "A custom movie library with vanilla JS.",
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
    screenshot: `${import.meta.env.BASE_URL}projects/1. IMDO - Student Project.png`,
    gallery: ['projects/1. IMDO - Student Project.png']
  },
  {
    id: 'nasa-spaceviewer',
    name: 'Nasa-SpaceViewer',
    category: 'frontend',
    slug: 'nasa-spaceviewer',
    description: 'NASA Space Viewer: A React app that fetches and displays NASA\'s Astronomy Picture of the Day (APOD) using the official NASA API.',
    detailedContent: {
      introTitle: "Exploration of the cosmos via NASA's API.",
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
    screenshot: `${import.meta.env.BASE_URL}projects/1. Nasa SpaceViewer - Student Project.png`,
    gallery: ['projects/1. Nasa SpaceViewer - Student Project.png']
  },
  {
    id: 'readingsloth',
    name: 'ReadingSloth',
    category: 'frontend',
    slug: 'readingsloth',
    description: 'A React app with user authentication (login/register), book browsing, and a persistent shopping cart.',
    detailedContent: {
      introTitle: "Simulated e-commerce and persistent shopping cart.",
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
    screenshot: `${import.meta.env.BASE_URL}projects/1. ReadingSloth - Student Project.png`,
    gallery: ['projects/1. ReadingSloth - Student Project.png', 'projects/2. ReadingSloth - In Game.png']
  },
  {
    id: 'shui',
    name: 'Shui',
    category: 'fullstack',
    slug: 'shui',
    description: 'A full-stack project where users can post, edit, and delete messages on a digital message board. The frontend is built with React and hosted on AWS.',
    detailedContent: {
      introTitle: "Serverlös meddelandehantering med AWS.",
      intro: "Shui is a cloud-based full-stack project that acts as a digital bulletin board. The application is completely serverless and was built from the ground up to demonstrate how modern frontend frameworks (React) can be seamlessly integrated with scalable cloud infrastructure via Amazon Web Services (AWS).",
      sections: [
        {
          tag: "01 — FRONTEND & FUNKTIONALITET",
          title: "Interaktion och Användarflöden.",
          text: "Användargränssnittet tillåter besökare att registrera konton, logga in och interagera med den digitala anslagstavlan. Det finns fullt stöd för CRUD-operationer (Skapa, Läsa, Uppdatera, Ta bort) på egna inlägg, samt möjlighet att filtrera och läsa specifika användares samlade meddelandehistorik.",
          bullets: [
            "Complete flow for user registration and secure authentication",
            "CRUD functionality for personal bulletin board posts",
            "Filtering of history linked to unique user profiles"
          ]
        },
        {
          tag: "02 — BACKEND & CLOUD ARCHITECTURE",
          title: "Serverless AWS infrastructure.",
          text: "Instead of managing a traditional server, the entire backend logic is hosted serverless. The React frontend is hosted in an AWS S3 bucket, while API calls are routed via AWS API Gateway to Lambda functions which in turn communicate with a NoSQL database (DynamoDB).",
          bullets: [
            "Serverless backend architecture built with AWS Lambda and API Gateway",
            "Secure and fast database storage via Amazon DynamoDB",
            "Frontend hosting distributed via AWS S3"
          ]
        }
      ]
    },
    html_url: 'https://github.com/Tivva34/Shui',
    liveUrl: 'http://shui-tim-2025.s3-website.eu-north-1.amazonaws.com/',
    languages: ['JavaScript', 'HTML', 'CSS'],
    tech: ['React', 'AWS', 'DynamoDB', 'Responsive Design'],
    screenshot: `${import.meta.env.BASE_URL}projects/1. Shui - Student Project.png`,
    gallery: ['projects/1. Shui - Student Project.png']
  },
  {
    id: 'fading-light-demo',
    name: 'FadingLightDemo',
    category: 'games',
    slug: 'fading-light-demo',
    description: 'Fading Light is a top-down 2D puzzle solver with a strong focus on storytelling around mental health themes.',
    detailedContent: {
      introTitle: "Narrative-driven puzzle solving in Unity.",
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
    screenshot: `${import.meta.env.BASE_URL}projects/1. FadingLight - Prototype.png`,
    gallery: [
      'projects/1. FadingLight - Prototype.png',
      'projects/2. FadingLight - Gameplay.png',
      'projects/3. FadingLight - Level Design.png',
      'projects/4. FadingLight - Combat.png',
      'projects/5. FadingLight - Atmosphere.png',
      'projects/6. FadingLight - Mind Map.png'
    ]
  }
];
