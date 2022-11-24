<template>
  <section>
    <fds-alert variant="info" header="Info" closeable class="mb-8">
      Komponenten benytter ikke DKFDS kalender, da DKFDS script laver om på elementer og ikke
      generisk nok til at bruge i denne sammenhæng
    </fds-alert>

    <fds-component-preview header="Eksempel">
      <fds-formgroup>
        <fds-label> Fødselsdag </fds-label>
        <fds-dato-vaelger v-model="datoValg" @valid="datoValgValid = $event" />
      </fds-formgroup>

      <fds-pre :json="{ datoValg, datoValgValid }" header="JSON DATE format" />

      <template #description>
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
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
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
