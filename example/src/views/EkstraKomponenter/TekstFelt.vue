<template>
  <section>
    <fds-component-preview header="Tekstfelter">
      <xfds-form-input label="Navn" placeholder="e.g: Anders Hansen" v-model="user.name" />

      <xfds-validate :modelValue="user.adress" :validations="[hasContent, charactersMinLength(10)]">
        <xfds-form-input
          label="Adresse"
          hint="Angiv gyldig adresse"
          tooltip="Input tooltip"
          input-type="street-address"
          autocomplete="street-address"
          placeholder="e.g: Jarlsvej 23"
          v-model="user.adress"
        />
      </xfds-validate>

      <xfds-form-input
        inputClass="input-width-xs"
        hint="Prefix og Suffix er muligt"
        label="By"
        v-model="user.city"
        suffix="DK"
      />

      <xfds-form-input label="Søg" v-model="user.search">
        <template #button>
          <button class="button button-search">
            <svg class="icon-svg m-0" aria-hidden="true">
              <use xlink:href="#search"></use></svg
            ><span class="sr-only"> Søg </span>
          </button>
        </template>
      </xfds-form-input>

      <fds-pre header="Object data" :json="user" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-form-input</code> er en samling af komponenter der giver en samlet
          funktionalitet.
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
import { charactersMinLength, hasContent } from 'dkfds-vue3/src/utils/validate-utils';

const user = ref({
  name: '',
  adress: '',
  city: '',
  search: '',
});
const code = `
<xfds-form-input label="Navn" placeholder="e.g: Anders Hansen" v-model="user.name" />

<xfds-validate :modelValue="user.adress" :validations="[hasContent, charactersMinLength(10)]">
  <xfds-form-input
    label="Adresse"
    hint="Angiv gyldig adresse"
    tooltip="Input tooltip"
    input-type="street-address"
    autocomplete="street-address"
    placeholder="e.g: Jarlsvej 23"
    v-model="user.adress"
  />
</xfds-validate>

<xfds-form-input
  inputClass="input-width-xs"
  hint="Prefix og Suffix er muligt"
  label="By"
  v-model="user.city"
  suffix="DK"
/>

<xfds-form-input label="Søg" v-model="user.search">
  <template #button>
    <button class="button button-search">
      <svg class="icon-svg m-0" aria-hidden="true">
        <use xlink:href="#search"></use></svg
      ><span class="sr-only"> Søg </span>
    </button>
  </template>
</xfds-form-input>
`;
</script>
