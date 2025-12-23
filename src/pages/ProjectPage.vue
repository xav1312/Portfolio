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
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-grey-3 text-grey-8">
              Image non trouvée. Placez vos images dans le dossier public/images/
            </div>
          </template>
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

        <!-- Utilisation du composant Galerie -->
        <ProjectGallery :images="project.gallery" />

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectGallery from 'components/ProjectGallery.vue'

// =========================================================================
// DONNÉES DES PROJETS
// =========================================================================
const projectsData = {
  'mutuacy': {
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
    technologies: ['Flutter', 'Dart', 'Dart', 'Supabase'],
    githubLink: 'https://github.com/votre-pseudo/mutuacy',
    liveLink: 'https://mutuacy.com',
    gallery: [
      'images/mutuacy-1.jpg',
      'images/mutuacy-2.jpg',
    ],
  },

  'inscription-esiea': {
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
    githubLink: 'https://github.com',
    liveLink: null,
    // J'ajoute des images ici pour que la galerie s'affiche
    gallery: [
        'images/esiea-1.jpg',
        'images/esiea-2.jpg',
        'images/inscription-esiea-main.jpg'
    ],
  },

  'nasa-python': {
    title: 'Visualisation d\'exoplanètes par Python',
    subtitle: 'Application Desktop de gestion scolaire',
    image: 'images/Nasa-main.png',
    description:
      "Logiciel Python qui récupère les données des exoplanètes observées par la NASA pour en concevoir une visualisation 3D",
    features: ['Récuperation de données par API', 'Récuperation des cartes de températures et d\'altitudes', 'Export PDF des bulletins', 'Récuperation des données atmosphériques et d\'hydrogènes', 'Conception des biomes et visualisation 3D'],
    technologies: ['Python','API Requests', 'PyVista','SciPy', 'OpenSimpex'],
    githubLink: 'https://gitlab.esiea.fr/petilaire-bell/challenges-techniques2-petilaire-bouabdellah.git',
    liveLink: null,
    gallery: [
        'images/Nasa-1.png',
        'images/Nasa-2.png',
        'images/Nasa-main.png'
    ],
  },
}

export default defineComponent({
  name: 'ProjectPage',
  components: {
    ProjectGallery
  },
  setup() {
    const route = useRoute()
    const projectId = route.params.id

    const project = computed(() => {
      return (
        projectsData[projectId] || {
          title: 'Projet introuvable',
          subtitle: '',
          description: "Ce projet n'existe pas ou a été supprimé.",
          image: '',
          technologies: [],
          features: [],
          gallery: []
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
