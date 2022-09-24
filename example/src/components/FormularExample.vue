<template>
  <section>
    <div>
      <h2>Enkeltstående komponenter</h2>
      <xfds-formgroup #default="{ formid }">
        <fds-label :id="formid"> Fornavn </fds-label>
        <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input
          v-model="txtFornavn"
          input-type="name"
          autocomplete="name"
          :id="formid"
        ></fds-input>
      </xfds-formgroup>
      <p class="italic">Understøtter autocomplete patterns, som name, tel m.m.</p>

      <h2>Validering</h2>
      <xfds-validate
        :modelValue="txtEfternavn"
        validateFlow="immediate"
        :validations="[hasContent, charactersMinLength(10)]"
        #default="{ isValid, errorMessage }"
      >
        <xfds-formgroup :is-valid="isValid" #default="{ formid }">
          <fds-label :id="formid"> Efternavn </fds-label>
          <fds-fejlmeddelelse v-if="!isValid">
            {{ errorMessage }}
          </fds-fejlmeddelelse>
          <fds-hint>Indtast efternavn - må ikke være tomt og min 10 karaktere</fds-hint>
          <fds-input v-model="txtEfternavn" :id="formid"></fds-input>
        </xfds-formgroup>
      </xfds-validate>

      <xfds-validate
        :modelValue="noBeloeb"
        :validations="[numberMax(500)]"
        #default="{ isValid, errorMessage }"
      >
        <xfds-formgroup :is-valid="isValid" #default="{ formid }">
          <fds-label :id="formid"> Beløb i kr. </fds-label>
          <fds-fejlmeddelelse v-if="!isValid">
            {{ errorMessage }}
          </fds-fejlmeddelelse>
          <fds-hint>Indtast beløb - må ikke overstige 500</fds-hint>
          <fds-input-number v-model="noBeloeb" suffix="kr." :id="formid"></fds-input-number>
        </xfds-formgroup>
      </xfds-validate>

      <h2>Samlet komponent</h2>
      <p class="font-lead">Samlet komponent, med validering</p>
      <xfds-form-input
        label="Mobil nr."
        :modelValue="txtMobil"
        input-type="tel"
        autocomplete="tel"
      />
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
