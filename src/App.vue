<template>
  <div>
    <fds-icon-collection />
    <dev-header skipNavigationsTekst="Gå til sidens indhold NU">
      <fds-header-portal
        portalNavn="Virk"
        :portalTo="{ name: 'forside' }"
        @logout="clickLogout">
        Anders Andersens, Forsikringens Forsikringsfirma
      </fds-header-portal>
      <fds-header-solution>
        <a href="#">
          En langt langt længere løsningstitel
        </a>
        <template #myndighed>
          Support: 12 34 56 78
          <span class="d-print-none">·
            <a
              href="#"
              class="icon-link function-link alert-leave">
              Kontakt
              <svg
                class="icon-svg"
                aria-hidden="true"
                focusable="false">
                <use xlink:href="#open-in-new"></use>
              </svg>
            </a>
          </span>
        </template>
      </fds-header-solution>
      <fds-header-navigation>
        <fds-nav-item-route
          toName="home"
          :current-route-name="$route.name?.toString()"
          linkTitle="Link title">
          Forside
        </fds-nav-item-route>
        <fds-nav-item-route
          toName="about"
          :current-route-name="$route.name?.toString()"
          linkTitle="Link title">
          Om os
        </fds-nav-item-route>
        <template #mobil>
          <fds-header-portal-mobil>
            <p class="user">
              Christian Emil Vestergaard Christensen
            </p>
            <p>Københavns Urmager og Værksted v/Martin Elsig</p>
            <a
              href="#"
              class="button button-secondary alert-leave"
              role="button">
              Log af
            </a>
          </fds-header-portal-mobil>
          <fds-header-solution-mobil>
            <p class="h5 authority-name">
              Myndighedsnavn
            </p>
            <p>
              Support: 12 34 56 78 ·
              <a
                href="#"
                class="icon-link function-link alert-leave">Kontakt<svg
                class="icon-svg"
                aria-hidden="true"
                focusable="false">
                <use xlink:href="#open-in-new"></use></svg></a>
            </p>
          </fds-header-solution-mobil>
        </template>
      </fds-header-navigation>
    </dev-header>

    <div class="container page-container">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import DKFDS from 'dkfds';
import DevHeader from '@/dev_components/DevHeader.vue';
import FdsHeaderPortal from '@/dev_components/fds-header-portal.vue';
import FdsHeaderPortalMobil from '@/dev_components/fds-header-portal-mobil.vue';
import FdsHeaderSolutionMobil from '@/dev_components/fds-header-solution-mobil.vue';
import FdsHeaderSolution from '@/dev_components/fds-header-solution.vue';
import FdsHeaderNavigation from '@/dev_components/fds-header-navigation.vue';
import FdsNavItemRoute from '@/components/fds-nav-item-route.vue';
import DevContent from '@/dev_components/DevContent.vue';

DKFDS.init();

const clickLogout = () => {
  console.warn('Logout event');
};
</script>

<style lang="scss">
$font-path: '~dkfds/src/fonts/IBMPlexSans/';
$image-path: '~dkfds/src/img';
$site-image-path: '~dkfds/src/img';
$icons-folder-path: '~dkfds/src/img/svg-icons';
@import '../node_modules/dkfds/src/stylesheets/dkfds-virkdk';
@import 'assets/bgs.scss';
@import 'assets/main.scss';
</style>