<template>
  <div class="overflow-menu">
    <button
      :id="`button_${formid}`"
      class="button-overflow-menu js-dropdown"
      :data-js-target="`${formid}`"
      aria-haspopup="true"
      :aria-expanded="false"
    >
      <span
      >{{ header }}
        <svg
          class="icon-svg"
          aria-hidden="true"
          focusable="false">
          <use :xlink:href="`#${icon}`"></use>
        </svg>
      </span>
    </button>
    <div
      :id="formid"
      class="overflow-menu-inner collapsed"
      :aria-hidden="true">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for Overflowmenu
 * https://designsystem.dk/komponenter/overflowmenu/
 *
 * */
import { defineProps, onMounted } from 'vue';

import { formId, dropdown } from 'dkfds-vue3-utils';

const props = defineProps({
  header: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: 'more-vert',
  },
});

const { formid } = formId(props.id, true);

onMounted(async () => {
  new dropdown(document.getElementById(`button_${formid.value}`)).init();
});
</script>
