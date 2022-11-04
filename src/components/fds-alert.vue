<template>
  <transition name="fade">
    <div
      v-if="showAlert"
      class="alert has-close"
      :class="[{ 'alert--show-icon': showIcon }, `alert-${variant}`]">
      <div class="alert-body align-text-left">
        <slot
          name="header"
          v-if="$slots.header" />
        <p
          class="alert-heading"
          v-if="!$slots.header && header">
          {{ header }}
        </p>
        <div class="alert-text pt-2">
          <slot />
        </div>
        <button
          class="alert-close"
          v-if="canClose"
          @click="onClose">
          <svg
            class="icon-svg"
            aria-hidden="true"
            focusable="false">
            <use xlink:href="#close"></use></svg>Luk
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
/**
 *
 * Komponent til Besked
 * https://designsystem.dk/komponenter/beskeder/
 *
 * */
import { defineProps, ref, defineEmits } from 'vue';

defineProps({
  /**
   *  Overskrift
   * */
  header: {
    type: String,
    default: null,
  },
  /**
   * Type af besked
   * */
  variant: {
    type: String as () => 'info' | 'success' | 'warning' | 'error',
    default: 'info',
  },
  /**
   * Vis venstrestillet ikon
   * */
  showIcon: {
    type: Boolean,
    default: true,
  },
  /**
   *  Klik for at lukke/fjerne besked
   * */
  canClose: {
    type: Boolean,
    default: false,
  },
});

const showAlert = ref(true);
const emit = defineEmits(['close']);

const onClose = () => {
  showAlert.value = !showAlert.value;
  emit('close', true);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alert-close {
  > i {
    margin-right: 4px;
    width: 1.6rem;
    height: 1.6rem;
    overflow: hidden;
    vertical-align: middle;
  }
}
</style>