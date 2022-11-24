<template>
  <section>
    <fds-component-preview header="Faneblade Manuelt">
      <fds-faneblade>
        <fds-faneblad-item
          header="Fane 1"
          :selected="fanebladManueltId === '1'"
          @click="fanebladManueltId = $event"
          id="1"
        >
          <h2>Fane 1</h2>
          <p>Manuel styret faneblade</p>
        </fds-faneblad-item>

        <fds-faneblad-item
          @click="fanebladManueltId = $event"
          :selected="fanebladManueltId === '2'"
          id="2"
        >
          <template #header> Template Header </template>
          <h2>Fane 2</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </fds-faneblad-item>
      </fds-faneblade>

      <fds-pre header="Valgt fane" :json="{ fanebladManueltId }" />

      <template #description>
        <p class="italic">
          Anvend kun dropdown menuer, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren
          skal vælge mellem 7 til 15 værdier på en begrænset plads.
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <hr class="my-6" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fanebladManueltId = ref('');

const code = `
<fds-faneblade>
  <fds-faneblad-item
    header="Fane 1"
    :selected="fanebladManueltId === '1'"
    @click="fanebladManueltId = $event"
    id="1">
    <h2>Fane 1</h2>
    <p>Manuel styret faneblade</p>
  </fds-faneblad-item>

  <fds-faneblad-item
    @click="fanebladManueltId = $event"
    :selected="fanebladManueltId === '2'"
    id="2">
    <template #header>
      Template Header
    </template>
    <h2>Fane 2</h2>
    <p>
      Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
      dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
      pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
      semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
      velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
    </p>
  </fds-faneblad-item>
</fds-faneblade>
`;
</script>
