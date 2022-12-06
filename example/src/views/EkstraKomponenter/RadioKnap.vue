<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-formgroup>
          <xfds-radio header="Pick one" :list="radioOptions" v-model="radioVal" label="Vælg radio">
            <template v-slot:[`melon`]>
              <p>Det er muligt at benytte radio til mere indhold</p>
            </template>
          </xfds-radio>
        </fds-formgroup>

        <fds-pre header="v-model" :json="{ radioVal }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <hr class="my-6" />

    <fds-preview header="Ja eller nej">
      <fds-preview-item>
        <fds-formgroup>
          <xfds-radio-toggle v-model="toggleRadio" label="Vælg radio toggle">
            <template v-slot:[`true`]>
              <p>Det er muligt at benytte radio til mere indhold</p>
            </template>
          </xfds-radio-toggle>
        </fds-formgroup>

        <fds-pre header="v-model" :json="{ toggleRadio }" />
      </fds-preview-item>
      <fds-preview-item>
        <p class="italic">
          Er det kun ja eller nej - sand eller falsk, kan <code>xfds-radio-toggle</code> benyttes.
        </p>
        <p class="italic">
          Det er muligt at udfolde valgte radio og angive eget indhold, via dynamisk
          <code>slot</code>
        </p>
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="code2"></pre>
      </fds-preview-code>
    </fds-preview>
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
<xfds-radio header="Pick one" :list="radioOptions" v-model="radioVal" label="Vælg radio">
  <template v-slot:[\`melon\`]>
    <p>Det er muligt at benytte radio til mere indhold</p>
  </template>
</xfds-radio>

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
<xfds-radio-toggle v-model="toggleRadio" label="Vælg radio toggle">
  <template v-slot:[\`true\`]>
    <p>Det er muligt at benytte radio til mere indhold</p>
  </template>
</xfds-radio-toggle>
`;
</script>
