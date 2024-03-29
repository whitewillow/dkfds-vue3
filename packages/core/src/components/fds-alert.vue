<template>
  <transition name="fade">
    <div
      v-if="showAlert"
      :role="compAlert ? 'alert' : ''"
      :aria-atomic="compAlert"
      class="alert has-close"
      :class="[{ 'alert--show-icon': showIcon }, `alert-${variant}`]"
    >
      <div class="alert-body align-text-left">
        <slot
          v-if="$slots.header || header"
          name="header">
          <p class="alert-heading">
            {{ header }}
          </p>
        </slot>
        <div class="alert-text">
          <slot />
        </div>
        <button
          v-if="closeable"
          class="alert-close"
          @click="onClose">
          <slot name="button">
            <svg
              class="icon-svg"
              aria-hidden="true"
              focusable="false">
              <use xlink:href="#close"></use></svg
            >Luk
          </slot>
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
import { defineProps, ref, defineEmits, PropType, computed } from 'vue';

const props = defineProps({
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
    type: String as PropType<'success' | 'info' | 'warning' | 'error'>,
    default: 'info',
  },
  /**
   * Vis venstrestillet ikon
   * */
  showIcon: {
    type: Boolean,
    default: false,
  },
  /**
   *  Klik for at lukke/fjerne besked
   * */
  closeable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

const showAlert = ref(true);

const compAlert = computed(() => ['warning', 'error'].includes(props.variant));

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
