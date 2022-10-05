<template>
  <section>
    <fds-alert level="warning" header="Ikke fastlagt endnu" closeable class="mb-8">
      Komponenten er stadig under udvikling
    </fds-alert>

    <fds-component-preview header="Eksempel">
      <fds-formgroup #default="{ formid }">
        <fds-label :id="formid"> Fødselsdag </fds-label>
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
