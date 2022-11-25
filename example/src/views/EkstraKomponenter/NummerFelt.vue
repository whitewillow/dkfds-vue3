<template>
  <section>
    <fds-preview header="Nummer felt">
      <fds-preview-item>
        <xfds-form-input-number
          inputClass="input-width-xxs"
          label="Lager antal"
          v-model="lager.lager"
        />

        <xfds-validate :modelValue="lager.forventetLager" :validations="[numberMin(2)]">
          <xfds-form-input-number
            label="Forventet lager"
            hint="Angiv gyldig lager antal"
            tooltip="Input tooltip"
            prefix="stk."
            v-model="lager.forventetLager"
          />
        </xfds-validate>

        <xfds-form-input-number
          inputClass="input-width-xs"
          suffix="kr."
          label="Pris"
          v-model="lager.pris"
        />

        <fds-pre header="Object data" :json="lager" />
      </fds-preview-item>
      <hr />

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
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

<xfds-validate :modelValue="lager.forventetLager" :validations="[numberMin(2)]">
  <xfds-form-input-number
    label="Forventet lager"
    hint="Angiv gyldig lager antal"
    tooltip="Input tooltip"
    prefix="stk."
    v-model="lager.forventetLager"
  />
</xfds-validate>

<xfds-form-input-number
  inputClass="input-width-xs"
  suffix="kr."
  label="Pris"
  v-model="lager.pris"
/>`;
</script>
