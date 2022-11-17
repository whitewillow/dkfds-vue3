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
        <li role="none">
          <fds-nav-link
            href="/forside"
            title="Link title">
            Forside
          </fds-nav-link>
        </li>
        <li class="current">
          <fds-overflow-menu header="Overflow menu eks">
            <ul class="overflow-list">
              <li class="active">
                <a href="#">
                  Subsektion med en meget lang titel som går i flere linier
                </a>
              </li>
              <li>
                <a href="#">
                  Subsektion title
                </a>
              </li>
              <li>
                <a href="#">
                  Subsektion title
                </a>
              </li>
              <li>
                <a href="#">
                  Subsektion title som også er forholdsvis lang
                </a>
              </li>
            </ul>
          </fds-overflow-menu>
        </li>

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
      <dev-content />
    </div>
  </div>
</template>

<script setup lang="ts">
import DevHeader from '@/dev_components/DevHeader.vue';
import DevContent from '@/dev_components/DevContent.vue';
import FdsHeaderPortal from '@/dev_components/fds-header-portal.vue';
import FdsHeaderPortalMobil from '@/dev_components/fds-header-portal-mobil.vue';
import FdsHeaderSolutionMobil from '@/dev_components/fds-header-solution-mobil.vue';
import FdsHeaderSolution from '@/dev_components/fds-header-solution.vue';
import FdsHeaderNavigation from '@/dev_components/fds-header-navigation.vue';

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