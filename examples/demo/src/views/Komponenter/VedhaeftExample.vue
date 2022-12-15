<template>
  <section>
    <fds-preview
      header="Upload"
      href="https://designsystem.dk/komponenter/fil-upload/">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label>Vedhæft fil</fds-label>
          <fds-file-upload @upload="fileInput = $event" />
        </fds-formgroup>
        <fds-pre
          header="Upload event JSON"
          :json="fileInput" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeUpload"></pre>
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
              <td><code>formid</code></td>
              <td>Se form gruppe</td>
            </tr>
            <tr>
              <td><code>contenttypes</code></td>
              <td><code>Array&lt;string&gt;</code></td>
              <td>
                <code
                >['image/png', 'image/jpg', 'image/jpeg', '.pdf', '.doc', '.docx', '.odt']</code
                >
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>removeContentHeaders</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Fjerner eg: <code>data:application/pdf;base64,</code> fra data</td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Events</th>
              <th>Returns</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>@upload</code></td>
              <td>
                FdsFileInputModel:
                <code> { filename: string; type: string; size: number; data: string; } </code>
              </td>
              <td>Upload fil event</td>
            </tr>
            <tr>
              <td><code>@error</code></td>
              <td>
                <code> Error</code>
              </td>
              <td>Ved upload fejl</td>
            </tr>
            <tr>
              <td><code>@dirty</code></td>
              <td>
                <code>Boolean</code>
              </td>
              <td>Om input feltet er blevet berørt</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsFileInputModel } from 'dkfds-vue3-utils';
import { ref } from 'vue';

const fileInput = ref<FdsFileInputModel | null>(null);
const codeUpload = `
<fds-formgroup>
  <fds-label>Vedhæft fil</fds-label>
  <fds-file-upload @upload="fileInput = $event" />
</fds-formgroup>
`;
</script>
