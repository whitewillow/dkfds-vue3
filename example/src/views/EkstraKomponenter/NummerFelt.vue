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

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>

      <fds-preview-item>
        <!-- <info-table :json-string="propTest"> </info-table> -->

        <table class="table table--responsive-headers">
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="Props"><code>variant</code></td>
              <td data-title="Type">
                <code>'primary' | 'secondary' | 'tertiary' | 'quaternary'</code>
              </td>
              <td data-title="Default"><code>secondary</code></td>
              <td data-title="Beskrivelse"></td>
            </tr>
            <tr>
              <td data-title="Props"><code>showSpinner</code></td>
              <td data-title="Type"><code>boolean</code></td>
              <td data-title="Default"><code>false</code></td>
              <td data-title="Beskrivelse"></td>
            </tr>
            <tr>
              <td data-title="Props"><code>spinnerText</code></td>
              <td data-title="Type"><code>string</code></td>
              <td data-title="Default"><code>null</code></td>
              <td data-title="Beskrivelse">Spinner tekst - erstatter alm tekst</td>
            </tr>
            <tr>
              <td data-title="Props"><code>icon</code></td>
              <td data-title="Type"><code>string</code></td>
              <td data-title="Default"><code>null</code></td>
              <td data-title="Beskrivelse"></td>
            </tr>

            <tr>
              <td data-title="Props"><code>disabled</code></td>
              <td data-title="Type"><code>boolean</code></td>
              <td data-title="Default"><code>false</code></td>
              <td data-title="Beskrivelse"></td>
            </tr>
            <tr>
              <td data-title="Props"><code>useoverlay</code></td>
              <td data-title="Type"><code>boolean</code></td>
              <td data-title="Default"><code>false</code></td>
              <td data-title="Beskrivelse">
                Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
              </td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { numberMin } from 'dkfds-vue3/src/utils/validate-utils';

const props = defineProps({
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

const propTest = `
{
  /**
   * Overskrift
   * */
  header: {
    type: String,
  },
  /**
   * Hjælpetekst
   * */
  hint: {
    type: String,
    default: '',
  },
  /**
   * Er Accordion Åben = aktiv
   * */
  expanded: {
    type: Boolean,
    default: false,
  },
  /**
   * Disabled
   * */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Variant - ikon der vises til højre
   * */
  variant: {
    type: String as PropType<'success' | 'warning' | 'error'>,
    default: null,
  },
  /**
   * Tilhørende tekst til varianten
   * */
  variantText: {
    type: String,
    default: '',
  },
}
`;

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
