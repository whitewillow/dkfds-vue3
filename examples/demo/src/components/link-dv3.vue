<template>
  <custom-tooltip
    tooltip-tekst="DKFDS-Vue3 et Komponent bibliotek til DKFDS"
    :hide-tooltip="hideTooltip"
  >
    <span class="dv3-gra dv3-link">
      DKFDS-Vue3
    </span>
  </custom-tooltip>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  hideTooltip: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.dv3-link {
  text-decoration: none;
  font-weight: 600;
  &:visited {
    color: black;
  }
}
</style>
