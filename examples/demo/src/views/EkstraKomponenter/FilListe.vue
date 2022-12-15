<template>
  <section>
    <fds-preview header="Fil liste">
      <fds-preview-item>
        <p class="form-label">
          Vedhæftet filer
        </p>

        <xfds-file-list
          :list="filListe"
          @download="filToDownload = $event"
          @delete="filToDelete = $event"
        />

        <fds-pre
          header="Download JSON"
          :json="filToDownload" />
        <fds-pre
          header="Delete JSON"
          :json="filToDelete" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeDownload"></pre>
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
              <td><code>list</code></td>
              <td><code>Array&lt;FdsFileModel&gt;></code></td>
              <td><code>[]</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>icons</code></td>
              <td><code>Record&lt;string, string&gt;</code></td>
              <td>
                <code>
                  { pdf: 'file-pdf', image: 'file-image', doc: 'file-word', odt: 'file-word', xls:
                  'file-excel', }
                </code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>defaultIcon</code></td>
              <td><code>string</code></td>
              <td><code>'insert-drive-file'</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>canDelete</code></td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>canDownload</code></td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
              <td></td>
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
              <td><code>@download</code></td>
              <td>
                FdsFileModel:
                <code> { id: string; filename: string; label?: string; type: string; } </code>
              </td>
              <td>Ved klik på filens navn</td>
            </tr>
            <tr>
              <td><code>@delete</code></td>
              <td>
                FdsFileModel:
                <code> { id: string; filename: string; label?: string; type: string; } </code>
              </td>
              <td>Ved klik på fjern ikon</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsFileModel } from 'dkfds-vue3-utils';
import { ref } from 'vue';

const filToDownload = ref<FdsFileModel | null>(null);
const filToDelete = ref<FdsFileModel | null>(null);
const filListe = ref<FdsFileModel[]>([
  {
    id: 'a',
    filename: 'Banankage.jpg',
    type: 'image/jpg',
  },
  {
    id: 'b',
    filename: 'Opskrift.pdf',
    type: 'pdf',
  },
  {
    id: 'c',
    filename: 'Regnskab.xls',
    type: 'xls',
  },
  {
    id: 'd',
    filename: 'KodeFil.json',
    type: 'json',
  },
]);

const codeDownload = `
<xfds-file-list
  :list="filListe"
  @download="filToDownload = $event"
  @delete="filToDelete = $event"
/>

const filListe = ref<FdsFileModel[]>([
  {
    id: 'a',
    filename: 'Banankage.jpg',
    type: 'image/jpg',
  },
  {
    id: 'b',
    filename: 'Opskrift.pdf',
    type: 'pdf',
  },
  {
    id: 'c',
    filename: 'Regnskab.xls',
    type: 'xls',
  },
  {
    id: 'd',
    filename: 'KodeFil.json',
    type: 'json',
  },
]);

`;
</script>
