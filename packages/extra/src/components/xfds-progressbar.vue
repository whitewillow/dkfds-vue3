<template>
  <transition name="progress">
    <div class="progress-bar">
      <div
        class="progress-bar-fill"
        :class="`progress-${variant}`"
        :style="`width: ${progress}%;`"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <slot v-if="showProgress">
          {{ progress }}%
        </slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  procent: {
    type: [Number, String],
    default: 0,
  },
  variant: {
    type: String,
    default: 'primary',
  },
  showProgress: {
    type: Boolean,
    default: true,
  },
});

const progress = computed(() => {
  if (typeof props.procent === 'string') {
    return 0;
  }
  const val = Math.floor(Math.abs(props.procent));
  return val > 100 ? 100 : val;
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
