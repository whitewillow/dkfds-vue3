<template>
  <fieldset class="code">
    <legend
      for=""
      v-if="header">
      {{ header }}
    </legend>
    <pre
      class="code"
      v-if="json"
      v-text="JSON.stringify(json, undefined, 2)" />
    <pre
      v-else
      class="code">
    <slot />
  </pre>
  </fieldset>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  json: {
    type: Object,
    default: null,
  },
  header: {
    type: String,
    default: null,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>