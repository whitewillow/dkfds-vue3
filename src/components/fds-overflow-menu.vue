<template>
  <div class="overflow-menu">
    <button
      class="button-overflow-menu js-dropdown"
      :id="`button_${formid}`"
      :data-js-target="`${formid}`"
      aria-haspopup="true"
      :aria-expanded="false">
      <span>{{ header }}
        <svg
          class="icon-svg"
          aria-hidden="true"
          focusable="false">
          <use :xlink:href="`#${icon}`"></use>
        </svg>
      </span>
    </button>
    <div
      class="overflow-menu-inner collapsed"
      :id="formid"
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

import getFormId from '@/composable/formId';
import DKFDSDropdown from '@/scripts/dropdown';

const props = defineProps({
  header: {
    type: String,
  },
  id: {
    type: String,
  },
  icon: {
    type: String,
    default: 'more-vert',
  },
});

const { formid } = getFormId(props.id, true);

onMounted(async () => {
  new DKFDSDropdown(document.getElementById(`button_${formid.value}`)).init();
});
</script>