<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-formgroup>
        <fds-label> Navn </fds-label>
        <fds-tooltip class="ml-2"> Hjælpende <b>tekst</b> </fds-tooltip>
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="user.name"></fds-input>
      </fds-formgroup>

      <fds-pre header="object data" :json="user" />

      <template #description>
        <p class="italic">
          Komponenten <code>fds-formgroup</code> er et wrapper komponent, der omfavner input,
          labels, m.fl elementer - se koden
        </p>
        <p class="italic">
          Komponenten udstiller(provide) et <code>formid</code> som <code>fds-label</code> selv
          omdanner til <code>for</code> id og <code>fds-[input]</code> elementer benytter som
          <code>id</code>
        </p>
        <p class="italic">
          hvis nødvendigt kan man selv bruge enten
          <code> &lt;fds-formgroup #default="{ formid }" &gt; </code>
          eller selv <code>const formid = inject('formid', null)</code>
        </p>

        <p class="italic"></p>
        <p class="italic">
          Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenstående i sin egen
          validarings-komponent
        </p>
        <p class="italic">
          Komponenten <code>fds-input</code> kan udskiftes med egne komponenter eller eg:
          <code>fds-input-number</code> m.m.
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const user = ref({
  name: '',
});
const code = `
  <fds-formgroup>
    <fds-label> Navn </fds-label>
    <fds-tooltip class="ml-2">
      Hjælpende <b>tekst</b>
    </fds-tooltip>
    <fds-hint>Indtast fornavn</fds-hint>
    <fds-input v-model="user.name"></fds-input>
  </fds-formgroup>
  `;
</script>
