<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item href="https://designsystem.dk/komponenter/inputfelter/">
        <fds-formgroup>
          <fds-label> Navn </fds-label>
          <fds-tooltip class="ml-2">
            Hjælpende <b>tekst</b>
          </fds-tooltip>
          <fds-hint>Indtast fornavn</fds-hint>
          <fds-input v-model="user.name"></fds-input>
        </fds-formgroup>

        <fds-pre
          header="object data"
          :json="user" />
      </fds-preview-item>

      <hr />

      <fds-preview-item>
        <p class="italic">
          Komponenten <code>fds-formgroup</code> er et wrapper komponent, der omfavner input,
          labels, m.fl elementer - se koden
        </p>

        <p class="h4">
          Props
        </p>
        <table class="table table--compact">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>isValid</code></td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
              <td>Hvis false sættes class form-error</td>
            </tr>
          </tbody>
        </table>

        <p class="h4">
          Provide
        </p>
        <table class="table table--compact">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>formid</code></td>
              <td><code>string</code></td>
              <td><code>Auto id</code></td>
              <td>Udstiller form id</td>
            </tr>
          </tbody>
        </table>

        <p class="h4">
          Inject
        </p>
        <table class="table table--compact">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>provideIsValid</code></td>
              <td><code>boolean</code></td>
              <td>lytter efter provideIsValid, vægtes højere end props.isValid</td>
            </tr>
          </tbody>
        </table>

        <p class="italic">
          Komponenten udstiller(provide) et <code>formid</code> som <code>fds-label</code> selv
          omdanner til <code>for</code> id og <code>fds-[input]</code> elementer benytter som
          <code>id</code>
        </p>
        <p class="italic">
          Hvis nødvendigt kan man selv bruge enten
          <code> &lt;fds-formgroup #default="{ formid }" &gt; </code>
          eller selv <code>const formid = inject('formid', null)</code>
        </p>

        <p class="italic"></p>
        <p class="italic">
          Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenstående i sin egen
          validarings-komponent
        </p>
        <p class="italic">
          Komponenten <code>fds-input</code> kan udskiftes med egne komponenter eller eg:
          <code>fds-input-number</code> m.m.
        </p>
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const user = ref({
  name: '',
});
const code = `
  <fds-formgroup>
    <fds-label> Navn </fds-label>
    <fds-tooltip class="ml-2">
      Hjælpende <b>tekst</b>
    </fds-tooltip>
    <fds-hint>Indtast fornavn</fds-hint>
    <fds-input v-model="user.name"></fds-input>
  </fds-formgroup>
  `;
</script>
