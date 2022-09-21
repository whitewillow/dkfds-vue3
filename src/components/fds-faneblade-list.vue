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
        @click="navigate(item)"
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
import { FdsNavigationStep } from '@/model/fds.model';
import {
  defineProps, ref, defineEmits, onMounted,
} from 'vue';

const props = defineProps({
  list: {
    type: Array as () => Array<FdsNavigationStep>,
    required: true,
  },
});

const emit = defineEmits(['navigate']);
const currentKey = ref('');

const tabsList = ref<Array<FdsNavigationStep>>(props.list.filter((f) => !f.ignore));
const navigate = (item: FdsNavigationStep) => {
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
    navigate(first);
  }
});
</script>

<style scoped lang="scss"></style>