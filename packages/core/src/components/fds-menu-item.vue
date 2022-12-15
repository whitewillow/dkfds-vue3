<template>
  <li
    role="none"
    :class="[{ 'active current': active }]">
    <a
      :href="`${href ? href : '#'}`"
      role="menuitem"
      class="d-block menuitem hand"
      @click="navigate($event, id)"
    >
      <span v-if="index !== null">
        {{ `${index}. ` }}
      </span>
      <slot />

      <span
        v-if="icon"
        class="sidenav-icon">
        <svg
          class="icon-svg"
          focusable="false"
          aria-hidden="true">
          <use :xlink:href="`#${icon}`" />
        </svg>
      </span>
      <p
        v-if="hint && hint.length > 0"
        class="sidenav-information">
        {{ hint }}
      </p>
    </a>
    <slot name="submenu" />
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  id: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  hint: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  index: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue', 'navigate']);

const navigate = (event: Event, key: string) => {
  event.preventDefault();
  emit('navigate', key);
};
</script>

<style scoped lang="scss"></style>
