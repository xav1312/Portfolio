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
    creationProcess: `Nous étions un groupe de 6 pour ce projet avec comme phase amenant la v1.
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
      "Application web permettant de gérer le processus d'inscription des nouveaux étudiants à l'ESIEA. Elle simplifie la collecte des documents et le suivi des dossiers administratifs. Elle permet aux administrateurs de gérer les inscriptions des étudiants ainsi que la création des comptes sur la plateforme",
    creationProcess: `Ce projet a été réalisé dans le cadre d'un stage/projet académique.

    Le défi principal était de gérer de manière sécurisée un grand nombre de documents administratifs. J'ai opté pour Supabase pour le stockage et l'authentification afin de garantir la sécurité des données.`,
    features: [
      'Dashboard admin',
      'Upload de documents sur une Base de données',
      'Processus d\'inscription',
      'Renseignement de coordonnées',
      'Message de validation d\'enregistrement des infos',
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
    title: 'Visualisation d\'exoplanètes par Python',
    subtitle: 'Application Desktop de gestion scolaire',
    image: 'images/Nasa-main.png',
    description:
      "Logiciel développé en Python pour permettre à l'utilisateur de visualiser en 3D des exoplanètes ayant été observées par la NASA",
    creationProcess: `Ce projet a été réalisé dans le cadre d'un challenge technique. Durant toute une semaine mon binôme s'est attelé à concevoir des calculs de conversion entre plusieurs unités et plusieurs valeurs afin de visualiser ces exoplanètes
    Nous avons  utilisé l'API de la NASA pour récupérer des données réelles sur les exoplanètes, puis nous nous sommes servis de PyVista pour créer des visualisations 3D interactives.Comme vous pouvez le voir ci-dessus`,
    // Ajoutez ici le nom de votre fichier HTML (sans public/)
    interactiveViz: 'exoplanet_viz.html',
    features: ['Calcul automatique des moyennes', 'Gestion des coefficients', 'Export PDF des bulletins', 'Interface graphique Swing/JavaFX'],
    technologies: ['Python','API Requests', 'PyVista','SciPy', 'OpenSimpex'],
    githubLink: 'https://gitlab.esiea.fr/petilaire-bell/challenges-techniques2-petilaire-bouabdellah',
    liveLink: null,
    gallery: [
        'images/Nasa-1.png',
        'images/Nasa-2.png'
    ],
  },
};
