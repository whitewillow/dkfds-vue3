<template>
  <div>
    <slot name="header">
      <button
        v-if="false"
        class="accordion-bulk-button"
        :data-accordion-bulk-expand="!refExpanded"
        @click="onToggle">
        {{ `${refExpanded ? expandedText : collapsedText}` }}
      </button>
    </slot>
    <div class="accordion-group">
      <slot :groupActive="refExpanded" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref, defineProps, provide, computed,
} from 'vue';

defineProps({
  /**
   * Tekst ved Lukket tilstand - Åbn alle
   * */
  collapsedText: {
    type: String,
    default: 'Åbn alle',
  },
  /**
   * Tekst ved Åben tilstand - Luk alle
   * */
  expandedText: {
    type: String,
    default: 'Luk alle',
  },
});

// TODO: Overvej single select (collapse andre) og multiselect (multi default) ?
// TODO: Group expand/

const refExpanded = ref(false);
const compExpanded = computed(() => refExpanded.value);
provide('provideGroupExpanded', compExpanded);

const onToggle = () => {
  refExpanded.value = !refExpanded.value;
};
</script>

<style lang="scss">
.accordion-group {
  > div {
    margin-bottom: 0.8rem;
  }
}
</style>