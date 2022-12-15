<template>
  <div
    class="overflow-menu overflow-menu--open-right"
    :class="lgNoResponsive">
    <button
      :id="`button_${formid}`"
      class="button-overflow-menu js-dropdown"
      :data-js-target="`#${formid}`"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <slot name="header">
        {{ header }}
      </slot>
      <svg
        class="icon-svg"
        aria-hidden="true"
        focusable="false">
        <use :xlink:href="`#${icon}`"></use>
      </svg>
    </button>
    <div
      :id="formid"
      class="overflow-menu-inner"
      aria-hidden="true">
      <nav>
        <fds-menu>
          <slot />
        </fds-menu>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for Trin indikator
 * https://designsystem.dk/komponenter/trin/
 *
 * */

import { computed, defineProps, onMounted } from 'vue';

import { formId, dropdown } from 'dkfds-vue3-utils';

const props = defineProps({
  header: {
    type: String,
    default: 'Trin', // TODO: overvej interpolation
  },
  id: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: 'arrow-drop-down',
  },
  size: {
    type: String,
    default: 'small',
    validator(value: string) {
      return ['small', 'large'].includes(value);
    },
  },
});

const { formid } = formId(props.id, true);

const lgNoResponsive = computed(() =>
  props.size === 'large' ? 'overflow-menu--lg-no-responsive' : '',
);

onMounted(async () => {
  new dropdown(document.getElementById(`button_${formid.value}`)).init();
});
</script>
