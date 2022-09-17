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

        <h2>Valg</h2>

        <fds-formgroup class="my-4">
          <fds-label>Vælg en checkbox</fds-label>
          <fds-checkbox v-model:checked="oneChecked">
            Første valg
          </fds-checkbox>
        </fds-formgroup>

        <fds-formgroup class="my-4">
          <fds-label>Vælg en mindre checkbox</fds-label>
          <fds-checkbox
            v-model:checked="twoChecked"
            small>
            Andet valg
          </fds-checkbox>
        </fds-formgroup>

        <fds-radio
          header="Pick one"
          :list="radioOptions"
          v-model="radioVal">
          <template #hint>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </template>
          <template v-slot:[`melon`]>
            <p>Det er muligt at benytte radio til mere indhold</p>
          </template>
        </fds-radio>

        <fds-formgroup class="mt-4">
          <fds-dropdown
            :options="dropdownOptions"
            v-model="dropdownVal" />
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

      <h2>Accordions</h2>

      <fds-accordion-group #default="{ groupcollapse }">
        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med hint"
          hint="Hint for header">
          <p>
            {{ groupcollapse }}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>
        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med hint"
          hint="Hint for header">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med Success"
          variant="success"
          variant-text="Success">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med advarsel"
          variant="warning"
          variant-text="Advarsel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med Fejl"
          variant-text="Fejl"
          variant="error">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>
      </fds-accordion-group>

      <h3>Single Accordions</h3>

      <fds-accordion>
        <template #header>
          <h4 class="">
            Accordion med custom header
          </h4>
        </template>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion>

      <fds-accordion
        header="Accordion normal header"
        hint="Et hint">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion>

      <hr />
      <h3>Ikoner</h3>

      <i class="icon icon-coronavirus"></i>

      <i class="icon icon-alert-outline"></i>

      <hr />

      <fds-alert
        level="warning"
        header="Overskrift"
        closeable>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
        architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
        molestiae natus, hic eius ab architecto dolorum placeat.
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
        <fds-button-spinner
          icon="search"
          variant="secondary"
          spinnerText="Søger">
          Søg
        </fds-button-spinner>
        <fds-button-spinner
          icon="search"
          variant="secondary"
          :showSpinner="true"
          spinnerText="...Søger">
          Søg
        </fds-button-spinner>
        <fds-button-spinner
          icon="search"
          variant="primary"
          :showSpinner="true"
          spinnerText="...Søger">
          Søg
        </fds-button-spinner>
      </p>

      <p>
        <fds-button-icon
          icon="refresh"
          variant="primary">
          Genopfrisk
        </fds-button-icon>
      </p>

      <p>
        <fds-button-icon
          icon="coronavirus"
          right
          variant="primary">
          Genopfrisk
        </fds-button-icon>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import {
  FdsErrorListItem, FdsOptionItem, FdsRadioItem, FdsVariantEnum,
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
const toggleswitch = ref(false);
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