<template>
  <header class="header">
    <a class="skipnav" href="#main-content">Gå til sidens indhold</a>
    <!-- Start: Portal header -->
    <div class="portal-header portal-header-compact">
      <div class="container portal-header-inner">
        <!-- Start: Portallogo -->
        <a href="#" aria-label="Portalnavn" class="logo"><span class="d-none d-print-block">Portalnavn</span></a>
        <!-- Slut: Portallogo -->

        <button class="function-link button-menu-open js-menu-open ml-auto d-print-none" aria-haspopup="menu" title="Åben mobil menu">
          <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#menu"></use></svg>Menu
        </button>

        <!-- Start: Persondetaljer -->
        <div class="portal-info">
          <p class="user">Anders Andersen, Forsikringens Forsikringsfirma</p>
          <button href="#" class="button button-secondary d-print-none">Log af</button>
        </div>
        <!-- Slut: Persondetaljer -->
      </div>
    </div>
    <!-- Slut: Portal header -->

    <!-- Start: Løsningsheader -->
    <div class="solution-header">
      <div class="container solution-header-inner">
        <div class="solution-heading">
          <a href="#">En langt langt længere løsningstitel</a>
        </div>

        <!--2B: Solution header: Authority name + text -->
        <div class="solution-info">
          <p class="h5 authority-name">Myndighedsnavn</p>
          <p>
            Support: 12 34 56 78
            <span class="d-print-none">·
              <a href="#" class="icon-link function-link alert-leave">Kontakt<svg class="icon-svg" aria-hidden="true" focusable="false"><use xlink:href="#open-in-new"></use></svg></a></span>
          </p>
        </div>
      </div>
    </div>
    <!-- Slut: Løsningsheader -->
    <slot name="navigation" />
    <!-- Slut: Navigation -->
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

</script>
<style lang="scss" scoped></style>