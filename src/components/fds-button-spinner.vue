<template>
  <button
    class="button mr-4"
    :class="[`button-${variant}`, { disabled: disabled }]"
    @click="$emit('click')"
    :disabled="showSpinner || disabled">
    <div
      :class="{ 'inner-spinner-white': variant === 'primary' }"
      class="inner-spinner mr-4 icon-svg"
      v-if="showSpinner"></div>
    <svg
      class="icon-svg rightside-icon"
      focusable="false"
      aria-hidden="true"
      v-if="icon && !showSpinner">
      <use :xlink:href="`#${icon}`" />
    </svg>
    <slot v-if="showSpinner && !spinnerText" />
    <span v-if="showSpinner && spinnerText">
      {{ spinnerText }}
    </span>
    <slot v-if="!showSpinner" />
  </button>
  <div
    class="spinneroverlay"
    v-if="showSpinner && useoverlay"></div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { FdsVariantEnum } from '@/model/fds.model';

const props = defineProps({
  variant: {
    type: String as PropType<FdsVariantEnum | string>,
    default: () => FdsVariantEnum.secondary,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showSpinner: {
    type: Boolean,
    default: false,
  },
  spinnerText: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  useoverlay: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.spinneroverlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.2;
  z-index: 9999999;
}
.rightside-icon {
  margin-left: 4px;
  margin-right: 0;
}
.inner-spinner {
  margin: 0 8px 0 16px;
  font-size: 4px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: spinner 1.1s infinite ease;
  animation: spinner 1.1s infinite ease;
  transform: translateZ(0);
  display: inline-block;
}

.inner-spinner-white {
  font-size: 4px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: spinner-white 1.1s infinite ease;
  animation: spinner-white 1.1s infinite ease;
  transform: translateZ(0);
  display: inline-block;
}
</style>