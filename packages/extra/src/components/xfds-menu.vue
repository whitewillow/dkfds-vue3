<template>
  <ul class="sidenav-list mb-6" role="menu">
    <fds-menu-item
      v-for="(item, index) of tabsList"
      :class="[{ disabled: item.disabled }]"
      :key="item.key"
      :id="item.key"
      :active="item.active"
      :icon="item.icon"
      :hint="item.hint"
      :index="showIndex ? index : null"
      @navigate="navigate(item)"
    >
      {{ item.title }}
      <template #submenu>
        <xfds-menu-sub
          v-if="item.active && item.children && item.children.length > 0"
          @navigate="subnavigation"
          v-model="item.children"
        />
      </template>
    </fds-menu-item>
  </ul>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from "dkfds-vue3-utils";
import { computed, defineEmits, defineProps, onMounted, ref, watch } from "vue";
import navigationService from "./../service/navigation.service";

const props = defineProps({
  modelValue: {
    type: Array as () => Array<FdsNavigationItem>,
    default: () => [],
    required: true,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
  navigateFirst: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "navigate"]);
const filteredList = computed(() => props.modelValue.filter((f) => !f.ignore));
const currentKey = ref("");
const tabsList = ref<Array<FdsNavigationItem>>(filteredList.value);

const subnavigation = (key: string) => {
  emit("navigate", navigationService.resolveKey(key, props.modelValue));
};

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }

  tabsList.value = navigationService.setActive(tabsList.value, item.key);
  currentKey.value = item.key;

  emit("update:modelValue", tabsList.value);
  emit("navigate", currentKey.value);
};

onMounted(() => {
  const item = navigationService.findFirstActiveItem(tabsList.value, props.navigateFirst);
  if (item) {
    navigate(item);
  }
});

watch(
  () => [props.modelValue],
  () => {
    tabsList.value = filteredList.value;
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss"></style>
