<template>
  <section>
    <h2>Dropdown-menu</h2>
    <fds-formgroup>
      <fds-dropdown :options="dropdownOptions" v-model="dropdownVal" />
    </fds-formgroup>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';

const dropdownVal = ref('');
const dropdownOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
]);
</script>
