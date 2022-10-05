<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-formgroup>
        <fds-label>Vælg radio</fds-label>

        <fds-radio header="Pick one" :list="radioOptions" v-model="radioVal">
          <template v-slot:[`melon`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </fds-radio>
      </fds-formgroup>

      <fds-pre header="v-model" :json="{ radioVal }" />

      <template #description>
        <p class="italic">
          <code>fds-radio</code> Ud fra en liste af <code>FdsOptionItem[]</code> genereres radio
          knapperne.
        </p>
        <p class="italic">
          Det er muligt at udfolde valgte radio og angive eget indhold, via dynamisk
          <code>slot</code>
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <hr class="my-6" />

    <fds-component-preview header="Ja eller nej">
      <fds-formgroup>
        <fds-label>Vælg radio toggle</fds-label>

        <fds-radio-toggle v-model="toggleRadio">
          <template v-slot:[`true`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </fds-radio-toggle>
      </fds-formgroup>

      <fds-pre header="v-model" :json="{ toggleRadio }" />

      <template #description>
        <p class="italic">
          Er det kun ja eller nej - sand eller falsk, kan <code>fds-radio-toggle</code> benyttes.
        </p>
        <p class="italic">
          Det er muligt at udfolde valgte radio og angive eget indhold, via dynamisk
          <code>slot</code>
        </p>
      </template>
      <template #code>
        <pre v-text="code2"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const radioVal = ref('');

const toggleRadio = ref(null);
const radioOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
]);

const code = `
<fds-radio header="Pick one" :list="radioOptions" v-model="radioVal">
  <template v-slot:[\`melon\`]>
    <p>Det er muligt at benytte radio til mere indhold</p>
  </template>
</fds-radio>

const radioOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
]);
`;

const code2 = `
<fds-radio-toggle v-model="toggleRadio">
  <template v-slot:[\`true\`]>
    <p>Det er muligt at benytte radio til mere indhold</p>
  </template>
</fds-radio-toggle>
`;
</script>
