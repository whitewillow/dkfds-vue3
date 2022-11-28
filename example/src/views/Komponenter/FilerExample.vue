<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/fil-upload/">
      <fds-formgroup>
        <fds-label> Vedhæft fil </fds-label>
        <fds-file-upload @upload="fileInput = $event"></fds-file-upload>
      </fds-formgroup>

      <fds-pre header="Upload event JSON" :json="fileInput" />

      <template #description>
        <p class="italic">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ullam ea consectetur
          quibusdam magnam autem atque error deleniti enim reiciendis temporibus, deserunt alias
          laborum dolores voluptate quisquam repudiandae similique quod.
        </p>
      </template>
      <fds-preview-code>
        <pre v-text="codeUpload"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>

  <section>
    <p class="form-label" htmlFor="file-list1">Vedhæftet filer</p>

    <fds-file-list
      id="file-list1"
      :list="filListe"
      @download="filToDownload = $event"
      @delete="filToDelete = $event"
    >
    </fds-file-list>

    <hr />
    <p>Eller med embedded header</p>

    <fds-file-list
      :list="filListe"
      @download="filToDownload = $event"
      @delete="filToDelete = $event"
    >
      <p class="form-label">Vedhæftet filer</p>
    </fds-file-list>

    <fds-pre header="Download JSON" :json="filToDownload" />
    <fds-pre header="Delete JSON" :json="filToDelete" />
  </section>
</template>

<script setup lang="ts">
import { FdsFileInputModel, FdsFileModel } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const fileInput = ref<FdsFileInputModel | null>(null);

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
const filToDownload = ref<FdsFileModel | null>(null);
const filToDelete = ref<FdsFileModel | null>(null);

const codeUpload = `
<fds-formgroup >
  <fds-label> Vedhæft fil </fds-label>
  <fds-file-upload @upload="fileInput = $event"></fds-file-upload>
</fds-formgroup>
`;
</script>
