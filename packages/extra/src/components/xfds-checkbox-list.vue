<template>
  <ul class="nobullet-list" :id="formid">
    <li v-for="(checkbox, index) of value" :key="index">
      <input
        v-model="checkbox.checked"
        type="checkbox"
        class="form-checkbox checkbox-large"
        :id="'checkbox-' + formid + '-' + index"
        :name="'checkbox' + formid"
        :disabled="checkbox.disabled"
        :aria-disabled="checkbox.ariaDisabled"
        @change="handleInput"
        @blur="handleDirty"
      />
      <label :for="'checkbox-' + formid + '-' + index">
        {{ checkbox.title }}
      </label>

      <div
        class="checkbox-content mt-2 ml-4 py-4"
        v-if="$slots[checkbox.value] && checkbox.checked"
      >
        <slot :name="checkbox.value" v-bind:checkboxvalue="value" />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, PropType } from "vue";
import { formId, FdsCheckboxItem } from "dkfds-vue3-utils";

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    // eslint-disable-next-line no-undef
    type: Array as PropType<Array<FdsCheckboxItem>>,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue", "dirty"]);

const value = ref(props.modelValue);
const { formid } = formId(props.id, true);

const handleDirty = () => {
  emit("dirty", true);
};

const handleInput = () => {
  emit("update:modelValue", value.value);
};
</script>

<style scoped lang="scss"></style>
