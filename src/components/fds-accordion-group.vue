<template>
  <div>
    <button
      class="accordion-bulk-button"
      :data-accordion-bulk-expand="!refActive"
      @click="onToggle">
      {{ `${refActive ? activeText : nonActiveText}` }}
    </button>
    <div class="accordion-group">
      <slot :groupActive="refActive" />
    </div>
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

const onToggle = () => {
  refActive.value = !refActive.value;
};
</script>

<style lang="scss">
.accordion-group {
  > div {
    margin-bottom: 0.8rem;
  }
}
</style>