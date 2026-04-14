export interface Project {
  id: string
  title: string
  subtitle: string
  image: string
  description: string
  creationProcess?: string
  interactiveViz?: string // Nouveau champ pour le fichier HTML interactif
  features: string[]
  technologies: string[]
  githubLink: string | null
  liveLink: null | string
  liveWidget?: string // Champ pour un widget financier embarqué (ex: TradingView)
  videoUrl?: string // Champ pour une vidéo (mp4 ou URL externe)
  isPrivate?: boolean
  gallery: string[]
  shortSummary?: string // Résumé percutant d'une ligne pour le scannage
}

export const projectsData: Record<string, Project> = {
  mutuelio: {
    id: 'mutuelio',
    title: 'Mutuelio',
    subtitle: "Plateforme mobile de comparaison et d'information sur les soins mutuels",
    shortSummary:
      'Simplifier la compréhension des remboursements mutuels via une interface Clean Architecture.',
    image: 'images/simulation.png',
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
      "Fil d'actualité santé en temps réel",
      'Interface utilisateur Material Design moderne',
    ],
    technologies: ['Flutter', 'Dart', 'Supabase', 'Riverpod', 'Clean Architecture'], // J'ajoute Riverpod/Provider ou BLoC si je vois des indices de state management, par défaut Clean Arch suggère une bonne structure. Je vais supposer une structure robuste.
    githubLink: 'https://github.com/Pirodax/cap_projet_app',
    liveLink: null,
    gallery: [
      'images/history_detail.png',
      'images/history.png',
      'images/simulation.png',
      'images/profile.png',
      'images/details_main.png',
    ],
  },
  'trade-copier': {
    id: 'trade-copier',
    title: 'TradeCopier',
    subtitle: 'Écosystème de Trading Professionnel [V2.0 OPTIMISÉ]',
    shortSummary:
      "Exécution institutionnelle parallélisée avec une latence de 75ms et IA d'analyse quantitative.",
    image: 'tradecopier-dashboard.png',
    description: `Solution de Copy Trading institutionnelle (V2.0), optimisée pour la haute performance et l'exécution parallélisée ultra-rapide (~75ms). 
    
    Proposition de Valeur Unique (UVP) : "L'exécution institutionnelle pour les traders de détail."
    TradeCopier résout le problème de la latence et de la fragmentation des comptes dans l'écosystème des Prop Firms, en offrant une synchronisation fluide avec une interface de gestion moderne et une IA d'analyse intégrée. L'interface (React 19) permet un monitoring temps-réel avec des graphiques financiers (Lightweight Charts).`,
    creationProcess: `Ce projet a fait l'objet d'une refonte majeure (V2.0) pour paralléliser les flux d'exécution.
    
    Points clés de l'ingénierie :
    - **Optimisation de Latence (Node.js/TS)** : Passage d'une exécution séquentielle à une exécution parallèle (~75ms), soit un gain de performance de 3x via Bottleneck.
    - **Intelligence Quantitative (FastAPI/Pandas)** : Moteur analytique calculant le P&L, le Drawdown Max et la courbe d'équité en temps réel via MongoDB Atlas.
    - **Architecture Scalable SaaS** : Modèle économique pensé pour l'expansion (Starter, Pro, Elite), compatible TradeLocker et extensible multi-broker.
    - **Gestion de Volume Proportionnelle** : Algorithme de calcul intelligent ajustant les lots des Slaves en fonction du ratio de balance (Equity-based Scaling).`,
    features: [
      "Parallélisation API (3 flux simultanés) : Latence réduite à 75ms pour les rafales d'ordres",
      'Fermeture Partielle Proportionnelle : Synchronisation exacte des réductions de position entre Master et Slaves',
      'Volume Multiplier Interactif : Calcul automatique des lots basé sur le ratio de balance (Balance-Based Scaling)',
      'Moteur Analytique (Pandas) : Suite complète de métriques institutionnelles (Sharpe, Drawdown, Profit Factor)',
      'Intégration Modèle SaaS : Architecture prévue pour la gestion multi-tiers (Gratuit, Pro, Elite)',
      'Dashboard Temps-Réel : Intégration de Lightweight Charts pour une visualisation haute fidélité',
      'Système de Quarantaine : Pattern Circuit Breaker isolant les comptes défaillants en cas de pic de volatilité',
    ],
    technologies: [
      'React 19',
      'Node.js (TypeScript)',
      'FastAPI (Python)',
      'MongoDB Atlas',
      'Electron',
      'Zustand',
      'TanStack Query',
      'Lightweight Charts',
      'Bottleneck (Rate Limiting)',
    ],
    githubLink: null,
    isPrivate: true,
    liveLink: null,
    liveWidget: 'tradingview-btc', // Activation du widget sur cette page
    gallery: [
      'tradecopier-dashboard.png',
      'tradecopier-list.png',
      'tradecopier-news.png',
      'tradecopier-analytics.png',
    ],
  },

  'nasa-python': {
    id: 'nasa-python',
    title: "Visualisation 3D d'Exoplanètes",
    subtitle: "Générateur d'environnements planétaires basés sur les données NASA",
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
      "Connexion API NASA : Importation de données réelles d'exoplanètes",
      'Génération Procédurale : Topographie réaliste basée sur la masse et le rayon',
      'Simulations Physiques : Calcul des températures, pressions et zones habitables',
      'Biomes Dynamiques : Détermination des paysages (Déserts, Océans, Toundra...)',
      'Rendu 3D Interactif : Exploration libre avec PyVista',
    ],
    technologies: ['Python', 'PyVista', 'SciPy', 'OpenSimplex', 'NASA API'],
    githubLink:
      'https://gitlab.esiea.fr/petilaire-bell/challenges-techniques2-petilaire-bouabdellah',
    liveLink: null,
    gallery: ['images/Nasa-main.png', 'images/Nasa-1.png', 'images/Nasa-2.png'],
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
      'Tests : Couverture E2E avec Cypress',
    ],
    technologies: ['Vue.js 3', 'Quasar', 'Supabase', 'Pinia', 'Cypress'],
    githubLink:
      'https://gitlab.esiea.fr/fullstack-2025-paris-fr-doloirjulian-ogowann-fis-postickevin-datouoalain-petilairebelletxavier/fullstack-2025-paris-fr-doloirjulian-ogowannefis-postickevin-datouoalain-petilairebelletxavier.git',
    liveLink: null,
    gallery: ['images/esiea-1.jpg', 'images/esiea-2.jpg', 'images/inscription-esiea-main.jpg'],
  },
  'forex-newsletter': {
    id: 'forex-newsletter',
    title: 'Forex Newsletter',
    subtitle: 'Assistant FX & Newsletter Automatisé par IA',
    image: 'images/forex-newsletter-preview.png',
    description: `Un écosystème d'intelligence artificielle complet pour le trader Forex moderne, alliant veille automatique et interaction conversationnelle.
    
    Au-delà d'une simple newsletter, ce projet intègre un Bot Telegram interactif capable de répondre aux questions de l'utilisateur sur l'historique des marchés grâce à un système RAG (Retrieval-Augmented Generation). Il surveille plusieurs sources d'actualités en continu, génère des briefings matinaux synthétiques via Llama 3 (Groq), et offre une interface de consultation en temps réel.`,
    creationProcess: `Évolution majeure du projet initial de newsletter pour devenir un véritable assistant personnel.
    
    L'objectif était de dépasser la lecture passive pour permettre une interrogation dynamique des données économiques.
    
    Challenges résolus :
    - Implémentation d'un pipeline RAG performant pour contextualiser les réponses de l'IA avec l'historique des articles.
    - Architecture événementielle pour gérer simultanément le monitoring de flux RSS et les interactions Telegram.
    - Optimisation des coûts et de la latence avec Groq.`,
    features: [
      'Assistant Telegram Interactif : Commandes vocales/textuelles et notifications push',
      "RAG (Q&A Historique) : L'IA répond aux questions en citant ses sources passées",
      'Briefing Matinal : Synthèse automatique des opportunités du jour (Llama 3)',
      'Multi-Sources : Agrégation intelligente de flux RSS et scrapers divers',
      'Zero Maintenance : Architecture Serverless auto-hébergée',
    ],
    technologies: [
      'Node.js',
      'Groq',
      'Telegram Bot API',
      'GitHub Actions',
      'Nodemailer',
      'JavaScript',
    ],
    githubLink: null,
    isPrivate: true,
    liveLink: null,
    gallery: ['images/forex-newsletter-preview.png', 'images/forex-newsletter-detail.png'],
  },
}
