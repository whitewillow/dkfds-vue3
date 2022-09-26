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
    icon: 'engineering',
  },
  {
    key: 'komponentcards',
    title: 'Cards',
  },
  {
    key: 'komponentcookie',
    title: 'Cookiemeddelelse',
    icon: 'feedback',
  },
  {
    key: 'komponentdatoangivelse',
    title: 'Datoangivelse',
    icon: 'engineering',
  },
  {
    key: 'komponentdatovaelger',
    title: 'Datovælger',
    icon: 'engineering',
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
    icon: 'engineering',
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
    icon: 'engineering',
  },
  {
    key: 'komponentknapper',
    title: 'Knapper',
  },
  {
    key: 'komponentmodalvindue',
    title: 'Modalvindue',
    icon: 'engineering',
  },
  {
    key: 'komponentnotifikation',
    title: 'Notifikation (Toast)',
    icon: 'engineering',
  },
  {
    key: 'komponentoverflow',
    title: 'Overflow menu',
    icon: 'engineering',
  },
  {
    key: 'komponentpaginering',
    title: 'Paginering',
    icon: 'engineering',
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
    icon: 'engineering',
  },
  {
    key: 'komponentspinner',
    title: 'Spinner',
  },
  {
    key: 'komponentsprogvaelger',
    title: 'Sprogvælger',
    icon: 'engineering',
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
    icon: 'engineering',
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
    icon: 'engineering',
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
  currentNavigationKey.value = key;
  router.push({ name: sidenavigationService.resolveActiveKey(key) });
};
</script>
<style lang="scss" scoped></style>
