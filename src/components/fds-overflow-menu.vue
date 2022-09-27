<template>
  <div class="overflow-menu overflow-menu--open-right">
    <button
      class="button-overflow-menu js-dropdown"
      :id="`button_${formid}`"
      :data-js-target="`#${formid}`"
      aria-haspopup="true"
      :aria-expanded="false">
      {{ header }}
      <svg
        class="icon-svg"
        aria-hidden="true"
        focusable="false">
        <use xlink:href="#more-vert"></use>
      </svg>
    </button>
    <div
      class="overflow-menu-inner"
      :id="formid"
      :aria-hidden="true">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, nextTick, onMounted, ref,
} from 'vue';
import { Dropdown } from 'dkfds';
import { v4 as uuidv4 } from 'uuid';

/**
 *
 * Komponent for Overflowmenu
 * https://designsystem.dk/komponenter/overflowmenu/
 *
 * */

const props = defineProps({
  header: {
    type: String,
  },
  id: {
    type: String,
  },
});

// const showOverflow = ref(false);

const formid = ref(props.id ?? uuidv4());

onMounted(async () => {
  new Dropdown(document.getElementById(`button_${formid.value}`)).init();
});
</script>