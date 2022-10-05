<template>
  <section>
    <div>
      <h3>Eksempel på advanceret brug</h3>
      <fds-formgroup #default="{ formid }">
        <fds-label :id="formid"> Fornavn </fds-label>
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="txtFornavn" :id="formid"></fds-input>
      </fds-formgroup>

      <xfds-validate
        :modelValue="txtEfternavn"
        :validations="[hasContent, charactersMinLength(10)]"
        #default="{ isValid, errorMessage }"
      >
        <fds-formgroup :is-valid="isValid" #default="{ formid }">
          <fds-label :id="formid"> Efternavn </fds-label>
          <fds-fejlmeddelelse v-if="!isValid">
            {{ errorMessage }}
          </fds-fejlmeddelelse>
          <fds-hint>Indtast efternavn</fds-hint>
          <fds-input v-model="txtEfternavn" :id="formid"></fds-input>
        </fds-formgroup>
      </xfds-validate>
    </div>
    <hr />
    <div>
      <h3>Eksempel på simpel brug</h3>

      <xfds-form-input
        label="Adresse"
        hint="Angiv gyldig adresse"
        v-model="txtAdresse"
        :validations="[hasContent, charactersMinLength(10)]"
      />

      <xfds-form-input label="Antal kasser" v-model="kasser" prefix="stk" />

      <xfds-form-input label="Antal kasser" v-model="kasser" suffix="stk" />

      <xfds-form-input label="Mobil nr." :modelValue="txtMobil" disabled />

      <xfds-form-textarea
        label="Tekst område"
        v-model="txtBeskrivelse"
        :validations="[hasContent, charactersMinLength(10)]"
      />

      <hr />

      <h3>Valg</h3>

      <fds-formgroup label="Vælg en checkbox">
        <fds-checkbox-list v-model="checkboxList">
          <template v-slot:[`melon`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </fds-checkbox-list>
      </fds-formgroup>

      <fds-pre :json="checkboxList" />

      <fds-formgroup label="Single Checkbox">
        <fds-checkbox v-model="twoChecked" class="mt-2"> Andet valg </fds-checkbox>
        <fds-checkbox v-model="twoChecked" small> Andet valg - small </fds-checkbox>
      </fds-formgroup>

      <fds-formgroup>
        <fds-label>Vælg radio</fds-label>

        <fds-radio header="Pick one" :list="radioOptions" v-model="radioVal">
          <template #hint> Lorem ipsum dolor sit amet consectetur adipisicing elit. </template>
          <template v-slot:[`melon`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </fds-radio>
      </fds-formgroup>

      <fds-formgroup>
        <fds-label>Vælg radio toggle</fds-label>

        <fds-radio-toggle v-model="toggleRadio">
          <template #hint> Lorem ipsum dolor sit amet consectetur adipisicing elit. </template>
          <template v-slot:[`true`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </fds-radio-toggle>
      </fds-formgroup>
      {{ toggleRadio }}

      <fds-formgroup>
        <fds-dropdown :options="dropdownOptions" v-model="dropdownVal" />
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
import { charactersMinLength, hasContent } from 'dkfds-vue3/src/utils/validate-utils';
import { FdsOptionItem, FdsCheckboxItem } from 'dkfds-vue3/src/model/fds.model';

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
