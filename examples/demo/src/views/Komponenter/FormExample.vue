<template>
  <section>
    <div>
      <h3>Eksempel på advanceret brug</h3>
      <fds-formgroup>
        <fds-label> Fornavn </fds-label>
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="txtFornavn"></fds-input>
      </fds-formgroup>

      <xfds-validate
        v-slot="{ isValid, errorMessage }"
        :model-value="txtEfternavn"
        :validations="[hasContent, charactersMinLength(10)]"
      >
        <fds-formgroup :is-valid="isValid">
          <fds-label> Efternavn </fds-label>
          <fds-fejlmeddelelse v-if="!isValid">
            {{ errorMessage }}
          </fds-fejlmeddelelse>
          <fds-hint>Indtast efternavn</fds-hint>
          <fds-input v-model="txtEfternavn"></fds-input>
        </fds-formgroup>
      </xfds-validate>
    </div>
    <hr />
    <div>
      <h3>Eksempel på simpel brug</h3>

      <xfds-form-input
        v-model="txtAdresse"
        label="Adresse"
        hint="Angiv gyldig adresse"
        :validations="[hasContent, charactersMinLength(10)]"
      />

      <xfds-form-input
        v-model="kasser"
        label="Antal kasser"
        prefix="stk" />

      <xfds-form-input
        v-model="kasser"
        label="Antal kasser"
        suffix="stk" />

      <xfds-form-input
        label="Mobil nr."
        :model-value="txtMobil"
        disabled />

      <xfds-form-textarea
        v-model="txtBeskrivelse"
        label="Tekst område" />

      <hr />

      <h3>Valg</h3>

      <fds-formgroup label="Vælg en checkbox">
        <fds-checkbox-list v-model="checkboxList">
          <template #[`melon`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </fds-checkbox-list>
      </fds-formgroup>

      <fds-pre :json="checkboxList" />

      <fds-formgroup label="Single Checkbox">
        <fds-checkbox
          v-model="twoChecked"
          class="mt-2">
          Andet valg
        </fds-checkbox>
        <fds-checkbox
          v-model="twoChecked"
          size="small">
          Andet valg - small
        </fds-checkbox>
      </fds-formgroup>

      <fds-formgroup>
        <xfds-radio
          v-model="radioVal"
          header="Pick one"
          :list="radioOptions"
          label="Vælg radio">
          <template #hint>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </template>
          <template #[`melon`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </xfds-radio>
      </fds-formgroup>

      <fds-formgroup>
        <xfds-radio-toggle
          v-model="toggleRadio"
          label="Vælg radio toggle">
          <template #hint>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </template>
          <template #[`true`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </xfds-radio-toggle>
      </fds-formgroup>
      {{ toggleRadio }}

      <fds-formgroup>
        <fds-dropdown
          v-model="dropdownVal"
          :options="dropdownOptions" />
      </fds-formgroup>

      <fds-toggle-switch v-model="toggleswitch" />
      <div>
        {{ toggleswitch }}
      </div>
    </div>
    <hr class="my-6" />

    <p>{{ txtFornavn }}</p>
    <p>{{ txtEfternavn }}</p>
    <p>{{ txtAdresse }}</p>
    <p>{{ txtMobil }}</p>
    <p>{{ txtBeskrivelse }}</p>
    <p>{{ oneChecked }}</p>
    <p>{{ twoChecked }}</p>
    <p>{{ radioVal }}</p>
    <p>{{ dropdownVal }}</p>

    <hr />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { charactersMinLength, hasContent } from 'dkfds-vue3/utils';
import { FdsOptionItem, FdsCheckboxItem } from 'dkfds-vue3/utils';

const txtFornavn = ref('');
const txtEfternavn = ref('');
const txtAdresse = ref('');
const kasser = ref('');
const txtMobil = ref('23232323');
const txtBeskrivelse = ref('');
const oneChecked = ref(false);
const twoChecked = ref(false);
const radioVal = ref('');
const toggleswitch = ref(false);
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
const dropdownVal = ref('');
const dropdownOptions = ref<FdsOptionItem[]>([
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
</script>
