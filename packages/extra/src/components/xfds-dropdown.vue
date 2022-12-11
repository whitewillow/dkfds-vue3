<template>
  <select
    class="form-select"
    :name="formid"
    :id="formid"
    v-bind="refValue"
    @change="onInput"
    @blur="onDirty"
  >
    <option :value="refValue" v-if="optionHeader">
      {{ optionHeader }}
    </option>
    <option
      v-for="(o, i) in options"
      :value="o.value"
      :key="i"
      :disabled="o.disabled"
      :selected="o.value === refValue"
    >
      {{ o.title }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { FdsOptionItem } from "dkfds-vue3-utils";
import { formId } from "dkfds-vue3-utils";

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    required: false,
    default: "",
  },
  /**
   * Første option - default: Vælg
   * */
  optionHeader: {
    type: String,
    default: "Vælg",
  },

  /**
   * Dropdown options / valgmuligheder
   * */
  options: {
    type: Array as () => Array<FdsOptionItem>,
  },
});

const emit = defineEmits(["update:modelValue", "dirty", "change"]);

const refValue = ref(props.modelValue);
const { formid } = formId(props.id, true);

const onDirty = () => {
  emit("dirty", true);
};

const onInput = (event: Event) =>
  emit("update:modelValue", (event?.target as HTMLInputElement).value);
</script>

<style scoped lang="scss"></style>
