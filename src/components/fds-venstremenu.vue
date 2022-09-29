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
  defineProps, ref, defineEmits, onMounted,
} from 'vue';
import venstremenuService from '@/service/venstremenu.service';

const props = defineProps({
  modelValue: {
    type: Array as () => Array<FdsNavigationItem>,
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

const emit = defineEmits(['update:modelValue', 'navigate']);

const currentKey = ref('');
const tabsList = ref<Array<FdsNavigationItem>>(props.modelValue.filter((f) => !f.ignore));

const subnavigation = (key: string) => {
  emit('navigate', venstremenuService.resolveKey(key, props.modelValue));
};

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }

  tabsList.value = venstremenuService.setActive(tabsList.value, item.key);
  currentKey.value = item.key;

  emit('update:modelValue', tabsList.value);
  emit('navigate', currentKey.value);
};

onMounted(() => {
  const item = venstremenuService.findFirstActiveItem(tabsList.value, props.navigateFirst);
  if (item) {
    navigate(item);
  }
});
</script>

<style scoped lang="scss"></style>