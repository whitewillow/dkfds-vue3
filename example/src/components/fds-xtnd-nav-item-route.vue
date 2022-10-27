<template>
  <router-link :to="{ name: toName }" custom v-slot="{ href, navigate, isActive }">
    <li role="none" :class="[{ current: isActive || isPartOfMenu(toName) }]">
      <fds-nav-link :href="href" :title="linkTitle" :disabled="isDisabled" @click="navigate">
        <slot />
      </fds-nav-link>
    </li>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
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
  isDisabled: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
  },
});

const isPartOfMenu = (name: string): boolean => {
  if (route) {
    const [parent] = route.matched;
    if (parent && parent.name === name) {
      return true;
    }
  }
  if (props.currentRouteName) {
    return props.currentRouteName === name;
  }
  return false;
};
</script>
