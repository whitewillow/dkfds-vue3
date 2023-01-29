<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/design/ikoner/">
      <fds-preview-item>
        <p><fds-ikon icon="home" /> Hjem</p>
        <p><fds-ikon icon="search" /> Søg</p>
        <p><fds-ikon icon="visibility" /> Vis</p>
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
              <td><code>icon</code></td>
              <td><code>string</code></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<p><fds-ikon icon="home" /> Hjem</p>
<p><fds-ikon icon="search" /> Søg</p>
<p><fds-ikon icon="visibility" /> Vis</p>
`;
</script>
