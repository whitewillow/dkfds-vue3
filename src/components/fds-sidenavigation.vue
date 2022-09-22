<template>
  <ul
    class="sidenav-list mb-6"
    role="menu">
    <li
      v-for="(item, index) of tabsList"
      :key="item.key"
      :class="[{ 'active current': item.active }, { disabled: item.disabled }]">
      <a
        href="javascript:void(0);"
        class="d-block menuitem hand"
        @click="navigate(item)">
        <span v-if="showIndex">
          {{ index + 1 + `. ` }}
        </span>
        {{ item.title }}
        <p
          v-if="item.hint && item.hint.length > 0"
          class="sidenav-information">
          {{ item.hint }}
        </p>
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
      </a>
      <fds-sidenavigation-sub
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

const props = defineProps({
  modelValue: {
    type: Array as () => Array<FdsNavigationItem>,
    required: true,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
});

const currentKey = ref('');
// const val = ref(props.modelValue);
const tabsList = ref<Array<FdsNavigationItem>>(props.modelValue.filter((f) => !f.ignore));
const emit = defineEmits(['update:modelValue', 'navigate']);

const daddy = (key: string) => props.modelValue.find((f) => f.children?.some((s) => s.key === key));

const subnavigation = (key: any) => {
  const d = daddy(key.split('/')[0]);
  if (d) {
    emit('navigate', `${d.key}/${key}`);
    return;
  }
  emit('navigate', `${key}`);
};

const clearChildren = (
  children: Array<FdsNavigationItem> | undefined,
): Array<FdsNavigationItem> | undefined => {
  if (!children) {
    return children;
  }

  return children.map((m) => ({ ...m, active: false, children: clearChildren(m.children) }));
};

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }
  tabsList.value = tabsList.value.map((f) => ({
    ...f,
    active: f.key === item.key,
    children: clearChildren(f.children),
  }));
  currentKey.value = item.key;
  emit('update:modelValue', tabsList.value);
  emit('navigate', currentKey);
};

onMounted(() => {
  const firstActive = tabsList.value.find((f) => !f.disabled && f.active);
  const first = firstActive ?? tabsList.value.find((f) => !f.disabled);
  if (first) {
    navigate(first);
  }
});
</script>

<style scoped lang="scss"></style>