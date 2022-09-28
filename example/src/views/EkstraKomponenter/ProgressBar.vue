<template>
  <section>
    <fds-component-preview header="Eksempel">
      <xfds-form-input-number label="Angiv progress" v-model="progress" suffix="%" />

      <xfds-progressbar
        :procent="progress"
        :showProgress="false"
        style="height: 2px"
        variant="primary"
      />

      <xfds-progressbar :procent="progress" />

      <xfds-progressbar :procent="progress" style="height: 50px" variant="primary" />

      <xfds-progressbar :procent="progress" variant="info" />

      <xfds-progressbar :procent="progress" variant="success">
        På vej mod success - {{ progress }}%
      </xfds-progressbar>

      <xfds-progressbar :procent="progress" variant="warning" />

      <xfds-progressbar :procent="progress" variant="error" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-progressbar</code> viser, med procent fra 0-100, tilstanden for et
          "job"
        </p>

        <p class="italic">Det er muligt at angive tekst - men vær varsom med for megen tekst</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const progress = ref(46);
const code = `
  <xfds-progressbar :procent="45" />
  
  <xfds-progressbar
    :procent="progress"
    :showProgress="false"
    style="height: 2px"
    variant="primary"
  />
  
  <xfds-progressbar
    :procent="progress"
    variant="success">
    På vej mod success - {{ progress }}%
  </xfds-progressbar>
  `;
</script>
