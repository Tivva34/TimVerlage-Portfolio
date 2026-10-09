import fs from 'fs';
import path from 'path';

const projectJsPath = path.resolve('src/data/projects.js');
let projectJs = fs.readFileSync(projectJsPath, 'utf8');

const dictionary = {
  "Hem": "Home",
  "Sektion": "Section",
  "Om oss": "About us",
  "Maskiner": "Machines",
  "Maskin": "Machine",
  "Alla maskiner": "All machines",
  "Alla Maskiner": "All machines",
  "Vald maskin": "Chosen machine",
  "Vald Maskin": "Chosen machine",
  "Kontaktformulär": "Contact form",
  "Formulär": "Form",
  "Försäljning Inköp Transport": "Sales Purchasing Transport",
  "Lösöre": "Inventory",
  "Alla Lösören": "All inventory",
  "Vald lösöre": "Chosen inventory",
  "Vald Lösöre": "Chosen inventory",
  "Söker annat": "Looking for something else",
  "Hitta vad du söker": "Find what you are looking for",
  "Verkstad & Smide": "Workshop & Metalwork",
  "Reparation Verkstad & Smide": "Repair Workshop & Metalwork",
  "Smide & Transport": "Metalwork & Transport",
  "Familjeföretaget": "The family business",
  "Kontakt": "Contact",
  "Kontakta oss": "Contact us",
  "Kontakta Oss": "Contact us",
  "Inloggning": "Login",
  "Återställ Lösenord": "Reset password",
  "Översikt": "Overview",
  "Lägg Till": "Add",
  "Redigera": "Edit",
  "Egenskaper & Specifikationer": "Properties & Specifications",
  "Engleska": "English",
  "Engelsk": "English",
  "Bilduppladdning": "Image upload",
  "Förfrågningar": "Inquiries",
  "Förfrågan": "Inquiry",
  "Bifogade bilder": "Attached images",
  "Svar": "Reply",
  "Statestik": "Statistics",
  "Statistik": "Statistics",
  "Exempel": "Example",
  "Försäljning": "Sales",
  "Såld": "Sold",
  "Användare & Behörigheter": "Users & Permissions",
  "Min profil": "My profile",
  "Min Profil": "My profile",
  "Notifikationer": "Notifications",
  "Mitten": "Middle",
  "Botten": "Bottom",
  "Detaljer": "Details",
  "Våra tjänster": "Our services",
  "Hantverk": "Craftsmanship",
  "Före & Efter": "Before & After",
  "Verkstaden": "The workshop",
  "Kontakt & Hitta hit": "Contact & Find us",
  "Auktoriserad": "Authorized",
  "Branchvana": "Industry experience",
  "Varför välja oss": "Why choose us",
  "Process": "Process",
  "Villka är vi": "Who are we",
  "Vad vi gör": "What we do",
  "Ring Försäljning": "Call Sales",
  "Bilder": "Images",
  "Bildgalleri": "Image Gallery",
  "Hittar Inte": "Cant Find",
  "Verkstad": "Workshop",
  "Specialtillverkning Transport": "Custom Manufacturing Transport",
  "Om Företaget": "About the Company",
  "Bildspel": "Slideshow",
  "Att anlita oss": "Hiring us",
  "Varfför välja MAC": "Why choose MAC",
  "Detaljerade tjänster": "Detailed services"
};

// Also replace in directory names if any? No, we will only replace the basename part.
const regex = /"projects\/([^"]+)"/g;

const matches = [...projectJs.matchAll(regex)];

matches.forEach(match => {
  const originalPath = match[1];
  let newPath = originalPath;
  
  const parts = originalPath.split('/');
  const filename = parts.pop();
  let newFilename = filename;
  
  for (const [sv, en] of Object.entries(dictionary)) {
    // Case sensitive replace
    newFilename = newFilename.split(sv).join(en);
  }
  
  parts.push(newFilename);
  newPath = parts.join('/');
  
  if (originalPath !== newPath) {
    // 1. Rename file
    const oldAbs = path.join('public', 'projects', originalPath);
    const newAbs = path.join('public', 'projects', newPath);
    
    if (fs.existsSync(oldAbs)) {
      // Ensure directory exists
      fs.mkdirSync(path.dirname(newAbs), { recursive: true });
      fs.renameSync(oldAbs, newAbs);
      console.log(`Renamed: ${originalPath} -> ${newPath}`);
    } else {
      console.log(`File not found: ${oldAbs}`);
    }
    
    // 2. Update code
    projectJs = projectJs.replace(new RegExp(`"projects/${originalPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'), `"projects/${newPath}"`);
    projectJs = projectJs.replace(new RegExp(`\`\\$\\{import.meta.env.BASE_URL\\}projects/${originalPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\``, 'g'), `\`\${import.meta.env.BASE_URL}projects/${newPath}\``);
  }
});

fs.writeFileSync(projectJsPath, projectJs, 'utf8');
console.log('Finished renaming files and updating projects.js');
