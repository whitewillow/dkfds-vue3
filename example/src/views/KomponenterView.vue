<template>
  <section>
    <div class="container page-container">
      <div class="row">
        <aside class="col-12 col-lg-3 sidebar-col">
          <nav>
            <fds-venstremenu
              class="discrete-icon"
              v-model="navigationList"
              @navigate="handleNavigation"
            />
          </nav>
        </aside>
        <div class="col-12 col-lg-9">
          <div class="subheading">Komponenter</div>
          <h1 v-if="currentItem" :id="currentItem.key">{{ currentItem.title }}</h1>
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
import { ref, watch } from 'vue';
import venstremenuService from 'dkfds-vue3/src/service/venstremenu.service';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const currentNavigationKey = ref('');
const currentItem = ref<FdsNavigationItem | undefined>();
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
    title: 'Inputfelter',
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
  },
  {
    key: 'komponentnotifikation',
    title: 'Notifikation (Toast)',
    icon: 'engineering',
  },
  {
    key: 'komponentoverflow',
    title: 'Overflow menu',
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
    key: 'komponentvenstremenu',
    title: 'Venstremenu',
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
  },
  {
    key: 'komponenttekstomraade',
    title: 'Tekstområde',
  },
  {
    key: 'komponenttiltop',
    title: 'Tilbage til toppen',
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
    navigationList.value = venstremenuService.setActive(
      navigationList.value,
      route.name?.toString() ?? '',
    );
    currentItem.value = venstremenuService.findFirstActiveItem(navigationList.value);
  },
  {
    immediate: true,
  },
);

const handleNavigation = (key: string) => {
  currentNavigationKey.value = key;
  router.push({ name: venstremenuService.resolveActiveKey(key) });
};
</script>
<style lang="scss">
.sidenav-list {
  &.discrete-icon {
    > li:not(.current, :hover) .icon-svg {
      fill: #b5b5b5;
    }
  }
}
</style>
