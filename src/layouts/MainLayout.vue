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
    link: '/#/',
  },
  {
    title: 'Mes Projets',
    caption: 'Réalisations',
    icon: 'work',
    link: '/#/projects', // Nous créerons cette route ou section plus tard
  },
  {
    title: 'Mon Parcours',
    caption: 'Expérience',
    icon: 'history',
    link: '/#/about',
  },
  {
    title: 'Contact',
    caption: 'Me contacter',
    icon: 'mail',
    link: 'mailto:votre.email@example.com',
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
