<template>
  <section>
    <fds-component-preview header="Upload">
      <fds-file-upload @upload="fileInput = $event" />

      <fds-pre header="Upload event JSON" :json="fileInput" />

      <h2>Props</h2>
      <div class="col-10">
        <fds-strukturerede-liste header="header">
          <template #header>
            <fds-label class="d-block">header</fds-label>
            <code>string</code>
          </template>
          Overskrift
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header="hint">
          <template #header>
            <fds-label class="d-block">hint</fds-label>
            <code>string</code>
          </template>
          Hjælpetekst
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header="isDisabled">
          <template #header>
            <fds-label class="d-block">isDisabled</fds-label>
            <code>Boolean</code>
          </template>
          Om feltet skal være disabled
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header="contenttypes">
          <template #header>
            <fds-label class="d-block">contenttypes</fds-label>
            <code>Array'&lt;'string'&gt;'</code>
          </template>
          Mulig contenttypes - default:
          <code>['image/png', 'image/jpg', 'image/jpeg', '.pdf', '.doc', '.docx', '.odt']</code>
        </fds-strukturerede-liste>
      </div>

      <template #description>
        <p class="italic">Benyt event <code>@upload</code> til at modtage filen</p>
      </template>
      <template #code>
        <pre v-text="codeUpload"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Download og Slet">
      <p class="form-label">Vedhæftet filer</p>

      <fds-file-list
        :list="filListe"
        @download="filToDownload = $event"
        @delete="filToDelete = $event"
      />

      <fds-pre header="Download JSON" :json="filToDownload" />
      <fds-pre header="Delete JSON" :json="filToDelete" />

      <template #description>
        <p class="italic">
          Benyt event <code>@download</code> eller <code>@delete</code> til at håndtere click events
        </p>
      </template>
      <template #code>
        <pre v-text="codeDownload"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsFileInputModel, FdsFileModel } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const fileInput = ref<FdsFileInputModel | null>(null);
const filToDownload = ref<FdsFileModel | null>(null);
const filToDelete = ref<FdsFileModel | null>(null);
const filListe = ref<FdsFileModel[]>([
  {
    id: 'a',
    filnavn: 'Banankage.jpg',
    type: 'image/jpg',
  },
  {
    id: 'b',
    filnavn: 'Opskrift.pdf',
    type: 'pdf',
  },
  {
    id: 'c',
    filnavn: 'Regnskab.xls',
    type: 'xls',
  },
  {
    id: 'd',
    filnavn: 'KodeFil.json',
    type: 'json',
  },
]);

const codeUpload = `
<fds-file-upload @upload="fileInput = $event"/>
`;

const codeDownload = `
const filListe = ref<FdsFileModel[]>([
  {
    id: 'a',
    filnavn: 'Banankage.jpg',
    type: 'image/jpg',
  },
  {
    id: 'b',
    filnavn: 'Opskrift.pdf',
    type: 'pdf',
  },
  {
    id: 'c',
    filnavn: 'Regnskab.xls',
    type: 'xls',
  },
  {
    id: 'd',
    filnavn: 'KodeFil.json',
    type: 'json',
  },
]);

<fds-file-list
  :list="filListe"
  @download="filToDownload = $event"
  @delete="filToDelete = $event"
/>
`;
</script>
