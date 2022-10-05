<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-tilbage-link @click="klikEvent" />
      <br />
      <fds-tilbage-link @click="klikEvent">Egen tekst</fds-tilbage-link>

      <template #description>
        <p class="italic">
          Tilbage-linket gør brugeren i stand til at gå tilbage til forrige trin eller side i en
          selvbetjeningsløsning.
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>

  <section></section>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-alert
const klikEvent = () => window.confirm('KLIK');

const code = `
<fds-tilbage-link @click="klikEvent" />

<fds-tilbage-link @click="klikEvent">Egen tekst</fds-tilbage-link>
`;
</script>
