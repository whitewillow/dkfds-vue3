<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/fejlopsummering/">
      <fds-preview-item>
        <fds-fejlopsummering header="Fejl">
          <ul class="alert-text">
            <li>Egen liste</li>
            <li>Egen liste</li>
          </ul>
        </fds-fejlopsummering>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeManuelt"></pre>
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
              <td><code>header</code></td>
              <td><code>string</code></td>
              <td><code>'Fejlopsummering'</code></td>
              <td>lytter efter provideErrorMessage og sættes som default indhold i slot</td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Slots</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>header</code></td>
              <td><code>props.header</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const codeManuelt = `
<fds-fejlopsummering header="Fejl">
  <ul class="alert-text">
    <li>Egen liste</li>
    <li>Egen liste</li>
  </ul>
</fds-fejlopsummering>
`;
</script>
