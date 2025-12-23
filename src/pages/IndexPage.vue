<template>
  <q-page class="q-pa-md">
    <!-- Section Introduction -->
    <div class="row justify-center q-my-xl">
      <div class="col-12 col-md-8 text-center">
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
          <!-- Exemple de projet 1 -->
          <div class="col-12 col-md-4">
            <q-card class="bg-white my-card cursor-pointer" @click="$router.push('/project/projet-alpha')">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" :ratio="16 / 9">
                <div class="absolute-bottom text-h6 text-white bg-primary-transparent">
                  Projet Alpha
                </div>
              </q-img>
              <q-card-section>
                Une brève description de ce projet incroyable réalisé avec Vue.js.
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Voir plus" to="/project/projet-alpha" />
                <q-btn flat color="secondary" label="GitHub" type="a" href="https://github.com" target="_blank" @click.stop />
              </q-card-actions>
            </q-card>
          </div>

          <!-- Exemple de projet 2 -->
          <div class="col-12 col-md-4">
            <q-card class="bg-white my-card cursor-pointer" @click="$router.push('/project/projet-beta')">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" :ratio="16 / 9">
                <div class="absolute-bottom text-h6 text-white bg-primary-transparent">
                  Projet Beta
                </div>
              </q-img>
              <q-card-section>
                Application mobile développée avec Quasar Framework pour Android et iOS.
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Voir plus" to="/project/projet-beta" />
                <q-btn flat color="secondary" label="GitHub" type="a" href="https://github.com" target="_blank" @click.stop />
              </q-card-actions>
            </q-card>
          </div>

          <!-- Exemple de projet 3 -->
          <div class="col-12 col-md-4">
            <q-card class="bg-white my-card cursor-pointer" @click="$router.push('/project/projet-gamma')">
              <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="16 / 9">
                <div class="absolute-bottom text-h6 text-white bg-primary-transparent">
                  Projet Gamma
                </div>
              </q-img>
              <q-card-section>
                Site vitrine responsive et performant.
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Voir plus" to="/project/projet-gamma" />
                <q-btn flat color="secondary" label="GitHub" type="a" href="https://github.com" target="_blank" @click.stop />
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
