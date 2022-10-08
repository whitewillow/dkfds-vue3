<template>
  <div>
    <button
      class="accordion-bulk-button"
      :data-accordion-bulk-expand="!refActive"
      @click="toggle">
      {{ `${refActive ? activeText : nonActiveText}` }}
    </button>
    <ul class="accordion">
      <slot :groupActive="refActive" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps({
  /**
   * Tekst ved Lukket tilstand - Åbn alle
   * */
  nonActiveText: {
    type: String,
    default: 'Åbn alle',
  },
  /**
   * Tekst ved Åben tilstand - Luk alle
   * */
  activeText: {
    type: String,
    default: 'Luk alle',
  },
});

const refActive = ref(false);

const toggle = () => {
  refActive.value = !refActive.value;
};
</script>