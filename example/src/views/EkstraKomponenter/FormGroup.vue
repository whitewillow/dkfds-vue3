<template>
  <section>
    <fds-component-preview header="Form gruppe">
      <xfds-form-group label="Bil mærke" hint="Angiv et mærke" tooltip="Hjælp i tooltip">
        <fds-input v-model="maerke" />
      </xfds-form-group>

      <fds-pre header="Object data" :json="{ maerke }" />

      <template #description>
        <p class="italic">
          <code>xfds-form-group</code> wrapper et valgfrit komponent, i dette eks. er det
          <code>fds-input</code>.
        </p>
        <p class="italic">
          <code>xfds-form-group</code> giver dig let adgang til label, hint tooltip, tooltip,
          fejlmeddelelse som alle også har tilhørende templates
        </p>

        <p>
          Samme provide og inject som
          <router-link :to="{ name: 'komponentformgruppe' }"> Formgruppe </router-link> og

          <router-link :to="{ name: 'komponentfejlmeddelelser' }"> Fejlmeddelelse </router-link>
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Form gruppe">
      <xfds-form-group label="Farver" hint="Angiv et alle farver" tooltip="Hjælp i tooltip">
        <template #hint>
          <fds-hint>Overstyret hint</fds-hint>
        </template>
        <fds-textarea v-model="farver" />
      </xfds-form-group>

      <fds-pre header="Object data" :json="{ farver }" />

      <template #description>
        <p class="italic"></p>
      </template>
      <template #code>
        <pre v-text="code2"></pre>
      </template>
    </fds-component-preview>
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
