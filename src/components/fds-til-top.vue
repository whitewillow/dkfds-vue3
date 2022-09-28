<template>
  <a
    class="back-to-top-button button button-tertiary d-print-none"
    href="#top"><svg
                class="icon-svg"
                aria-hidden="true">
                <use xlink:href="#arrow-upward"></use>
              </svg>
    <span class="d-none d-md-inline-block">
      <slot> Til toppen </slot>
    </span>
  </a>
</template>

<script setup lang="ts">
/**
 *
 * Tilbage til toppen
 * https://designsystem.dk/kode/komponenter/tilbage-til-top/
 *
 * */
import { defineProps, computed } from 'vue';
</script>

<style scoped lang="scss"></style>