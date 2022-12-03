<template>
  <div>
    <button
      class="accordion-button"
      :class="getVariantClass"
      :aria-expanded="`${refExpanded ? 'true' : 'false'}`"
      @click="refExpanded = !refExpanded"
      :aria-controls="`acc_${formid}`">
      <slot
        name="header"
        v-bind:expanded="refExpanded">
        <div>
          {{ header }}
          <div
            class="form-hint"
            v-if="hint !== ''">
            {{ hint }}
          </div>
        </div>
      </slot>
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
      :id="`acc_${formid}`"
      :aria-hidden="`${refExpanded ? 'false' : 'true'}`"
      class="accordion-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import getFormId from '@/composable/formId';
import {
  defineProps, ref, computed, PropType,
} from 'vue';

const props = defineProps({
  /**
   * Overskrift
   * */
  header: {
    type: String,
  },
  /**
   * Hjælpetekst
   * */
  hint: {
    type: String,
    default: '',
  },
  /**
   * Er Accordion Åben = aktiv
   * */
  expanded: {
    type: Boolean,
    default: false,
  },
  /**
   * Variant - ikon der vises til højre
   * */
  variant: {
    type: String as PropType<'success' | 'warning' | 'error'>,
    default: null,
  },
  /**
   * Tilhørende tekst til varianten
   * */
  variantText: {
    type: String,
    default: '',
  },
});

const refExpanded = ref(props.expanded);

const { formid } = getFormId(undefined, true);

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
</script>