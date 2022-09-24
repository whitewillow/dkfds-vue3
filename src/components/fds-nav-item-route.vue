<template>
  <router-link
    :to="{ name: toName }"
    custom
    v-slot="{ href, navigate, isActive }">
    <li
      role="none"
      :class="[{ current: isActive || isPartOfMenu(toName) }]">
      <a
        v-if="!disabled"
        :href="href"
        class="nav-link"
        role="menuitem"
        :title="linkTitle"
        @click="navigate">
        <span>
          <slot />
        </span>
      </a>
      <div
        v-else
        class="nav-link nav-link-disabled disabled">
        <slot />
      </div>
    </li>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  toName: {
    type: String,
    default: '',
  },
  currentRouteName: {
    type: String,
    default: null,
  },
  linkTitle: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
  },
});

// const getTooltip = computed(() => {
//   if (props.tooltip) {
//     return `<p>${props.tooltip}</p>`;
//   }
//   return null;
// });

const isPartOfMenu = (name: string): boolean => {
  if (props.currentRouteName) {
    return props.currentRouteName === name;
  }
  return false;
};
</script>

<style scoped lang="scss"></style>