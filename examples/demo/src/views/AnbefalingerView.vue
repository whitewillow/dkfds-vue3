<template>
  <div class="container page-container">
    <div class="row">
      <aside class="col-12 col-lg-3 sidebar-col">
        <nav>
          <xfds-menu
            v-model="navigationList"
            @navigate="handleNavigation" />
        </nav>
      </aside>
      <div class="col-12 col-lg-9">
        <div class="subheading">
          Anbefalinger
        </div>
        <h1
          v-if="currentItem"
          :id="currentItem.key">
          {{ currentItem.title }}
        </h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3-utils';
import navigationService from 'dkfds-vue3-extra/src/service/navigation.service';
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
