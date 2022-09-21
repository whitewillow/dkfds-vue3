<template>
  <section>
    <div class="container page-container">
      <fds-sidenavigation-tabs :list="sideTabs">
        <template v-slot:[`accordions`]>
          <div class="subheading">Komponenter</div>
          <accordions-example />
        </template>
        <template v-slot:[`badges`]>
          <div class="subheading">Komponenter</div>
          <badges-example />
        </template>
        <template v-slot:[`beskeder`]>
          <div class="subheading">Komponenter</div>
          <beskeder-example />
        </template>
        <template v-slot:[`broedkrumme`]>
          <div class="subheading">Komponenter</div>
          <broedkrumme-example />
        </template>
        <template v-slot:[`cards`]>
          <div class="subheading">Komponenter</div>
          <cards-example />
        </template>
        <template v-slot:[`cookie`]>
          <div class="subheading">Komponenter</div>
          <cookie-example />
        </template>
        <template v-slot:[`datoangivelse`]>
          <div class="subheading">Komponenter</div>
          <datoangivelse-example />
        </template>
        <template v-slot:[`datovaelger`]>
          <div class="subheading">Komponenter</div>
          <datovaelger-example />
        </template>
        <template v-slot:[`detaljer`]>
          <div class="subheading">Komponenter</div>
          <detaljer-example />
        </template>
        <template v-slot:[`dropdown`]>
          <div class="subheading">Komponenter</div>
          <dropdown-example />
        </template>
        <template v-slot:[`faneblade`]>
          <div class="subheading">Komponenter</div>
          <faneblade-example />
        </template>
        <template v-slot:[`fejlmeddelelser`]>
          <div class="subheading">Komponenter</div>
          <fejlmeddelelser-example />
        </template>
        <template v-slot:[`fejlopsummering`]>
          <div class="subheading">Komponenter</div>
          <fejlopsummering-example />
        </template>
        <template v-slot:[`felter`]>
          <div class="subheading">Komponenter</div>
          <felter-example />
        </template>
        <template v-slot:[`footers`]>
          <div class="subheading">Komponenter</div>
          <footers-example />
        </template>
        <template v-slot:[`formular`]>
          <div class="subheading">Komponenter</div>
          <formular-example />
        </template>
        <template v-slot:[`funktionslink`]>
          <div class="subheading">Komponenter</div>
          <funktionslink-example />
        </template>
        <template v-slot:[`headers`]>
          <div class="subheading">Komponenter</div>
          <headers-example />
        </template>
        <template v-slot:[`knapper`]>
          <div class="subheading">Komponenter</div>
          <knapper-example />
        </template>
        <template v-slot:[`modalvindue`]>
          <div class="subheading">Komponenter</div>
          <modalvindue-example />
        </template>
        <template v-slot:[`notifikation`]>
          <div class="subheading">Komponenter</div>
          <notifikation-example />
        </template>
        <template v-slot:[`overflow`]>
          <div class="subheading">Komponenter</div>
          <overflow-example />
        </template>
        <template v-slot:[`paginering`]>
          <div class="subheading">Komponenter</div>
          <paginering-example />
        </template>
        <template v-slot:[`radioknap`]>
          <div class="subheading">Komponenter</div>
          <radioknap-example />
        </template>
        <template v-slot:[`sidenavigation`]>
          <div class="subheading">Komponenter</div>
          <sidenavigation-example />
        </template>
        <template v-slot:[`skip`]>
          <div class="subheading">Komponenter</div>
          <skip-example />
        </template>
        <template v-slot:[`spinner`]>
          <div class="subheading">Komponenter</div>
          <spinner-example />
        </template>
        <template v-slot:[`sprogvaelger`]>
          <div class="subheading">Komponenter</div>
          <sprogvaelger-example />
        </template>
        <template v-slot:[`strukturerede`]>
          <div class="subheading">Komponenter</div>
          <strukturerede-example />
        </template>
        <template v-slot:[`soegefelt`]>
          <div class="subheading">Komponenter</div>
          <soegefelt-example />
        </template>
        <template v-slot:[`tilbage`]>
          <div class="subheading">Komponenter</div>
          <tilbage-example />
        </template>
        <template v-slot:[`tabeller`]>
          <div class="subheading">Komponenter</div>
          <tabeller-example />
        </template>
        <template v-slot:[`tags`]>
          <div class="subheading">Komponenter</div>
          <tags-example />
        </template>
        <template v-slot:[`tekstomraade`]>
          <div class="subheading">Komponenter</div>
          <tekstomraade-example />
        </template>
        <template v-slot:[`tjekboks`]>
          <div class="subheading">Komponenter</div>
          <tjekboks-example />
        </template>
        <template v-slot:[`toggle`]>
          <div class="subheading">Komponenter</div>
          <toggle-example />
        </template>
        <template v-slot:[`tooltip`]>
          <div class="subheading">Komponenter</div>
          <tooltip-example />
        </template>
        <template v-slot:[`trinindikatorer`]>
          <div class="subheading">Komponenter</div>
          <trinindikatorer-example />
        </template>
        <template v-slot:[`vedhaeft`]>
          <div class="subheading">Komponenter</div>
          <vedhaeft-example />
        </template>
      </fds-sidenavigation-tabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationStep } from 'dkfds-vue3/src/model/fds.model';
