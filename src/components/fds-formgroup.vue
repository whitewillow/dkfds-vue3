<template>
  <div class="form-group" :key="formid" :class="{ 'form-error': isValid === false }">
    <slot :formid="formid" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { v4 as uuidv4 } from 'uuid';

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

const formid = computed(() => uuidv4());
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>