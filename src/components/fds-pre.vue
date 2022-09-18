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
<style scoped lang="scss">
fieldset.code {
  margin-top: 24px;
  margin-bottom: 1.6em;

  background: #f4f4f4;
  border: 1px solid #ddd;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  border-left: 3px solid #d63384;
  > legend {
    background-color: #d63384;
    color: #fff;
    padding: 4px 6px 2px 6px;
    margin-left: 24px;
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
  }
  > pre {
    font-size: 0.8em;
    color: #d63384;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;

    page-break-inside: avoid;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }
}
</style>