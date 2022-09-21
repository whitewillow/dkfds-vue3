<template>
  <section>
    <h2 class="mt-0">Sidenavigation</h2>
    <fds-sidenavigation-tabs :list="sideTabs">
      <template v-slot:[`suppe`]>
        <h2>Suppe</h2>
        <p>
          Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
          dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
          pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
          semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
          velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
        </p>
      </template>
      <template v-slot:[`dessert`]>
        <h2>Dessert</h2>
        <p>
          Autogeneret faner ud fra liste, hvor man kan lave tilhørende template refereret med "key"

          <fds-pre>
            {{`${`<template v-slot:[\`dessert\`]> Mit Indhold </template>
            `}`}}
          </fds-pre>
        </p>
      </template>
      <template v-slot:[`kod`]>
        <h2>Kød</h2>
        <p>
          Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
          dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
          pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
          semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
          velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
        </p>
      </template>
      <template v-slot:[`fisk`]>
        <h2>Fisk</h2>
        <p>
          Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
          dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
          pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
          semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
          velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
        </p>
      </template>
    </fds-sidenavigation-tabs>
  </section>
</template>

<script setup lang="ts">
import { FdsFileInputModel, FdsFileModel, FdsNavigationStep } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const sideTabs: FdsNavigationStep[] = [
  {
    order: 0,
    key: 'suppe',
    title: 'Supper',
    help: '',
    done: true,
  },
  {
    order: 1,
    key: 'dessert',
    title: 'Dessert',
    help: 'Hjælpetekst',
    active: true,
  },
  {
    order: 2,
    key: 'kod',
    title: 'Kød',
    help: '',
  },
  {
    order: 3,
    key: 'fisk',
    title: 'Fisk',
    help: '',
    disabled: true,
  },
] as unknown as FdsNavigationStep[];
</script>
