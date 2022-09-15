<template>
  <div>
    <fds-icon-collection />
    <header class="header">
      <a class="skipnav" href="#main-content">Gå til sidens indhold</a>
      <div class="solution-header">
        <div class="solution-header-inner container">
          <div class="solution-heading d-flex align-items-center">
            <a href="/" title="Det Fælles Designsystem">Det Fælles Designsystem</a>
          </div>
          <button class="button button-secondary button-menu-open js-menu-open ml-auto d-print-none" aria-haspopup="menu" title="Åben mobil menu">Menu</button>
        </div>

        <div class="search-form d-lg-none py-4 container" id="search-form-mobile">
          <form method="get" action="/search/" id="mobileSearchForm">
            <div class="form-group search">
              <label for="search-input-mobile" class="sr-only">Søg efter indhold</label>
              <input class="form-input input-char-27" id="search-input-mobile" name="q" title="Search" type="search" />
              <button class="button button-search" type="submit" id="searchmobilebtn">Søg</button>
            </div>
          </form>
        </div>
      </div>
      <nav class="nav d-none d-lg-block" aria-label="Hovedmenu">
        <button class="button button-tertiary button-menu-close js-menu-close" title="Luk mobil menu">
          <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1">
            <use v-bind="{'xlink:href':`#${'#close'}`}" />
          </svg>
          Luk
        </button>
        <!-- 3: Main navigation-->
        <div class="navbar navbar-primary">
          <!--3A: Main navigation-->

          <div class="navbar-inner container">
            <ul class="nav-primary" role="menu">
              <li class="" role="none">
                <!-- Do not render subnavs-->
                <a href="/design/" role="menuitem" class="nav-link">
                  <span>Design</span>
                </a>
              </li>

              <li class="current" role="none">
                <!-- Do not render subnavs-->
                <a href="/komponenter/" role="menuitem" aria-current="page" class="nav-link">
                  <span>Komponenter</span>
                </a>
              </li>

              <li class="" role="none">
                <!-- Do not render subnavs-->
                <a href="/eksempler/" role="menuitem" class="nav-link">
                  <span>Eksempler</span>
                </a>
              </li>

              <li class="" role="none">
                <!-- Do not render subnavs-->
                <a href="/kode/" role="menuitem" class="nav-link">
                  <span>Kode</span>
                </a>
              </li>

              <li class="" role="none">
                <!-- Do not render subnavs-->
                <a href="/krav/" role="menuitem" class="nav-link">
                  <span>Krav</span>
                </a>
              </li>

              <li class="" role="none">
                <!-- Do not render subnavs-->
                <a href="/faellesskab/" role="menuitem" class="nav-link">
                  <span>Fællesskab</span>
                </a>
              </li>
            </ul>

            <div class="search-form">
              <form method="get" action="/search/" id="menuSearchForm">
                <div class="form-group search">
                  <label for="search-input" class="sr-only">Søg efter indhold</label>
                  <input class="form-input input-char-27" id="search-input" name="q" title="Search" type="search" />
                  <button class="button button-search" type="submit" id="searchbtn">Søg</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- 3: Main navigation end-->
      </nav>
      <nav class="nav d-lg-none" aria-label="Mobil hovedmenu">
        <button class="button button-tertiary button-menu-close js-menu-close" title="Luk mobil menu">
          <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1">
            <use v-bind="{'xlink:href':`#${'#close'}`}" />
          </svg>
          Luk
        </button>
        <!-- 3: Main navigation-->
        <div class="navbar navbar-primary">
          <!--3A: Main navigation-->

          <div class="navbar-inner container">
            <ul class="nav-primary" role="menu">
              <li class="current" role="none">
                <!--Do render subnavs-->

                <div class="overflow-menu">
                  <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="#headeroverflow1" aria-haspopup="true" aria-expanded="true">
                    <span>Design</span>
                  </button>
                  <div class="overflow-menu-inner" id="headeroverflow1" aria-hidden="false">
                    <ul class="overflow-list">
                      <li class="has-anchor-links" role="none">
                        <a href="/design/farver/" role="menuitem" class="nav-link"> Farver </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/design/typografi/" role="menuitem" class="nav-link"> Typografi </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/design/borders/" role="menuitem" class="nav-link"> Hjørner, streger, skygger </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/design/ikoner/" role="menuitem" class="nav-link"> Ikoner </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/design/logoer/" role="menuitem" class="nav-link"> Logoer </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/design/layout/" role="menuitem" class="nav-link"> Layout </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/design/designressourcer/" role="menuitem" class="nav-link"> Designressourcer </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="" role="none">
                <!--Do render subnavs-->

                <div class="overflow-menu">
                  <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="#headeroverflow2" aria-haspopup="true" aria-expanded="false">
                    <span>Komponenter</span>
                  </button>
                  <div class="overflow-menu-inner" id="headeroverflow2" aria-hidden="true">
                    <ul class="overflow-list">
                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/accordions/" role="menuitem" class="nav-link"> Accordions </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/badges/" role="menuitem" class="nav-link"> Badges </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/beskeder/" role="menuitem" class="nav-link"> Beskeder (Alerts) </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/broedkrumme/" role="menuitem" class="nav-link"> Brødkrumme </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/cards/" role="menuitem" class="nav-link"> Cards </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/cookiemeddelelse/" role="menuitem" class="nav-link"> Cookiemeddelelse </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/dato-felt/" role="menuitem" class="nav-link"> Datoangivelse </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/datovaelger/" role="menuitem" class="nav-link"> Datovælger </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/detaljer/" role="menuitem" class="nav-link"> Detaljer </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/drop-down/" role="menuitem" class="nav-link"> Dropdown-menu </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/faneblad/" role="menuitem" class="nav-link"> Faneblade </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/fejlmeddelelser/" role="menuitem" class="nav-link"> Fejlmeddelelser </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/fejlopsummering/" role="menuitem" class="nav-link"> Fejlopsummering </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/felter/" role="menuitem" class="nav-link"> Felter </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/footers/" role="menuitem" class="nav-link"> Footers </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/formular/" role="menuitem" class="nav-link"> Formular </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/funktionslink/" role="menuitem" class="nav-link"> Funktionslink </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/headers/" role="menuitem" class="nav-link"> Headers </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/knapper/" role="menuitem" class="nav-link"> Knapper </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/modal/" role="menuitem" class="nav-link"> Modalvindue </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/notifikation/" role="menuitem" class="nav-link"> Notifikation (Toast) </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/overflowmenu/" role="menuitem" class="nav-link"> Overflow menu </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/radioknap/" role="menuitem" class="nav-link"> Radioknap </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/sidenav/" role="menuitem" class="nav-link"> Sidenavigation </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/skip-link/" role="menuitem" class="nav-link"> Skip-link </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/spinner/" role="menuitem" class="nav-link"> Spinner </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/sprogvaegler/" role="menuitem" class="nav-link"> Sprogvælger </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/search/" role="menuitem" class="nav-link"> Søgefelt </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/tilbage-link/" role="menuitem" class="nav-link"> Tilbage link </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/tables/" role="menuitem" class="nav-link"> Tabeller </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/tags/" role="menuitem" class="nav-link"> Tags </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/textarea/" role="menuitem" class="nav-link"> Tekstområde </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/tjekboks/" role="menuitem" class="nav-link"> Tjekboks </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/toggle/" role="menuitem" class="nav-link"> Toggle switch </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/tooltip/" role="menuitem" class="nav-link"> Tooltip </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/komponenter/trinindikatorer/" role="menuitem" class="nav-link"> Trinindikatorer </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/komponenter/fil-upload/" role="menuitem" class="nav-link"> Vedhæft fil (Upload) </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="" role="none">
                <!--Do render subnavs-->

                <div class="overflow-menu">
                  <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="#headeroverflow3" aria-haspopup="true" aria-expanded="false">
                    <span>Eksempler</span>
                  </button>
                  <div class="overflow-menu-inner" id="headeroverflow3" aria-hidden="true">
                    <ul class="overflow-list">
                      <li class="has-anchor-links" role="none">
                        <a href="/eksempler/selvbetjeningsloesninger/" role="menuitem" class="nav-link"> Selvbetjeningsløsninger </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/eksempler/opsummeringsside/" role="menuitem" class="nav-link"> Opsummeringsside </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/eksempler/kvittering/" role="menuitem" class="nav-link"> Kvittering </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="" role="none">
                <!--Do render subnavs-->

                <div class="overflow-menu">
                  <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="#headeroverflow4" aria-haspopup="true" aria-expanded="false">
                    <span>Kode</span>
                  </button>
                  <div class="overflow-menu-inner" id="headeroverflow4" aria-hidden="true">
                    <ul class="overflow-list">
                      <li class="  " role="none">
                        <a href="/kode/implementering/" role="menuitem" class="nav-link"> Implementering af DKFDS </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/kode/komponenter/" role="menuitem" class="nav-link"> Komponenter </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/kode/grid/" role="menuitem" class="nav-link"> Grid </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/kode/typografi/" role="menuitem" class="nav-link"> Typografi </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/kode/ikoner/" role="menuitem" class="nav-link"> Ikoner </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/kode/utilities/" role="menuitem" class="nav-link"> Hjælpeklasser (Utilities) </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/kode/eksempler-implementering/" role="menuitem" class="nav-link"> Eksempler på implementering </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/kode/print/" role="menuitem" class="nav-link"> Print </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/kode/plugins/" role="menuitem" class="nav-link"> Plugins </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/kode/anbefalinger-vaerktoejer/" role="menuitem" class="nav-link"> Anbefalinger og værktøjer </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="" role="none">
                <!--Do render subnavs-->

                <div class="overflow-menu">
                  <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="#headeroverflow5" aria-haspopup="true" aria-expanded="false">
                    <span>Krav</span>
                  </button>
                  <div class="overflow-menu-inner" id="headeroverflow5" aria-hidden="true">
                    <ul class="overflow-list">
                      <li class="has-anchor-links" role="none">
                        <a href="/krav/borgerdk-virk/" role="menuitem" class="nav-link"> Når du skal på borger.dk og Virk </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/krav/om-kravene/" role="menuitem" class="nav-link"> Om kravene til selvbetjeningsløsninger </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/krav/designtjek/" role="menuitem" class="nav-link"> Designtjek </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/krav/tilgaengelighed/" role="menuitem" class="nav-link"> Tilgængelighed (WCAG 2.1) </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="" role="none">
                <!--Do render subnavs-->

                <div class="overflow-menu">
                  <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="#headeroverflow6" aria-haspopup="true" aria-expanded="false">
                    <span>Fællesskab</span>
                  </button>
                  <div class="overflow-menu-inner" id="headeroverflow6" aria-hidden="true">
                    <ul class="overflow-list">
                      <li class="  " role="none">
                        <a href="/faellesskab/samarbejdsforum/" role="menuitem" class="nav-link"> Samarbejdsforum </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/faellesskab/nyhedsmail/" role="menuitem" class="nav-link"> Nyhedsmail </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/faellesskab/kontakt-support/" role="menuitem" class="nav-link"> Kontakt og support </a>
                      </li>

                      <li class="  " role="none">
                        <a href="/faellesskab/roadmap/" role="menuitem" class="nav-link"> Roadmap </a>
                      </li>

                      <li class="has-anchor-links" role="none">
                        <a href="/faellesskab/releases/" role="menuitem" class="nav-link"> Release notes </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 3: Main navigation end-->
      </nav>
    </header>
    <div class="container page-container">
      <dev-content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DKFDS from 'dkfds';
import DevContent from '@/dev_components/DevContent.vue';

DKFDS.init();

export default defineComponent({
  name: 'App',
  components: {
    DevContent,
  },
});
</script>

<style lang="scss">
$font-path: '~dkfds/src/fonts/IBMPlexSans/';
$image-path: '~dkfds/src/img';
$site-image-path: '~dkfds/src/img';
$icons-folder-path: '~dkfds/src/img/svg-icons';
@import '../node_modules/dkfds/src/stylesheets/dkfds-virkdk';
@import 'assets/main.scss';
</style>