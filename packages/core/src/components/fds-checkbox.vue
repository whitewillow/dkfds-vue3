<template>
  <fieldset>
    <input
      type="checkbox"
      class="form-checkbox"
      :id="formid"
      :checked="refValue"
      :class="{ 'checkbox-large': size === 'large' }"
      @input="onInput"
      @blur="$emit('dirty', true)"
      v-bind="attrs"
    />
    <label :for="formid" class="hand">
      <slot v-bind:id="formid" class="hand"></slot>
    </label>
    <div
      :id="`collapse-${formid}`"
      v-if="$slots.content"
      :aria-hidden="!refValue"
      class="checkbox-content checkbox-content-large"
    >
      <slot name="content" />
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, PropType, useAttrs } from "vue";
import { formId } from "dkfds-vue3-utils";

const attrs = useAttrs();

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * Vis som lille checkbox
   * */
  size: {
    type: String as PropType<"small" | "large">,
    default: "large",
  },
});

const emit = defineEmits(["update:modelValue", "dirty"]);

const { formid } = formId(props.id, true);
const refValue = ref(props.modelValue);

const onInput = (event: Event) =>
  emit("update:modelValue", (event?.target as HTMLInputElement).checked);

watch(
  () => [props.modelValue],
  () => {
    refValue.value = props.modelValue;
  },
  {
    immediate: true,
  }
);
</script>
