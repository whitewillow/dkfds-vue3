<template>
  <div
    class="form-group"
    :key="formid"
    :class="{ 'form-error': compValid === false }">
    <slot :formid="formid" />
  </div>
</template>

<script setup lang="ts">
import {
  computed, defineProps, inject, provide, ref,
} from 'vue';
import getFormId from '@/composable/formId';

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

/**
 * Form id der bruges i slots
 * eg. label for input element
 */
const { formid } = getFormId(props.id, true);
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