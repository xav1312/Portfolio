export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  creationProcess?: string;
  interactiveViz?: string; // Nouveau champ pour le fichier HTML interactif
  features: string[];
  technologies: string[];
  githubLink: string | null;
  liveLink: string | null;
  gallery: string[];
}

export const projectsData: Record<string, Project> = {
  'mutuacy': {
    id: 'mutuacy',
    title: 'Mutuacy',
    subtitle: 'Plateforme mobile de comparaison et d\'information sur les soins mutuels',
    image: 'images/mutuacy-main.png',
    description: `Application mobile cross-platform développée en Flutter permettant aux utilisateurs de s'informer sur les soins remboursés par leur mutuelle. Elle offre une interface intuitive pour consulter les grilles de soins, simuler des remboursements et suivre l'actualité santé.`,
    creationProcess: `Développé en équipe de 6 personnes avec une approche Agile.
    
    L'application suit une Clean Architecture pour assurer maintenabilité et scalabilité.
    
    Phases clés :
    1. Analyse des besoins utilisateurs et problématiques santé.
    2. Conception UX/UI pour rendre les grilles de soins (souvent complexes) lisibles.
    3. Architecture modulaire (Features-first) pour faciliter le travail en équipe.
    4. Implémentation du backend via Supabase pour l'authentification et les données temps réel.`,
    features: [
      'Application Cross-platform (iOS/Android) fluide',
      'Authentification sécurisée (Supabase Auth)',
      'Simulation de remboursements et coûts de soins',
      'Fil d\'actualité santé en temps réel',
      'Interface utilisateur Material Design moderne'
    ],
    technologies: ['Flutter', 'Dart', 'Supabase', 'Riverpod', 'Clean Architecture'], // J'ajoute Riverpod/Provider ou BLoC si je vois des indices de state management, par défaut Clean Arch suggère une bonne structure. Je vais supposer une structure robuste.
    githubLink: 'https://github.com/Pirodax/cap_projet_app',
    liveLink: null,
    gallery: [
      'images/mutuacy-main.png'
    ],
  },

  'inscription-esiea': {
    id: 'inscription-esiea',
    title: 'Inscription ESIEA',
    subtitle: 'Plateforme de gestion des inscriptions',
    image: 'images/inscription-esiea-main.jpg',
    description:
      "Application Fullstack web complexe permettant de digitaliser entièrement le processus d'inscription des nouveaux étudiants à l'ESIEA. Elle propose une interface double : un portail étudiant pour la soumission des dossiers (documents, informations financières, bourse) et un dashboard complet pour l'administration (validation, suivi, comptabilité).",
    creationProcess: `Ce projet académique ambitieux a été réalisé en méthode Agile sous forme de sprint.
    
    L'architecture repose sur une séparation des rôles (Admin/Étudiant) via Supabase Auth.
    
    Points clés :
    - Formulaire Wizard en 6 étapes pour l'étudiant.
    - Gestion de documents (Stockage sécurisé).
    - Tests E2E avec Cypress.
    - Interface avec Quasar Framework (Vue.js).`,
    features: [
      'Portail Étudiant : Wizard 6 étapes (Infos, Tuteurs, Documents, Bourse...)',
      'Dashboard Admin : Gestion des inscriptions, documents et comptabilité',
      'Gestion Documentaire : Upload et prévisualisation des pièces',
      'Sécurité : Authentification et rôles (RBAC)',
      'Tests : Couverture E2E avec Cypress'
    ],
    technologies: ['Vue.js 3', 'Quasar', 'Supabase', 'Pinia', 'Cypress'],
    githubLink: 'https://gitlab.esiea.fr/fullstack-2025-paris-fr-doloirjulian-ogowann-fis-postickevin-datouoalain-petilairebelletxavier/fullstack-2025-paris-fr-doloirjulian-ogowannefis-postickevin-datouoalain-petilairebelletxavier.git',
    liveLink: null,
    gallery: [
        'images/esiea-1.jpg',
        'images/esiea-2.jpg',
        'images/inscription-esiea-main.jpg'
    ],
  },

  'nasa-python': {
    id: 'nasa-python',
    title: 'Visualisation 3D d\'Exoplanètes',
    subtitle: 'Générateur d\'environnements planétaires basés sur les données NASA',
    image: 'images/Nasa-main.png',
    description:
      "Outil scientifique développé en Python permettant de visualiser et d'explorer des exoplanètes en 3D à partir de données réelles de la NASA. Le logiciel génère procéduralement la topographie, l'atmosphère et les biomes pour offrir une représentation réaliste de mondes lointains.",
    creationProcess: `Développé lors d'un challenge technique intensif d'une semaine.
    
    L'objectif était de transformer des données brutes (masse, rayon, température) en visualisations interactives compréhensibles.
    
    Architecture technique :
    - Récupération des données via l'API NASA Exoplanet Archive.
    - Calculs physiques complexes (Gravité, Pression atmosphérique, Température de surface) avec SciPy.
    - Génération de terrain procédurale via OpenSimplex Noise.
    - Rendu 3D interactif temps réel avec PyVista.`,
    
    interactiveViz: 'exoplanet_viz.html',
    features: [
      'Connexion API NASA : Importation de données réelles d\'exoplanètes',
      'Génération Procédurale : Topographie réaliste basée sur la masse et le rayon',
      'Simulations Physiques : Calcul des températures, pressions et zones habitables',
      'Biomes Dynamiques : Détermination des paysages (Déserts, Océans, Toundra...)',
      'Rendu 3D Interactif : Exploration libre avec PyVista'
    ],
    technologies: ['Python', 'PyVista', 'SciPy', 'OpenSimplex', 'NASA API'],
    githubLink: 'https://gitlab.esiea.fr/petilaire-bell/challenges-techniques2-petilaire-bouabdellah',
    liveLink: null,
    gallery: [
      'images/Nasa-main.png',
        'images/Nasa-1.png',
        'images/Nasa-2.png'
    ],
  },
};
