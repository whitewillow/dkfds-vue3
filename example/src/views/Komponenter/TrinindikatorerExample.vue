<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-trinindikator
        v-model="trin"
        @navigate="trinNavKey = $event" />

      <fds-pre :json="{trinNavKey}"></fds-pre>
      <template #description>
        <p class="italic">
          Trin
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const code = `
<fds-trinindikator
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