import AccordionsExample from '../components/AccordionsExample.vue';
import BadgesExample from '../components/BadgesExample.vue';
import BeskederExample from '../components/BeskederExample.vue';
import BroedkrummeExample from '../components/BroedkrummeExample.vue';
import CardsExample from '../components/CardsExample.vue';
import CookieExample from '../components/CookieExample.vue';
import DatoangivelseExample from '../components/DatoangivelseExample.vue';
import DatovaelgerExample from '../components/DatovaelgerExample.vue';
import DetaljerExample from '../components/DetaljerExample.vue';
import DropdownExample from '../components/DropdownExample.vue';
import FanebladeExample from '../components/FanebladeExample.vue';
import FejlmeddelelserExample from '../components/FejlmeddelelserExample.vue';
import FejlopsummeringExample from '../components/FejlopsummeringExample.vue';
import FelterExample from '../components/FelterExample.vue';
import FootersExample from '../components/FootersExample.vue';
import FormularExample from '../components/FormularExample.vue';
import FunktionslinkExample from '../components/FunktionslinkExample.vue';
import HeadersExample from '../components/HeadersExample.vue';
import ModalvindueExample from '../components/ModalvindueExample.vue';
import NotifikationExample from '../components/NotifikationExample.vue';
import OverflowExample from '../components/OverflowExample.vue';
import PagineringExample from '../components/PagineringExample.vue';
import RadioknapExample from '../components/RadioknapExample.vue';
import SidenavigationExample from '../components/SidenavigationExample.vue';
import SpinnerExample from '../components/SpinnerExample.vue';
import SprogvaelgerExample from '../components/SprogvaelgerExample.vue';
import StruktureredeExample from '../components/StruktureredeExample.vue';
import SkipExample from '../components/SkipExample.vue';
import SoegefeltExample from '../components/SoegefeltExample.vue';
import TilbageExample from '../components/TilbageExample.vue';
import TabellerExample from '../components/TabellerExample.vue';
import TagsExample from '../components/TagsExample.vue';
import TekstomraadeExample from '../components/TekstomraadeExample.vue';
import TjekboksExample from '../components/TjekboksExample.vue';
import ToggleExample from '../components/ToggleExample.vue';
import TooltipExample from '../components/TooltipExample.vue';
import TrinindikatorerExample from '../components/TrinindikatorerExample.vue';
import VedhaeftExample from '../components/VedhaeftExample.vue';
import FormExample from '../components/FormExample.vue';
import FilerExample from '../components/FilerExample.vue';
import LinksExample from '../components/LinksExample.vue';
import KnapperExample from '../components/KnapperExample.vue';
import FejlsummeringExample from '../components/FejlsummeringExample.vue';

