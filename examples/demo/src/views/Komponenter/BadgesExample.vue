<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/badges/">
      <fds-preview-item>
        <p>
          <fds-badge class="mr-4">
            Normal
          </fds-badge>
          <fds-badge size="small">
            small
          </fds-badge>
        </p>
        <p>
          <fds-badge
            class="mr-4"
            variant="success">
            success
          </fds-badge>
          <fds-badge
            class="mx-4"
            variant="info">
            success
          </fds-badge>
          <fds-badge
            class="mx-4"
            variant="warning">
            warning
          </fds-badge>
          <fds-badge
            class="mx-4"
            variant="error">
            error
          </fds-badge>
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
              <td><code>size</code></td>
              <td><code>'small' | 'large'</code></td>
              <td><code>large</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td><code>'success' | 'info' | 'warning' | 'error'</code></td>
              <td>
                <code>null</code>
              </td>
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
<fds-badge class="mr-4"> Normal </fds-badge>
<fds-badge size="small"> Normal small </fds-badge>
<fds-badge variant="success"> success </fds-badge>
<fds-badge variant="info"> success </fds-badge>
<fds-badge variant="warning"> warning </fds-badge>
<fds-badge variant="error"> error </fds-badge>
`;
</script>
