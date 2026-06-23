export const languageLogos = {
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  HTML:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  CSharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  Unity:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
};

export const getLanguageKey = (lang) => {
  if (lang === "C#") return "CSharp";
  if (lang === "C++") return "CPlusPlus";
  return lang;
};