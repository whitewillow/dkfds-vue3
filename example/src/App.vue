<template>
  <fds-icon-collection />

  <header class="header">
    <div id="top"></div>
    <a class="skipnav" href="#main-content">Gå til sidens indhold</a>
    <!-- Start: Portal header -->
    <div class="portal-header portal-header-compact">
      <div class="container portal-header-inner">
        <!-- Start: Portallogo -->
        <a href="#" aria-label="Portalnavn" class="logo"
          ><span class="d-none d-print-block">Portalnavn</span></a
        >
        <!-- Slut: Portallogo -->

        <button
          class="function-link button-menu-open js-menu-open ml-auto d-print-none"
          aria-haspopup="menu"
          title="Åben mobil menu"
        >
          <svg class="icon-svg" focusable="false" aria-hidden="true">
            <use xlink:href="#menu"></use></svg
          >Menu
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
        <div class="solution-heading dv3-gra">
          <a href="#">DKFDS-Vue3 et Komponent bibliotek til DKFDS</a>
        </div>

        <!--2B: Solution header: Authority name + text -->
        <div class="solution-info">
          <p class="h5 authority-name">Myndighedsnavn</p>
          <p>
            Support: 12 34 56 78
            <span class="d-print-none"
              >·
              <a href="#" class="icon-link function-link alert-leave"
                >Kontakt<svg class="icon-svg" aria-hidden="true" focusable="false">
                  <use xlink:href="#open-in-new"></use></svg></a
            ></span>
          </p>
        </div>
      </div>
    </div>
    <!-- Slut: Løsningsheader -->

    <!-- Start: Navigation -->
    <div class="overlay"></div>
    <nav class="nav">
      <button class="function-link button-menu-close js-menu-close" title="Luk mobil menu">
        <svg class="icon-svg" aria-hidden="true"><use xlink:href="#close"></use></svg>Luk
      </button>

      <!-- Start: Hovedmenu -->
      <div class="navbar navbar-primary">
        <div class="navbar-inner container">
          <ul class="nav-primary">
            <li role="none" :class="[{ current: isPartOfMenu('forside') }]">
              <fds-nav-link @click="router.push({ name: 'forside' })" title="Link title">
                Forside
              </fds-nav-link>
            </li>
            <li role="none" :class="[{ current: isPartOfMenu('komponenter') }]">
              <fds-nav-link @click="router.push({ name: 'komponenter' })" title="Link title">
                Komponenter
              </fds-nav-link>
            </li>
            <li role="none" :class="[{ current: isPartOfMenu('ekstrakomponenter') }]">
              <fds-nav-link @click="router.push({ name: 'ekstrakomponenter' })" title="Link title">
                Ekstra Komponenter
              </fds-nav-link>
            </li>

            <li role="none" :class="[{ current: isPartOfMenu('anbefalinger') }]">
              <fds-nav-link @click="router.push({ name: 'anbefalinger' })" title="Link title">
                Anbefalinger
              </fds-nav-link>
            </li>
            <li role="none" :class="[{ current: isPartOfMenu('about') }]">
              <fds-nav-link @click="router.push({ name: 'about' })" title="Link title">
                Fællesskab
              </fds-nav-link>
            </li>
          </ul>

          <!-- Start: Overflow menu i navigation -->
          <ul class="unstyled-list nav-actions">
            <li>
              <fds-overflow-menu header="Overflow menu" icon="arrow-drop-down">
                <ul class="overflow-list">
                  <li><a href="#">Menupunkt 1</a></li>
                  <li><a href="#">Et menupunkt 2</a></li>
                  <li><a href="#">Tredje menupunkt 3</a></li>
                </ul>
              </fds-overflow-menu>
            </li>
          </ul>
          <!-- Slut: Overflow menu i navigation -->
        </div>
      </div>
      <!-- Slut: Hovedmenu -->

      <div class="portal-info-mobile">
        <p class="user">Christian Emil Vestergaard Christensen</p>
        <p>Københavns Urmager og Værksted v/Martin Elsig</p>
        <a href="#" class="button button-secondary alert-leave" role="button"> Log af </a>
      </div>

      <div class="solution-info-mobile">
        <p class="h5 authority-name">Myndighedsnavn</p>
        <p>
          Support: 12 34 56 78 ·
          <a href="#" class="icon-link function-link alert-leave"
            >Kontakt<svg class="icon-svg" aria-hidden="true" focusable="false">
              <use xlink:href="#open-in-new"></use></svg
          ></a>
        </p>
      </div>
    </nav>
    <!-- Slut: Navigation -->
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <fds-til-top />

    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-3 footer-col">
            <section>
              <div class="align-text-left">
                <h2 class="h5 mb-4">Ansvarlig myndighed</h2>

                <ul class="unstyled-list">
                  <li class="">
                    <img
                      src="https://via.placeholder.com/150x100/0059B3/FFFFFF"
                      class="logo"
                      alt="Logostyrelsen"
                    />
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div class="col-12 col-sm-12 col-md-3 footer-col">
            <section>
              <div class="align-text-left">
                <h2 class="h5 mb-4">Kontakt</h2>

                <ul class="mt-0 nobullet-list">
                  <li class="">
                    <a class="function-link" href="mailto:support@myndighed.dk"
                      >support@myndighed.dk</a
                    >
                  </li>

                  <li class="">
                    <a class="function-link" href="tel:004512345678">(+45) 12 34 56 78</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div class="col-12 col-sm-12 col-md-3 footer-col d-print-none">
            <section>
              <div class="align-text-left">
                <h2 class="h5 mb-4">Links</h2>

                <ul class="mt-0 nobullet-list">
                  <li class=""><a class="function-link" href="#">Læs lidt om dit</a></li>

                  <li class=""><a class="function-link" href="#">Her er også lidt om dat</a></li>

                  <li class="">
                    <a class="function-link icon-link" href="#"
                      >Eller måske er du interesseret i noget helt andet, som tager mange linjer at
                      forklare<svg class="icon-svg" focusable="&gt;false" aria-hidden="true">
                        <use xlink:href="#open-in-new"></use></svg
                    ></a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div class="col-12 col-sm-12 col-md-3 footer-col d-print-none">
            <section>
              <div class="align-text-left">
                <h2 class="h5 mb-4">Webtilgængelighed og cookies</h2>

                <ul class="mt-0 nobullet-list">
                  <li class="">
                    <a href="#" class="function-link icon-link"
                      >Tilgængelighedserklæring<svg
                        class="icon-svg"
                        focusable="&gt;false"
                        aria-hidden="true"
                      >
                        <use xlink:href="#open-in-new"></use></svg
                    ></a>
                  </li>

                  <li class="">
                    <a class="function-link" href="#">Privatlivspolitik (cookies)</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isPartOfMenu = (name: string): boolean => {
  if (route) {
    const [parent] = route.matched;

    if (parent && parent.name === name) {
      return true;
    }
    if (route.name) {
      return route.name === name;
    }
  }

  return false;
};
</script>

<style lang="scss">
$font-path: '~dkfds/src/fonts/IBMPlexSans/';
$image-path: '~dkfds/src/img';
$site-image-path: '~dkfds/src/img';
$icons-folder-path: '~dkfds/src/img/svg-icons';
@import '../node_modules/dkfds/src/stylesheets/dkfds-virkdk';
@import '../node_modules/dkfds-vue3/src/assets/bgs.scss';
@import '../node_modules/dkfds-vue3/src/assets/main.scss';
@import 'assets/main.scss';
</style>
