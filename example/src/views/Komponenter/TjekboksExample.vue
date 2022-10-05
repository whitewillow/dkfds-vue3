<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-formgroup label="Vælg en checkbox">
        <fds-checkbox-list v-model="checkboxList">
          <template v-slot:[`melon`]>
            <p>Det er muligt at benytte tjekboks til mere indhold</p>
          </template>
        </fds-checkbox-list>
      </fds-formgroup>

      <fds-pre header="v-model" :json="checkboxList" />
      <template #description>
        <p class="italic">
          <code>fds-checkbox-list</code> Ud fra en liste af <code>FdsCheckboxItem[]</code> genereres
          checkbox liste.
        </p>
        <p class="italic">
          Det er muligt at udfolde valgte checkbox og angive eget indhold, via dynamisk
          <code>slot</code>
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <hr class="my-6" />

    <fds-component-preview header="Enkeltstående">
      <fds-formgroup label="Single Checkbox">
        <fds-checkbox v-model="oneChecked" class="mt-2"> Et valg </fds-checkbox>
        <fds-checkbox v-model="twoChecked" small> Andet valg - small </fds-checkbox>

        <fds-pre header="v-model" :json="{ oneChecked, twoChecked }" />
      </fds-formgroup>
      <template #description>
        <p class="italic"><code>fds-checkbox </code> Enkeltstående checkboxe</p>
      </template>
      <template #code>
        <pre v-text="code2"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsCheckboxItem } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const oneChecked = ref(false);
const twoChecked = ref(false);

const checkboxList = ref<FdsCheckboxItem[]>([
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
<fds-checkbox-list v-model="checkboxList">
  <template v-slot:[\`melon\`]>
    <p>Det er muligt at benytte tjekboks til mere indhold</p>
  </template>
</fds-checkbox-list>
`;

const code2 = `
<fds-checkbox v-model="oneChecked" class="mt-2"> Et valg </fds-checkbox>
<fds-checkbox v-model="twoChecked" small> Andet valg - small </fds-checkbox>

`;
</script>
