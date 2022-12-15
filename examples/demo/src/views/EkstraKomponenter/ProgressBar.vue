<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <xfds-form-input-number
          v-model="progress"
          label="Angiv progress"
          suffix="%" />

        <xfds-progressbar
          :procent="progress"
          :show-progress="false"
          style="height: 2px"
          variant="primary"
        />

        <xfds-progressbar :procent="progress" />

        <xfds-progressbar
          :procent="progress"
          style="height: 50px"
          variant="primary" />

        <xfds-progressbar
          :procent="progress"
          variant="info" />

        <xfds-progressbar
          :procent="progress"
          variant="success">
          På vej mod success - {{ progress }}%
        </xfds-progressbar>

        <xfds-progressbar
          :procent="progress"
          variant="warning" />

        <xfds-progressbar
          :procent="progress"
          variant="error" />
      </fds-preview-item>
      <fds-preview-item>
        <p class="italic">
          Komponenten <code>xfds-progressbar</code> viser, med procent fra 0-100, tilstanden for et
          "job"
        </p>

        <p class="italic">
          Det er muligt at angive tekst - men vær varsom med for megen tekst
        </p>
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
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
