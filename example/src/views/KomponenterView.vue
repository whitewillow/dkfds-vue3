<template>
  <section>
    <div class="container page-container">
      <fds-sidenavigation-tabs :list="sideTabs">
        <template #default="{ currentKey }">
          <div v-if="currentKey === 'accordions'">
            <accordions-example />
          </div>
          <div v-if="currentKey === 'badges'">
            <badges-example />
          </div>
          <div v-if="currentKey === 'beskeder'">
            <beskeder-example />
          </div>
          <div v-if="currentKey === 'cards'">
            <cards-example />
          </div>
          <div v-if="currentKey === 'form'">
            <form-example />
          </div>
          <div v-if="currentKey === 'filer'">
            <filer-example />
          </div>
          <div v-if="currentKey === 'links'">
            <links-example />
          </div>
          <div v-if="currentKey === 'knapper'">
            <knapper-example />
          </div>
          <div v-if="currentKey === 'fejlsummering'">
            <fejlsummering-example />
          </div>
        </template>
      </fds-sidenavigation-tabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationStep } from 'dkfds-vue3/src/model/fds.model';
import AccordionsExample from '../components/AccordionsExample.vue';
import BadgesExample from '../components/BadgesExample.vue';
import BeskederExample from '../components/BeskederExample.vue';
import CardsExample from '../components/CardsExample.vue';
import FormExample from '../components/FormExample.vue';
import FilerExample from '../components/FilerExample.vue';
import LinksExample from '../components/LinksExample.vue';
import KnapperExample from '../components/KnapperExample.vue';
import FejlsummeringExample from '../components/FejlsummeringExample.vue';

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
    key: 'cards',
    title: 'Cards',
    help: '',
  },
  {
    order: 4,
    key: 'form',
    title: 'Formular',
    help: '',
  },
  {
    order: 5,
    key: 'filer',
    title: 'Filer',
    help: '',
  },
  {
    order: 6,
    key: 'links',
    title: 'Links',
    help: '',
  },
  {
    order: 7,
    key: 'knapper',
    title: 'Knapper',
    help: '',
  },
  {
    order: 7,
    key: 'fejlsummering',
    title: 'Fejlsummering',
    help: '',
  },
] as FdsNavigationStep[];
</script>
<style lang="scss" scoped></style>
