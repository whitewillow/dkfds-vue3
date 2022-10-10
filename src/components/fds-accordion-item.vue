<template>
  <li
    :disabled="disabled"
    :class="[{ disabled: disabled }]">
    <button
      class="accordion-button"
      :class="getVariantClass"
      :aria-expanded="`${refActive ? 'true' : 'false'}`"
      @click="
        refActive = !refActive;
        $emit('active', refActive);
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
        v-bind:active="refActive" />
      <span
        class="accordion-icon"
        v-if="variant && ['error', 'warning', 'success'].includes(variant)">
        <span
          class="icon_text"
          v-if="variantText !== null">
          {{ variantText === '' ? getIconText : variantText }}
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
      :aria-hidden="`${refActive ? 'false' : 'true'}`"
      class="accordion-content">
      <slot />
    </div>
  </li>
</template>

<script setup lang="ts">
import accordionProps from '@/props/fds-accordion.props';
import {
  defineProps, ref, computed, watch,
} from 'vue';

const props = defineProps({ ...accordionProps });

const refActive = ref(props.active);

const icons = {
  success: 'check-circle',
  warning: 'report-problem',
  error: 'highlight-off',
};

const defaultVariantText = {
  success: 'Success',
  warning: 'Advarsel',
  error: 'Fejl',
};

const getVariantClass = computed(() => (props.variant ? `accordion-${props.variant}` : ''));
const getIcon = computed(() => icons[props.variant as keyof typeof icons]);
const getIconText = computed(() => defaultVariantText[props.variant as keyof typeof icons]);

watch(
  () => [props.active],
  () => {
    refActive.value = props.active;
  },
  {
    immediate: true,
  },
);
</script>