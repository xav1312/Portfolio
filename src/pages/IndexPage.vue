<template>
  <q-page class="q-pa-md">
    <!-- Section Introduction -->
    <div class="row justify-center q-my-xl">
      <div class="col-12 col-md-8 text-center">
        <!-- Nom Prénom -->
        <div class="text-h4 text-primary q-mb-sm text-weight-bold">Xavier Petilaire-Bellet</div>

        <h1 class="text-h3 text-primary q-mb-md" style="font-weight: 300">
          Bienvenue sur mon Portfolio
        </h1>
        <p class="text-h5 text-secondary">
          Raconter mon histoire professionnelle et mettre en avant mes réalisations.
        </p>
      </div>
    </div>

    <!-- Section Projets (Aperçu) -->
    <div class="row justify-center q-my-xl">
      <div class="col-12 col-md-10">
        <h2 class="text-h4 q-mb-lg text-center text-primary">Mes Projets Récents</h2>
        <div class="row q-col-gutter-md">
          <!-- Projet 1 : Mutuacy -->
          <div class="col-12 col-md-4">
            <q-card class="bg-white my-card cursor-pointer" @click="$router.push('/project/mutuacy')">
              <q-img src="images/mutuacy-main.jpg" :ratio="16 / 9">
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-grey-3 text-grey-8">
                    Image manquante
                  </div>
                </template>
                <div class="absolute-bottom text-h6 text-white bg-primary-transparent">
                  Mutuacy
                </div>
              </q-img>
              <q-card-section>
                Plateforme de mutualisation et d'échange. Un projet complet réalisé avec Vue.js.
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Voir plus" to="/project/mutuacy" />
                <!-- Lien GitHub Spécifique -->
                <q-btn flat color="secondary" label="GitHub" type="a" href="https://github.com/votre-pseudo/mutuacy" target="_blank" @click.stop />
              </q-card-actions>
            </q-card>
          </div>

          <!-- Projet 2 : Inscription ESIEA -->
          <div class="col-12 col-md-4">
            <q-card class="bg-white my-card cursor-pointer" @click="$router.push('/project/inscription-esiea')">
              <q-img src="images/inscription-esiea-main.jpg" :ratio="16 / 9">
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-grey-3 text-grey-8">
                    Image manquante
                  </div>
                </template>
                <div class="absolute-bottom text-h6 text-white bg-primary-transparent">
                  Inscription ESIEA
                </div>
              </q-img>
              <q-card-section>
                Plateforme de gestion des inscriptions étudiantes.
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Voir plus" to="/project/inscription-esiea" />
                <!-- Lien GitHub Spécifique -->
                <q-btn flat color="secondary" label="GitHub" type="a" href="https://github.com/votre-pseudo/inscription-esiea" target="_blank" @click.stop />
              </q-card-actions>
            </q-card>
          </div>

          <!-- Projet 3 : NASA Python -->
          <div class="col-12 col-md-4">
            <q-card class="bg-white my-card cursor-pointer" @click="$router.push('/project/nasa-python')">
              <q-img src="images/nasa-python-main.jpg" :ratio="16 / 9">
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-grey-3 text-grey-8">
                    Image manquante
                  </div>
                </template>
                <div class="absolute-bottom text-h6 text-white bg-primary-transparent">
                  NASA Python
                </div>
              </q-img>
              <q-card-section>
                Exploration de données spatiales avec Python.
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Voir plus" to="/project/nasa-python" />
                <!-- Lien GitHub Spécifique -->
                <q-btn flat color="secondary" label="GitHub" type="a" href="https://github.com/votre-pseudo/nasa-python" target="_blank" @click.stop />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>

<style scoped>
.my-card {
  transition: transform 0.3s;
  border-radius: 8px; /* Coins légèrement arrondis pour la douceur */
}
.my-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(78, 52, 46, 0.2); /* Ombre marron légère */
}

/* Fond semi-transparent marron pour les titres sur images */
.bg-primary-transparent {
  background-color: rgba(78, 52, 46, 0.7);
}
</style>
