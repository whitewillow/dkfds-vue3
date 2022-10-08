<template>
  <div>
    <button
      class="accordion-bulk-button"
      :data-accordion-bulk-expand="collapse"
      @click="toggle">
      {{ `${collapse ? openText : closeText}` }}
    </button>
    <ul class="accordion">
      <slot :groupcollapse="collapse" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps({
  /**
   * Tekst ved Lukket tilstand - Åbn alle
   * */
  openText: {
    type: String,
    default: 'Åbn alle',
  },
  /**
   * Tekst ved Åben tilstand - Luk alle
   * */
  closeText: {
    type: String,
    default: 'Luk alle',
  },
});

const collapse = ref(true);

const toggle = () => {
  collapse.value = !collapse.value;
};
</script>