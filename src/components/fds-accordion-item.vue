<template>
  <li
    :disabled="disabled"
    :class="[{ disabled: disabled }]">
    <button
      class="accordion-button"
      :class="variantClass"
      :aria-expanded="`${collapse ? 'false' : 'true'}`"
      @click="
        collapse = !collapse;
        $emit('collapsed', collapse);
      "
      aria-controls="a1">
      <div v-if="!$slots.header">
        {{ header }}
        <div
          class="form-hint"
          v-if="hint !== ''">
          {{ hint }}
        </div>
      </div>
      <slot
        v-if="$slots.header"
        name="header"
        v-bind:collapse="collapse" />
      <span
        class="accordion-icon"
        v-if="variant && ['error', 'warning', 'success'].includes(variant)">
        <span class="icon_text">
          {{ variantText }}
        </span>
        <svg
          class="icon-svg"
          focusable="false"
          aria-hidden="true">
          <use :xlink:href="`#${getIcon}`"></use>
        </svg>
      </span>
    </button>
    <div
      id="a1"
      :aria-hidden="`${collapse ? 'true' : 'false'}`"
      class="accordion-content"
      :class="contentClass">
      <slot />
    </div>
    <div
      v-if="$slots.footer && showFooter"
      class="accordion-footer">
      <slot name="footer" />
    </div>
  </li>
</template>

<script setup lang="ts">
import {
  defineProps, ref, computed, watch,
} from 'vue';

const props = defineProps({
  header: {
    type: String,
  },
  hint: {
    type: String,
    default: '',
  },
  contentClass: {
    type: String,
    default: '',
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
  showFooter: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: null,
  },
  variantText: {
    type: String,
    default: '',
  },
});

const collapse = ref(props.collapsed);
const icons = {
  success: 'check-circle',
  warning: 'report-problem',
  error: 'highlight-off',
};
const variantClass = computed(() => (props.variant ? `accordion-${props.variant}` : ''));
const getIcon = computed(() => icons[props.variant as keyof typeof icons]);
watch(
  () => [props.collapsed],
  () => {
    collapse.value = props.collapsed;
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss"></style>