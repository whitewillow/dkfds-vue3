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
          @click="show = !show">
          <i class="icon icon-close"></i>Luk
        </a>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  level: {
    type: String,
    default: 'info', // info|success|warning|error
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  header: {
    type: String,
    default: null,
  },
  timeout: {
    type: Boolean,
    default: false,
  },
});

const show = ref(true);

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