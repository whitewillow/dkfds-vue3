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

    <span
      v-if="json && JSON.stringify(json, undefined, 2).length > 65535"
      class="pl-4 pb-0 small-text">
      JSON indeholder elementer over 65535 tegn og noget data vil ikke blive vist
    </span>
  </fieldset>
</template>
<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

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