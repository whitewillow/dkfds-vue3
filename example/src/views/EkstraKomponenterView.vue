<template>
  <section>
    <div class="container page-container">
      <div class="row">
        <aside class="col-12 col-lg-3 sidebar-col">
          <nav>
            <xfds-menu v-model="navigationList" @navigate="handleNavigation" />
          </nav>
        </aside>
        <div class="col-12 col-lg-9">
          <div class="subheading">Extra Komponenter</div>
          <h1 v-if="currentItem" :id="currentItem.key">{{ currentItem.title }}</h1>
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
import navigationService from 'dkfds-vue3/src/service/navigation.service';
import { ref, watch } from 'vue';

import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const currentNavigationKey = ref('');
const currentItem = ref<FdsNavigationItem | undefined>();
const navigationList = ref<Array<FdsNavigationItem>>([
  {
    key: 'ekstradropdownmenu',
    title: 'Dropdown-menu',
  },
  {
    key: 'ekstrafilliste',
    title: 'Fil liste',
  },
  {
    key: 'ekstraformgroup',
    title: 'Form gruppe',
  },
  {
    key: 'ekstraknapspinner',
    title: 'Knap spinner',
  },
  {
    key: 'ekstranummerfelt',
    title: 'Nummer',
  },
  {
    key: 'ekstraprogressbar',
    title: 'Progressbar',
  },
  {
    key: 'ekstraradioknap',
    title: 'Radio',
  },
  {
    key: 'ekstraradio',
    title: 'Radio List',
  },
  {
    key: 'ekstratekstfelt',
    title: 'Tekstfelt',
  },
  {
    key: 'ekstratekstomraade',
    title: 'Tekstområde',
  },
  {
    key: 'ekstratjekboksliste',
    title: 'Tjekbox liste',
  },
  {
    key: 'ekstraformvalidering',
    title: 'Validate',
  },
  {
    key: 'ekstravenstremenu',
    title: 'Venstremenu',
  },
] as FdsNavigationItem[]);

watch(
  () => route.name,
  () => {
    navigationList.value = navigationService.setActive(
      navigationList.value,
      route.name?.toString() ?? '',
    );
    currentItem.value = navigationService.findFirstActiveItem(navigationList.value);
  },
  {
    immediate: true,
  },
);

const handleNavigation = (key: string) => {
  currentNavigationKey.value = key;
  router.push({ name: navigationService.resolveActiveKey(key) });
};
</script>
<style lang="scss" scoped></style>
