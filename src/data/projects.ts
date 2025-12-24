export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  creationProcess?: string;
  interactiveViz?: string;
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
    subtitle: 'Plateforme d\'informations sur les mutuelles et les soins qu\'elles proposent.',
    image: 'images/mutuacy-main.jpg',
    description: `Mutuacy est une application conçue pour simplifier l'accès aux informations sur les mutuelles de santé. Elle permet aux utilisateurs de comparer les offres et de comprendre les détails des remboursements.`,
    creationProcess: `Pour ce projet, j'ai adopté une approche centrée sur l'utilisateur :

    - Analyse : Étude comparative des solutions existantes et identification des points de friction.
    - Conception : Création de wireframes et maquettes haute fidélité pour assurer une navigation fluide.
    - Développement : Choix de Flutter pour garantir une expérience native sur iOS et Android avec une base de code unique.
    - Backend : Utilisation de Supabase pour une gestion performante des données en temps réel.`,
    features: [
      'Comparateur d\'offres',
      'Détails des remboursements',
      'Recherche filtrée',
      'Interface utilisateur intuitive',
    ],
    technologies: ['Flutter', 'Dart', 'Supabase'],
    githubLink: 'https://github.com/votre-pseudo/mutuacy',
    liveLink: 'https://mutuacy.com',
    gallery: [
      'images/mutuacy-1.jpg',
      'images/mutuacy-2.jpg',
    ],
  },

  'inscription-esiea': {
    id: 'inscription-esiea',
    title: 'Inscription ESIEA',
    subtitle: 'Plateforme de gestion des inscriptions étudiantes',
    image: 'images/inscription-esiea-main.jpg',
    description:
      "Cette application web optimise le processus d'inscription des nouveaux étudiants à l'ESIEA. Elle digitalise la collecte des documents administratifs et facilite le suivi des dossiers par l'administration. Elle offre également aux administrateurs des outils pour gérer les comptes étudiants et valider les inscriptions.",
    creationProcess: `Ce projet a été réalisé dans un contexte académique pour répondre à un besoin réel de digitalisation.

    Le défi technique principal résidait dans la gestion sécurisée des documents personnels (RGPD). J'ai structuré l'architecture autour de Supabase pour bénéficier de ses règles de sécurité robustes (RLS) et de son stockage fiable. L'interface a été pensée pour guider l'étudiant étape par étape afin de réduire les erreurs de saisie.`,
    features: [
      'Tableau de bord administrateur',
      'Téléversement sécurisé de documents',
      'Suivi du processus d\'inscription',
      'Confirmation automatique par email',
    ],
    technologies: ['Vue.js', 'Supabase', 'Quasar', 'Cypress'],
    githubLink: 'https://github.com/votre-pseudo/inscription-esiea',
    liveLink: null,
    gallery: [
        'images/esiea-1.jpg',
        'images/esiea-2.jpg',
        'images/inscription-esiea-main.jpg'
    ],
  },

  'nasa-python': {
    id: 'nasa-python',
    title: 'Visualisation d\'Exoplanètes',
    subtitle: 'Exploration de données spatiales en 3D avec Python',
    image: 'images/Nasa-main.png',
    description:
      "Ce projet est une application de visualisation scientifique permettant d'explorer les données de la NASA sur les exoplanètes. Elle génère des rendus 3D interactifs pour mieux comprendre la répartition et les caractéristiques des planètes découvertes hors de notre système solaire.",
    creationProcess: `Passionné par l'astronomie et la data science, j'ai voulu combiner les deux.

    J'ai commencé par extraire et nettoyer les données brutes via l'API de la NASA (Exoplanet Archive). Ensuite, j'ai utilisé la bibliothèque PyVista pour transformer ces données tabulaires en une scène 3D immersive. L'objectif était de rendre ces données abstraites visuellement compréhensibles et manipulables.`,
    interactiveViz: 'exoplanet_viz.html',
    features: ['Récupération de données via API', 'Nettoyage et traitement de données (Pandas)', 'Visualisation 3D interactive', 'Génération de rapports HTML'],
    technologies: ['Python','API Requests', 'PyVista','SciPy', 'Pandas'],
    githubLink: 'https://github.com/votre-pseudo/nasa-python',
    liveLink: null,
    gallery: [
        'images/Nasa-1.png',
        'images/Nasa-2.png'
    ],
  },
};
