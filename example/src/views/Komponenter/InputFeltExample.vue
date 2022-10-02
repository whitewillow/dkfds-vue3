<template>
  <section>
    <fds-component-preview header="Tekstfelt">
      <div class="form-group">
        <fds-label id="formid"> Fornavn </fds-label>
        <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="txtFornavn" id="formid"></fds-input>
      </div>

      <fds-pre :json="{ txtFornavn }" />

      <template #description>
        <p class="italic">Tekstfelt</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Karakterbegrænsning">
      <div class="form-group">
        <fds-label id="formid"> Efternavn </fds-label>
        <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="txtEfternavn" id="formid"></fds-input>
        <fds-input-limit
            :modelValue="txtEfternavn"
            :limit="20" />
      </div>

      <fds-pre :json="{ txtEfternavn }" />

      <template #description>
        <p class="italic">Tekstfelt</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Prefix og Suffix">
      <div class="form-group">
        <fds-label id="prefix"> Med prefix </fds-label>
        <fds-input v-model="txtPre" prefix="prefix" id="prefix"></fds-input>
      </div>

      <div class="form-group">
        <fds-label id="txtSuffix"> Med suffix </fds-label>
        <fds-input v-model="txtSuffix" suffix="suffix" id="txtSuffix"></fds-input>
      </div>
      <template #description>
        <p class="italic">
          Prefix og suffix kan bruges til at tydeliggøre, hvordan brugeren skal angive bestemte data
          såsom beløb, antal m.m.
        </p>
      </template>
      <template #code>
        <pre v-text="codePrefixSuffix"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Nummer tekstfelt">
      <div class="form-group">
        <fds-label id="noBeloeb"> Tal/Beløb </fds-label>
        <fds-input-number
          v-model="noBeloeb"
          inputClass="input-width-xs"
          suffix="kr."
          id="noBeloeb"
        ></fds-input-number>
      </div>
      <div>
        <fds-pre :json="{ noBeloeb }" />
      </div>
      <template #description>
        <p class="italic">Nummer tekstfelt.</p>
      </template>
      <template #code>
        <pre v-text="codePrefixSuffix"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const txtFornavn = ref('');
const txtEfternavn = ref('');
const txtPre = ref('');
const txtSuffix = ref('');
const noBeloeb = ref(0);

const code = `
<div class="form-group">
  <fds-label id="formid"> Fornavn </fds-label>
  <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
  <fds-hint>Indtast fornavn</fds-hint>
  <fds-input v-model="txtFornavn" id="formid"></fds-input>
</div>
`;

const codeLimit = `
<div class="form-group">
  <fds-label id="formid"> Efternavn </fds-label>
  <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
  <fds-hint>Indtast fornavn</fds-hint>
  <fds-input v-model="txtEfternavn" id="formid"></fds-input>
  <fds-input-limit
      :modelValue="txtEfternavn"
      :limit="20" />
</div>
`;

const codePrefixSuffix = `
<fds-input v-model="txtPre" prefix="prefix" id="prefix"></fds-input>

<fds-input v-model="txtSuffix" suffix="suffix" id="txtSuffix"></fds-input>

`;
</script>
