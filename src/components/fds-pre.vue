<template>
  <pre
    class="code"
    v-if="json"
    v-text="JSON.stringify(json, undefined, 2)" />
  <pre
    v-else
    class="code">
    <slot />
  </pre>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  json: {
    type: Object,
    default: null,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
pre.code {
  font-size: 0.8em;
  color: #d63384;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;

  background: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid #d63384;

  page-break-inside: avoid;
  margin-bottom: 1.6em;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
}
</style>