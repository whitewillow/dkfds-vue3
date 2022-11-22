<template>
  <fds-alert
    class="top-space"
    variant="error"
    showIcon
    :header="header"
    :canClose="false">
    <slot>
      <ul class="alert-text nobullet-list">
        <li
          v-for="(e, i) in list"
          :key="i">
          <fds-funktionslink @click="onClickError($event, e)">
            {{ e.text }}
          </fds-funktionslink>
        </li>
      </ul>
    </slot>
  </fds-alert>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { FdsErrorListItem } from '@/model/fds.model';
import FdsAlert from '@/components/fds-alert.vue';

defineProps({
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

const onClickError = (event: Event, fejl: FdsErrorListItem) => {
  emit('fejlklik', fejl);

  const el = document.getElementById(fejl.anchor);
  if (el) {
    el.scrollIntoView();
  }
};
</script>

<style scoped lang="scss"></style>