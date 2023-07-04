<template>
  <div
    ref="formGroupElement"
    :key="formid"
    class="form-group"
    :class="{ 'form-error': compValid === false }"
  >
    <slot :formid="formid" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, inject, onMounted, onUpdated, provide, ref } from 'vue';
import { formId } from 'dkfds-vue3-utils';
import { enhanceFormGroupDOM } from '../enhance-form-group-dom';

const formGroupElement = ref<HTMLElement>();

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  isValid: {
    type: Boolean,
    default: true,
  },
});

onMounted(() => {
  console.log('Mounted formgroup');
  enhanceFormGroupDOM(formGroupElement.value, compValid.value);
});

onUpdated(() => {
  console.log('Updated formgroup');
  enhanceFormGroupDOM(formGroupElement.value, compValid.value);
});

/**
 * Form id der bruges i slots
 * eg. label for input element
 */
const { formid } = formId(props.id, true);
/**
 * Provide for underliggende elementer
 * eg. label for input element
 */
provide('formid', formid);

const injIsValid = ref<boolean | null>(inject('provideIsValid', null));

const compValid = computed(() => injIsValid.value ?? props.isValid);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
