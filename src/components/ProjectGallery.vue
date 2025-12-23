<template>
  <div v-if="images && images.length > 0" class="q-mt-xl">
    <h2 class="text-h5 text-primary q-mb-md">Galerie</h2>
    <div class="row q-col-gutter-md">
      <div v-for="(img, index) in images" :key="index" class="col-12 col-sm-6 col-md-4">
        <!-- Conteneur de l'image avec gestion du survol -->
        <div class="gallery-item relative-position rounded-borders overflow-hidden shadow-1">
          <q-img :src="img" :ratio="16 / 9" class="full-width full-height">
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-grey-3 text-grey-8">
                Image introuvable
              </div>
            </template>
          </q-img>

          <!-- Overlay qui apparaît au survol -->
          <div class="absolute-full flex flex-center gallery-overlay cursor-pointer" @click="openImage(img)">
            <q-btn round color="white" text-color="primary" icon="visibility" size="lg" />
          </div>
        </div>
      </div>
    </div>

    <!-- Dialog pour afficher l'image en grand -->
    <q-dialog v-model="dialogOpen" maximized transition-show="slide-up" transition-hide="slide-down">
      <q-card class="bg-black text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Fermer</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="flex flex-center full-height" style="height: calc(100vh - 50px)">
          <q-img
            :src="selectedImage"
            fit="contain"
            style="max-height: 100%; max-width: 100%"
            @click="dialogOpen = false"
            class="cursor-pointer"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ProjectGallery',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const dialogOpen = ref(false)
    const selectedImage = ref('')

    const openImage = (img) => {
      selectedImage.value = img
      dialogOpen.value = true
    }

    return {
      dialogOpen,
      selectedImage,
      openImage,
    }
  },
})
</script>

<style scoped>
.rounded-borders {
  border-radius: 12px;
}

/* Styles pour l'effet de survol */
.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay {
  background-color: rgba(78, 52, 46, 0.6); /* Fond marron semi-transparent */
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
