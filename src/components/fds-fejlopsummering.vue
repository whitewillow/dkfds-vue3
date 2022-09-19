<template>
  <fds-alert
    class="top-space"
    level="error"
    showIcon
    :header="header"
    :closeable="false">
    <div>
      <ul class="alert-text nobullet-list">
        <li
          v-for="(e, i) in list"
          :key="i">
          <fds-funktionslink @click="clickError($event, e)">
            {{ e.text }}
          </fds-funktionslink>
        </li>
      </ul>
      <slot />
    </div>
  </fds-alert>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import FdsAlert from '@/components/fds-alert.vue';
import { FdsErrorListItem } from '@/model/fds.model';

const props = defineProps({
  list: {
    type: Array as () => FdsErrorListItem[],
    default: () => [],
  },
  header: {
    type: String,
    default: 'Fejlopsummering',
  },
});

const emit = defineEmits(['fejlklik']);

const clickError = (event: Event, fejl: FdsErrorListItem) => {
  emit('fejlklik', fejl);

  const el = document.getElementById(fejl.anchor);
  if (el) {
    el.scrollIntoView();
  }
};
</script>

<style scoped lang="scss"></style>