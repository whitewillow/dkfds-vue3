<template>
  <button
    class="js-tooltip button-unstyled"
    :id="formid"
    :data-tooltip="slotContent"
    data-tooltip-trigger="click">
    <svg
      class="icon-svg"
      aria-hidden="true">
      <use xlink:href="#help"></use>
    </svg>
    <span
      class="sr-only"
      ref="slotText">
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
import {
  computed, onMounted, ref, useSlots,
} from 'vue';
import DKFSTooltip from '@/scripts/tooltip';
import getFormId from '@/composable/formId';

const { formid } = getFormId(undefined, true);
const slotText = ref(null);

const slots = useSlots();

const slotContent = computed(() => {
  try {
    if (slots.default && slotText.value) {
      return (slotText.value as unknown as HTMLElement).innerHTML ?? '';
    }
  } catch {
    return '';
  }
  return '';
});

onMounted(() => {
  new DKFSTooltip(document.getElementById(formid.value)).init();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>