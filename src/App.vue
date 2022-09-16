<template>
  <div>
    <fds-icon-collection />
    <dev-header skipNavigationsTekst="Gå til sidens indhold NU">
      <fds-header-portal
        portalNavn="Virk"
        :portalTo="{ name: 'forside' }"
        @logout="clickLogout"> Anders Andersens, Forsikringens Forsikringsfirma </fds-header-portal>
      <dev-header-solution>
        <a href="#">En langt langt længere løsningstitel</a>
        <template #myndighed>
          Support: 12 34 56 78
          <span class="d-print-none">·
            <a
              href="#"
              class="icon-link function-link alert-leave">Kontakt<svg
              class="icon-svg"
              aria-hidden="true"
              focusable="false"><use xlink:href="#open-in-new"></use></svg></a></span>
        </template>
      </dev-header-solution>
      <dev-navigation></dev-navigation>
    </dev-header>

    <div class="container page-container">
      <dev-content />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import DKFDS from 'dkfds';
import DevHeader from '@/dev_components/DevHeader.vue';
import FdsHeaderPortal from '@/dev_components/fds-header-portal.vue';
import DevHeaderSolution from '@/dev_components/DevHeaderSolution.vue';
import DevNavigation from '@/dev_components/DevNavigation.vue';
import DevContent from '@/dev_components/DevContent.vue';

DKFDS.init();

const clickLogout = () => {
  console.warn('Logout');
};
</script>

<style lang="scss">
$font-path: '~dkfds/src/fonts/IBMPlexSans/';
$image-path: '~dkfds/src/img';
$site-image-path: '~dkfds/src/img';
$icons-folder-path: '~dkfds/src/img/svg-icons';
@import '../node_modules/dkfds/src/stylesheets/dkfds-virkdk';
@import 'assets/main.scss';
</style>