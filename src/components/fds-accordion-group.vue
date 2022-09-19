<template>
  <div>
    <button
      class="accordion-bulk-button"
      :data-accordion-bulk-expand="collapse"
      @click="toggle">
      Åbn alle
    </button>
    <ul class="accordion">
      <slot :groupcollapse="collapse" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const collapse = ref(true);

const toggle = () => {
  collapse.value = !collapse.value;
};
</script>