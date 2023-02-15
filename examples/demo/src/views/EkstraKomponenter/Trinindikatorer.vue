<template>
  <section>
    <fds-preview header="Ekstra Eksempel">
      <fds-preview-item>
        <xfds-trinindikator
          v-model="trin"
          @navigate="trinNavKey = $event" />
        <fds-pre
          header="v-model"
          :json="{ trinNavKey }"></fds-pre>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeExtra"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/utils';
import { computed, ref } from 'vue';

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

const trinNavKey = ref('');

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

const changeActive = () => {
  trin.value = trin.value.map((m) => {
    m.active = false;
    if (m.key === 'kod') {
      m.active = true;
    }
    return m;
  });
};
</script>
