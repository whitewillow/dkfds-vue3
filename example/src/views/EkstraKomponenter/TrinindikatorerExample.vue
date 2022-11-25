<template>
  <section>
    <fds-preview header="Extra Eksempel">
      <fds-preview-item>
        <xfds-trinindikator v-model="trin" @navigate="trinNavKey = $event" />

        <fds-pre header="v-model" :json="{ trinNavKey }"></fds-pre>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeExtra"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const codeExtra = `
<xfds-trinindikator
  v-model="trin"
  @navigate="trinNavKey = $event" />


const trinNavKey = '';
const trin = ref<FdsNavigationItem[]>([
  {
    key: 'suppe',
    title: 'Supper',
    hint: '',
    icon: 'done',
  },
  {
    key: 'dessert',
    title: 'Dessert',
    hint: 'Hjælpetekst',
    icon: 'home',

    active: true,
  },
  {
    key: 'kod',
    title: 'Kød',
    hint: '',
  },
  {
    key: 'fisk',
    title: 'Fisk',
    hint: '',
    disabled: true,
  },
] as unknown as FdsNavigationItem[]);
`;

const trinNavKey = '';
const trin = ref<FdsNavigationItem[]>([
  {
    key: 'suppe',
    title: 'Supper',
    hint: '',
    icon: 'done',
  },
  {
    key: 'dessert',
    title: 'Dessert',
    hint: 'Hjælpetekst',
    icon: 'home',

    active: true,
  },
  {
    key: 'kod',
    title: 'Kød',
    hint: '',
  },
  {
    key: 'fisk',
    title: 'Fisk',
    hint: '',
    disabled: true,
  },
] as unknown as FdsNavigationItem[]);
</script>
