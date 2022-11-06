<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-formgroup label="Vælg en checkbox">
        <xfds-checkbox-list v-model="checkboxList">
          <template v-slot:[`melon`]>
            <p>Det er muligt at benytte tjekboks til mere indhold</p>
          </template>
        </xfds-checkbox-list>
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
        <pre v-text="codeList"></pre>
      </template>
    </fds-component-preview>

    <hr class="my-6" />

    <fds-component-preview header="Eksempel Formular">
      <xfds-form-checkbox-list
        label="Checkbox form"
        :validations="[arrayHasItems]"
        v-model="checkboxListForm"
      />

      <fds-pre header="v-model for checkbox liste" :json="checkboxListForm" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-form-checkbox-list</code> er en samling af komponenter der giver en
          samlet funktionalitet.
        </p>
        <p class="italic">Understøtter simpel validering, m.m.</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { arrayHasItems } from 'dkfds-vue3/src/utils/validate-utils';
import { FdsCheckboxItem } from 'dkfds-vue3/src/model/fds.model';

const checkboxListForm = ref<FdsCheckboxItem[]>([
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
  {
    title: 'Tomat',
    value: 'tomat',
    disabled: true,
  },
]);

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
  <xfds-form-checkbox-list
    label="Checkbox form"
    :validations="[arrayHasItems]"
    v-model="checkboxListForm"
  />
  
  const checkboxListForm = ref<FdsCheckboxItem[]>([
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
    {
      title: 'Tomat',
      value: 'tomat',
      disabled: true,
    },
  ]);`;

const codeList = `
<fds-checkbox-list v-model="checkboxList">
  <template v-slot:[\`melon\`]>
    <p>Det er muligt at benytte tjekboks til mere indhold</p>
  </template>
</fds-checkbox-list>
`;
</script>
