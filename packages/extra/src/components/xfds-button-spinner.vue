<template>
  <button
    class="button mr-4"
    :class="[`button-${variant}`]"
    :disabled="showSpinner"
    @click="emit('click', $event)"
  >
    <div
      v-if="showSpinner"
      :class="{ 'inner-spinner-white': variant === 'primary' }"
      class="inner-spinner mr-4 icon-svg"
    ></div>
    <svg
      v-if="icon && !showSpinner"
      class="icon-svg rightside-icon"
      focusable="false"
      aria-hidden="true"
    >
      <use :xlink:href="`#${icon}`" />
    </svg>
    <slot v-if="showSpinner && !spinnerText" />
    <span v-if="showSpinner && spinnerText">
      {{ spinnerText }}
    </span>
    <slot v-if="!showSpinner" />
  </button>
  <div
    v-if="showSpinner && useoverlay"
    class="spinneroverlay"></div>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for knap med spinner
 * Umiddelbart ikke en del FDS
 * https://designsystem.dk/komponenter/knapper/
 *
 * */
import { defineProps, PropType, defineEmits } from 'vue';
import { FdsVariantEnum } from 'dkfds-vue3-utils';

defineProps({
  /**
   * Visnings variant
   * */
  variant: {
    type: String as PropType<FdsVariantEnum | string>,
    default: () => FdsVariantEnum.secondary,
  },

  /**
   * Vis spinner
   * */
  showSpinner: {
    type: Boolean,
    default: false,
  },
  /**
   * Spinner tekst - erstatter alm tekst
   * */
  spinnerText: {
    type: String,
    default: null,
  },
  /**
   * Ikon som string
   * */
  icon: {
    type: String,
    default: null,
  },
  /**
   * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
   * */
  useoverlay: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['click']);
</script>

<style lang="scss"></style>
