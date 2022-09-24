<template>
  <section>
    <fds-component-preview header="Tekstfelter">
      <xfds-form-input-number
        inputClass="input-width-xxs"
        label="Lager antal"
        v-model="lager.lager"
      />

      <xfds-form-input-number
        label="Forventet lager"
        hint="Angiv gyldig lager antal"
        tooltip="Input tooltip"
        prefix="stk."
        v-model="lager.forventetLager"
        :validations="[numberMin(2)]"
      />

      <xfds-form-input-number
        inputClass="input-width-xs"
        suffix="kr."
        label="Pris"
        v-model="lager.pris"
      />

      <fds-pre :json="lager" />

      <template #description>
        <p class="italic">
          Komponented <code>xfds-form-input-number</code> er en samling af komponenter der giver en
          samlet funktionalitet.
        </p>
        <p class="italic">Understøtter simpel validering, autocomplete m.m.</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { numberMin } from 'dkfds-vue3/src/utils/validate-utils';

const lager = ref({
  lager: '',
  forventetLager: '',
  pris: '',
});
const code = `
<xfds-form-input-number
  inputClass="input-width-xxs"
  label="Lager antal"
  v-model="lager.lager"
/>

<xfds-form-input-number
  label="Forventet lager"
  hint="Angiv gyldig lager antal"
  tooltip="Input tooltip"
  prefix="stk."
  v-model="lager.forventetLager"
  :validations="[numberMin(2)]"
/>

<xfds-form-input-number
  inputClass="input-width-xs"
  suffix="kr."
  label="Pris"
  v-model="lager.pris"
/>`;
</script>
