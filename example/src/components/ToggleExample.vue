<template>
  <section>
    <h1 class="mt-0">Toggle switch</h1>
    <fds-toggle-switch v-model="toggleswitch" />
    <div>
      {{ toggleswitch }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsFileInputModel, FdsFileModel, FdsNavigationStep } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const toggleswitch = ref(false);
</script>
