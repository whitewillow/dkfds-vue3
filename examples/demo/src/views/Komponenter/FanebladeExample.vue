<template>
  <section>
    <fds-preview
      header="Faneblade Manuelt"
      href="https://designsystem.dk/komponenter/faneblade/">
      <fds-preview-item>
        <fds-faneblade>
          <fds-faneblad-item
            id="1"
            header="Fane 1"
            :selected="fanebladManueltId === '1'"
            @click="fanebladManueltId = $event"
          >
            <h2>Fane 1</h2>
            <p>Manuel styret faneblade</p>
          </fds-faneblad-item>

          <fds-faneblad-item
            id="2"
            :selected="fanebladManueltId === '2'"
            @click="fanebladManueltId = $event"
          >
            <template #header>
              Template Header
            </template>
            <h2>Fane 2</h2>
            <p>
              Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
              dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci.
              Mauris pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere
              elit, quis semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent
              vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem
              massa eget urna.
            </p>
          </fds-faneblad-item>
        </fds-faneblade>

        <fds-pre
          header="Valgt fane"
          :json="{ fanebladManueltId }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>

      <fds-preview-item>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td><code>auto</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>header</code></td>
              <td><code>string</code></td>
              <td><code>Fane</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>selected</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>

    <hr class="my-6" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fanebladManueltId = ref('1');

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
