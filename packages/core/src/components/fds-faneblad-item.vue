<template>
  <button
    :id="`tab_${formId}`"
    :aria-controls="`tabpanel_${formId}`"
    class="tabnav-item"
    :class="[{ active: selected }]"
    role="tab"
    :aria-selected="selected"
    @click="onFanButtonClick"
  >
    <slot name="header">
      <span>
        {{ header }}
      </span>
    </slot>
  </button>
  <section
    :id="`tabpanel_${formId}`"
    tabindex="0"
    class="tabnav-panel"
    role="tabpanel"
    :aria-hidden="!selected"
    :aria-labelledby="`tab_${formId}`"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue';
import { uuid } from 'dkfds-vue3-utils';

const props = defineProps({
  /**
   * Faneknap aktiv
   * */
  selected: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
  /**
   * Faneknap overskrift
   * */
  header: {
    type: String,
    default: 'Fane',
  },
});

const emit = defineEmits(['click', 'navigate']);

const onFanButtonClick = () => {
  emit('click', props.id);
  emit('navigate', props.id);
};

const formId = ref(props.id ?? uuid());
</script>

<style scoped lang="scss"></style>
