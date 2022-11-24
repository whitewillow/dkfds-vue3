<template>
  <section>
    <fds-component-preview header="Faneblade Manuelt">
      <fds-faneblade>
        <fds-faneblad-item header="Fane 1" selected @click="fanebladManueltId = $event" id="1">
          <h2>Fane 1</h2>
          <p>Manuel styret faneblade</p>
        </fds-faneblad-item>

        <fds-faneblad-item header="Fane 2" @click="fanebladManueltId = $event" id="2">
          <h2>Fane 1</h2>
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

    <fds-component-preview header="Faneblade - automatiseret">
      <xfds-faneblade :list="faneBlade">
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
            Autogeneret faner ud fra liste, hvor man kan lave tilhørende template refereret med
            "key"

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
      </xfds-faneblade>
      <template #description>
        <p class="italic">
          Anvend kun dropdown menuer, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren
          skal vælge mellem 7 til 15 værdier på en begrænset plads.
        </p>
      </template>
      <template #code>
        <pre v-text="codeauto"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FdsTabItem } from 'dkfds-vue3/src/model/fds.model';

const fanebladManueltId = ref('');
const faneBlade: FdsTabItem[] = [
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
] as unknown as FdsTabItem[];

const code = `
<fds-faneblad-item
    header="Fane 1"
    selected
    @click="fanebladManueltId = $event"
    id="1"
  >
    <h2>Fane 1</h2>
    <p>Manuel styret faneblade</p>
  </fds-faneblad-item>

  <fds-faneblad-item header="Fane 2" @click="fanebladManueltId = $event" id="2">
    <h2>Fane 1</h2>
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

const codeauto = `
<xfds-faneblade :list="faneBlade">
  <template v-slot:[\`suppe\`]>
    <h2>Suppe</h2>
    <p>
      Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
      dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
      pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
      semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
      velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
    </p>
  </template>
  <template v-slot:[\`dessert\`]>
    <h2>Dessert</h2>
    <p>
      Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue.
    </p>
  </template>
  <template v-slot:[\`kod\`]>
    <h2>Kød</h2>
    <p>
      Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue.
    </p>
  </template>
  <template v-slot:[\`fisk\`]>
    <h2>Fisk</h2>
    <p>
      Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue
    </p>
  </template>
</fds-faneblade-list>

const faneBlade: FdsTabItem[] = [
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
] as unknown as FdsTabItem[];
`;
</script>
