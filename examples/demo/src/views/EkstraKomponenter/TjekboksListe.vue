<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-formgroup label="Vælg en checkbox">
          <xfds-checkbox-list v-model="checkboxList">
            <template #[`melon`]>
              <p>Det er muligt at benytte tjekboks til mere indhold</p>
            </template>
          </xfds-checkbox-list>
        </fds-formgroup>

        <fds-pre
          header="v-model"
          :json="checkboxList" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeList"></pre>
      </fds-preview-code>
    </fds-preview>

    <hr class="my-6" />

    <fds-preview header="Eksempel Formular">
      <xfds-validate
        :model-value="checkboxListForm"
        :validations="[arrayHasItems]">
        <xfds-form-checkbox-list
          v-model="checkboxListForm"
          label="Checkbox form" />
      </xfds-validate>

      <fds-pre
        header="v-model for checkbox liste"
        :json="checkboxListForm" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-form-checkbox-list</code> er en samling af komponenter der giver en
          samlet funktionalitet.
        </p>
      </template>
      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { arrayHasItems } from 'dkfds-vue3/utils';
import { FdsCheckboxItem } from 'dkfds-vue3/utils';

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
  <xfds-validate :modelValue="checkboxListForm" :validations="[arrayHasItems]">
    <xfds-form-checkbox-list label="Checkbox form" v-model="checkboxListForm" />
  </xfds-validate>

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
