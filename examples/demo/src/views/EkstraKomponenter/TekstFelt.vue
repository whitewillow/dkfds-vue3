<template>
  <section>
    <fds-preview header="Tekstfelter">
      <fds-preview-item>
        <xfds-form-input
          v-model="user.name"
          label="Navn"
          placeholder="e.g: Anders Hansen" />

        <xfds-validate
          :model-value="user.adress"
          :validations="[hasContent, charactersMinLength(10)]"
        >
          <xfds-form-input
            v-model="user.adress"
            label="Adresse"
            hint="Angiv gyldig adresse"
            tooltip="Input tooltip"
            input-type="street-address"
            autocomplete="street-address"
            placeholder="e.g: Jarlsvej 23"
          />
        </xfds-validate>

        <xfds-form-input
          v-model="user.city"
          input-class="input-width-xs"
          hint="Prefix og Suffix er muligt"
          label="By"
          suffix="DK"
        />

        <xfds-form-input
          v-model="user.search"
          label="Søg">
          <template #button>
            <button class="button button-search">
              <svg
                class="icon-svg m-0"
                aria-hidden="true">
                <use xlink:href="#search"></use></svg
              ><span class="sr-only">
                Søg
              </span>
            </button>
          </template>
        </xfds-form-input>

        <fds-pre
          header="Object data"
          :json="user" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { charactersMinLength, hasContent } from 'dkfds-vue3/utils';

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
