<template>
  <span
    id="input-type-character-limit-message"
    class="sr-only">Du kan indtaste op til {{ limit }} tegn</span>

  <template v-if="modelValue === null || modelValue.length === 0">
    <span
      class="form-hint character-limit"
      aria-hidden="true">
      Du kan indtaste op til {{ limit }} tegn
    </span>
  </template>

  <template v-if="modelValue && modelValue.length > 0 && modelValue.length <= limit">
    <span
      class="character-limit-sr-only sr-only"
      aria-live="polite">
      Du har {{ ` ${limit - modelValue.length}` }} tegn tilbage
    </span>
    <span
      class="form-hint character-limit"
      aria-hidden="true">
      Du har {{ ` ${limit - modelValue.length}` }} tegn tilbage
    </span>
  </template>

  <template v-if="modelValue && modelValue.length > limit">
    <span
      class="form-hint character-limit limit-exceeded"
      aria-live="polite">
      Du har {{ `${modelValue.length - limit}` }} tegn for meget
    </span>
    <span
      class="character-limit-sr-only sr-only"
      aria-live="polite">
      Du har {{ `${modelValue.length - limit}` }} tegn for meget
    </span>
  </template>
</template>

<script setup lang="ts">
/**
 * Komponent for Karakterbegrænsning
 * https://designsystem.dk/komponenter/inputfelter/#karakterbegraensning
 *
 * */
import { defineProps } from 'vue';

defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  limit: {
    type: Number,
    default: 0,
  },
  // TODO: Reverse ? - eg. du mangler 20 tegner
  // TODO: Hvad med - Du har snart nået grænsen - eg 4000 char på textarea
});
</script>

<style lang="scss">
// TODO: scoped virker ikke
/*
.character-limit {
  margin-top: 4px;
  &.limit-exceeded {
    color: #c00;
  }
}
*/
</style>