<template>
  <li
    role="none"
    :class="[{ 'active current': active }, { disabled: disabled }]">
    <a
      :href="`${href ? href : 'javascript:void(0);'}`"
      role="menuitem"
      class="d-block menuitem hand"
      @click="navigate(id)">
      <span v-if="index !== null">
        {{ `${index}. ` }}
      </span>
      <slot />

      <span
        class="sidenav-icon"
        v-if="icon">
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

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
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

const navigate = (key: string) => {
  if (props.disabled) {
    return;
  }

  emit('navigate', key);
};
</script>

<style scoped lang="scss"></style>