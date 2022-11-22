<template>
  <ul
    class="sidenav-sub_list"
    role="menu">
    <li
      role="none"
      v-for="child of props.modelValue"
      :key="child.key"
      :class="[{ active: child.active }, { disabled: child.disabled }]">
      <a
        :href="`${child.href ? child.href : 'javascript:void(0);'}`"
        :title="child.title"
        @click="navigate(child)"
        role="menuitem">
        {{ child.title }}
      </a>
      <xfds-menu-sub
        @navigate="navigateup"
        v-if="child.active && child.children && child.children.length > 0"
        v-model="child.children"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { FdsNavigationItem } from '@/model/fds.model';
import navigationService from '@/service/navigation.service';

const props = defineProps({
  modelValue: {
    type: Array as () => Array<FdsNavigationItem>,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue', 'navigate']);

const navigateup = (key: string) => {
  emit('navigate', navigationService.resolveKey(key, props.modelValue));
};

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }
  const list = props.modelValue.map((f) => ({ ...f, active: f.key === item.key }));
  emit('update:modelValue', list);
  emit('navigate', item.key);
};
</script>

<style scoped lang="scss"></style>