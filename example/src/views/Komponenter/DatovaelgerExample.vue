<template>
  <section>
    <fds-alert variant="info" header="Info" closeable class="mb-8">
      Komponenten benytter ikke DKFDS kalender, da DKFDS script laver om på elementer og ikke
      generisk nok til at bruge i denne sammenhæng
    </fds-alert>

    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label> Fødselsdag </fds-label>
          <fds-dato-vaelger v-model="datoValg" @valid="datoValgValid = $event" />
        </fds-formgroup>

        <fds-pre :json="{ datoValg, datoValgValid }" header="JSON DATE format" />
      </fds-preview-item>
      <hr />
      <fds-preview-item>
        <p class="italic">
          Datovælger benytter standard dato type <code>&lt;input type="date"&gt;</code>
        </p>
        <p>Dette betyder at pattern og min og max datoer sættes som standarden angiver.</p>
        <p>
          Se mere under
          <br />
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date"
            >https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date</a
          >
          <br />
          <a href="https://www.w3schools.com/tags/att_input_type_date.asp"
            >https://www.w3schools.com/tags/att_input_type_date.asp</a
          >
        </p>
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
              <td><code>v-model</code></td>
              <td><code>yyyy-mm-dd</code></td>
              <td><code>''</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const datoValg = ref('2022-12-01');
const datoValgValid = ref(true);

const code = `
<fds-dato-vaelger v-model="datoValg" />

const datoValg = ref('2022-12-01');
const datoValgValid = ref(true);
`;
</script>
