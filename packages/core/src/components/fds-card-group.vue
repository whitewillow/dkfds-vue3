<template>
  <div
    class="card-group"
    :class="getClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 *
 * Card-group -> Komponent for at wrappe cards
 * https://designsystem.dk/komponenter/cards/
 *
 * */
import { computed, defineProps, PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'deck' | 'columns'>,
    default: null,
  },
});

const getClass = computed(() => props.type ?? 'normal');
</script>