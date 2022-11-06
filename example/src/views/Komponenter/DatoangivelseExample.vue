<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-formgroup>
        <fds-label> Indsendelsesfrist </fds-label>
        <fds-dato-angivelse v-model="datoAngiv" @valid="datoAngivValid = $event" />
      </fds-formgroup>
      <fds-pre :json="{ datoAngiv, datoAngivValid }" header="JSON DATE format" />

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

const datoAngiv = ref('2022-12-01');
const datoAngivValid = ref(true);

const code = `
<fds-dato-angivelse v-model="datoAngiv" />

const datoAngiv = ref('2022-12-01');
const datoAngivValid = ref(true);
`;
</script>
