<template>
  <fieldset class="code">
    <legend
      v-if="header"
      for="">
      {{ header }}
    </legend>
    <pre
      v-if="json"
      class="code"
      v-text="JSON.stringify(json, undefined, 2)" />
    <pre
      v-else-if="code"
      class="code"
      v-text="code" />
    <pre
      v-else
      class="code">
    <slot />
  </pre>

    <span
      v-if="json && JSON.stringify(json, undefined, 2).length > 65535"
      class="pl-4 pb-0 small-text"
    >
      JSON indeholder elementer over 65535 tegn og noget data vil ikke blive vist
    </span>
  </fieldset>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  json: {
    type: Object,
    default: null,
  },
  code: {
    type: String,
    default: null,
  },
  header: {
    type: String,
    default: 'Kode eksempel',
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
