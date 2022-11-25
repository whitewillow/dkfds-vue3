<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-trinindikator-group>
        <template #header> Trin {{ trinNavigationsId }} af 4 </template>
        <fds-trinindikator-item
          id="1"
          :active="trinNavigationsId === '1'"
          icon="done"
          hint="Et hint"
          @navigate="trinNavigationsId = $event"
          :index="1"
        >
          Første
        </fds-trinindikator-item>
        <fds-trinindikator-item
          id="2"
          :active="trinNavigationsId === '2'"
          hint="Et hint"
          @navigate="trinNavigationsId = $event"
          :index="2"
        >
          Anden
        </fds-trinindikator-item>
      </fds-trinindikator-group>

      <fds-pre :json="{ trinNavigationsId }"></fds-pre>
      <template #description>
        <p class="italic">Trin</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Extra Eksempel">
      <xfds-trinindikator v-model="trin" @navigate="trinNavKey = $event" />

      <fds-pre header="v-model" :json="{ trinNavKey }"></fds-pre>
      <template #description>
        <p class="italic">Trin</p>
      </template>
      <template #code>
        <pre v-text="codeExtra"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const trinNavigationsId = ref('1');
const code = `
<fds-trinindikator-group>
  <template #header> Trin {{ trinNavigationsId }} af 4 </template>
  <fds-trinindikator-item
    id="1"
    :active="trinNavigationsId === '1'"
    icon="done"
    hint="Et hint"
    @navigate="trinNavigationsId = $event"
    :index="1"
  >
    Første
  </fds-trinindikator-item>
  <fds-trinindikator-item
    id="2"
    :active="trinNavigationsId === '2'"
    hint="Et hint"
    @navigate="trinNavigationsId = $event"
    :index="2"
  >
    Anden
  </fds-trinindikator-item>
</fds-trinindikator-group>

const trinNavigationsId = ref('1');
`;

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
