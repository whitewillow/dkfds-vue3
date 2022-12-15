<template>
  <li
    v-if="!ordered"
    :class="getListClass">
    <slot />
  </li>
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
   * Mulige hjælpe css class
    current
    active
    disabled

    class="d-flex justify-content-between"

    role="none"
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
