<template>
  <transition name="fade">
    <div
      v-if="show"
      class="alert has-close"
      :class="[{ 'alert--show-icon': showIcon }, `alert-${level}`]">
      <div class="alert-body align-text-left">
        <p
          class="alert-heading pr-7"
          v-if="header">
          {{ header }}
        </p>
        <div class="alert-text pt-2">
          <slot />
        </div>
        <a
          href="javascript:void(0);"
          class="alert-close"
          v-if="closeable"
          @click="handleClose">
          <i class="icon icon-close"></i>Luk
        </a>
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
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  level: {
    /**
     * Type af besked
     * */
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
  closeable: {
    type: Boolean,
    default: false,
  },
  /**
   *  Overskrift
   * */
  header: {
    type: String,
    default: null,
  },
  /**
   *  Hvis sand - lukkes beskeden efter 10 sek
   * */
  timeout: {
    type: Boolean,
    default: false,
  },
});

const show = ref(true);
// eslint-disable-next-line no-undef
const emit = defineEmits(['close']);
const handleClose = () => {
  show.value = !show.value;
  emit('close', true);
};
watch(
  () => [props.timeout],
  () => {
    if (props.timeout && props.closeable) {
      setTimeout(() => {
        show.value = false;
      }, 10000);
    }
  },
);
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