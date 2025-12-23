<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Mon Portfolio </q-toolbar-title>

        <q-btn flat round dense icon="code" type="a" href="https://github.com/" target="_blank" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <!-- J'ajoute la prop 'internal' pour les liens internes -->
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Accueil',
    caption: 'Présentation',
    icon: 'home',
    link: '/', // Chemin interne propre
    internal: true, // Marqueur pour dire que c'est une navigation interne
  },
  {
    title: 'Mes Projets',
    caption: 'Réalisations',
    icon: 'work',
    link: '/projects',
    internal: true,
  },
  {
    title: 'Mon Parcours',
    caption: 'Expérience',
    icon: 'history',
    link: '/about',
    internal: true,
  },
  {
    title: 'Contact',
    caption: 'Me contacter',
    icon: 'mail',
    link: 'mailto:votre.email@example.com',
    internal: false,
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>
