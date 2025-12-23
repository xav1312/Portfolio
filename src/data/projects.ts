export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
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
    image: 'images/mutuacy-main.jpg',
    description: `Décrivez ici le projet Mutuacy en détail.`,
    features: [
      'Fonctionnalité clé 1',
      'Fonctionnalité clé 2',
      'Fonctionnalité clé 3',
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
    subtitle: 'Plateforme de gestion des inscriptions',
    image: 'images/inscription-esiea-main.jpg',
    description:
      "Application web permettant de gérer le processus d'inscription des nouveaux étudiants à l'ESIEA. Elle simplifie la collecte des documents et le suivi des dossiers administratifs. Elle permet aux administrateurs de gérer les inscriptions des étudiants ainsi que la création des comptes sur la plateforme",
    features: [
      'Dashboard admin',
      'Upload de documents sur une Base de données',
      'Processus d\'inscription',
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
      "Logiciel développé en Java pour permettre aux enseignants de gérer les notes, les moyennes et les bulletins des élèves de manière efficace.Et de permettre aux étudiants de voir leur notes et leur bulletin",
    features: ['Calcul automatique des moyennes', 'Gestion des coefficients', 'Export PDF des bulletins', 'Interface graphique Swing/JavaFX'],
    technologies: ['Python','API Requests', 'PyVista','SciPy', 'OpenSimpex'],
    githubLink: 'https://github.com/votre-pseudo/nasa-python',
    liveLink: null,
    gallery: [
        'images/Nasa-1.png',
        'images/Nasa-2.png'
    ],
  },
};