const sideTabs = [
  {
    order: 0,
    key: 'accordions',
    title: 'Accordions',
    help: '',
  },
  {
    order: 1,
    key: 'badges',
    title: 'Badges',
    help: '',
  },
  {
    order: 2,
    key: 'beskeder',
    title: 'Beskeder',
    help: '',
  },
  {
    order: 3,
    key: 'broedkrumme',
    title: 'Brødkrumme',
    help: '',
  },
  {
    order: 4,
    key: 'cards',
    title: 'Cards',
    help: '',
  },
  {
    order: 5,
    key: 'cookie',
    title: 'Cookiemeddelelse',
    help: '',
  },
  {
    order: 6,
    key: 'datoangivelse',
    title: 'Datoangivelse',
    help: '',
  },
  {
    order: 7,
    key: 'datovaelger',
    title: 'Datovælger',
    help: '',
  },
  {
    order: 8,
    key: 'detaljer',
    title: 'Detaljer',
    help: '',
  },
  {
    order: 9,
    key: 'dropdown',
    title: 'Dropdown-menu',
    help: '',
  },
  {
    order: 10,
    key: 'faneblade',
    title: 'Faneblade',
    help: '',
  },
  {
    order: 11,
    key: 'fejlmeddelelser',
    title: 'Fejlmeddelelser',
    help: '',
  },
  {
    order: 12,
    key: 'fejlopsummering',
    title: 'Fejlopsummering',
    help: '',
  },
  {
    order: 13,
    key: 'felter',
    title: 'Felter',
    help: '',
  },
  {
    order: 14,
    key: 'footers',
    title: 'Footers',
    help: '',
  },
  {
    order: 15,
    key: 'formular',
    title: 'Formular',
    help: '',
  },
  {
    order: 16,
    key: 'funktionslink',
    title: 'Funktionslink',
    help: '',
  },
  {
    order: 17,
    key: 'headers',
    title: 'Headers',
    help: '',
  },
  {
    order: 18,
    key: 'knapper',
    title: 'Knapper',
    help: '',
  },
  {
    order: 19,
    key: 'modalvindue',
    title: 'Modalvindue',
    help: '',
  },
  {
    order: 20,
    key: 'notifikation',
    title: 'Notifikation (Toast)',
    help: '',
  },
  {
    order: 21,
    key: 'overflow',
    title: 'Overflow menu',
    help: '',
  },
  {
    order: 22,
    key: 'paginering',
    title: 'Paginering',
    help: '',
  },
  {
    order: 23,
    key: 'radioknap',
    title: 'Radioknap',
    help: '',
  },
  {
    order: 24,
    key: 'sidenavigation',
    title: 'Sidenavigation',
    help: '',
  },
  {
    order: 25,
    key: 'skip',
    title: 'Skip-link',
    help: '',
  },
  {
    order: 26,
    key: 'spinner',
    title: 'Spinner',
    help: '',
  },
  {
    order: 27,
    key: 'sprogvaelger',
    title: 'Sprogvælger',
    help: '',
  },
  {
    order: 28,
    key: 'strukturerede',
    title: 'Strukturerede lister',
    help: '',
  },
  {
    order: 29,
    key: 'soegefelt',
    title: 'Søgefelt',
    help: '',
  },
  {
    order: 30,
    key: 'tilbage',
    title: 'Tilbage link',
    help: '',
  },
  {
    order: 31,
    key: 'tabeller',
    title: 'Tabeller',
    help: '',
  },
  {
    order: 32,
    key: 'tags',
    title: 'Tags',
    help: '',
  },
  {
    order: 33,
    key: 'tekstomraade',
    title: 'Tekstområde',
    help: '',
  },
  {
    order: 34,
    key: 'tjekboks',
    title: 'Tjekboks',
    help: '',
  },
  {
    order: 35,
    key: 'toggle',
    title: 'Toggle switch',
    help: '',
  },
  {
    order: 36,
    key: 'tooltip',
    title: 'Tooltip',
    help: '',
  },
  {
    order: 37,
    key: 'trinindikatorer',
    title: 'Trinindikatorer',
    help: '',
  },
  {
    order: 38,
    key: 'tjekboks',
    title: 'Tjekboks',
    help: '',
  },
  {
    order: 39,
    key: 'vedhaeft',
    title: 'Vedhæft fil',
    help: '',
  },
] as FdsNavigationStep[];
</script>
<style lang="scss" scoped></style>
