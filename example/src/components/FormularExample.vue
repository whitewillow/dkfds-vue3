<template>
  <section>
    <div>
      <h2>Form group</h2>
      <fds-formgroup #default="{ formid }">
        <fds-label :id="formid"> Fornavn </fds-label>
        <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="txtFornavn" :id="formid"></fds-input>
      </fds-formgroup>

      <h2>Validering</h2>
      <fds-validate
        :modelValue="txtEfternavn"
        validateFlow="immediate"
        :validations="[hasContent, charactersMinLength(10)]"
        #default="{ isValid, errorMessage }"
      >
        <fds-formgroup :is-valid="isValid" #default="{ formid }">
          <fds-label :id="formid"> Efternavn </fds-label>
          <fds-fejlmeddelelse v-if="!isValid">
            {{ errorMessage }}
          </fds-fejlmeddelelse>
          <fds-hint>Indtast efternavn - må ikke være tomt og min 10 karaktere</fds-hint>
          <fds-input v-model="txtEfternavn" :id="formid"></fds-input>
        </fds-formgroup>
      </fds-validate>

      <fds-validate-number
        :modelValue="noBeloeb"
        :validations="[numberMax(500)]"
        #default="{ isValid, errorMessage }"
      >
        <fds-formgroup :is-valid="isValid" #default="{ formid }">
          <fds-label :id="formid"> Beløb i kr. </fds-label>
          <fds-fejlmeddelelse v-if="!isValid">
            {{ errorMessage }}
          </fds-fejlmeddelelse>
          <fds-hint>Indtast beløb - må ikke overstige 500</fds-hint>
          <fds-input-number v-model="noBeloeb" suffix="kr." :id="formid"></fds-input-number>
        </fds-formgroup>
      </fds-validate-number>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FdsNavigationStep, FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';
import { charactersMinLength, hasContent, numberMax } from 'dkfds-vue3/src/utils/validate-utils';

const txtFornavn = ref('');
const txtEfternavn = ref('');
const noBeloeb = ref(0);
const txtAdresse = ref('');
const txtMobil = ref('23232323');
const txtBeskrivelse = ref('');
</script>
