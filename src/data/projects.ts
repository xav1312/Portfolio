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
    subtitle: 'Plateforme d\'informations sur les mutuelles et les soins qu\'elles donnent.',
    image: 'images/mutuacy-main.png',
    description: `Applications qui renseigne sur les soins remboursées proposés par les mutuelles.`,
    creationProcess: `Nous étions un groupe de 6 pour ce projet avec comme phases amenant à la première version :
    1. Voir les problèmes qui peuvent êtres résolues dans le domaine de la santé.
    2. Voir de quel façon une personne peut accéder à la grille des soins proposés par sa mutuelle.
    3. Concevoir le design d'un affichage intuitif des soins pour le rendre compréhensible au plus grand nombre.
    4. Répartition des différentes pages entre les membres du groupe.
    5. Conception du code contenant les fonctionnaliés les plus importantes et basiques.
    6. Tests de ces fonctionnalités.`,
    features: [
      'Créer un compte et pouvoir se connecter',
      'Afficher la liste des soins et le remboursement proposé',
      'Simuler le coût d\'un soin',
      'Interface utilisateur intuitive',
      'Accéder à un fil d\'actualité sur les nouveaux soins remboursés',
    ],
    technologies: ['Flutter', 'Dart', 'Supabase'],
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
    title: 'Visualisation d\'exoplanètes par Python',
    subtitle: 'Génerateur de Visualisation 3D d\'exoplanètes',
    image: 'images/Nasa-main.png',
    description:
      "Logiciel développé en Python pour permettre à l'utilisateur de visualiser en 3D des exoplanètes ayant été observées par la NASA",
    creationProcess: `Ce projet a été réalisé dans le cadre d'un challenge technique. Durant toute une semaine mon binôme s'est attelé à concevoir des calculs de conversion entre plusieurs unités et plusieurs valeurs afin de visualiser ces exoplanètes
    Nous avons  utilisé l'API de la NASA pour récupérer des données réelles sur les exoplanètes, puis nous nous sommes servis de PyVista pour créer des visualisations 3D interactives.Comme vous pouvez le voir ci-dessus`,
    // Ajoutez ici le nom de votre fichier HTML (sans public/)
    interactiveViz: 'exoplanet_viz.html',
    features: ['Récuperer et lister les exoplanètes observées par la NASA', 'Génerer une carte d\'altitude', 'Calculer les différentes températures', 'Génerer l\'hydrosphère et l\'atmosphère','Déterminer les biomes', 'Génerer une visualisation 3D'],
    technologies: ['Python','API Requests', 'PyVista','SciPy', 'OpenSimpex'],
    githubLink: 'https://gitlab.esiea.fr/petilaire-bell/challenges-techniques2-petilaire-bouabdellah',
    liveLink: null,
    gallery: [
      'images/Nasa-main.png',
        'images/Nasa-1.png',
        'images/Nasa-2.png'
    ],
  },
};
