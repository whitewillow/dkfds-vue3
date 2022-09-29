<template>
  <ul
    class="sidenav-list mb-6"
    role="menu">
    <li
      v-for="(item, index) of tabsList"
      :key="item.key"
      :class="[{ 'active current': item.active }, { disabled: item.disabled }]">
      <a
        :href="`${item.href ? item.href : 'javascript:void(0);'}`"
        class="d-block menuitem hand"
        @click="navigate(item)">
        <span v-if="showIndex">
          {{ index + 1 + `. ` }}
        </span>
        {{ item.title }}

        <span
          class="sidenav-icon"
          v-if="item.icon">
          <svg
            class="icon-svg"
            focusable="false"
            aria-hidden="true">
            <use :xlink:href="`#${item.icon}`" />
          </svg>
        </span>
        <p
          v-if="item.hint && item.hint.length > 0"
          class="sidenav-information">
          {{ item.hint }}
        </p>
      </a>
      <fds-venstremenu-sub
        v-if="item.active && item.children && item.children.length > 0"
        @navigate="subnavigation"
        v-model="item.children"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from '@/model/fds.model';
import {
  defineProps, ref, defineEmits, onMounted, computed,
} from 'vue';
import navigationService from '@/service/navigation.service';
import fdsNavigationProps from '@/props/fds-navigation.props';

const props = defineProps({
  ...fdsNavigationProps,
});

const emit = defineEmits(['update:modelValue', 'navigate']);
const mVal = computed(() => props.modelValue ?? []);

const currentKey = ref('');
const tabsList = ref<Array<FdsNavigationItem>>(mVal.value.filter((f) => !f.ignore));

const subnavigation = (key: string) => {
  emit('navigate', navigationService.resolveKey(key, mVal.value));
};

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }

  tabsList.value = navigationService.setActive(tabsList.value, item.key);
  currentKey.value = item.key;

  emit('update:modelValue', tabsList.value);
  emit('navigate', currentKey.value);
};

onMounted(() => {
  const item = navigationService.findFirstActiveItem(tabsList.value, props.navigateFirst);
  if (item) {
    navigate(item);
  }
});
</script>

<style scoped lang="scss"></style>