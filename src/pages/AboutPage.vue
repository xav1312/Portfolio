<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <h1 class="text-h3 text-primary text-center q-mb-xl">Mon Parcours</h1>

        <q-timeline color="secondary">
          <q-timeline-entry heading> Expériences Professionnelles </q-timeline-entry>

          <q-timeline-entry
            title="Développeur Full Stack (Stage)"
            subtitle="Entreprise XYZ, Paris"
            side="left"
            icon="work"
          >
            <div>
              Développement d'une application web de gestion interne. Utilisation de Vue.js et
              Node.js. Collaboration avec une équipe de 5 personnes en méthode Agile.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Projet Freelance"
            subtitle="Client ABC"
            side="right"
            icon="code"
          >
            <div>
              Création d'un site vitrine pour un artisan local. Design, intégration et mise en ligne.
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading> Formation </q-timeline-entry>

          <q-timeline-entry
            title="Master Ingénierie du Logiciel"
            subtitle="École Supérieure d'Informatique"
            side="left"
            icon="school"
            color="primary"
          >
            <div>
              Spécialisation en développement web et mobile. Projets de groupe et apprentissage des
              bonnes pratiques (Clean Code, TDD).
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Baccalauréat Scientifique"
            subtitle="Lycée Exemple"
            side="right"
            icon="school"
            color="primary"
          >
            <div>Option Mathématiques. Mention Bien.</div>
          </q-timeline-entry>
        </q-timeline>

        <!-- Section Compétences (Optionnel) -->
        <div class="q-mt-xl">
          <h2 class="text-h4 text-primary text-center q-mb-lg">Mes Compétences</h2>
          <div class="row justify-center q-gutter-md">
            <q-chip size="lg" icon="fab fa-js" color="secondary" text-color="white"
              >JavaScript</q-chip
            >
            <q-chip size="lg" icon="fab fa-vuejs" color="secondary" text-color="white"
              >Vue.js</q-chip
            >
            <q-chip size="lg" icon="fab fa-html5" color="secondary" text-color="white">HTML5</q-chip>
            <q-chip size="lg" icon="fab fa-css3" color="secondary" text-color="white">CSS3</q-chip>
            <q-chip size="lg" icon="storage" color="secondary" text-color="white">SQL</q-chip>
            <q-chip size="lg" icon="fab fa-git" color="secondary" text-color="white">Git</q-chip>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage',
})
</script>
