<template>
  <button
    :aria-controls="`tabpanel_${formId}`"
    :id="`tab_${formId}`"
    @click="onEvent"
    class="tabnav-item"
    role="tab"
    :aria-selected="active">
    <span>{{ header }}</span>
  </button>
  <section
    class="tabnav-panel"
    :aria-hidden="!active"
    role="tabpanel"
    tabindex="0"
    :id="`tabpanel_${formId}`"
    :aria-labelledby="`tab_${formId}`">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['click', 'navigate']);

const onEvent = () => {
  emit('click', props.id);
  emit('navigate', props.id);
};

const formId = ref(uuidv4());
</script>

<style scoped lang="scss"></style>