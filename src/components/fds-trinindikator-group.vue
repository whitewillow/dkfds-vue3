<template>
  <div class="overflow-menu overflow-menu--open-right">
    <button
      class="button-overflow-menu js-dropdown"
      :id="`button_${formid}`"
      :data-js-target="`#${formid}`"
      aria-haspopup="true"
      aria-expanded="false">
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
      class="overflow-menu-inner"
      :id="formid"
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

import { defineProps, onMounted } from 'vue';

import DKFDSDropdown from '@/scripts/dropdown';
import getFormId from '@/composable/formId';

const props = defineProps({
  header: {
    type: String,
    default: 'Trin', // TODO: overvej interpolation
  },
  id: {
    type: String,
  },
  icon: {
    type: String,
    default: 'arrow-drop-down',
  },
});

const { formid } = getFormId(props.id, true);

onMounted(async () => {
  new DKFDSDropdown(document.getElementById(`button_${formid.value}`)).init();
});
</script>