<template>
  <fds-icon-collection />

  <header class="header">
    <div id="top"></div>
    <a
      class="skipnav"
      href="#main-content">
      Gå til sidens indhold
    </a>
    <!-- Start: Portal header -->
    <div class="portal-header">
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
          title="Åben mobil menu"
        >
          <svg
            class="icon-svg"
            focusable="false"
            aria-hidden="true">
            <use xlink:href="#menu"></use>
          </svg>
          Menu
        </button>

        <!-- Start: Persondetaljer -->
        <div class="portal-info">
          <p class="user">
            <span class="username weight-semibold">
              Anders Andersen
            </span>
            <br />Forsikringens Forsikringsfirma
          </p>

          <button class="button button-secondary d-print-none">
            Log af
          </button>
        </div>
        <!-- Slut: Persondetaljer -->
      </div>
    </div>
    <!-- Slut: Portal header -->

    <!-- Start: Løsningsheader -->
    <div class="solution-header">
      <div class="container solution-header-inner">
        <div class="solution-heading dv3-gra">
          <a href="#">
            DKFDS-Vue3 et Komponent bibliotek til DKFDS
          </a>
        </div>

        <!--2B: Solution header: Authority name + text -->
        <div class="solution-info">
          <p class="h5 authority-name">
            Myndighedsnavn
          </p>
          <p>
            Support: 12 34 56 78
            <span class="d-print-none"
            >·
              <a
                href="#"
                class="icon-link function-link alert-leave"
              >Kontakt<svg
                class="icon-svg"
                aria-hidden="true"
                focusable="false">
                <use xlink:href="#open-in-new"></use>
              </svg>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- Slut: Løsningsheader -->

    <!-- Start: Navigation -->
    <div class="overlay"></div>
    <top-navigation />
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
                <h2 class="h5 mb-4">
                  Ansvarlig myndighed
                </h2>

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
                <h2 class="h5 mb-4">
                  Kontakt
                </h2>

                <ul class="mt-0 nobullet-list">
                  <li class="">
                    <a
                      class="function-link"
                      href="mailto:support@myndighed.dk">
                      support@myndighed.dk
                    </a>
                  </li>

                  <li class="">
                    <a
                      class="function-link"
                      href="tel:004512345678">
                      (+45) 12 34 56 78
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div class="col-12 col-sm-12 col-md-3 footer-col d-print-none">
            <section>
              <div class="align-text-left">
                <h2 class="h5 mb-4">
                  Links
                </h2>

                <ul class="mt-0 nobullet-list">
                  <li class="">
                    <a
                      class="function-link"
                      href="#">
                      Læs lidt om dit
                    </a>
                  </li>

                  <li class="">
                    <a
                      class="function-link"
                      href="#">
                      Her er også lidt om dat
                    </a>
                  </li>

                  <li class="">
                    <a
                      class="function-link icon-link"
                      href="#">
                      Eller måske er du interesseret i noget helt andet, som tager mange linjer at
                      forklare
                      <svg
                        class="icon-svg"
                        focusable="&gt;false"
                        aria-hidden="true">
                        <use xlink:href="#open-in-new"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div class="col-12 col-sm-12 col-md-3 footer-col d-print-none">
            <section>
              <div class="align-text-left">
                <h2 class="h5 mb-4">
                  Webtilgængelighed og cookies
                </h2>

                <ul class="mt-0 nobullet-list">
                  <li class="">
                    <a
                      href="#"
                      class="function-link icon-link">
                      Tilgængelighedserklæring
                      <svg
                        class="icon-svg"
                        focusable="&gt;false"
                        aria-hidden="true">
                        <use xlink:href="#open-in-new"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="function-link"
                      href="#">
                      Privatlivspolitik (cookies)
                    </a>
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

<script setup lang="ts"></script>

<style lang="scss">
$font-path: 'dkfds/src/fonts/IBMPlexSans/';
$image-path: 'dkfds/src/img';
$site-image-path: 'dkfds/src/img';
$icons-folder-path: 'dkfds/src/img/svg-icons';

@import '../node_modules/dkfds/src/stylesheets/dkfds-virkdk';
@import '../node_modules/dkfds-vue3/core/assets/bgs.scss';
@import '../node_modules/dkfds-vue3/core/assets/main.scss';
@import 'assets/main.scss';
</style>
