<template>
  <div class="container page-container">
    <div class="row">
      <aside class="col-12 col-lg-3 sidebar-col">
        <nav>
          <fds-sidenavigation v-model="navigationList" @navigate="handleNavigation" />
        </nav>
      </aside>
      <div class="col-12 col-lg-9">
        <div class="subheading">Anbefalinger</div>
        <h1 v-if="currentItem" :id="currentItem.key">{{ currentItem.title }}</h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
import sidenavigationService from 'dkfds-vue3/src/service/sidenavigation.service';
import { ref, watch } from 'vue';

import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const currentNavigationKey = ref('');
const currentItem = ref<FdsNavigationItem | undefined>();
const navigationList = ref<Array<FdsNavigationItem>>([
  {
    key: 'anbefalingernavigation',
    title: 'Navigation',
  },
] as FdsNavigationItem[]);

watch(
  () => route.name,
  () => {
    navigationList.value = sidenavigationService.setActive(
      navigationList.value,
      route.name?.toString() ?? '',
    );
    currentItem.value = sidenavigationService.findFirstActiveItem(navigationList.value);
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
