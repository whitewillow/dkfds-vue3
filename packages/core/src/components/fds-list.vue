<template>
  <ul
    v-if="!ordered"
    :class="getListClass">
    <slot />
  </ul>
  <ol
    v-else
    :class="getListClass">
    <slot />
  </ol>
</template>

<script setup lang="ts">
/**
 *
 * Komponent til generel brug af lister (UL)
 *
 * */
import { computed, defineProps } from 'vue';

const props = defineProps({
  /**
    bordered-list
    unstyled-list
    nobullet-list
    overflow-list
  * */

  /**
   * Type af liste
   * */
  variant: {
    type: String as () => 'bordered' | 'unstyled' | 'nobullet',
    default: null,
  },
  ordered: {
    type: Boolean,
    default: false,
  },
});

const getListClass = computed(() => (props.variant ? `${props.variant}-list` : ''));
</script>
