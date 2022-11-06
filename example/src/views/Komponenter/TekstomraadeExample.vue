<template>
  <section>
    <h2>Enkeltstående komponenter</h2>
    <xfds-validate
      :modelValue="txtAfgorelse"
      :validations="[hasContent, charactersMinLength(10)]"
      #default="{ isValid, errorMessage }"
    >
      <fds-formgroup :is-valid="isValid">
        <fds-label> Efternavn </fds-label>
        <fds-fejlmeddelelse v-if="!isValid">
          {{ errorMessage }}
        </fds-fejlmeddelelse>
        <fds-hint>Angive gyldig afgørelse</fds-hint>
        <fds-textarea v-model="txtAfgorelse"></fds-textarea>
      </fds-formgroup>
    </xfds-validate>

    <h2>Samlet komponent</h2>
    <xfds-form-textarea
      label="Tekst område"
      v-model="txtBeskrivelse"
      :validations="[hasContent, charactersMinLength(10)]"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { charactersMinLength, hasContent } from 'dkfds-vue3/src/utils/validate-utils';

const txtAfgorelse = ref('');
const txtBeskrivelse = ref('');
</script>
