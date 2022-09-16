<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <fds-button>Gå til næste</fds-button>

    <fds-button variant="secondary">Gå til næste</fds-button>

    <fds-button :variant="FdsVariantEnum.tertiary">Gå til næste</fds-button>

    <fds-button :variant="FdsVariantEnum.error">Gå til næste</fds-button>

    <fds-button :variant="FdsVariantEnum.info">Gå til næste</fds-button>

    <fds-button :variant="FdsVariantEnum.success">Gå til næste</fds-button>

    <fds-button variant="warning">Gå til næste</fds-button>

    <fds-button-icon icon="refresh" variant="primary">Genopfrisk</fds-button-icon>

    <fds-button-icon icon="coronavirus" right variant="primary">Genopfrisk</fds-button-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { FdsVariantEnum } from 'dkfds-vue3';
</script>
