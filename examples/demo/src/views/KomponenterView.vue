<template>
  <section>
    <div class="container page-container">
      <div class="row">
        <aside class="col-12 col-lg-3 sidebar-col">
          <nav>
            <xfds-menu
              class="discrete-icon"
              v-model="navigationList"
              @navigate="handleNavigation"
            />
          </nav>
        </aside>
        <div class="col-12 col-lg-9">
          <div class="subheading">Komponenter</div>
          <h1 v-if="currentItem" :id="currentItem.key">{{ currentItem.title }}s</h1>
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from "dkfds-vue3-utils";
import { ref, watch } from "vue";
import navigationService from "dkfds-vue3-extra/src/service/navigation.service";
import { useRoute, useRouter } from "vue-router";
import { sort } from "fast-sort";

const route = useRoute();
const router = useRouter();

const currentNavigationKey = ref("");
const currentItem = ref<FdsNavigationItem | undefined>();
const navigationList = ref<Array<FdsNavigationItem>>(
  sort([
    {
      key: "komponentaccordions",
      title: "Accordions",
    },
    {
      key: "komponentbadges",
      title: "Badges",
    },
    {
      key: "komponentbeskeder",
      title: "Beskeder (Alerts)",
    },
    {
      key: "komponentbroedkrumme",
      title: "Brødkrumme",
    },
    {
      key: "komponentcards",
      title: "Cards",
    },
    {
      key: "komponentcookie",
      title: "Cookiemeddelelse",
    },
    {
      key: "komponentdatoangivelse",
      title: "Datofelter",
    },
    {
      key: "komponentdatovaelger",
      title: "Datovælger",
    },
    {
      key: "komponentdetaljer",
      title: "Detaljer",
    },
    {
      key: "komponentdropdown",
      title: "Dropdown-menu",
    },
    {
      key: "komponentfaneblade",
      title: "Faneblade (Tabs)",
    },
    {
      key: "komponentfejlmeddelelser",
      title: "Fejlmeddelelser",
    },
    {
      key: "komponentfejlopsummering",
      title: "Fejlopsummering",
    },

    {
      key: "komponentfooters",
      title: "Footers",
      icon: "engineering",
    },
    {
      key: "komponentformgruppe",
      title: "Form gruppe",
    },
    {
      key: "komponentformular",
      title: "Formular",
    },
    {
      key: "komponentfunktionslink",
      title: "Funktionslink",
    },
    {
      key: "komponentheaders",
      title: "Headers",
      icon: "engineering",
    },
    {
      key: "komponentfelter",
      title: "Inputfelter",
    },
    {
      key: "komponentknapper",
      title: "Knapper (Buttons)",
    },
    {
      key: "komponentspinner",
      title: "Loading spinner",
    },
    {
      key: "komponentmodalvindue",
      title: "Modalvindue",
    },
    {
      key: "komponentnavigation",
      title: "Navigation",
    },
    {
      key: "komponentnotifikation",
      title: "Notifikation (Toast)",
      icon: "engineering",
    },
    {
      key: "komponentoverflow",
      title: "Overflow menu",
    },
    {
      key: "komponentpaginering",
      title: "Paginering",
    },
    {
      key: "komponentradioknap",
      title: "Radioknap",
    },

    {
      key: "komponentskip",
      title: "Gå til sidens indhold (Skip-link)",
    },

    {
      key: "komponentsprogvaelger",
      title: "Sprogvælger",
    },
    {
      key: "komponentstrukturerede",
      title: "Strukturerede lister",
    },
    {
      key: "komponentsoegefelt",
      title: "Søgefelt",
    },
    {
      key: "komponenttilbage",
      title: "Tilbage link",
    },
    {
      key: "komponenttabeller",
      title: "Tabeller",
      icon: "feedback",
    },
    {
      key: "komponenttags",
      title: "Tags",
    },
    {
      key: "komponenttekstomraade",
      title: "Tekstområde",
    },
    {
      key: "komponenttiltop",
      title: "Tilbage til toppen",
    },
    {
      key: "komponenttjekboks",
      title: "Tjekboks",
    },
    {
      key: "komponenttoggle",
      title: "Toggle switch",
    },
    {
      key: "komponenttooltip",
      title: "Tooltip",
    },
    {
      key: "komponenttrinindikatorer",
      title: "Trinindikatorer",
    },
    {
      key: "komponentvedhaeft",
      title: "Vedhæft fil",
    },
    {
      key: "komponentvenstremenu",
      title: "Venstremenu",
    },
  ] as FdsNavigationItem[]).asc((a) => a.title)
);

watch(
  () => route.name,
  () => {
    navigationList.value = navigationService.setActive(
      navigationList.value,
      route.name?.toString() ?? ""
    );
    currentNavigationKey.value = currentItem.value?.key ?? "";
    currentItem.value = navigationService.findFirstActiveItem(navigationList.value);
  },
  {
    immediate: true,
  }
);

const handleNavigation = (key: string) => {
  currentNavigationKey.value = key;
  router.push({ name: navigationService.resolveActiveKey(key) });
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
