<template>
  <fds-alert
    v-if="show"
    class="top-space"
    :styleClass="styleClass"
    level="error"
    showIcon
    :header="header"
    :closeable="false">
    <div>
      <ul class="alert-text nobullet-list">
        <li
          v-for="(e, i) in list"
          :key="i">
          <a
            :href="`#${e.anchor}`"
            class="function-link"
            @click="$emit('logout', e.target)">
            {{ e.text }}
          </a>
        </li>
      </ul>
      <slot />
    </div>
  </fds-alert>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
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
  show: {
    type: Boolean,
    default: false,
  },
  styleClass: {
    type: String,
    default: 'w-percent-lg-80',
  },
});

// const emit = defineEmits(['click']);

// const validEvent = (isValid: boolean) => {
//   emit('click', isValid);
// };
</script>

<style scoped lang="scss"></style>