<template>
  <section>
    <div class="row">
      <div class="col">
        <fds-spinner></fds-spinner>
      </div>
    </div>

    <h4>Eller med tekst</h4>
    <div class="col">
      <fds-spinner>Arbejder</fds-spinner>
    </div>
    <div class="col">
      <p class="form-label d-flex justify-content-start">
        <span>Super</span>
        <fds-spinner class="spinner spinner-small d-inline-flex ml-4"></fds-spinner>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsFileInputModel, FdsFileModel, FdsNavigationStep } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';
</script>
