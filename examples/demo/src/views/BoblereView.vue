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
          <div class="subheading">Boblere</div>
          <h1 v-if="currentItem" :id="currentItem.key">{{ currentItem.title }}</h1>
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from "dkfds-vue3-utils";
import navigationService from "dkfds-vue3-extra/src/service/navigation.service";
import { ref, watch } from "vue";
import { sort } from "fast-sort";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const currentNavigationKey = ref("");
const currentItem = ref<FdsNavigationItem | undefined>();
const navigationList = ref<Array<FdsNavigationItem>>(
  sort([
    {
      key: "boblere-range",
      title: "Range",
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
<style lang="scss" scoped></style>
