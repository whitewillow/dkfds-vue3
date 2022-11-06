<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-fejlopsummering>
        <template #header> template #header </template>
        <ul class="alert-text">
          <li>Egen liste</li>
          <li>Egen liste</li>
        </ul>
      </fds-fejlopsummering>

      <template #description>
        <p class="italic">
          Fejlopsummeringer bruges til at give overblik over fejl eller mangler, der skal rettes på
          en side eller et trin, før brugeren kan komme videre.
        </p>
        <p>
          Benyt entent <code>template #header</code> eller <b>prop </b>
          <code>:header="Fejlopsummering"</code>
        </p>
      </template>
      <template #code>
        <pre v-text="codeManuelt"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Eksempel med liste">
      <fds-fejlopsummering :list="fejlOpsummering" @fejlklik="fejlKlik = $event" />
      <fds-pre header="Fejl Liste klik" :json="fejlKlik" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, inventore natus dolorem
        reprehenderit a eveniet voluptatum, corrupti eaque quibusdam suscipit nostrum eius
        perferendis adipisci? Unde labore modi minus! Ipsam, recusandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid modi magni iure
        repudiandae, obcaecati cum tempore officia a nemo sequi dolore distinctio expedita nihil
        voluptatum nostrum in veritatis odit.
      </p>
      <h3>anchor1</h3>
      <p id="anchor1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero doloremque a,
        obcaecati distinctio quidem aspernatur at voluptatum dignissimos ducimus, reiciendis
        deserunt similique. Quos veniam natus totam doloribus amet numquam.
      </p>
      <h3>anchor2</h3>
      <p id="anchor2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero doloremque a,
        obcaecati distinctio quidem aspernatur at voluptatum dignissimos ducimus, reiciendis
        deserunt similique. Quos veniam natus totam doloribus amet numquam.
      </p>
      <template #description>
        <p class="italic">
          Fejlopsummeringer bruges til at give overblik over fejl eller mangler, der skal rettes på
          en side eller et trin, før brugeren kan komme videre.
        </p>
        <p>
          Man kan benytte <code>:list="fejlOpsummering"</code> og for klik til anchor funktionalitet
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
import { FdsErrorListItem } from 'dkfds-vue3/src/model/fds.model';

const fejlKlik = ref<FdsErrorListItem | null>(null);

const fejlOpsummering = ref<FdsErrorListItem[]>([
  {
    anchor: 'anchor1',
    text: 'Datoen for udløbsdato på dit pas bør inkludere årstal',
  },
  {
    anchor: 'anchor2',
    text: 'Indtast postnummer - fx 4000',
  },
]);
const code = `
<fds-fejlopsummering
  :list="fejlOpsummering"
  @fejlklik="fejlKlik = $event"
/>

const fejlOpsummering = ref<FdsErrorListItem[]>([
  {
    anchor: 'anchor1',
    text: 'Datoen for udløbsdato på dit pas bør inkludere årstal',
  },
  {
    anchor: 'anchor2',
    text: 'Indtast postnummer - fx 4000',
  },
]);

`;

const codeManuelt = `
<fds-fejlopsummering>
  <template #header>
    Fejlopsummering
  </template>
  <ul class="alert-text">
    <li>Egen liste</li>
    <li>Egen liste</li>
  </ul>
</fds-fejlopsummering>
`;
</script>
