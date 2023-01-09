<template>
  <div
    :id="tooltipId"
    class="tooltip-custom">
    <slot />
    <span
      v-if="!hideTooltip"
      class="tooltip-customtext">
      <slot name="tooltip">
        {{ tooltipTekst }}
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { generateId } from 'dkfds-vue3/utils';

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  tooltipTekst: {
    type: String,
    default: '',
  },
  hideTooltip: {
    type: Boolean,
    default: false,
  },
});

const tooltipId = generateId(props.id);
</script>

<style lang="scss" scoped>
.tooltip-custom {
  position: relative;
  display: inline-block;
}

.tooltip-custom .tooltip-customtext {
  visibility: hidden;
  min-width: 120px;
  max-width: 240px;
  background-color: #fff;
  border: 1px solid #747474;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 30%);
  color: #1a1a1a;
  text-align: center;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 0%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  > ul,
  p {
    color: #fff;
  }
}

.tooltip-custom .tooltip-customtext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip-custom:hover .tooltip-customtext {
  visibility: visible;
  opacity: 1;
}
</style>
