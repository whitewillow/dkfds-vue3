<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/radioknap/">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label>Vælg Genre</fds-label>

          <fds-radio-group v-model="radioValueKerne">
            <fds-radio-item value="metal"> Metal </fds-radio-item>
            <fds-radio-item value="pop">
              Pop
              <template #content>
                Pop er som musikgenre den mest udbredte musikstilart i moderne tid - væsentlig mere
                udbredt end fx rock, jazz og folkemusik. Navnet er en afledning af ordet "populær"
                (eng. "popular").
              </template>
            </fds-radio-item>
            <fds-radio-item value="klassisk"> Klassist </fds-radio-item>
          </fds-radio-group>
        </fds-formgroup>

        <fds-pre :json="{ radioValueKerne }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>

      <fds-preview-item>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props (fds-radio-group)</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td><code>null (autoid)</code></td>
              <td>Lytter efter injected formid</td>
            </tr>
            <tr>
              <td><code>v-model</code></td>
              <td><code>string</code></td>
              <td><code>null</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props (radio-item)</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>value</code></td>
              <td><code>string - required</code></td>
              <td><code></code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td><code>null (autoid)</code></td>
              <td>Lytter efter injected formid - bruges til <code>name</code> (radio gruppe)</td>
            </tr>
            <tr>
              <td><code>index</code></td>
              <td><code>string</code></td>
              <td><code>null (autoid/index)</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Slots (radio-item)</th>

              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>content</code></td>
              <td>Hvis radio er valgt vil slut udfoldes og vise indhold</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radioValueKerne = ref('');

const code = `
<fds-formgroup>
  <fds-label>Vælg Genre</fds-label>

  <fds-radio-group v-model="radioValueKerne">
    <fds-radio-item value="metal"> Metal </fds-radio-item>
    <fds-radio-item value="pop">
      Pop
      <template #content>
        Pop er som musikgenre den mest udbredte musikstilart i moderne tid - væsentlig mere
        udbredt end fx rock, jazz og folkemusik. Navnet er en afledning af ordet "populær"
        (eng. "popular").
      </template>
    </fds-radio-item>
    <fds-radio-item value="klassisk"> Klassist </fds-radio-item>
  </fds-radio-group>
</fds-formgroup>
`;
</script>
