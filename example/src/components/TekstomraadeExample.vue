<template>
  <section>
    <h2>Enkeltstående komponenter</h2>
    <fds-validate
      :modelValue="txtAfgorelse"
      :validations="[hasContent, charactersMinLength(10)]"
      #default="{ isValid, errorMessage }"
    >
      <fds-formgroup :is-valid="isValid" #default="{ formid }">
        <fds-label :id="formid"> Efternavn </fds-label>
        <fds-fejlmeddelelse v-if="!isValid">
          {{ errorMessage }}
        </fds-fejlmeddelelse>
        <fds-hint>Angive gyldig afgørelse</fds-hint>
        <fds-textarea v-model="txtAfgorelse" :id="formid"></fds-textarea>
      </fds-formgroup>
    </fds-validate>

    <h2>Samlet komponent</h2>
    <fds-form-textarea
      label="Tekst område"
      v-model="txtBeskrivelse"
      :validations="[hasContent, charactersMinLength(10)]"
    />
  </section>
</template>

<script setup lang="ts">
import { FdsFileInputModel, FdsFileModel, FdsNavigationStep } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';
import { charactersMinLength, hasContent, numberMax } from 'dkfds-vue3/src/utils/validate-utils';

const txtAfgorelse = ref('');
const txtBeskrivelse = ref('');
</script>
