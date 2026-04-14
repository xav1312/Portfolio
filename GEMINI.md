# 🌐 Portfolio - Xavier Petilaire-Bellet
#project/active #frontend #react #portfolio

## 🎯 Objectif du Projet
Vitrine professionnelle interactive et performante présentant les projets, les compétences et le parcours de Xavier. Conçu avec une esthétique "Editorial Fintech Brutalist" et des animations fluides.

---

## 🏗️ Architecture & Tech Stack

### Cœur du Système
- **Framework** : [[React]] 19
- **Langage** : [[TypeScript]] (Strict mode)
- **Build Tool** : [[Vite]]
- **Routage** : `react-router-dom` (HashRouter pour GitHub Pages)

### UI & Styling
- **Composants** : [[Material UI]] (MUI v5)
- **Animations** : `framer-motion` (Micro-interactions, Page transitions)
- **Thème** : Dark/Light mode personnalisé via `ColorModeContext.tsx`
- **Design System** : Éléments customisés (RetroGrid, BorderBeam, TextScramble, AnimatedCounter)

### Données & Structure
- `/src/data/projects.ts` : Base de données des projets (TradeCopier, Mutuelio, etc.)
- `/src/data/skills.ts` : Matrice des compétences classées par domaine
- `/src/utils/techLogos.ts` : Résolution dynamique des logos des technologies (Devicon CDN)

---

## 📏 Règles & Conventions du Projet
1. **Composants Fonctionnels** : Utilisation exclusive des Hooks React (`useState`, `useEffect`, `useMemo`).
2. **Typage Strict** : Pas de `any`. Interfaces définies pour chaque structure de données (ex: `Project`, `Skill`).
3. **Accessibilité** : Utilisation des rôles sémantiques (ARIA) et support du clavier.
4. **Performance** : Lazy loading des routes (`Suspense`) et optimisation des images (`ProjectGallery`).
5. **Déploiement** : Hébergement statique via GitHub Pages (Action `npm run deploy`).

---

## 🔄 Changements Récents
- `2026-04-13` — **Optimisation Design (Audit #1)** : Augmentation du contraste du `background.paper` en mode sombre, réactivation des Key Metrics institutionnelles sur la Home, et ajout du `shortSummary` aux projets pour une meilleure scannabilité UX. #design #audit #UX
- `2026-04-13` — **Mise à jour Contenu (TradeCopier)** : Intégration de l'UVP ("L'exécution institutionnelle...") et du modèle SaaS dans la description du projet. Suppression des références obsolètes à l'audit OWASP. #content #update
