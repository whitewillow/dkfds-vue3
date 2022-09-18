<template>
  <div class="home">
    <div class="container pb-6">
      <h1>Home</h1>
      <div>
        <h2>Eksempel på advanceret brug</h2>
        <fds-formgroup #default="{ formid }">
          <fds-label :id="formid"> Fornavn </fds-label>
          <fds-hint>Indtast fornavn</fds-hint>
          <fds-input v-model="txtFornavn" :id="formid"></fds-input>
        </fds-formgroup>

        <fds-validate
          :modelValue="txtEfternavn"
          :validations="[hasContent, charactersMinLength(10)]"
          #default="{ isValid, errorMessage }"
        >
          <fds-formgroup :is-valid="isValid" #default="{ formid }">
            <fds-label :id="formid"> Efternavn </fds-label>
            <fds-error-message v-if="!isValid">
              {{ errorMessage }}
            </fds-error-message>
            <fds-hint>Indtast efternavn</fds-hint>
            <fds-input v-model="txtEfternavn" :id="formid"></fds-input>
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
          :validations="[hasContent, charactersMinLength(10)]"
        />

        <fds-form-input label="Antal kasser" v-model="kasser" prefix="stk" />

        <fds-form-input label="Antal kasser" v-model="kasser" suffix="stk" />

        <fds-form-input label="Mobil nr." :modelValue="txtMobil" disabled />

        <fds-form-textarea
          label="Tekst område"
          v-model="txtBeskrivelse"
          :validations="[hasContent, charactersMinLength(10)]"
        />

        <hr />

        <h2>Valg</h2>

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

      <h2>Accordions</h2>

      <fds-accordion-group #default="{ groupcollapse }">
        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med hint"
          hint="Hint for header"
        >
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
          hint="Hint for header"
        >
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
          variant-text="Success"
        >
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
          variant-text="Advarsel"
        >
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
          variant="error"
        >
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
          <h4 class="">Accordion med custom header</h4>
        </template>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion>

      <fds-accordion header="Accordion normal header" hint="Et hint">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion>

      <hr />
      <h2>Filer</h2>

      <fds-file-upload @upload="fileInput = $event"></fds-file-upload>
      <fds-pre header="Upload event JSON" :json="fileInput" />

      <p class="form-label" htmlFor="file-list1">Vedhæftet filer</p>

      <fds-file-list
        id="file-list1"
        :list="filListe"
        @download="filToDownload = $event"
        @delete="filToDelete = $event"
      >
      </fds-file-list>

      <p>Eller med embedded header</p>

      <fds-file-list
        :list="filListe"
        @download="filToDownload = $event"
        @delete="filToDelete = $event"
      >
        <p class="form-label">Vedhæftet filer</p>
      </fds-file-list>

      <fds-pre header="Download JSON" :json="filToDownload" />
      <fds-pre header="Delete JSON" :json="filToDelete" />

      <hr />
      <h3>Typography</h3>
      <p>
        <fds-badge class="mr-4"> Normal </fds-badge>
        <fds-badge small> Normal small </fds-badge>
      </p>
      <p>
        <fds-badge class="mr-4" variant="success"> success </fds-badge>
        <fds-badge class="mx-4" variant="info"> success </fds-badge>
        <fds-badge class="mx-4" variant="warning"> warning </fds-badge>
        <fds-badge class="mx-4" variant="error"> error </fds-badge>
      </p>

      <hr />
      <h2>Links</h2>

      <p>
        <fds-funktionslink title="Klik for event" @click="klikEvent">
          Funktionslink
        </fds-funktionslink>
      </p>
      <div>
        <fds-funktionslink
          :to="{ name: 'about' }"
          icon="contact-support"
          title="Klik for at gå til om os"
        >
          Funktionslink med ikon - Om os
        </fds-funktionslink>
      </div>

      <hr />
      <h3>Ikoner</h3>

      <i class="icon icon-coronavirus"></i>

      <i class="icon icon-home"></i>

      <hr />

      <h2>Cards</h2>

      <div class="row">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
          <fds-card overskrift="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
          <fds-card overskrift="Overskrift" align-height>
            <template #content>
              <div class="align-text-center bg-info-light p-6">
                <h2 class="h5 mb-5">Lorem ipsum fordeling</h2>
                <div class="mt-3 row">
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="80%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100"
                    >
                      <rect width="50" height="100" fill="#eefafa" />
                      <rect y="20" width="50" height="80" fill="#0868AC" /></svg
                    ><span class="small-text mt-2 bold d-block"> København </span>
                  </div>
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="36%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100"
                    >
                      <rect width="50" height="100" fill="#eefafa" />
                      <rect y="64" width="50" height="36" fill="#0868AC" /></svg
                    ><span class="small-text mt-2 bold d-block"> Hele landet </span>
                  </div>
                </div>
              </div>
            </template>
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
          </fds-card>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
          <fds-card align-height>
            <template #custom>
              <div class="card-content">
                <!-- Alt i denne div er blot et eksempel. Visse klasser er ikke en del af FDS. -->
                <div class="row bg-success-light p-6">
                  <div class="col-12 align-text-left">
                    <h2 class="h3 mb-0">3 ofte stillede spørgsmål</h2>
                    <ul class="mt-0 noindent-list">
                      <li>In viverra faucibus lorem?</li>
                      <li>Phasellus posuere neque?</li>
                      <li>Nullam quis nunc dui?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-header">
                <h2 class="header-title">Header</h2>
                <p class="sub-header">Understøttende tekst</p>
              </div>

              <div class="card-footer card-action">
                <div class="action-buttons">
                  <button class="button button-secondary">Sekundærknap</button
                  ><button class="button button-tertiary">Tertiærknap</button>
                </div>
                <div class="action-links">
                  <ul class="nobullet-list">
                    <li>
                      <a href="javascript:void(0);" class="default link state"
                        >Et link til et sted i løsningen</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="icon-link"
                        >Et link til et sted uden for løsningen<svg
                          class="icon-svg"
                          aria-hidden="true"
                          focusable="false"
                          tabindex="-1"
                        >
                          <use xlink:href="#open-in-new"></use></svg
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </fds-card>
        </div>
      </div>

      <fds-alert level="warning" header="Overskrift" closeable>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
        architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
        molestiae natus, hic eius ab architecto dolorum placeat.
      </fds-alert>

      <fds-error-list :list="fejlOpsummering" show></fds-error-list>

      <p>
        <fds-button @click="klikEvent"> Gå til næste </fds-button>
      </p>

      <p><fds-button variant="secondary" @click="klikEvent"> Variant secondary </fds-button></p>

      <p>
        <fds-button :variant="FdsVariantEnum.tertiary" @click="klikEvent">
          Variant {{ FdsVariantEnum.tertiary }}
        </fds-button>
      </p>

      <p>
        <fds-button-spinner
          @click="klikEvent"
          icon="search"
          variant="secondary"
          spinnerText="Søger"
        >
          Søg
        </fds-button-spinner>
        <fds-button-spinner
          icon="search"
          variant="secondary"
          :showSpinner="true"
          spinnerText="...Søger"
        >
          Søg
        </fds-button-spinner>
        <fds-button-spinner
          icon="search"
          variant="primary"
          :showSpinner="true"
          spinnerText="...Søger"
        >
          Søg
        </fds-button-spinner>
      </p>

      <p>
        <fds-button-icon @click="klikEvent" icon="refresh" variant="primary">
          Genopfrisk
        </fds-button-icon>
      </p>

      <p>
        <fds-button-icon @click="klikEvent" icon="coronavirus" right variant="primary">
          Genopfrisk
        </fds-button-icon>
      </p>

      <h3>Skal de med?</h3>

      <p>
        <fds-button :variant="FdsVariantEnum.error" @click="klikEvent">
          Variant {{ FdsVariantEnum.error }}
        </fds-button>
      </p>

      <p>
        <fds-button :variant="FdsVariantEnum.info" @click="klikEvent">
          Variant {{ FdsVariantEnum.info }}
        </fds-button>
      </p>

      <p>
        <fds-button :variant="FdsVariantEnum.success" @click="klikEvent">
          Variant {{ FdsVariantEnum.success }}
        </fds-button>
      </p>

      <p>
        <fds-button :variant="FdsVariantEnum.warning" @click="klikEvent">
          Variant {{ FdsVariantEnum.warning }}
        </fds-button>
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
  FdsCheckboxItem,
  FdsFileInputModel,
  FdsFileModel,
} from 'dkfds-vue3/src/model/fds.model';
import { charactersMinLength, hasContent } from 'dkfds-vue3/src/utils/validate-utils';

const fileInput = ref<FdsFileInputModel | null>(null);
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

const filListe = ref<FdsFileModel[]>([
  {
    id: 'a',
    filnavn: 'Banankage.jpg',
    type: 'image/jpg',
  },
  {
    id: 'b',
    filnavn: 'Opskrift.pdf',
    type: 'pdf',
  },
  {
    id: 'c',
    filnavn: 'Regnskab.xls',
    type: 'xls',
  },
  {
    id: 'd',
    filnavn: 'KodeFil.json',
    type: 'json',
  },
]);
const filToDownload = ref<FdsFileModel | null>(null);
const filToDelete = ref<FdsFileModel | null>(null);
const klikEvent = () => window.confirm('KLIK');
</script>
<style lang="scss" scoped></style>
