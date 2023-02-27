<template>
  <fds-trinindikator-group
    :id="id"
    :size="size"
    :icon="icon">
    <template #header>
      {{ header }} {{ currentStep + 1 }} af {{ mVal.length }}
    </template>
    <fds-trinindikator-item
      v-for="(item, index) of tabsList"
      :id="item.key"
      :key="item.key"
      role="none"
      :class="[{ disabled: item.disabled }]"
      :active="item.active"
      :icon="item.icon"
      :hint="item.hint"
      :href="item.href"
      :index="showIndex ? index + 1 : null"
      @navigate="navigate(item)"
    >
      {{ item.title }}
    </fds-trinindikator-item>
  </fds-trinindikator-group>
</template>

<script setup lang="ts">
/**
 *
 * Ekstra Komponent for Trin indikator (se også fds-trinindikator)
 * Generer selv trin ud fra liste
 * https://designsystem.dk/komponenter/trin/
 *
 * */

import { FdsNavigationItem } from 'dkfds-vue3-utils';
import { defineProps, ref, defineEmits, computed, watch } from 'vue';
import navigationService from './../service/navigation.service';

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
  header: {
    type: String,
    default: 'Trin', // TODO: overvej interpolation
  },
  id: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: 'arrow-drop-down',
  },
  size: {
    type: String,
    default: 'large',
  },
});

const emit = defineEmits(['update:modelValue', 'navigate']);

const mVal = computed(() => props.modelValue ?? []);
const currentKey = ref('');
const tabsList = ref<Array<FdsNavigationItem>>(mVal.value.filter((f) => !f.ignore));

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }

  tabsList.value = navigationService.setActive(tabsList.value, item.key);
  currentKey.value = item.key;

  emit('update:modelValue', tabsList.value);
  emit('navigate', currentKey.value);
};

const currentStep = computed(() => tabsList.value.findIndex((f) => f.active));
const currentActiveKey = computed(() => props.modelValue.find((f) => f.active).key);

watch(
  () => [props.modelValue],
  () => {
    emit('navigate', currentActiveKey.value);
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
