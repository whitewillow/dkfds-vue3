<template>
  <section>
    <div class="container page-container">
      <fds-sidenavigation-list :list="sideTabs">
        <template v-slot:[tab.key] v-for="tab of sideTabs" :key="tab.key">
          <div class="subheading">Komponenter</div>
          <h1>{{ tab.title }}</h1>
          <component :is="`${tab.key}-example`" />
        </template>
      </fds-sidenavigation-list>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationStep } from 'dkfds-vue3/src/model/fds.model';

const sideTabs = [
  {
    order: 0,
    key: 'accordions',
    title: 'Accordions',
    help: '',
  },
  {
    order: 1,
    key: 'badges',
    title: 'Badges',
    help: '',
  },
  {
    order: 2,
    key: 'beskeder',
    title: 'Beskeder',
    help: '',
  },
  {
    order: 3,
    key: 'broedkrumme',
    title: 'Brødkrumme',
    help: '',
  },
  {
    order: 4,
    key: 'cards',
    title: 'Cards',
    help: '',
  },
  {
    order: 5,
    key: 'cookie',
    title: 'Cookiemeddelelse',
    help: '',
  },
  {
    order: 6,
    key: 'datoangivelse',
    title: 'Datoangivelse',
    help: '',
  },
  {
    order: 7,
    key: 'datovaelger',
    title: 'Datovælger',
    help: '',
  },
  {
    order: 8,
    key: 'detaljer',
    title: 'Detaljer',
    help: '',
  },
  {
    order: 9,
    key: 'dropdown',
    title: 'Dropdown-menu',
    help: '',
  },
  {
    order: 10,
    key: 'faneblade',
    title: 'Faneblade',
    help: '',
  },
  {
    order: 11,
    key: 'fejlmeddelelser',
    title: 'Fejlmeddelelser',
    help: '',
  },
  {
    order: 12,
    key: 'fejlopsummering',
    title: 'Fejlopsummering',
    help: '',
  },
  {
    order: 13,
    key: 'felter',
    title: 'Felter',
    help: '',
  },
  {
    order: 14,
    key: 'footers',
    title: 'Footers',
    help: '',
  },
  {
    order: 15,
    key: 'formular',
    title: 'Formular',
    help: '',
  },
  {
    order: 16,
    key: 'funktionslink',
    title: 'Funktionslink',
    help: '',
  },
  {
    order: 17,
    key: 'headers',
    title: 'Headers',
    help: '',
  },
  {
    order: 18,
    key: 'knapper',
    title: 'Knapper',
    help: '',
  },
  {
    order: 19,
    key: 'modalvindue',
    title: 'Modalvindue',
    help: '',
  },
  {
    order: 20,
    key: 'notifikation',
    title: 'Notifikation (Toast)',
    help: '',
  },
  {
    order: 21,
    key: 'overflow',
    title: 'Overflow menu',
    help: '',
  },
  {
    order: 22,
    key: 'paginering',
    title: 'Paginering',
    help: '',
  },
  {
    order: 23,
    key: 'radioknap',
    title: 'Radioknap',
    help: '',
  },
  {
    order: 24,
    key: 'sidenavigation',
    title: 'Sidenavigation',
    help: '',
  },
  {
    order: 25,
    key: 'skip',
    title: 'Skip-link',
    help: '',
  },
  {
    order: 26,
    key: 'spinner',
    title: 'Spinner',
    help: '',
  },
  {
    order: 27,
    key: 'sprogvaelger',
    title: 'Sprogvælger',
    help: '',
  },
  {
    order: 28,
    key: 'strukturerede',
    title: 'Strukturerede lister',
    help: '',
  },
  {
    order: 29,
    key: 'soegefelt',
    title: 'Søgefelt',
    help: '',
  },
  {
    order: 30,
    key: 'tilbage',
    title: 'Tilbage link',
    help: '',
  },
  {
    order: 31,
    key: 'tabeller',
    title: 'Tabeller',
    help: '',
  },
  {
    order: 32,
    key: 'tags',
    title: 'Tags',
    help: '',
  },
  {
    order: 33,
    key: 'tekstomraade',
    title: 'Tekstområde',
    help: '',
  },
  {
    order: 34,
    key: 'tjekboks',
    title: 'Tjekboks',
    help: '',
  },
  {
    order: 35,
    key: 'toggle',
    title: 'Toggle switch',
    help: '',
  },
  {
    order: 36,
    key: 'tooltip',
    title: 'Tooltip',
    help: '',
  },
  {
    order: 37,
    key: 'trinindikatorer',
    title: 'Trinindikatorer',
    help: '',
  },
  {
    order: 39,
    key: 'vedhaeft',
    title: 'Vedhæft fil',
    help: '',
  },
] as FdsNavigationStep[];
</script>
<style lang="scss" scoped></style>
