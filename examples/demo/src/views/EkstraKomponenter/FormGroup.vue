<template>
  <section>
    <fds-preview header="Form gruppe">
      <fds-preview-item>
        <xfds-form-group
          label="Bil mærke"
          hint="Angiv et mærke"
          tooltip="Hjælp i tooltip">
          <fds-input v-model="maerke" />
        </xfds-form-group>

        <fds-pre
          header="Object data"
          :json="{ maerke }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Form gruppe">
      <fds-preview-item>
        <xfds-form-group
          label="Farver"
          hint="Angiv et alle farver"
          tooltip="Hjælp i tooltip">
          <template #hint>
            <fds-hint>Overstyret hint</fds-hint>
          </template>
          <fds-textarea v-model="farver" />
        </xfds-form-group>

        <fds-pre
          header="Object data"
          :json="{ farver }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code2"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const maerke = ref('');
const farver = ref('');
const code = `
<xfds-form-group label="Bil mærke" hint="Angiv et mærke" tooltip="Hjælp i tooltip">
  <fds-input v-model="maerke" />
</xfds-form-group>

// Eller

<xfds-form-group hint="Angiv et mærke" tooltip="Hjælp i tooltip">
  <template #label>
    <fds-label>Bil mærke</fds-label>
  </template>
  <fds-input v-model="maerke" />
</xfds-form-group>
`;
const code2 = `
<xfds-form-group label="Farver" hint="Angiv et alle farver" tooltip="Hjælp i tooltip">
  <template #hint>
    <fds-hint>Overstyret hint</fds-hint>
  </template>
  <fds-textarea v-model="farver" />
</xfds-form-group>

`;
</script>
