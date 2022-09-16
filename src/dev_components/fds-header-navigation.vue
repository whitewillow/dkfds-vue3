<template>
  <!-- Start: Navigation -->
  <div class="overlay"></div>
  <nav class="nav">
    <button
      class="function-link button-menu-close js-menu-close"
      title="Luk mobil menu">
      <svg
        class="icon-svg"
        aria-hidden="true">
        <use xlink:href="#close"></use></svg>Luk
    </button>

    <!-- Start: Hovedmenu -->
    <div class="navbar navbar-primary">
      <div class="navbar-inner container">
        <ul
          class="nav-primary"
          role="menu">
          <slot />
        </ul>
      </div>
    </div>
    <!-- Slut: Hovedmenu -->
    <slot name="mobil" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>
<style lang="scss" scoped></style>