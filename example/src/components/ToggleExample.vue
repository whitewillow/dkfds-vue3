<template>
  <section>
    <fds-toggle-switch v-model="toggleswitch" />
    <div>
      <fds-pre :json="{ toggleswitch }" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toggleswitch = ref(false);
</script>
