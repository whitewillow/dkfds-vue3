<template>
  <section>
    <div class="form-group">
      <fds-label id="formid"> Fornavn </fds-label>
      <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
      <fds-hint>Indtast fornavn</fds-hint>
      <fds-input v-model="txtFornavn" id="formid"></fds-input>
    </div>
    <div class="form-group">
      <fds-label id="prefix"> Med prefix </fds-label>
      <fds-input v-model="txtPre" prefix="prefix" id="prefix"></fds-input>
    </div>
    <div class="form-group">
      <fds-label id="txtSuffix"> Med suffix </fds-label>
      <fds-input v-model="txtSuffix" suffix="suffix" id="txtSuffix"></fds-input>
    </div>
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
      <fds-pre :json="{ txtFornavn, txtPre, txtSuffix, noBeloeb }" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FdsNavigationStep, FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';

const txtFornavn = ref('');
const txtPre = ref('');
const txtSuffix = ref('');
const noBeloeb = ref(0);
</script>
