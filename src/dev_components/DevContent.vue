<template>
  <div class="home">
    <div class="container pb-6">
      <h1>Home</h1>
      <div>
        <h2>Eksempel på advanceret brug</h2>
        <fds-formgroup
          class="mt-4"
          #default="{ formid }">
          <fds-label :id="formid">
            Fornavn
          </fds-label>
          <fds-hint>Indtast fornavn</fds-hint>
          <fds-input
            v-model="txtFornavn"
            :id="formid"></fds-input>
        </fds-formgroup>

        <fds-validate
          :modelValue="txtEfternavn"
          :validations="[hasContent, charactersMinLength(10)]"
          #default="{ isValid, errorMessage }">
          <fds-formgroup
            class="my-4"
            :is-valid="isValid"
            #default="{ formid }">
            <fds-label :id="formid">
              Efternavn
            </fds-label>
            <fds-error-message v-if="!isValid">
              {{ errorMessage }}
            </fds-error-message>
            <fds-hint>Indtast efternavn</fds-hint>
            <fds-input
              v-model="txtEfternavn"
              :id="formid"></fds-input>
          </fds-formgroup>
        </fds-validate>
      </div>

      <hr class="my-6" />

      <div>
        <h2>Eksempel på simpel brug</h2>

        <fds-form-input
          label="Adresse"
          hint="Angiv gyldig adresse"
          v-model="txtAdresse"
          :validations="[hasContent, charactersMinLength(10)]"/>

        <fds-form-input
          label="Mobil nr."
          :modelValue="txtMobil"
          disabled />

        <fds-form-textarea
          label="Tekst område"
          v-model="txtBeskrivelse"
          :validations="[hasContent, charactersMinLength(10)]"/>

        <fds-formgroup class="mt-4">
          <fds-label>Vælg en checkbox</fds-label>
          <fds-checkbox v-model:checked="oneChecked">
            Første valg
          </fds-checkbox>
        </fds-formgroup>

        <fds-formgroup class="my-4">
          <fds-label>Vælg en mindre checkbox</fds-label>
          <fds-checkbox
            v-model:checked="twoChecked"
            small>Andet valg</fds-checkbox>
        </fds-formgroup>

        <fds-radio
          header="Pick one"
          :list="radioOptions"
          v-model="radioVal" />

        <fds-formgroup class="mt-4">
          <fds-dropdown
            :options="dropdownOptions"
            v-model="dropdownVal" />
        </fds-formgroup>
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
      <h3>Ikoner</h3>

      <i class="icon icon-coronavirus"></i>

      <i class="icon icon-alert-outline"></i>

      <hr />

      <fds-alert
        level="warning"
        header="Overskrift"
        closeable>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus
        voluptatum corrupti architecto? Accusantium obcaecati aliquam totam
        voluptas perspiciatis. Voluptate animi quas molestiae natus, hic eius ab
        architecto dolorum placeat.
      </fds-alert>

      <fds-error-list
        :list="fejlOpsummering"
        show></fds-error-list>

      <p>
        <fds-button>Gå til næste</fds-button>
      </p>

      <p><fds-button variant="secondary">
        Variant secondary
      </fds-button></p>

      <p>
        <fds-button :variant="FdsVariantEnum.tertiary">
          Variant {{ FdsVariantEnum.tertiary }}
        </fds-button>
      </p>

      <p>
        <fds-button :variant="FdsVariantEnum.error">
          Variant {{ FdsVariantEnum.error }}
        </fds-button>
      </p>

      <p>
        <fds-button :variant="FdsVariantEnum.info">
          Variant {{ FdsVariantEnum.info }}
        </fds-button>
      </p>

      <p>
        <fds-button :variant="FdsVariantEnum.success">
          Variant {{ FdsVariantEnum.success }}
        </fds-button>
      </p>

      <p>
        <fds-button :variant="FdsVariantEnum.warning">
          Variant {{ FdsVariantEnum.warning }}
        </fds-button>
      </p>

      <p>
        <fds-button-icon
          icon="refresh"
          variant="primary">Genopfrisk</fds-button-icon>
      </p>

      <p>
        <fds-button-icon
          icon="coronavirus"
          right
          variant="primary">Genopfrisk</fds-button-icon>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import {
  FdsErrorListItem,
  FdsOptionItem,
  FdsRadioItem,
  FdsVariantEnum,
} from '@/main_plugin';
import { charactersMinLength, hasContent } from '@/utils/validate-utils';

const txtFornavn = ref('');
const txtEfternavn = ref('');
const txtAdresse = ref('');
const txtMobil = ref('23232323');
const txtBeskrivelse = ref('');
const oneChecked = ref(false);
const twoChecked = ref(false);
const radioVal = ref('');
const radioOptions = ref<FdsRadioItem[]>([
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

const fejlOpsummering = ref<FdsErrorListItem[]>([
  {
    anchor: 'anchor',
    text: 'Datoen for udløbsdato på dit pas bør inkludere årstal',
    target: 'asdasda',
  },
  {
    anchor: 'anchor',
    text: 'Indtast postnummer - fx 4000',
    target: 'asdasda',
  },
]);
</script>
<style lang="scss" scoped></style>