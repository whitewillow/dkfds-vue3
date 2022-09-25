<template>
  <section>
    <div class="container page-container">
      <div class="row">
        <aside class="col-12 col-lg-3 sidebar-col">
          <nav>
            <fds-sidenavigation v-model="navigationList" @navigate="handleNavigation" />
          </nav>
        </aside>
        <div class="col-12 col-lg-9">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
import { ref, watch } from 'vue';
import sidenavigationService from 'dkfds-vue3/src/service/sidenavigation.service';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const currentNavigationKey = ref('');
const navigationList = ref<Array<FdsNavigationItem>>([
  {
    key: 'komponentaccordions',
    title: 'Accordions',
  },
  {
    key: 'komponentbadges',
    title: 'Badges',
  },
  {
    key: 'komponentbeskeder',
    title: 'Beskeder',
  },
  {
    key: 'komponentbroedkrumme',
    title: 'Brødkrumme',
  },
  {
    key: 'komponentcards',
    title: 'Cards',
  },
  {
    key: 'komponentcookie',
    title: 'Cookiemeddelelse',
  },
  {
    key: 'komponentdatoangivelse',
    title: 'Datoangivelse',
  },
  {
    key: 'komponentdatovaelger',
    title: 'Datovælger',
  },
  {
    key: 'komponentdetaljer',
    title: 'Detaljer',
  },
  {
    key: 'komponentdropdown',
    title: 'Dropdown-menu',
  },
  {
    key: 'komponentfaneblade',
    title: 'Faneblade',
  },
  {
    key: 'komponentfejlmeddelelser',
    title: 'Fejlmeddelelser',
  },
  {
    key: 'komponentfejlopsummering',
    title: 'Fejlopsummering',
  },
  {
    key: 'komponentfelter',
    title: 'Felter',
  },
  {
    key: 'komponentfooters',
    title: 'Footers',
  },
  {
    key: 'komponentformular',
    title: 'Formular',
  },
  {
    key: 'komponentfunktionslink',
    title: 'Funktionslink',
  },
  {
    key: 'komponentheaders',
    title: 'Headers',
  },
  {
    key: 'komponentknapper',
    title: 'Knapper',
  },
  {
    key: 'komponentmodalvindue',
    title: 'Modalvindue',
  },
  {
    key: 'komponentnotifikation',
    title: 'Notifikation (Toast)',
  },
  {
    key: 'komponentoverflow',
    title: 'Overflow menu',
  },
  {
    key: 'komponentpaginering',
    title: 'Paginering',
  },
  {
    key: 'komponentradioknap',
    title: 'Radioknap',
  },
  {
    key: 'komponentsidenavigation',
    title: 'Sidenavigation',
  },
  {
    key: 'komponentskip',
    title: 'Skip-link',
  },
  {
    key: 'komponentspinner',
    title: 'Spinner',
  },
  {
    key: 'komponentsprogvaelger',
    title: 'Sprogvælger',
  },
  {
    key: 'komponentstrukturerede',
    title: 'Strukturerede lister',
  },
  {
    key: 'komponentsoegefelt',
    title: 'Søgefelt',
  },
  {
    key: 'komponenttilbage',
    title: 'Tilbage link',
  },
  {
    key: 'komponenttabeller',
    title: 'Tabeller',
  },
  {
    key: 'komponenttags',
    title: 'Tags',
  },
  {
    key: 'komponenttekstomraade',
    title: 'Tekstområde',
  },
  {
    key: 'komponenttjekboks',
    title: 'Tjekboks',
  },
  {
    key: 'komponenttoggle',
    title: 'Toggle switch',
  },
  {
    key: 'komponenttooltip',
    title: 'Tooltip',
  },
  {
    key: 'komponenttrinindikatorer',
    title: 'Trinindikatorer',
  },
  {
    key: 'komponentvedhaeft',
    title: 'Vedhæft fil',
  },
] as FdsNavigationItem[]);

watch(
  () => route.name,
  () => {
    navigationList.value = sidenavigationService.setActive(
      navigationList.value,
      route.name?.toString() ?? '',
    );
  },
  {
    immediate: true,
  },
);

const handleNavigation = (key: string) => {
  console.log(route.matched);
  currentNavigationKey.value = key;
  router.push({ name: sidenavigationService.resolveActiveKey(key) });
};
</script>
<style lang="scss" scoped></style>
