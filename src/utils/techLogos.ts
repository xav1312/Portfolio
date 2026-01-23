// Mapping des technologies vers leurs logos (URLs CDN Devicon)
export const techLogos: Record<string, string> = {
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', // Supabase n'est pas toujours dans devicon, on verra. Sinon icône générique.
  'Quasar': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-original.svg', // Vérifier si existe, sinon Vue
  'Cypress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'Pinia': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Pinia.png', // Logo officiel (non présent sur toutes les versions de devicon)
  'Axios': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg',
  // Variations pour correspondre aux données
  'Vue.js 3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Quasar Framework': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-original.svg',
  'Supabase (Auth & DB)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'PyVista': 'https://raw.githubusercontent.com/pyvista/pyvista/main/doc/_static/pyvista_logo_sm.png',
  'SciPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit/scikit-original.svg', // Logo SciPy souvent associé à Scikit ou générique Python scientifique
  'OpenSimplex': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', // Fallback Python
  'NASA API': 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
  'Clean Architecture': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', // Fallback Flutter
  'Riverpod': 'https://raw.githubusercontent.com/rrousselGit/riverpod/master/resources/icon.png',
};

// Fonction helper pour récupérer le logo (ou une icône par défaut si non trouvé)
export const getTechLogo = (techName: string): string | undefined => {
  // Recherche exacte
  if (techLogos[techName]) return techLogos[techName];

  // Recherche insensible à la casse ou partielle
  const key = Object.keys(techLogos).find(k => k.toLowerCase() === techName.toLowerCase());
  return key ? techLogos[key] : undefined;
};
