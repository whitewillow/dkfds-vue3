<template>
  <section>
    <fds-preview header="Nummer felt">
      <fds-preview-item>
        <xfds-form-input-number
          v-model="lager.lager"
          input-class="input-width-xxs"
          placeholder="Angiv antal"
          label="Lager antal"
        />

        <xfds-validate
          :model-value="lager.forventetLager"
          :validations="[numberMin(2)]">
          <xfds-form-input-number
            v-model="lager.forventetLager"
            label="Forventet lager"
            hint="Angiv gyldig lager antal"
            tooltip="Input tooltip"
            prefix="stk."
          />
        </xfds-validate>

        <xfds-form-input-number
          v-model="lager.pris"
          input-class="input-width-xs"
          suffix="kr."
          label="Pris"
        />

        <fds-pre
          header="Object data"
          :json="lager" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { numberMin } from 'dkfds-vue3/utils';

defineProps({
  test: {
    type: String,
    default: 'Banana',
    description: 'asdadsads',
  },
});

const lager = ref({
  lager: '',
  forventetLager: '',
  pris: '',
});

const code = `
<xfds-form-input-number
  input-class="input-width-xxs"
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
  input-class="input-width-xs"
  suffix="kr."
  label="Pris"
  v-model="lager.pris"
/>`;
</script>
