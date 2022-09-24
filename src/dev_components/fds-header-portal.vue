<template>
  <div class="portal-header portal-header-compact">
    <div class="container portal-header-inner">
      <!-- Start: Portallogo -->
      <a
        href="#"
        aria-label="Portalnavn"
        class="logo">
        <span class="d-none d-print-block">
          Portalnavn
        </span>
      </a>
      <!-- Slut: Portallogo -->

      <button
        class="function-link button-menu-open js-menu-open ml-auto d-print-none"
        aria-haspopup="menu"
        title="Åben mobil menu">
        <svg
          class="icon-svg"
          focusable="false"
          aria-hidden="true">
          <use xlink:href="#menu"></use></svg>Menu
      </button>

      <!-- Start: Persondetaljer -->
      <div class="portal-info">
        <p class="user">
          <slot />
        </p>
        <slot name="button">
          <button
            href="#"
            @click="$emit('logout', $event.target)"
            class="button button-secondary d-print-none">
            Log af
          </button>
        </slot>
      </div>
      <!-- Slut: Persondetaljer -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  skipNavigationsTekst: {
    type: String,
    default: 'Gå til sidens indhold', // primary|secondary|
  },
});
</script>
<style lang="scss" scoped></style>