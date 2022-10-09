<template>
  <div
    class="tabnav"
    role="tablist">
    <template
      v-for="item of list"
      :key="item.key">
      <button
        :aria-controls="`tabpanel_${item.key}`"
        :id="`tab_${item.key}`"
        class="tabnav-item"
        :class="[{ active: item.active }, { disabled: item.disabled }]"
        role="tab"
        @click="onNavigate(item)"
        :aria-selected="currentKey === item.key">
        <span>{{ item.title }}</span>
      </button>

      <section
        class="tabnav-panel"
        :aria-hidden="currentKey !== item.key"
        role="tabpanel"
        tabindex="0"
        :id="`tabpanel_${item.key}`"
        :aria-labelledby="`tab_${item.key}`">
        <slot
          v-bind:currentKey="currentKey"
          :name="currentKey" />
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { FdsTabItem } from '@/model/fds.model';
import {
  defineProps, ref, defineEmits, onMounted,
} from 'vue';

const props = defineProps({
  list: {
    type: Array as () => Array<FdsTabItem>,
    required: true,
  },
});

const emit = defineEmits(['navigate']);
const currentKey = ref('');

const tabsList = ref<Array<FdsTabItem>>(props.list.filter((f) => !f.ignore));
const onNavigate = (item: FdsTabItem) => {
  if (item.disabled) {
    return;
  }
  tabsList.value = tabsList.value.map((f) => ({ ...f, active: f.key === item.key }));
  currentKey.value = item.key;
  emit('navigate', currentKey);
};

onMounted(() => {
  const firstActive = tabsList.value.find((f) => !f.disabled && f.active);
  const first = firstActive ?? tabsList.value.find((f) => !f.disabled);
  if (first) {
    onNavigate(first);
  }
});
</script>

<style scoped lang="scss"></style>