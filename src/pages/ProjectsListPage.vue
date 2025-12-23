<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 text-primary text-center q-mb-xl">Tous mes Projets</h1>

        <div class="row q-col-gutter-md">
          <!-- Projet 1 : Mutuacy -->
          <div class="col-12 col-md-4">
            <q-card
              class="bg-white my-card cursor-pointer"
              @click="$router.push('/project/mutuacy')"
            >
              <q-img src="images/mutuacy-main.jpg" :ratio="16 / 9">
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-grey-3 text-grey-8">
                    Image manquante
                  </div>
                </template>
                <div class="absolute-bottom text-h6 text-white bg-primary-transparent">Mutuacy</div>
              </q-img>
              <q-card-section>
                Plateforme de mutualisation et d'échange. Un projet complet réalisé avec Vue.js.
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Voir plus" to="/project/mutuacy" />
                <q-btn
                  flat
                  color="secondary"
                  label="GitHub"
                  type="a"
                  href="https://github.com/votre-pseudo/mutuacy"
                  target="_blank"
                  @click.stop
                />
              </q-card-actions>
            </q-card>
          </div>

          <!-- Projet 2 : Inscription ESIEA -->
          <div class="col-12 col-md-4">
            <q-card
              class="bg-white my-card cursor-pointer"
              @click="$router.push('/project/inscription-esiea')"
            >
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
                <q-btn
                  flat
                  color="secondary"
                  label="GitHub"
                  type="a"
                  href="https://github.com/votre-pseudo/inscription-esiea"
                  target="_blank"
                  @click.stop
                />
              </q-card-actions>
            </q-card>
          </div>

          <!-- Projet 3 : NASA Python -->
          <div class="col-12 col-md-4">
            <q-card
              class="bg-white my-card cursor-pointer"
              @click="$router.push('/project/nasa-python')"
            >
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
              <q-card-section> Exploration de données spatiales avec Python. </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Voir plus" to="/project/nasa-python" />
                <q-btn
                  flat
                  color="secondary"
                  label="GitHub"
                  type="a"
                  href="https://github.com/votre-pseudo/nasa-python"
                  target="_blank"
                  @click.stop
                />
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
  name: 'ProjectsListPage',
})
</script>

<style scoped>
.my-card {
  transition: transform 0.3s;
  border-radius: 8px;
}
.my-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(78, 52, 46, 0.2);
}

.bg-primary-transparent {
  background-color: rgba(78, 52, 46, 0.7);
}
</style>
