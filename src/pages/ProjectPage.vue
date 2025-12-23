<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <!-- Bouton Retour -->
        <q-btn
          flat
          icon="arrow_back"
          label="Retour aux projets"
          color="primary"
          @click="$router.go(-1)"
          class="q-mb-md"
        />

        <!-- Titre du Projet -->
        <h1 class="text-h3 text-primary q-mt-none q-mb-sm">{{ project.title }}</h1>
        <div class="text-subtitle1 text-secondary q-mb-lg">{{ project.subtitle }}</div>

        <!-- Image Principale -->
        <q-img
          :src="project.image"
          class="rounded-borders shadow-3 q-mb-xl"
          style="max-height: 500px; object-fit: cover"
        >
          <div class="absolute-bottom text-subtitle2 text-center bg-primary-transparent">
            Aperçu du projet
          </div>
        </q-img>

        <div class="row q-col-gutter-xl">
          <!-- Colonne Description -->
          <div class="col-12 col-md-8">
            <h2 class="text-h5 text-primary q-mt-none">À propos du projet</h2>
            <p class="text-body1 text-dark" style="white-space: pre-line">
              {{ project.description }}
            </p>

            <h3 class="text-h6 text-primary q-mt-lg">Fonctionnalités clés</h3>
            <ul class="text-body1 text-dark">
              <li v-for="(feature, index) in project.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Colonne Infos & Technologies -->
          <div class="col-12 col-md-4">
            <q-card flat bordered class="bg-white">
              <q-card-section>
                <div class="text-h6 text-primary q-mb-md">Technologies</div>
                <div class="q-gutter-sm">
                  <q-chip
                    v-for="tech in project.technologies"
                    :key="tech"
                    color="secondary"
                    text-color="white"
                    icon="code"
                  >
                    {{ tech }}
                  </q-chip>
                </div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <div class="text-h6 text-primary q-mb-md">Liens</div>
                <div class="q-gutter-md">
                  <q-btn
                    v-if="project.githubLink"
                    outline
                    color="primary"
                    icon="code"
                    label="Voir le code"
                    type="a"
                    :href="project.githubLink"
                    target="_blank"
                    class="full-width"
                  />
                  <q-btn
                    v-if="project.liveLink"
                    unelevated
                    color="primary"
                    icon="launch"
                    label="Voir le site"
                    type="a"
                    :href="project.liveLink"
                    target="_blank"
                    class="full-width"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Galerie d'images supplémentaires (Optionnel) -->
        <div v-if="project.gallery && project.gallery.length > 0" class="q-mt-xl">
          <h2 class="text-h5 text-primary q-mb-md">Galerie</h2>
          <div class="row q-col-gutter-md">
            <div
              v-for="(img, index) in project.gallery"
              :key="index"
              class="col-12 col-sm-6 col-md-4"
            >
              <q-img :src="img" :ratio="16 / 9" class="rounded-borders shadow-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

// Données simulées des projets (Idéalement, cela viendrait d'un fichier séparé ou d'une API)
const projectsData = {
  'projet-alpha': {
    title: 'Projet Alpha',
    subtitle: 'Une application web révolutionnaire',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    description: `Ceci est une description détaillée du Projet Alpha.

    Il a été conçu pour répondre à un besoin spécifique de gestion de tâches complexes. L'interface utilisateur a été pensée pour être intuitive tout en offrant des fonctionnalités avancées.

    J'ai travaillé sur ce projet en tant que développeur principal, en charge de l'architecture front-end et de l'intégration des API.`,
    features: [
      'Authentification sécurisée',
      'Tableau de bord en temps réel',
      'Exportation de données PDF/Excel',
      'Mode sombre automatique',
    ],
    technologies: ['Vue.js', 'Quasar', 'Firebase', 'Node.js'],
    githubLink: 'https://github.com',
    liveLink: 'https://google.com',
    gallery: [
      'https://cdn.quasar.dev/img/parallax1.jpg',
      'https://cdn.quasar.dev/img/mountains.jpg',
    ],
  },
  'projet-beta': {
    title: 'Projet Beta',
    subtitle: 'Application mobile cross-platform',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    description:
      "Le Projet Beta est une application mobile permettant aux utilisateurs de suivre leur activité physique. Elle utilise les capteurs du téléphone pour compter les pas et calculer les calories brûlées.",
    features: [
      'Géolocalisation GPS',
      'Graphiques interactifs',
      'Notifications push',
      'Partage sur les réseaux sociaux',
    ],
    technologies: ['Cordova', 'Vue.js', 'Chart.js'],
    githubLink: 'https://github.com',
    liveLink: null,
    gallery: [],
  },
  'projet-gamma': {
    title: 'Projet Gamma',
    subtitle: 'Site vitrine corporate',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
    description:
      "Refonte complète du site web d'une entreprise locale pour améliorer sa visibilité en ligne et son référencement naturel (SEO).",
    features: ['Design Responsive', 'Optimisation SEO', 'Formulaire de contact dynamique', 'Blog intégré'],
    technologies: ['HTML5', 'Sass', 'JavaScript', 'WordPress'],
    githubLink: null,
    liveLink: 'https://google.com',
    gallery: ['https://cdn.quasar.dev/img/parallax2.jpg'],
  },
}

export default defineComponent({
  name: 'ProjectPage',
  setup() {
    const route = useRoute()
    // Récupère l'ID du projet depuis l'URL (ex: /project/projet-alpha -> id = projet-alpha)
    const projectId = route.params.id

    // Trouve les données du projet correspondant
    const project = computed(() => {
      return (
        projectsData[projectId] || {
          title: 'Projet introuvable',
          description: "Ce projet n'existe pas ou a été supprimé.",
          technologies: [],
          features: [],
        }
      )
    })

    return {
      project,
    }
  },
})
</script>

<style scoped>
.bg-primary-transparent {
  background-color: rgba(78, 52, 46, 0.7);
  padding: 8px;
}
.rounded-borders {
  border-radius: 12px;
}
</style>
